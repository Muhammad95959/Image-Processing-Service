'use client';

import styles from './UploadSection.module.css';

interface UploadSectionProps {
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadSection({ onImageUpload }: UploadSectionProps) {
  return (
    <div className={styles.uploadCard}>
      <label htmlFor="imageInput" className={styles.uploadLabel}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>Upload Image</span>
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        onChange={onImageUpload}
        className={styles.fileInput}
      />
    </div>
  );
}
