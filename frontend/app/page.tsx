'use client';

import { useState } from 'react';
import Layout from './components/Layout';
import Auth from './components/Auth';
import Preview from './components/Preview';
import Sidebar from './components/Sidebar';
import styles from './page.module.css';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Image ID for transformations
  const [imageId, setImageId] = useState('');

  // Resize Settings
  const [resizeWidth, setResizeWidth] = useState('');
  const [resizeHeight, setResizeHeight] = useState('');
  const [resizeCrop, setResizeCrop] = useState('fill');
  const [resizeGravity, setResizeGravity] = useState('auto');
  const [resizeZoom, setResizeZoom] = useState('');

  // Rotate & Flip
  const [rotate, setRotate] = useState('');
  const [flip, setFlip] = useState('none');

  // Adjustments
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [hue, setHue] = useState(0);
  const [vibrance, setVibrance] = useState(0);
  const [gamma, setGamma] = useState(1);
  const [sharpen, setSharpen] = useState(0);
  const [unsharpMask, setUnsharpMask] = useState(0);

  // Filters
  const [grayscale, setGrayscale] = useState(false);
  const [sepia, setSepia] = useState(false);
  const [negate, setNegate] = useState(false);
  const [blur, setBlur] = useState(0);
  const [pixelate, setPixelate] = useState(0);
  const [vignette, setVignette] = useState(0);
  const [oilPaint, setOilPaint] = useState(0);
  const [cartoonify, setCartoonify] = useState(false);
  const [cartoonifyAmount, setCartoonifyAmount] = useState('');
  const [art, setArt] = useState('');

  // Style/Output
  const [radius, setRadius] = useState('');
  const [borderWidth, setBorderWidth] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [background, setBackground] = useState('');

  // Watermark
  const [watermarkText, setWatermarkText] = useState('');
  const [watermarkFontFamily, setWatermarkFontFamily] = useState('Arial');
  const [watermarkFontSize, setWatermarkFontSize] = useState(40);
  const [watermarkFontColor, setWatermarkFontColor] = useState('#FFFFFF');
  const [watermarkGravity, setWatermarkGravity] = useState('south_east');
  const [watermarkX, setWatermarkX] = useState(10);
  const [watermarkY, setWatermarkY] = useState(10);
  const [watermarkOpacity, setWatermarkOpacity] = useState(60);

  // Quality/Output
  const [quality, setQuality] = useState('');
  const [dpr, setDpr] = useState('');
  const [format, setFormat] = useState('');
  const [fetchFormat, setFetchFormat] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPreviewImage(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string);
        setIsProcessing(true);
        setTimeout(() => setIsProcessing(false), 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout
      topBar={
        <div className={styles.topBarContent}>
          <div className={styles.logo}>
            <h1 className={styles.appTitle}>Image Processor</h1>
          </div>
          <Auth
            isLoggedIn={isLoggedIn}
            onLogin={handleLogin}
            onLogout={handleLogout}
          />
        </div>
      }
      sidebar={
        <Sidebar
          isLoggedIn={isLoggedIn}
          imageId={imageId}
          onImageIdChange={setImageId}
          onImageUpload={handleImageUpload}
          resizeWidth={resizeWidth}
          resizeHeight={resizeHeight}
          resizeZoom={resizeZoom}
          resizeCrop={resizeCrop}
          resizeGravity={resizeGravity}
          onResizeWidthChange={setResizeWidth}
          onResizeHeightChange={setResizeHeight}
          onResizeZoomChange={setResizeZoom}
          onResizeCropChange={setResizeCrop}
          onResizeGravityChange={setResizeGravity}
          rotate={rotate}
          flip={flip}
          onRotateChange={setRotate}
          onFlipChange={setFlip}
          brightness={brightness}
          contrast={contrast}
          saturation={saturation}
          hue={hue}
          vibrance={vibrance}
          gamma={gamma}
          sharpen={sharpen}
          unsharpMask={unsharpMask}
          onBrightnessChange={setBrightness}
          onContrastChange={setContrast}
          onSaturationChange={setSaturation}
          onHueChange={setHue}
          onVibranceChange={setVibrance}
          onGammaChange={setGamma}
          onSharpenChange={setSharpen}
          onUnsharpMaskChange={setUnsharpMask}
          grayscale={grayscale}
          sepia={sepia}
          negate={negate}
          blur={blur}
          pixelate={pixelate}
          vignette={vignette}
          oilPaint={oilPaint}
          cartoonify={cartoonify}
          cartoonifyAmount={cartoonifyAmount}
          art={art}
          onGrayscaleChange={setGrayscale}
          onSepiaChange={setSepia}
          onNegateChange={setNegate}
          onBlurChange={setBlur}
          onPixelateChange={setPixelate}
          onVignetteChange={setVignette}
          onOilPaintChange={setOilPaint}
          onCartoonifyChange={setCartoonify}
          onCartoonifyAmountChange={setCartoonifyAmount}
          onArtChange={setArt}
          borderWidth={borderWidth}
          borderColor={borderColor}
          background={background}
          radius={radius}
          onBorderWidthChange={setBorderWidth}
          onBorderColorChange={setBorderColor}
          onBackgroundChange={setBackground}
          onRadiusChange={setRadius}
          watermarkText={watermarkText}
          watermarkFontFamily={watermarkFontFamily}
          watermarkFontSize={watermarkFontSize}
          watermarkFontColor={watermarkFontColor}
          watermarkGravity={watermarkGravity}
          watermarkX={watermarkX}
          watermarkY={watermarkY}
          watermarkOpacity={watermarkOpacity}
          onWatermarkTextChange={setWatermarkText}
          onWatermarkFontFamilyChange={setWatermarkFontFamily}
          onWatermarkFontSizeChange={setWatermarkFontSize}
          onWatermarkFontColorChange={setWatermarkFontColor}
          onWatermarkGravityChange={setWatermarkGravity}
          onWatermarkXChange={setWatermarkX}
          onWatermarkYChange={setWatermarkY}
          onWatermarkOpacityChange={setWatermarkOpacity}
          quality={quality}
          dpr={dpr}
          format={format}
          fetchFormat={fetchFormat}
          onQualityChange={setQuality}
          onDprChange={setDpr}
          onFormatChange={setFormat}
          onFetchFormatChange={setFetchFormat}
        />
      }
      preview={
        <Preview
          title="Preview"
          imageUrl={previewImage || undefined}
          loading={isProcessing}
          error={isLoggedIn && !previewImage && !isProcessing ? undefined : undefined}
        />
      }
    />
  );
}
