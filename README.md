<div align="center">
  <h1>StoreIt - The only storage solution you need.</h1>
  <img src="public/assets/images/banner.png" alt="StoreIt Banner" style="width: 100%;"  />
</div>

StoreIt is a platform designed to simplify file management and sharing. With a modern, responsive interface and powerful features, it ensures a seamless experience for users to organize and share their files effectively.

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technologies Used](#%EF%B8%8F-technologies-used)
- [📂 File Structure](#-file-structure)
- [🚀 Getting Started](#-getting-started)
- [🙏 Acknowledgements](#-acknowledgements)
- [📜 License](#-license)

---

## ✨ Features

- **Secure OTP Authentication**: Gain access with one-time password authentication powered by Appwrite for enhanced security.
- **Quick File Uploads**: Upload and store various file types like documents, images, and videos with ease.
- **File Management**: Organize your files by renaming, deleting, or opening them in new tabs directly from the dashboard.
- **Download Files Instantly**: Easily download files whenever you need them.
- **Simple File Sharing**: Share files effortlessly to enhance collaboration.
- **Detailed Dashboard Insights**: View total and used storage, recent uploads, and categorized file summaries at a glance.
- **Robust Global Search**: Quickly locate files or shared items using an intuitive search bar.
- **Custom Sorting Options**: Organize files by date, name, or size for better accessibility.
- **Responsive Design**: Enjoy a user-friendly interface that works seamlessly on both mobile and desktop.

---

## 🛠️ Technologies Used

StoreIt leverages the following tools and frameworks to deliver a robust user experience:

- **React 19**
- **Next.js 15**
- **Appwrite**
- **TailwindCSS**
- **ShadCN**
- **TypeScript**

---

## 📂 File Structure

Here is the high-level structure of the project:

```
.
├── .env.local
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
├── src
│   ├── app
│   │   ├── (auth)
│   │   │   ├── layout.tsx
│   │   │   ├── sign-in
│   │   │   │   └── page.tsx
│   │   │   └── sign-up
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── (root)
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       └── [type]
│   │           └── page.tsx
│   ├── components
│   │   ├── ActionDropdown.tsx
│   │   ├── ActionsModalContent.tsx
│   │   ├── AuthForm.tsx
│   │   ├── Card.tsx
│   │   ├── Chart.tsx
│   │   ├── FileUploader.tsx
│   │   ├── FormattedDateTime.tsx
│   │   ├── Header.tsx
│   │   ├── MobileNavigation.tsx
│   │   ├── OTPModal.tsx
│   │   ├── Search.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Sort.tsx
│   │   ├── Thumbnail.tsx
│   │   └── ui
│   │       ├── alert-dialog.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── chart.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── toaster.tsx
│   │       └── toast.tsx
│   ├── constants
│   │   └── index.ts
│   ├── hooks
│   │   └── use-toast.ts
│   └── lib
│       ├── actions
│       │   ├── file.actions.ts
│       │   └── user.actions.ts
│       ├── appwrite
│       │   └── index.ts
│       └── utils.ts
├── tailwind.config.ts
├── tsconfig.json
└── types
    └── index.d.ts
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm (Node Package Manager)](https://www.npmjs.com/)

### Cloning the Repository

```bash
git clone https://github.com/iamfitsum/store-it.git
cd store-it
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT=
NEXT_PUBLIC_APPWRITE_DATABASE=
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=
NEXT_PUBLIC_APPWRITE_BUCKET=
NEXT_APPWRITE_SECRET=
```

Replace the values with your actual Appwrite credentials. You can obtain these credentials by signing up and creating a new project on the [Appwrite platform](https://appwrite.io).

### Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---

## 🙏 Acknowledgements

Special thanks to [Adrian](https://github.com/adrianhajdin) from JSMastery for his insightful video tutorial that guided the development of this project. Check out the course video [here](https://www.youtube.com/watch?v=lie0cr3wESQ).

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
