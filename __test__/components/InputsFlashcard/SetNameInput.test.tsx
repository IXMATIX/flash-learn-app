// __tests__/SetNameInput.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SetNameInput from "@/components/InputsFlashcard/SetNameInput";

describe("SetNameInput", () => {
  it("renders input with initial value", () => {
    render(<SetNameInput value="My Set" onChange={() => {}} />);
    const input = screen.getByPlaceholderText(/name of the set \*/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("My Set");
  });

  it("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<SetNameInput value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText(/name of the set \*/i);

    fireEvent.change(input, { target: { value: "New Name" } });

    expect(handleChange).toHaveBeenCalledWith("New Name");
  });

  it("shows error message when error prop is passed", () => {
    render(<SetNameInput value="" onChange={() => {}} error="Required field" />);
    const errorMsg = screen.getByText(/required field/i);
    expect(errorMsg).toBeInTheDocument();
  });
});
