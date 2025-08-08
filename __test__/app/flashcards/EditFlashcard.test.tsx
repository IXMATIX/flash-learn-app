// tests/EditFlashcardSetPage.test.tsx
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import EditFlashcardSetPage from "@/app/flashcards/edit/[setId]/page"; // ajusta esta ruta si es diferente
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useParams: () => ({
    setId: "abc123",
  }),
}));

const mockSet = {
  id: "abc123",
  name: "Test Set",
  description: "Descripción del set",
  cards: [
    { id: "card1", front: "Front 1", back: "Back 1" },
    { id: "card2", front: "Front 2", back: "Back 2" },
  ],
};

beforeEach(() => {
  localStorage.setItem("flashcardSets", JSON.stringify([mockSet]));
});

afterEach(() => {
  localStorage.clear();
});

describe("EditFlashcardSetPage", () => {
  it("renderiza el formulario de edición si el set existe", async () => {
    render(<EditFlashcardSetPage />);

    await waitFor(() => {
      expect(screen.getByText("✏️ Edit Flashcard Set")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Test Set")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Descripción del set")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Front 1")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Back 1")).toBeInTheDocument();
    });
  });

  it("redirige si el set no existe", async () => {
    localStorage.setItem("flashcardSets", JSON.stringify([])); // vacía

    const mockPush = jest.fn();
    jest.mocked(require("next/navigation")).useRouter = () => ({ push: mockPush });
    render(<EditFlashcardSetPage />);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });
});
