# Teach News React App

Teach News App is a dynamic and user-friendly React application designed to deliver the latest tech-related news. The primary goal of this project is to create a seamless and engaging platform for users to stay updated with the latest tech news. 
<video width="1500" controls src="https://github.com/user-attachments/assets/65622f75-6d01-46fb-8009-718b3766454d" />
 ## Live View On Your Tab
Click Here For Live View: [Live Demo](https://teach-news-app.vercel.app/)


## Features 🥇


- **Dynamic Hero Section**: The hero section displays tech news headlines with a background image that changes every few seconds, providing a fresh visual experience.
- **Tab-Based Navigation**: Users can easily switch between different news categories using tab navigation, with each tab fetching data from different API endpoints.
- **State Management with `useReducer`**: The application uses React's `useReducer` for efficient state management, handling loading, error, and news data states.
- **Responsive Design**: The app is fully responsive, ensuring a smooth experience on both mobile and desktop devices.


## Technologies Used 🛠️

- **React.js**: For building the user interface.
- **Shadcn Ui**: Pre-built React Component Ui Library For Building The Ui.
- **Axios**: For making API requests to fetch news data.
- **Vite**: For fast development and build processes.
- **Vercel**: For deployment.


## Folder Structure 📂

```plaintext
viatour/
│
├── public/
│   │
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── actualComponent/
│   │   │   ├── Tabs.jsx
│   │   │   ├── NewsCard.jsx
│   │   │   └── NewsHeader.jsx
│   │   │   └── .......
│   │   |
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Tabs.jsx
│   │   │   └── .......

│   │
│   ├── common/
│   │   ├── index.js
│   │   │
│   ├── lib/
│   │   ├── utils.js
│   │
│   ├── section/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Main.jsx
│   │   │   ├── Footer.jsx
│   │
│   │   ├── store/
│   │   │   ├── StoreContext.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│
├── .index.html
├── .gitignore
├── package.json
├── README.md
└── ...


## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
```bash
    git clone https://github.com/Usanaee/tech-news-app.git
```

2. Navigate to the project directory:

```bash
  cd tech-news-app
```

3. Install the dependencies:

```bash
   npm install
```

### Running the Project

```bash
  npm run dev
```

Open your browser and visit http://localhost:5714 to see the project in action.


## Deployment

You can deploy this project using Vercel by doing following these steps:

1. Install Vercel CLI:
```bash
  npm install -g vercel
```

2. Deploy the project:
```bash
  vercel

```


## Authors

<h1>- Repository Made By Usama Naeem 🖤</h1>


