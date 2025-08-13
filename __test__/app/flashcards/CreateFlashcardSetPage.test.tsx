import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CreateFlashcardSetPage from "@/app/flashcards/new/page";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("CreateFlashcardSetPage validation tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("shows error if name is empty", () => {
    render(<CreateFlashcardSetPage />);
    fireEvent.click(screen.getByText(/Save Set/i));
    expect(screen.getByText(/The set name is required./i)).toBeInTheDocument();
  });

  test("shows toast error if no cards exist", () => {
    render(<CreateFlashcardSetPage />);

    const deleteButtons = screen.getAllByText(/Delete Card/i);
    deleteButtons.forEach((btn) => fireEvent.click(btn));

    fireEvent.click(screen.getByText(/Save Set/i));

    expect(toast.error).toHaveBeenCalledWith("At least one card is required.");
  });

  test("shows card error if any card front or back is empty", () => {
    render(<CreateFlashcardSetPage />);

    const nameInput = screen.getByPlaceholderText(/Name of the Set \*/i);
    fireEvent.change(nameInput, { target: { value: "My Set" } });

    fireEvent.click(screen.getByText(/Save Set/i));

    expect(screen.getByText(/Complete card #1/i)).toBeInTheDocument();
  });



  test("saves successfully when all fields are valid", async () => {
    jest.useFakeTimers();

    render(<CreateFlashcardSetPage />);

    fireEvent.change(screen.getByPlaceholderText(/Name of the Set \*/i), {
      target: { value: "My Set" },
    });

    fireEvent.change(screen.getByPlaceholderText(/Front #/i), {
      target: { value: "Front content" },
    });

    fireEvent.change(screen.getByPlaceholderText(/Back #/i), {
      target: { value: "Back content" },
    });
    fireEvent.click(screen.getByText(/Save Set/i));
    expect(toast.success).toHaveBeenCalledWith("Set saved successfully! 🎉");
    jest.advanceTimersByTime(2200);
    expect(pushMock).toHaveBeenCalledWith("/");
    jest.useRealTimers();
  });

});
