// __tests__/DeleteModal.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DeleteModal from "@/components/DeleteModal";

describe("DeleteModal", () => {
  const onClose = jest.fn();
  const onConfirm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders modal with default texts when open", () => {
    render(
      <DeleteModal open={true} onClose={onClose} onConfirm={onConfirm} />
    );

    expect(screen.getByText("Delete this set?")).toBeInTheDocument();
    expect(screen.getByText("This action cannot be undone.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });

  test("calls onClose when clicking Cancel button", () => {
    render(
      <DeleteModal open={true} onClose={onClose} onConfirm={onConfirm} />
    );

    fireEvent.click(screen.getByRole("button", { name: /cancel/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("calls onConfirm and onClose when clicking Delete button", () => {
    render(
      <DeleteModal open={true} onClose={onClose} onConfirm={onConfirm} />
    );

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("does not render content when open is false", () => {
    render(
      <DeleteModal open={false} onClose={onClose} onConfirm={onConfirm} />
    );
    
    expect(screen.queryByText("Delete this set?")).not.toBeInTheDocument();
  });

  test("renders custom title and description if provided", () => {
    render(
      <DeleteModal
        open={true}
        onClose={onClose}
        onConfirm={onConfirm}
        title="Custom Title"
        description="Custom description text."
      />
    );
    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom description text.")).toBeInTheDocument();
  });
});
