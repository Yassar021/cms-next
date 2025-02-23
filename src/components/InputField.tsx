"use client";
import React, { useState } from 'react';
import { EmailIcon, LockIcon, EyeIcon, EyeOffIcon } from './Icons';

interface InputFieldProps {
  label: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  className = ''
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  const renderLeftIcon = () => {
    switch (type) {
      case 'email':
        return <EmailIcon />;
      case 'password':
        return <LockIcon />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col w-full font-dm-sans ${className}`}>
      <label className="text-lg font-semibold text-black mb-2">
        {label}
      </label>
      <div className="relative flex items-start w-full">
        <input
          type={inputType}
          placeholder={placeholder}
          className="z-0 w-full pr-4 pl-12 text-lg bg-white rounded-md border border-solid border-[#E2E8F0] h-12 text-slate-400 font-dm-sans focus:outline-none focus:border-blue-700 transition-colors"
          aria-label={label}
        />
        <div className="flex absolute inset-y-0 left-0 z-0 justify-center items-center w-12 h-12 text-slate-400">
          {renderLeftIcon()}
        </div>
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="flex absolute inset-y-0 right-0 z-0 justify-center items-center w-12 h-12 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
    </div>
  );
};
