'use client';

import SettingsCard, { SettingValue } from './SettingsCard';

interface ResizeSectionProps {
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
}

export default function ResizeSection({
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
}: ResizeSectionProps) {
  const resizeSettings: SettingValue[] = [
    {
      label: 'Width',
      value: resizeWidth,
      onChange: (val) => onResizeWidthChange(val as string),
      type: 'number',
    },
    {
      label: 'Height',
      value: resizeHeight,
      onChange: (val) => onResizeHeightChange(val as string),
      type: 'number',
    },
    {
      label: 'Zoom',
      value: resizeZoom,
      onChange: (val) => onResizeZoomChange(val as string),
      type: 'number',
    },
    {
      label: 'Crop',
      value: resizeCrop,
      onChange: (val) => onResizeCropChange(val as string),
      type: 'select',
      options: [
        { label: 'Fill', value: 'fill' },
        { label: 'Fit', value: 'fit' },
        { label: 'Limit', value: 'limit' },
        { label: 'Pad', value: 'pad' },
        { label: 'Scale', value: 'scale' },
        { label: 'Thumb', value: 'thumb' },
      ],
    },
    {
      label: 'Gravity',
      value: resizeGravity,
      onChange: (val) => onResizeGravityChange(val as string),
      type: 'select',
      options: [
        { label: 'Auto', value: 'auto' },
        { label: 'Face', value: 'face' },
        { label: 'Faces', value: 'faces' },
        { label: 'Center', value: 'center' },
        { label: 'North', value: 'north' },
        { label: 'South', value: 'south' },
        { label: 'East', value: 'east' },
        { label: 'West', value: 'west' },
        { label: 'NE', value: 'north_east' },
        { label: 'NW', value: 'north_west' },
        { label: 'SE', value: 'south_east' },
        { label: 'SW', value: 'south_west' },
      ],
    },
  ];

  return (
    <SettingsCard
      title="Resize"
      description="Adjust dimensions and crop"
      icon={
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" strokeWidth="2" />
        </svg>
      }
      settings={resizeSettings}
    />
  );
}
