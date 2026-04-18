'use client';

import SettingsCard, { SettingValue } from './SettingsCard';

interface FiltersSectionProps {
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
}

export default function FiltersSection({
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
}: FiltersSectionProps) {
  const filtersSettings: SettingValue[] = [
    {
      label: 'Cartoonify Amount',
      value: cartoonifyAmount,
      onChange: (val) => onCartoonifyAmountChange(val as string),
      type: 'number',
    },
    {
      label: 'Art Filter',
      value: art,
      onChange: (val) => onArtChange(val as string),
    },
    {
      label: 'Blur',
      value: blur,
      onChange: (val) => onBlurChange(val as number),
      type: 'range',
      min: 0,
      max: 100,
    },
    {
      label: 'Pixelate',
      value: pixelate,
      onChange: (val) => onPixelateChange(val as number),
      type: 'range',
      min: 0,
      max: 100,
    },
    {
      label: 'Vignette',
      value: vignette,
      onChange: (val) => onVignetteChange(val as number),
      type: 'range',
      min: 0,
      max: 100,
    },
    {
      label: 'Oil Paint',
      value: oilPaint,
      onChange: (val) => onOilPaintChange(val as number),
      type: 'range',
      min: 0,
      max: 100,
    },
    { label: 'Grayscale', value: grayscale, onChange: (val) => onGrayscaleChange(val as boolean), type: 'checkbox' },
    { label: 'Sepia', value: sepia, onChange: (val) => onSepiaChange(val as boolean), type: 'checkbox' },
    { label: 'Negate', value: negate, onChange: (val) => onNegateChange(val as boolean), type: 'checkbox' },
    { label: 'Cartoonify', value: cartoonify, onChange: (val) => onCartoonifyChange(val as boolean), type: 'checkbox' },
  ];

  return (
    <SettingsCard
      title="Filters"
      description="Apply visual effects"
      icon={
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      }
      settings={filtersSettings}
    />
  );
}
