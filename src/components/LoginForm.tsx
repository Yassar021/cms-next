"use client";
import React from "react";
import { InputField } from "./InputField";
import Link from "next/link";

export const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full font-dm-sans mt-6"
    >
      <div className="w-full max-w-[400px]">
        <InputField
          label="Email"
          type="email"
          placeholder="Masukkan Email"
          className="mb-5"
        />
        <InputField
          label="Kata sandi"
          type="password"
          placeholder="Masukkan Password"
        />
        <div className="flex flex-col gap-4 mt-2">
          <Link 
            href={'/'}
            className="text-base font-semibold text-right text-black active:text-blue-700 transition-colors"
          >
            Lupa Kata Sandi?
          </Link>
          <button
            type="submit"
            className="flex overflow-hidden gap-3 justify-center items-center px-5 py-3 mt-3 text-base font-semibold text-white bg-blue-700 rounded-3xl tracking-[2.56px] hover:bg-blue-800 transition-colors"
          >
            <span className="self-stretch my-auto">Masuk Sekarang</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17.5L8.5875 16.0875L14.175 10.5H2.5V8.5H14.175L8.5875 2.9125L10 1.5L18.5 10L10 17.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};
