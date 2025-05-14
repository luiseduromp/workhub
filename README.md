# WorkHub - Job Board App

This is a simple job board application built with Next.js. It fetches job listings from [Jobicy API](https://github.com/Jobicy/remote-jobs-api) and displays it in a list.

The main page allows to filter results by tag, location and industry, which are the parameters provided by the API to filter the results.

Each job post has its own page, with the whole information and description.

## ⭐ Features

The API provides only 50 job posts, with some optional query parameters. It does not provide any pagination parameter.
Based on this behavior, this app simulates a pagination feature with an infinite scroll effect, which shows jobs posts 10 by 10.

The homepage has filter controls to set the query parameters: location or industry, and a search bar to search for a specific position.

Each job post has its own page with the complete description of the job.


## 🚀 Getting Started

Follow these steps to get the app up and running in development mode.

### 1. Clone the Repository
```bash
git clone https://github.com/luiseduromp/workhub.git
cd workhub
```

### 2. Install the dependencies
```bash
npm install
```

### 3. Run the app in development mode
```bash
npm run dev
```

## 🛠️ Tools Used
- [Next.js](https://nextjs.org/). As main framework for the app.
- [TypeScript](https://www.typescriptlang.org/). For static type checking.
- [Tailwind CSS](https://tailwindcss.com/). As a CSS framework.
- [Zustand](https://zustand.docs.pmnd.rs/). For global state management.
- [Shadcn UI](https://ui.shadcn.com/). For ready-to-use Reaact styled components.
- [Jobicy API](https://github.com/Jobicy/remote-jobs-api). To retrieve updated job posts.

