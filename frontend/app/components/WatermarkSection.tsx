'use client';

import SettingsCard, { SettingValue } from './SettingsCard';

interface WatermarkSectionProps {
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
}

export default function WatermarkSection({
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
}: WatermarkSectionProps) {
  const watermarkSettings: SettingValue[] = [
    {
      label: 'Watermark Text',
      value: watermarkText,
      onChange: (val) => onWatermarkTextChange(val as string),
    },
    {
      label: 'Font Size',
      value: watermarkFontSize,
      onChange: (val) => onWatermarkFontSizeChange(val as number),
      type: 'number',
    },
    {
      label: 'Font Family',
      value: watermarkFontFamily,
      onChange: (val) => onWatermarkFontFamilyChange(val as string),
      type: 'select',
      options: [
        { label: 'Arial', value: 'Arial' },
        { label: 'Courier', value: 'Courier' },
        { label: 'Georgia', value: 'Georgia' },
        { label: 'Times New Roman', value: 'Times New Roman' },
        { label: 'Verdana', value: 'Verdana' },
      ],
    },
    {
      label: 'Font Color',
      value: watermarkFontColor,
      onChange: (val) => onWatermarkFontColorChange(val as string),
      type: 'color',
    },
    {
      label: 'X Position',
      value: watermarkX,
      onChange: (val) => onWatermarkXChange(val as number),
      type: 'number',
    },
    {
      label: 'Y Position',
      value: watermarkY,
      onChange: (val) => onWatermarkYChange(val as number),
      type: 'number',
    },
    {
      label: 'Gravity',
      value: watermarkGravity,
      onChange: (val) => onWatermarkGravityChange(val as string),
      type: 'select',
      options: [
        { label: 'SE', value: 'south_east' },
        { label: 'SW', value: 'south_west' },
        { label: 'NE', value: 'north_east' },
        { label: 'NW', value: 'north_west' },
        { label: 'Center', value: 'center' },
        { label: 'N', value: 'north' },
        { label: 'S', value: 'south' },
        { label: 'E', value: 'east' },
        { label: 'W', value: 'west' },
      ],
    },
    {
      label: 'Opacity',
      value: watermarkOpacity,
      onChange: (val) => onWatermarkOpacityChange(val as number),
      type: 'range',
      min: 0,
      max: 100,
    },
  ];

  return (
    <SettingsCard
      title="Watermark"
      description="Add text watermark"
      icon={
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 12a8 8 0 018-8v8H4z" strokeWidth="2" />
          <path d="M20 12a8 8 0 01-8 8v-8h8z" strokeWidth="2" />
        </svg>
      }
      settings={watermarkSettings}
    />
  );
}
