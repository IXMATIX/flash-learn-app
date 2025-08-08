// __tests__/FlashcardInput.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FlashcardInput from "@/components/InputsFlashcard/FlashcardInput";

describe("FlashcardInput", () => {
  const mockCard = { front: "front text", back: "back text", id: "1" };

  it("renders inputs with correct initial values and placeholders", () => {
    render(
      <FlashcardInput
        index={0}
        card={mockCard}
        onChange={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    expect(screen.getByPlaceholderText(/frente #1/i)).toHaveValue("front text");
    expect(screen.getByPlaceholderText(/back #1/i)).toHaveValue("back text");
  });

  it("calls onChange with 'front' when front input changes", () => {
    const onChange = jest.fn();

    render(
      <FlashcardInput
        index={0}
        card={mockCard}
        onChange={onChange}
        onDelete={jest.fn()}
      />
    );

    fireEvent.change(screen.getByPlaceholderText(/frente #1/i), {
      target: { value: "new front" },
    });

    expect(onChange).toHaveBeenCalledWith("front", "new front");
  });

  it("calls onChange with 'back' when back input changes", () => {
    const onChange = jest.fn();

    render(
      <FlashcardInput
        index={0}
        card={mockCard}
        onChange={onChange}
        onDelete={jest.fn()}
      />
    );

    fireEvent.change(screen.getByPlaceholderText(/back #1/i), {
      target: { value: "new back" },
    });

    expect(onChange).toHaveBeenCalledWith("back", "new back");
  });

  it("displays error message when error prop is passed", () => {
    render(
      <FlashcardInput
        index={0}
        card={mockCard}
        error="This is an error"
        onChange={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    expect(screen.getByText(/this is an error/i)).toBeInTheDocument();
  });

  it("calls onDelete when Delete Card button is clicked", () => {
    const onDelete = jest.fn();

    render(
      <FlashcardInput
        index={0}
        card={mockCard}
        onChange={jest.fn()}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /delete card/i }));

    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
