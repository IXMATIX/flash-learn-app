"use client";

import { motion } from "framer-motion";

interface FlashcardProps {
  front: string;
  back: string;
  showBack: boolean;
  onFlip: () => void;
}

export default function Flashcard({ front, back, showBack, onFlip }: FlashcardProps) {
  return (
    <div className="relative perspective-[1000px] w-full h-56 mb-6 cursor-pointer" onClick={onFlip}>
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: showBack ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          transformStyle: "preserve-3d",
        }}
       >
        <div
          className="absolute inset-0 flex items-center justify-center bg-white text-xl rounded-lg shadow-lg p-2"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {front}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center bg-white text-xl rounded-lg shadow-lg p-2"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {back}
        </div>
      </motion.div>

      <p className="text-sm text-gray-400 mt-2 text-center">(Click to flip)</p>
    </div>
  );
}
