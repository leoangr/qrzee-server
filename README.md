

# QRZee – QR Code Generator Web App

QRZee is a modern web application that allows users to generate QR codes from text or URLs. Users can sign up and log in to access a personalized dashboard where they can view previously generated QR codes and manage their profile.

---

## Tech Stack

- Nextjs 14
- Tailwind CSS
- TypeScript
- Node js
- Express
- Cloudinary
- MySQL
- Vercel

## Features

- QR Code Generation – Create QR codes easily from text or links.

- User Authentication – Sign up and log in to secure your account.

- Dashboard – View all previously generated QR codes in one place.

- Profile Management – Update your username and profile picture.

- Responsive Design – Works seamlessly on desktops, tablets, and mobile devices.
---

## Getting Started

Since QRZee has separate repositories for the frontend and backend, follow these steps:

## BackEnd
### 1. Clone The Backend
```bash
git clone https://github.com/leoangr/qrzee-server.git
cd qrzee-server
npm install
```

### 2. Setup Backend Environment

- Copy the example environment file to create your own .env file:

```bash
cp .env.example .env
```
- Open the newly created .env file and update the configuration values as needed

## 3. Run the Backend Server

```bash
npm run dev
```
The backend server will run at: [http://localhost:8000](http://localhost:8000)


## FrontEnd

### 4. Clone The Frontend

```bash
git clone https://github.com/leoangr/qrzee.git
cd qrzee
npm install
```

### 5. Setup Frontend Environment

- Copy the example environment file to create your own .env file:

```bash
cp .env.example .env
```
- Open the newly created .env file and update the configuration values as needed

## 3. Run the Frontend Server

```bash
npm run dev
```

The frontend will run at: [http://localhost:3000](http://localhost:3000)

---

## Usage

1. Open the frontend in your browser. You can generate a QR code without logging in.

2. Sign up or log in to your account to save your QR codes.

3. Navigate to the dashboard to generate new QR codes. After logging in, every QR code you create will be automatically added to your account.

4. View previously created QR codes in your dashboard and update your profile details, including your username and profile picture.

## Author
Created by [leoanggoro.my.id](https://leoanggoro.my.id/)
