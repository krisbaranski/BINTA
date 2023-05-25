"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import HeroSection from "@/components/HeroSection";
import School from "@/components/School";
import Research from "../components/research";

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-3 sm:px-5 md:max-w-5xl '>
      <ThemeProvider enableSystem={true} attribute='class'>
        <HeroSection />
        <School />
        <Research />
      </ThemeProvider>
    </main>
  );
}
