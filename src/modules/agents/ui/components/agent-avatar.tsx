"use client";
import React from "react";
import { generateAgentAvatar } from "./avatar-generator/agent-avatar-generator";

interface AgentAvatarProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  showIcon?: boolean;
  showInitials?: boolean;
  className?: string;
  seed?: number;
}

export const AgentAvatar = ({
  name,
  size = "md",
  showIcon = true,
  showInitials = false,
  className = "",
  seed = 0,
}: AgentAvatarProps) => {
  const { icon: Icon, color, initials } = generateAgentAvatar(name, seed);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-xl",
  };

  return (
    <div
      className={`
      ${sizeClasses[size]} 
      ${color} 
      rounded-full 
      flex 
      items-center 
      justify-center 
      text-white 
      font-semibold 
      shadow-lg 
      transition-all 
      duration-300 
      hover:scale-105
      ${className}
    `}
    >
      {showIcon && !showInitials ? (
        <Icon className={`${iconSizes[size]} drop-shadow-sm`} />
      ) : (
        <span className={`${textSizes[size]} font-bold drop-shadow-sm`}>
          {initials}
        </span>
      )}
    </div>
  );
};
