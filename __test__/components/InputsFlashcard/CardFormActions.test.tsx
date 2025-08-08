// __tests__/CardFormActions.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardFormActions from "@/components/InputsFlashcard/CardFormActions";

describe("CardFormActions", () => {
  it("calls onAddCard when 'Add Card' button is clicked", () => {
    const onAddCard = jest.fn();
    const onSaveSet = jest.fn();

    render(<CardFormActions onAddCard={onAddCard} onSaveSet={onSaveSet} />);

    const addButton = screen.getByRole("button", { name: /add card/i });
    fireEvent.click(addButton);

    expect(onAddCard).toHaveBeenCalledTimes(1);
  });

  it("calls onSaveSet when 'Save Set' button is clicked", () => {
    const onAddCard = jest.fn();
    const onSaveSet = jest.fn();

    render(<CardFormActions onAddCard={onAddCard} onSaveSet={onSaveSet} />);

    const saveButton = screen.getByRole("button", { name: /save set/i });
    fireEvent.click(saveButton);

    expect(onSaveSet).toHaveBeenCalledTimes(1);
  });
});
