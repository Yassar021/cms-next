import React from "react";

interface LogoProps {
  className?: string;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  textColor = "text-black",
}) => {
  return (
    <h1
      className={`text-4xl font-medium tracking-tighter leading-none ${textColor} ${className} font-dm-sans`}
    >
      Mediverse ⭐
    </h1>
  );
};
