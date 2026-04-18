'use client';

import styles from './Sidebar.module.css';
import UploadSection from './UploadSection';
import ImageIdSection from './ImageIdSection';
import ResizeSection from './ResizeSection';
import RotateFlipSection from './RotateFlipSection';
import AdjustmentsSection from './AdjustmentsSection';
import FiltersSection from './FiltersSection';
import StyleOutputSection from './StyleOutputSection';
import WatermarkSection from './WatermarkSection';
import QualityFormatSection from './QualityFormatSection';

interface SidebarProps {
  isLoggedIn: boolean;
  imageId: string;
  onImageIdChange: (value: string) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
  // Resize
  resizeWidth: string;
  resizeHeight: string;
  resizeZoom: string;
  resizeCrop: string;
  resizeGravity: string;
  onResizeWidthChange: (value: string) => void;
  onResizeHeightChange: (value: string) => void;
  onResizeZoomChange: (value: string) => void;
  onResizeCropChange: (value: string) => void;
  onResizeGravityChange: (value: string) => void;

  // Rotate & Flip
  rotate: string;
  flip: string;
  onRotateChange: (value: string) => void;
  onFlipChange: (value: string) => void;

  // Adjustments
  brightness: number;
  contrast: number;
  saturation: number;
  hue: number;
  vibrance: number;
  gamma: number;
  sharpen: number;
  unsharpMask: number;
  onBrightnessChange: (value: number) => void;
  onContrastChange: (value: number) => void;
  onSaturationChange: (value: number) => void;
  onHueChange: (value: number) => void;
  onVibranceChange: (value: number) => void;
  onGammaChange: (value: number) => void;
  onSharpenChange: (value: number) => void;
  onUnsharpMaskChange: (value: number) => void;

  // Filters
  grayscale: boolean;
  sepia: boolean;
  negate: boolean;
  blur: number;
  pixelate: number;
  vignette: number;
  oilPaint: number;
  cartoonify: boolean;
  cartoonifyAmount: string;
  art: string;
  onGrayscaleChange: (value: boolean) => void;
  onSepiaChange: (value: boolean) => void;
  onNegateChange: (value: boolean) => void;
  onBlurChange: (value: number) => void;
  onPixelateChange: (value: number) => void;
  onVignetteChange: (value: number) => void;
  onOilPaintChange: (value: number) => void;
  onCartoonifyChange: (value: boolean) => void;
  onCartoonifyAmountChange: (value: string) => void;
  onArtChange: (value: string) => void;

  // Style & Output
  borderWidth: string;
  borderColor: string;
  background: string;
  radius: string;
  onBorderWidthChange: (value: string) => void;
  onBorderColorChange: (value: string) => void;
  onBackgroundChange: (value: string) => void;
  onRadiusChange: (value: string) => void;

  // Watermark
  watermarkText: string;
  watermarkFontFamily: string;
  watermarkFontSize: number;
  watermarkFontColor: string;
  watermarkGravity: string;
  watermarkX: number;
  watermarkY: number;
  watermarkOpacity: number;
  onWatermarkTextChange: (value: string) => void;
  onWatermarkFontFamilyChange: (value: string) => void;
  onWatermarkFontSizeChange: (value: number) => void;
  onWatermarkFontColorChange: (value: string) => void;
  onWatermarkGravityChange: (value: string) => void;
  onWatermarkXChange: (value: number) => void;
  onWatermarkYChange: (value: number) => void;
  onWatermarkOpacityChange: (value: number) => void;

  // Quality & Format
  quality: string;
  dpr: string;
  format: string;
  fetchFormat: string;
  onQualityChange: (value: string) => void;
  onDprChange: (value: string) => void;
  onFormatChange: (value: string) => void;
  onFetchFormatChange: (value: string) => void;
}

export default function Sidebar({
  isLoggedIn,
  imageId,
  onImageIdChange,
  onImageUpload,
  resizeWidth,
  resizeHeight,
  resizeZoom,
  resizeCrop,
  resizeGravity,
  onResizeWidthChange,
  onResizeHeightChange,
  onResizeZoomChange,
  onResizeCropChange,
  onResizeGravityChange,
  rotate,
  flip,
  onRotateChange,
  onFlipChange,
  brightness,
  contrast,
  saturation,
  hue,
  vibrance,
  gamma,
  sharpen,
  unsharpMask,
  onBrightnessChange,
  onContrastChange,
  onSaturationChange,
  onHueChange,
  onVibranceChange,
  onGammaChange,
  onSharpenChange,
  onUnsharpMaskChange,
  grayscale,
  sepia,
  negate,
  blur,
  pixelate,
  vignette,
  oilPaint,
  cartoonify,
  cartoonifyAmount,
  art,
  onGrayscaleChange,
  onSepiaChange,
  onNegateChange,
  onBlurChange,
  onPixelateChange,
  onVignetteChange,
  onOilPaintChange,
  onCartoonifyChange,
  onCartoonifyAmountChange,
  onArtChange,
  borderWidth,
  borderColor,
  background,
  radius,
  onBorderWidthChange,
  onBorderColorChange,
  onBackgroundChange,
  onRadiusChange,
  watermarkText,
  watermarkFontFamily,
  watermarkFontSize,
  watermarkFontColor,
  watermarkGravity,
  watermarkX,
  watermarkY,
  watermarkOpacity,
  onWatermarkTextChange,
  onWatermarkFontFamilyChange,
  onWatermarkFontSizeChange,
  onWatermarkFontColorChange,
  onWatermarkGravityChange,
  onWatermarkXChange,
  onWatermarkYChange,
  onWatermarkOpacityChange,
  quality,
  dpr,
  format,
  fetchFormat,
  onQualityChange,
  onDprChange,
  onFormatChange,
  onFetchFormatChange,
}: SidebarProps) {
  return (
    <div className={styles.sidebarContent}>
      {!isLoggedIn ? (
        <div className={styles.authPrompt}>
          <p>Please log in to access image processing features</p>
        </div>
      ) : (
        <>
          <UploadSection onImageUpload={onImageUpload} />
          <ImageIdSection imageId={imageId} onImageIdChange={onImageIdChange} />
          <ResizeSection
            resizeWidth={resizeWidth}
            resizeHeight={resizeHeight}
            resizeZoom={resizeZoom}
            resizeCrop={resizeCrop}
            resizeGravity={resizeGravity}
            onResizeWidthChange={onResizeWidthChange}
            onResizeHeightChange={onResizeHeightChange}
            onResizeZoomChange={onResizeZoomChange}
            onResizeCropChange={onResizeCropChange}
            onResizeGravityChange={onResizeGravityChange}
          />
          <RotateFlipSection
            rotate={rotate}
            flip={flip}
            onRotateChange={onRotateChange}
            onFlipChange={onFlipChange}
          />
          <AdjustmentsSection
            brightness={brightness}
            contrast={contrast}
            saturation={saturation}
            hue={hue}
            vibrance={vibrance}
            gamma={gamma}
            sharpen={sharpen}
            unsharpMask={unsharpMask}
            onBrightnessChange={onBrightnessChange}
            onContrastChange={onContrastChange}
            onSaturationChange={onSaturationChange}
            onHueChange={onHueChange}
            onVibranceChange={onVibranceChange}
            onGammaChange={onGammaChange}
            onSharpenChange={onSharpenChange}
            onUnsharpMaskChange={onUnsharpMaskChange}
          />
          <FiltersSection
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
            onGrayscaleChange={onGrayscaleChange}
            onSepiaChange={onSepiaChange}
            onNegateChange={onNegateChange}
            onBlurChange={onBlurChange}
            onPixelateChange={onPixelateChange}
            onVignetteChange={onVignetteChange}
            onOilPaintChange={onOilPaintChange}
            onCartoonifyChange={onCartoonifyChange}
            onCartoonifyAmountChange={onCartoonifyAmountChange}
            onArtChange={onArtChange}
          />
          <StyleOutputSection
            borderWidth={borderWidth}
            borderColor={borderColor}
            background={background}
            radius={radius}
            onBorderWidthChange={onBorderWidthChange}
            onBorderColorChange={onBorderColorChange}
            onBackgroundChange={onBackgroundChange}
            onRadiusChange={onRadiusChange}
          />
          <WatermarkSection
            watermarkText={watermarkText}
            watermarkFontFamily={watermarkFontFamily}
            watermarkFontSize={watermarkFontSize}
            watermarkFontColor={watermarkFontColor}
            watermarkGravity={watermarkGravity}
            watermarkX={watermarkX}
            watermarkY={watermarkY}
            watermarkOpacity={watermarkOpacity}
            onWatermarkTextChange={onWatermarkTextChange}
            onWatermarkFontFamilyChange={onWatermarkFontFamilyChange}
            onWatermarkFontSizeChange={onWatermarkFontSizeChange}
            onWatermarkFontColorChange={onWatermarkFontColorChange}
            onWatermarkGravityChange={onWatermarkGravityChange}
            onWatermarkXChange={onWatermarkXChange}
            onWatermarkYChange={onWatermarkYChange}
            onWatermarkOpacityChange={onWatermarkOpacityChange}
          />
          <QualityFormatSection
            quality={quality}
            dpr={dpr}
            format={format}
            fetchFormat={fetchFormat}
            onQualityChange={onQualityChange}
            onDprChange={onDprChange}
            onFormatChange={onFormatChange}
            onFetchFormatChange={onFetchFormatChange}
          />
        </>
      )}
    </div>
  );
}
