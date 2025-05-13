# Google Authentication with Next.js & Firebase

A simple Next.js application demonstrating Google authentication using Firebase Authentication.

## Features

- Google OAuth login
- User profile display

## Prerequisites

- Node.js (v16 or later)
- Firebase account
- Google Cloud project with OAuth credentials

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Firebase Configuration

1. Create a new Firebase project at [(https://console.firebase.google.com/)
2. Enable Google authentication:
   - Go to Authentication → Sign-in method → Google
   - Enable and save
3. Create a `firebaseConfig.js` file in your project with your credentials:
4. Change the firebase credentials with account data

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

## How to Use

1. Open your browser to `http://localhost:3000 or port shows in console`
2. Click "Sign in with Google" button
3. Select your Google account
4. View your profile information after successful login

## Project Structure

```

└── src/
    ├── firebaseConfig.tsx        # Firebase configuration
    ├── page.tsx                  # Main page with login
    └── README.md
```

## Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Creates production build
- `npm start` - Runs production server
- `npm run lint` - Runs ESLint
