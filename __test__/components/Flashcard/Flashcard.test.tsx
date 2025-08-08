// __tests__/Flashcard.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Flashcard from "@/components/Flashcard/Flashcard";

describe("Flashcard component", () => {
  it("renders front text initially and calls onFlip on click", () => {
    const frontText = "Front side";
    const backText = "Back side";
    const onFlip = jest.fn();

    render(<Flashcard front={frontText} back={backText} showBack={false} onFlip={onFlip} />);

    // Should show front text
    expect(screen.getByText(frontText)).toBeInTheDocument();

    // The back text should be present but not visible (due to CSS backfaceVisibility)
    expect(screen.getByText(backText)).toBeInTheDocument();

    // Click the card
    fireEvent.click(screen.getByText(frontText).parentElement!.parentElement!);

    // onFlip should have been called once
    expect(onFlip).toHaveBeenCalledTimes(1);
  });

  it("shows back text when showBack is true", () => {
    const frontText = "Front side";
    const backText = "Back side";
    const onFlip = jest.fn();

    render(<Flashcard front={frontText} back={backText} showBack={true} onFlip={onFlip} />);

    // The front text should be present
    expect(screen.getByText(frontText)).toBeInTheDocument();

    // The back text should be present
    expect(screen.getByText(backText)).toBeInTheDocument();

    // Since CSS handles visibility via backfaceVisibility and rotateY, 
    // we rely on the props and presence of text only in this test.
  });
});
