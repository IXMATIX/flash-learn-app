// __tests__/ProgressBar.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressBar from "@/components/Flashcard/ProgressBar";

describe("ProgressBar", () => {
  it("renders correct progress width and text", () => {
    const current = 2;
    const total = 5;
    render(<ProgressBar current={current} total={total} />);

    const progressDiv = screen.getByTestId("progress-bar");
    expect(progressDiv).toHaveStyle(`width: 60%`);

    expect(screen.getByText(/Card 3 of 5/i)).toBeInTheDocument();
  });

  it("shows 0% progress and 'Card 1 of 0' if total is 0", () => {
    render(<ProgressBar current={0} total={0} />);
    const progressDiv = screen.getByTestId("progress-bar");

    expect(progressDiv).toHaveStyle(`width: 0%`);
    expect(screen.getByText(/Card 1 of 0/i)).toBeInTheDocument();
  });
});
