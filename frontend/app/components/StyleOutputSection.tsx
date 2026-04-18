'use client';

import SettingsCard, { SettingValue } from './SettingsCard';

interface StyleOutputSectionProps {
  borderWidth: string;
  borderColor: string;
  background: string;
  radius: string;
  onBorderWidthChange: (value: string) => void;
  onBorderColorChange: (value: string) => void;
  onBackgroundChange: (value: string) => void;
  onRadiusChange: (value: string) => void;
}

export default function StyleOutputSection({
  borderWidth,
  borderColor,
  background,
  radius,
  onBorderWidthChange,
  onBorderColorChange,
  onBackgroundChange,
  onRadiusChange,
}: StyleOutputSectionProps) {
  const styleSettings: SettingValue[] = [
    {
      label: 'Border Width',
      value: borderWidth,
      onChange: (val) => onBorderWidthChange(val as string),
      type: 'number',
    },
    {
      label: 'Border Color',
      value: borderColor,
      onChange: (val) => onBorderColorChange(val as string),
    },
    {
      label: 'Background',
      value: background,
      onChange: (val) => onBackgroundChange(val as string),
    },
    {
      label: 'Radius',
      value: radius,
      onChange: (val) => onRadiusChange(val as string),
      type: 'select',
      options: [
        { label: 'None', value: '' },
        { label: 'Max', value: 'max' },
      ],
    },
  ];

  return (
    <SettingsCard
      title="Style & Output"
      description="Border, background, radius"
      icon={
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 3v18" strokeWidth="2" />
        </svg>
      }
      settings={styleSettings}
    />
  );
}
