"use client";
import React from "react";
import { LoginSection } from "../components/LoginSection";
import { HeroSection } from "../components/HeroSection";

export const DashboardPage: React.FC = () => {
  return (
    <main className="overflow-hidden sm:h-auto lg:h-[100vh] pl-16 bg-zinc-100 max-md:pl-5">
      <div className="flex gap-4 2xl:gap-16 max-md:flex-col">
        <LoginSection />
        <HeroSection />
      </div>
    </main>
  );
};

export default DashboardPage;
