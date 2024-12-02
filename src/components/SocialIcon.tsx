import React from 'react';
import type { IconType } from 'react-icons';

interface SocialIconProps {
  icon: IconType;
  url: string;
  name: string;
  color: string;
}

export default function SocialIcon({ icon: Icon, url, name, color }: SocialIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow on ${name}`}
      className={`text-gray-400 ${color} hover:-translate-y-1 transition-all duration-200 p-3`}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}