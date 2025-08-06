"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FlashcardSet } from "@/lib/types";

import DeleteModal from "@/components/DeleteModal";
import HeaderSection from "@/components/Layout/HeaderSection";
import FlashcardSetList from "@/components/Layout/FlashcardSetList";

export default function HomePage() {
  const [sets, setSets] = useState<FlashcardSet[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("flashcardSets");
    if (stored) setSets(JSON.parse(stored));
  }, []);

  const handleDeleteConfirm = () => {
    if (!deleteId) return;
    const updated = sets.filter((s) => s.id !== deleteId);
    setSets(updated);
    localStorage.setItem("flashcardSets", JSON.stringify(updated));
    setDeleteId(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <DeleteModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleDeleteConfirm}
      />
      <HeaderSection />
      <FlashcardSetList
        sets={sets}
        onEdit={(id) => router.push(`/flashcards/edit/${id}`)}
        onDelete={(id) => {
          setDeleteId(id);
          setOpenModal(true);
        }}
      />
    </div>
  );
}
