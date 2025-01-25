# Firebase Chat App

A real-time chat application built with React and Firebase.

## Features
- User authentication with Firebase Authentication (Google Sign-In, Email/Password, etc.)
- Real-time messaging using Firebase Firestore
- Responsive UI design
- User presence detection (online/offline status)
- Message timestamps

## Technologies Used
- React
- Firebase (Authentication, Firestore, Hosting)
- Tailwind CSS (optional, for styling)

## Prerequisites
- Node.js installed on your machine
- A Firebase project set up in the Firebase Console

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/firebase-chat-app.git
   cd firebase-chat-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Enable Firebase Authentication (choose your preferred providers).
   - Enable Firestore Database.
   - Add your Firebase configuration to a `.env` file in the root of the project:
     ```env
     REACT_APP_API_KEY=your-api-key
     REACT_APP_AUTH_DOMAIN=your-auth-domain
     REACT_APP_PROJECT_ID=your-project-id
     REACT_APP_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_APP_ID=your-app-id
     ```

4. **Run the Application**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).
