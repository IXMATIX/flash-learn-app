// __tests__/HomePage.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "@/app/page";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react-toastify", () => {
  const actual = jest.requireActual("react-toastify");
  return {
    ...actual,
    toast: {
      success: jest.fn(),
    },
    ToastContainer: () => <div />,
  };
});

const mockSets = [
  { id: "1", name: "Set 1", description: "Desc", cards: [] },
  { id: "2", name: "Set 2", description: "Desc", cards: [] },
];

beforeEach(() => {
  localStorage.setItem("flashcardSets", JSON.stringify(mockSets));
  (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
});

afterEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

describe("HomePage", () => {
  test("shows the localStorage sets", () => {
    render(<HomePage />);
    expect(screen.getByText("Set 1")).toBeInTheDocument();
    expect(screen.getByText("Set 2")).toBeInTheDocument();
  });
  test("when clicking delete shows the modal", async () => {
    render(<HomePage />);
    const deleteButtons = screen.getAllByRole("button", {
      name: /delete/i,
    });
    fireEvent.click(deleteButtons[0]);
    await waitFor(() => {
      expect(screen.getByText(/cancel/i)).toBeInTheDocument();
    });
  });
});
