"use client";

import { useState } from "react";

import HeaderComponent from "./components/HeaderComponent";
import { IdentifyImageSection } from "./components/IdentifyImageSection";
import { Footer } from "./components/Footer";
import { FeaturesSection } from "./components/FeaturesSection";
import { ImageDescription } from "./components/ImageDescription";
import { WorkingSection } from "./components/WorkingSection";

export default function Home() {
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderComponent />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=" overflow-hidden">
          <IdentifyImageSection setResult={setResult} />

          <ImageDescription result={result} />
        </div>

        <WorkingSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
}
