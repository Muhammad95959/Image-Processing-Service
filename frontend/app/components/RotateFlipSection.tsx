'use client';

import SettingsCard, { SettingValue } from './SettingsCard';

interface RotateFlipSectionProps {
  rotate: string;
  flip: string;
  onRotateChange: (value: string) => void;
  onFlipChange: (value: string) => void;
}

export default function RotateFlipSection({
  rotate,
  flip,
  onRotateChange,
  onFlipChange,
}: RotateFlipSectionProps) {
  const rotateFlipSettings: SettingValue[] = [
    {
      label: 'Rotate',
      value: rotate,
      onChange: (val) => onRotateChange(val as string),
      type: 'number',
    },
    {
      label: 'Flip',
      value: flip,
      onChange: (val) => onFlipChange(val as string),
      type: 'select',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Both', value: 'both' },
      ],
    },
  ];

  return (
    <SettingsCard
      title="Rotate & Flip"
      description="Rotation and flip options"
      icon={
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 4a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V4z" strokeWidth="2" />
        </svg>
      }
      settings={rotateFlipSettings}
    />
  );
}
