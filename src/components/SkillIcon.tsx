import React from 'react';
import { skillIcons } from '../utils/skillIcons';

interface SkillIconProps {
  skill: string;
  color: string;
}

export default function SkillIcon({ skill, color }: SkillIconProps) {
  const IconComponent = skillIcons[skill];
  
  if (!IconComponent) return null;
  
  return (
    <span className={`text-xl ${color} group-hover:scale-110 transition-transform duration-200`}>
      <IconComponent />
    </span>
  );
}