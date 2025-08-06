
# 🧠 Flashcards App

A flashcard learning application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Users can create, edit, delete, and view custom flashcard sets. All data is stored locally using `localStorage`.

## ✨ Features

- Create custom flashcard sets
- Edit and delete existing sets
- Add multiple flashcards with front/back content
- Basic validation and notifications with `react-toastify`
- Responsive and modern user interface
- Fully local storage (no backend for now)

## 🧱 Folder Structure

```
📁 app/
├── create-set          → Page to create a new set
├── edit/[setId]        → Page to edit an existing set
├── view/[setId]        → Page to view a set
├── page.tsx            → Home page with all sets listed

📁 components/
├── FlashcardPreview.tsx
├── SetCard.tsx
└── InputsFlashcard/
    ├── SetNameInput.tsx
    ├── SetDescriptionInput.tsx
    ├── FlashcardInput.tsx
    └── CardFormActions.tsx

📁 lib/
└── types.ts            → Type definitions

📁 public/
└── (static assets if any)

📄 tailwind.config.ts
📄 tsconfig.json
📄 package.json
```

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [uuid](https://www.npmjs.com/package/uuid)

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/flashcards-app.git
cd flashcards-app

# Install dependencies
npm install

# Run in development mode
npm run dev
```

The app will be available at `http://localhost:3000`.

## 🧪 Testing

This project is set up to use **Jest** for testing:

```bash
npm run test        # Run tests
npm run test:watch  # Run tests in watch mode
```

> Make sure Jest is correctly configured in your environment.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📌 Notes

- Currently uses `localStorage`, so data is only saved locally per browser.
- Easily extendable to support a backend in the future (e.g., Supabase, Firebase).

## 💡 Future Improvements

- Search functionality for sets
- Study / Review mode for flashcards
- Export and import sets
- Cloud storage integration

## 🧑‍💻 Author

Built by [Brunonxale].

---

Feel free to contribute or suggest new features!
