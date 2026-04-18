'use client';

import SettingsCard, { SettingValue } from './SettingsCard';

interface AdjustmentsSectionProps {
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
}

export default function AdjustmentsSection({
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
}: AdjustmentsSectionProps) {
  const adjustmentsSettings: SettingValue[] = [
    {
      label: 'Brightness',
      value: brightness,
      onChange: (val) => onBrightnessChange(val as number),
      type: 'range',
      min: -100,
      max: 100,
    },
    {
      label: 'Contrast',
      value: contrast,
      onChange: (val) => onContrastChange(val as number),
      type: 'range',
      min: -100,
      max: 100,
    },
    {
      label: 'Saturation',
      value: saturation,
      onChange: (val) => onSaturationChange(val as number),
      type: 'range',
      min: -100,
      max: 100,
    },
    {
      label: 'Hue',
      value: hue,
      onChange: (val) => onHueChange(val as number),
      type: 'range',
      min: -180,
      max: 180,
    },
    {
      label: 'Vibrance',
      value: vibrance,
      onChange: (val) => onVibranceChange(val as number),
      type: 'range',
      min: -100,
      max: 100,
    },
    {
      label: 'Gamma',
      value: gamma,
      onChange: (val) => onGammaChange(val as number),
      type: 'range',
      min: 0,
      max: 10,
      step: 0.1,
    },
    {
      label: 'Sharpen',
      value: sharpen,
      onChange: (val) => onSharpenChange(val as number),
      type: 'range',
      min: 0,
      max: 100,
    },
    {
      label: 'Unsharp Mask',
      value: unsharpMask,
      onChange: (val) => onUnsharpMaskChange(val as number),
      type: 'range',
      min: 0,
      max: 100,
    },
  ];

  return (
    <SettingsCard
      title="Adjustments"
      description="Color and tone adjustments"
      icon={
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" opacity="0.3" />
          <path d="M12 2a10 10 0 0110 10v2H2v-2a10 10 0 0110-10z" />
        </svg>
      }
      settings={adjustmentsSettings}
    />
  );
}
