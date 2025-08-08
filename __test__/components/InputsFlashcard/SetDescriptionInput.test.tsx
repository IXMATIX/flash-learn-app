// __tests__/SetDescriptionInput.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SetDescriptionInput from "@/components/InputsFlashcard/SetDescriptionInput";

describe("SetDescriptionInput", () => {
  it("renders the textarea with initial value", () => {
    render(<SetDescriptionInput value="initial description" onChange={() => {}} />);
    const textarea = screen.getByPlaceholderText(/description/i);
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue("initial description");
  });

  it("calls onChange when typing in the textarea", () => {
    const handleChange = jest.fn();
    render(<SetDescriptionInput value="" onChange={handleChange} />);
    const textarea = screen.getByPlaceholderText(/description/i);

    fireEvent.change(textarea, { target: { value: "New description" } });

    expect(handleChange).toHaveBeenCalledWith("New description");
  });
});
