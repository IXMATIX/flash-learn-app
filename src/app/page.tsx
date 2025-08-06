"use client";
import HeaderSection from "@/components/Layout/HeaderSection";
import FlashcardSetList from "@/components/Layout/FlashcardSetList";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <HeaderSection />
      <FlashcardSetList/>
    </div>
  );
}
