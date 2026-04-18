'use client';

import SettingsCard, { SettingValue } from './SettingsCard';

interface QualityFormatSectionProps {
  quality: string;
  dpr: string;
  format: string;
  fetchFormat: string;
  onQualityChange: (value: string) => void;
  onDprChange: (value: string) => void;
  onFormatChange: (value: string) => void;
  onFetchFormatChange: (value: string) => void;
}

export default function QualityFormatSection({
  quality,
  dpr,
  format,
  fetchFormat,
  onQualityChange,
  onDprChange,
  onFormatChange,
  onFetchFormatChange,
}: QualityFormatSectionProps) {
  const qualitySettings: SettingValue[] = [
    {
      label: 'Quality',
      value: quality,
      onChange: (val) => onQualityChange(val as string),
    },
    {
      label: 'DPR',
      value: dpr,
      onChange: (val) => onDprChange(val as string),
      type: 'number',
      min: 1,
    },
    {
      label: 'Format',
      value: format,
      onChange: (val) => onFormatChange(val as string),
      type: 'select',
      options: [
        { label: 'None', value: '' },
        { label: 'JPG', value: 'jpg' },
        { label: 'PNG', value: 'png' },
        { label: 'WebP', value: 'webp' },
        { label: 'AVIF', value: 'avif' },
        { label: 'GIF', value: 'gif' },
        { label: 'PDF', value: 'pdf' },
        { label: 'Auto', value: 'auto' },
      ],
    },
    {
      label: 'Fetch Format',
      value: fetchFormat,
      onChange: (val) => onFetchFormatChange(val as string),
      type: 'select',
      options: [
        { label: 'None', value: '' },
        { label: 'Auto', value: 'auto' },
      ],
    },
  ];

  return (
    <SettingsCard
      title="Quality & Format"
      description="Output settings"
      icon={
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round" />
        </svg>
      }
      settings={qualitySettings}
    />
  );
}
