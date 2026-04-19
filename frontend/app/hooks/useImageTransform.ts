import { useState } from 'react';
import imageService from '../services/imageService';

interface TransformParams {
  publicId?: string;
  width?: string;
  height?: string;
  zoom?: string;
  crop?: string;
  gravity?: string;
  rotate?: string;
  flip?: string;
  brightness?: number;
  contrast?: number;
  saturation?: number;
  hue?: number;
  vibrance?: number;
  gamma?: number;
  sharpen?: number;
  unsharpMask?: number;
  grayscale?: boolean;
  sepia?: boolean;
  negate?: boolean;
  blur?: number;
  pixelate?: number;
  vignette?: number;
  oilPaint?: number;
  cartoonify?: boolean;
  cartoonifyAmount?: string;
  art?: string;
  borderWidth?: string;
  borderColor?: string;
  background?: string;
  radius?: string;
  watermarkText?: string;
  watermarkFontFamily?: string;
  watermarkFontSize?: number;
  watermarkFontColor?: string;
  watermarkGravity?: string;
  watermarkX?: number;
  watermarkY?: number;
  watermarkOpacity?: number;
  quality?: string;
  dpr?: string;
  format?: string;
  fetchFormat?: string;
}

export function useImageTransform() {
  const [isTransforming, setIsTransforming] = useState(false);
  const [transformedImage, setTransformedImage] = useState<string | null>(null);

  const transform = async (params: TransformParams) => {
    setIsTransforming(true);
    try {
      const result = await imageService.transformImage(params);
      if (result.url) {
        setTransformedImage(result.url);
      }
      return result;
    } finally {
      setIsTransforming(false);
    }
  };

  return {
    isTransforming,
    transformedImage,
    transform,
  };
}
