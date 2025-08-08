// __tests__/FlashcardSetList.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FlashcardSetList from "@/components/Layout/FlashcardSetList";
import { FlashcardSet } from "@/lib/types";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

const mockSets: FlashcardSet[] = [
  {
    id: "1",
    name: "Set One",
    description: "Description One",
    cards: [
      { id: "c1", front: "front1", back: "back1" },
      { id: "c2", front: "front2", back: "back2" },
    ],
  },
  {
    id: "2",
    name: "Set Two",
    description: "Description Two",
    cards: [{ id: "c3", front: "front3", back: "back3" }],
  },
];

describe("FlashcardSetList", () => {
  test("renders no sets message when list is empty", () => {
    render(<FlashcardSetList sets={[]} onEdit={jest.fn()} onDelete={jest.fn()} />);
    expect(screen.getByText(/no sets created yet/i)).toBeInTheDocument();
  });

  test("renders flashcard sets correctly", () => {
    render(<FlashcardSetList sets={mockSets} onEdit={jest.fn()} onDelete={jest.fn()} />);

    expect(screen.getByText("Set One")).toBeInTheDocument();
    expect(screen.getByText("Description One")).toBeInTheDocument();
    expect(screen.getByText("2 cards")).toBeInTheDocument();

    expect(screen.getByText("Set Two")).toBeInTheDocument();
    expect(screen.getByText("Description Two")).toBeInTheDocument();
    expect(screen.getByText("1 card")).toBeInTheDocument();
  });

  test("calls onEdit with correct id when Edit button clicked", () => {
    const onEdit = jest.fn();
    render(<FlashcardSetList sets={mockSets} onEdit={onEdit} onDelete={jest.fn()} />);

    const editButtons = screen.getAllByRole("button", { name: /edit/i });
    fireEvent.click(editButtons[0]);
    expect(onEdit).toHaveBeenCalledWith("1");

    fireEvent.click(editButtons[1]);
    expect(onEdit).toHaveBeenCalledWith("2");
  });

  test("calls onDelete with correct id when Delete button clicked", () => {
    const onDelete = jest.fn();
    render(<FlashcardSetList sets={mockSets} onEdit={jest.fn()} onDelete={onDelete} />);

    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    fireEvent.click(deleteButtons[0]);
    expect(onDelete).toHaveBeenCalledWith("1");

    fireEvent.click(deleteButtons[1]);
    expect(onDelete).toHaveBeenCalledWith("2");
  });
});
