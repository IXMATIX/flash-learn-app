# 🧠 Flashcards App

A web application built with **Next.js**, **TypeScript**, and **Tailwind CSS** that allows users to create, manage, and study custom flashcard sets.\
Perfect for learning languages, science, history, or any topic through active recall.

## ✨ Features

- 📝 **Create & edit flashcard sets** with titles, descriptions, and multiple cards.
- 🔍 **View sets** with an interactive "flip" feature for studying.
- 💾 **LocalStorage persistence** – your sets are saved in the browser.
- 🗑 **Delete sets** easily.
- 📱 **Fully responsive** – works on mobile, tablet, and desktop.
- 🧪 **Test coverage** with Jest & React Testing Library.
- ⚙ **GitHub Actions CI** – automated testing for multiple operating systems.

## 🎥 Demo Video

[▶ Watch the video demo](https://youtu.be/AWt6Hsyb5Gk)

The video shows:

1. Creating a new flashcard set.
2. Editing existing cards.
3. Viewing and flipping cards.
4. Deleting sets.

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

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/flashcards-app.git
cd flashcards-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Then visit [**http://localhost:3000**](http://localhost:3000) in your browser.

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

> [!NOTE]
> ## 📌 Notes
>
> - Currently uses `localStorage`, so data is only saved locally per browser.
> - Easily extendable to support a backend in the future (e.g., Supabase, Firebase).

## 🔄 GitHub Actions

This project uses **GitHub Actions** to run tests on **Ubuntu**, **Windows**, and **macOS** automatically when you push code or open a pull request.

The workflow file is located at:

```
.github/workflows/ci.yml
```
## 💡 Future Improvements

- Search functionality for sets
- Study / Review mode for flashcards
- Export and import sets
- Cloud storage integration

## 🧑‍💻 Author

Built by [Brunonxale].

---
## 🛠 Technologies Used

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form**
- **React Testing Library**
- **Jest**
- **React Toastify**
- **UUID**

## 📜 License

This project is licensed under the MIT License.

