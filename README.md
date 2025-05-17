

<details>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li>Article app </li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


📝 Article App – Fullstack Blog Platform
There are many blog templates out there, but I wanted to create one that’s fullstack, modern, and flexible — built with Next.js, Prisma, and Neon. This app is designed to demonstrate clean architecture, role-based access, and full CRUD functionality.

Here’s why this project matters:

Your time should be focused on learning fullstack development in real-world scenarios.

You shouldn't build basic apps over and over — go for features that simulate actual SaaS apps.

You should apply DRY and KISS principles even in your personal projects. 😄


🚀 Features

✅ Next.js Fullstack App (App Router)

✅ Database: Prisma + Neon (PostgreSQL hosted on the cloud)

✅ Admin Dashboard

Create / Delete Articles

Create / Delete Comments

✅ User Role

View Articles

Add Comments

✅ Authentication Ready (add your auth provider)

✅ API Routes for All CRUD Operations

✅ Fully responsive UI (TailwindCSS or your preferred styling)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
* [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
* [![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
* ![Neon](https://img.shields.io/badge/Neon-008FFF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMu\nb3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMi41IDExTDkuNSA2TDguNSAxMUgyLjVaIiBmaWxsPSIjRkZGIi8+PC9zdmc+)
* [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/article-app.git
cd article-app

npm install

# Database (Neon)
DATABASE_URL="your_neon_database_url"

🔐 Don't forget to add .env to your .gitignore.

npx prisma generate
npx prisma migrate dev --name init

npm run dev

Now the app will be running at:
📍 http://localhost:3000


📌 Features
Full-stack Next.js app

Admin dashboard to manage articles and comments

Users can view articles and post comments

Styled with Tailwind CSS

PostgreSQL hosted on Neon

Prisma ORM integration

Stripe (optional integration)

🤝 Contributions
Feel free to fork the project, suggest improvements, or submit a pull request!
