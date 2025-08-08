import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import FlashcardSetPage from "@/app/flashcards/[setId]/page";
import * as nextRouter from "next/navigation";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
    ...jest.requireActual("next/navigation"),
    useRouter: jest.fn(),
    useParams: jest.fn(),
}));

beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();

    (nextRouter.useRouter as jest.Mock).mockReturnValue({ push: mockPush });
});

describe("FlashcardSetPage", () => {
    it("redirects if setId is missing", () => {
        (nextRouter.useParams as jest.Mock).mockReturnValue({});

        render(<FlashcardSetPage />);
        expect(mockPush).toHaveBeenCalledWith("/");
    });

    it("redirects if no matching set found", () => {
        (nextRouter.useParams as jest.Mock).mockReturnValue({ setId: "abc123" });

        localStorage.setItem("flashcardSets", JSON.stringify([]));

        render(<FlashcardSetPage />);
        expect(mockPush).toHaveBeenCalledWith("/");
    });

    it("shows loading initially", () => {
        (nextRouter.useParams as jest.Mock).mockReturnValue({ setId: "abc123" });
        localStorage.setItem("flashcardSets", JSON.stringify([]));

        render(<FlashcardSetPage />);
        expect(screen.getByText(/Loading set/i)).toBeInTheDocument();
    });

    it("renders set correctly", async () => {
        const testSet = {
            id: "abc123",
            name: "Test Set",
            description: "Set Description",
            cards: [
                { front: "Front 1", back: "Back 1" },
                { front: "Front 2", back: "Back 2" },
            ],
        };

        (nextRouter.useParams as jest.Mock).mockReturnValue({ setId: "abc123" });
        localStorage.setItem("flashcardSets", JSON.stringify([testSet]));

        render(<FlashcardSetPage />);

        await waitFor(() =>
            expect(screen.getByText("Test Set")).toBeInTheDocument()
        );

        expect(screen.getByText("Set Description")).toBeInTheDocument();
        expect(screen.getByText("Front 1")).toBeInTheDocument();

        // Flip card
        fireEvent.click(screen.getByText("(Click to flip)"));
        expect(screen.getByText("Back 1")).toBeInTheDocument();

    });

    it("renders fallback if no cards exist", async () => {
        const emptySet = {
            id: "empty123",
            name: "Empty Set",
            description: "",
            cards: [],
        };

        (nextRouter.useParams as jest.Mock).mockReturnValue({ setId: "empty123" });
        localStorage.setItem("flashcardSets", JSON.stringify([emptySet]));

        render(<FlashcardSetPage />);

        await waitFor(() =>
            expect(screen.getByText(/This set has no cards yet/i)).toBeInTheDocument()
        );
    });
});
