'use client';

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Layout from '../components/Layout';
import { imageService, type ImageRecord } from '../services/imageService';
import styles from './page.module.css';

export default function MyImagesPage() {
  const router = useRouter();
  const [images, setImages] = useState<ImageRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const isLoggedIn = useSyncExternalStore(
    (callback) => {
      window.addEventListener('storage', callback);
      window.addEventListener('focus', callback);

      return () => {
        window.removeEventListener('storage', callback);
        window.removeEventListener('focus', callback);
      };
    },
    () => Boolean(localStorage.getItem('token')),
    () => false
  );

  const refreshImages = useCallback(async () => {
    if (!isLoggedIn) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const userImages = await imageService.getAllImages();
      setImages(userImages);
    } catch (loadError) {
      const message = loadError instanceof Error ? loadError.message : 'Failed to load your images';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/');
      return;
    }

    const timerId = window.setTimeout(() => {
      void refreshImages();
    }, 0);

    return () => window.clearTimeout(timerId);
  }, [isLoggedIn, refreshImages, router]);

  const handleDelete = async (imageId: string) => {
    const confirmed = window.confirm('Delete this image permanently?');
    if (!confirmed) {
      return;
    }

    setDeletingId(imageId);

    try {
      await imageService.deleteImage(imageId);
      setImages((currentImages) => currentImages.filter((image) => image.id !== imageId));
    } catch {
      // Toast is handled in the service.
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <Layout
      topBar={
        <div className={styles.topBarContent}>
          <div>
            <p className={styles.kicker}>Library</p>
            <h1 className={styles.title}>My Images</h1>
          </div>

          <div className={styles.topBarActions}>
            <Link className={styles.backLink} href="/">
              Back to editor
            </Link>
            <button className={styles.refreshButton} onClick={() => void refreshImages()}>
              Refresh
            </button>
          </div>
        </div>
      }
      sidebar={
        <div className={styles.sidebarContent}>
          <div className={styles.summaryCard}>
            <span className={styles.summaryLabel}>Authenticated</span>
            <strong className={styles.summaryValue}>{isLoggedIn ? 'Yes' : 'No'}</strong>
          </div>

          <div className={styles.summaryCard}>
            <span className={styles.summaryLabel}>Images loaded</span>
            <strong className={styles.summaryValue}>{images.length}</strong>
          </div>

          <div className={styles.helperCard}>
            <p>Browse every image tied to your account and delete anything you no longer need.</p>
          </div>
        </div>
      }
      preview={
        <div className={styles.galleryShell}>
          {!isLoggedIn && (
            <div className={styles.emptyState}>
              <h2>Sign in to view your images</h2>
              <p>Your image library is available after authentication.</p>
            </div>
          )}

          {isLoggedIn && isLoading && (
            <div className={styles.emptyState}>
              <h2>Loading your image library</h2>
              <p>Collecting all images for this account.</p>
            </div>
          )}

          {isLoggedIn && error && !isLoading && (
            <div className={styles.emptyState}>
              <h2>Unable to load images</h2>
              <p>{error}</p>
            </div>
          )}

          {isLoggedIn && !isLoading && !error && images.length === 0 && (
            <div className={styles.emptyState}>
              <h2>No images yet</h2>
              <p>Upload something in the editor to see it here.</p>
            </div>
          )}

          {isLoggedIn && !isLoading && !error && images.length > 0 && (
            <div className={styles.galleryGrid}>
              {images.map((image) => (
                <article className={styles.imageCard} key={image.id}>
                  <div className={styles.imageFrame}>
                    {image.url ? (
                      <img src={image.url} alt={image.publicId || image.id} className={styles.image} />
                    ) : (
                      <div className={styles.imageMissing}>No preview available</div>
                    )}
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardLabel}>Public ID</span>
                      <span className={styles.cardValue}>{image.publicId || image.id}</span>
                    </div>

                    <button
                      className={styles.deleteButton}
                      onClick={() => void handleDelete(image.id)}
                      disabled={deletingId === image.id}
                    >
                      {deletingId === image.id ? 'Deleting...' : 'Delete image'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      }
    />
  );
}