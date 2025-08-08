// __tests__/FlashcardNavigation.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FlashcardNavigation from "@/components/Flashcard/FlashcardNavigation";

describe("FlashcardNavigation", () => {
  const onPrev = jest.fn();
  const onNext = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders buttons with correct disabled states", () => {
    // Current = 0 (first card), Prev disabled, Next enabled
    render(<FlashcardNavigation current={0} total={3} onPrev={onPrev} onNext={onNext} />);
    expect(screen.getByText(/Previous/i)).toBeDisabled();
    expect(screen.getByText(/Next/i)).toBeEnabled();
  });

  it("disables Next button on last card", () => {
    // Current = total - 1, Next disabled, Prev enabled
    render(<FlashcardNavigation current={2} total={3} onPrev={onPrev} onNext={onNext} />);
    expect(screen.getByText(/Previous/i)).toBeEnabled();
    expect(screen.getByText(/Next/i)).toBeDisabled();
  });

  it("disables both buttons when total is 0", () => {
    render(<FlashcardNavigation current={0} total={0} onPrev={onPrev} onNext={onNext} />);
    expect(screen.getByText(/Previous/i)).toBeDisabled();
    expect(screen.getByText(/Next/i)).toBeDisabled();
  });

  it("calls onPrev when Previous button is clicked", () => {
    render(<FlashcardNavigation current={1} total={3} onPrev={onPrev} onNext={onNext} />);
    fireEvent.click(screen.getByText(/Previous/i));
    expect(onPrev).toHaveBeenCalledTimes(1);
  });

  it("calls onNext when Next button is clicked", () => {
    render(<FlashcardNavigation current={1} total={3} onPrev={onPrev} onNext={onNext} />);
    fireEvent.click(screen.getByText(/Next/i));
    expect(onNext).toHaveBeenCalledTimes(1);
  });
});
