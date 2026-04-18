'use client';

import SettingsCard, { SettingValue } from './SettingsCard';

interface ImageIdSectionProps {
  imageId: string;
  onImageIdChange: (value: string) => void;
}

export default function ImageIdSection({ imageId, onImageIdChange }: ImageIdSectionProps) {
  const imageIdSettings: SettingValue[] = [
    {
      label: 'Public ID',
      value: imageId,
      onChange: (val) => onImageIdChange(val as string),
    },
  ];

  return (
    <SettingsCard
      title="Image ID"
      description="Enter public ID to transform"
      icon={
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
        </svg>
      }
      settings={imageIdSettings}
    />
  );
}
