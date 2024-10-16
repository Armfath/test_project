# Test Project Invoice Plateform

Simple app for updating forgot password

## Prerequisites

Before starting, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download)
- [npm (Node Package Manager)](https://www.npmjs.com/get-npm)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Free the ports `3000` and `5432` on your machine

## Installation

1. Clone the repository

```bash
git clone git@github.com:Armfath/test_project.git
```

2. Install dependencies

   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file at the root of the project based on the `.env.example` file. Make sure to define the necessary environment variables, such as:

```
DATABASE_URL=

WEB_URL=

EMAIL_SERVICE=
EMAIL_USER=
EMAIL_PASS=
```

## Database

We are using a postgres database in local with docker:

1. Start the database

```bash
sudo docker-compose up -d
```

Check the database is running

```bash
sudo docker ps -a
```

3. Run the migration

```bash
npx prisma migrate dev --name dev
```

4. Seed the database

```bash
npx prisma db seed
```

## Start the app

to start the app, run the following command:

```bash
npm run dev
```

## Test the app

Here is the credentials for the test user:

1. User 1

```
email: user1@yopmail.com
password: user1
hashedPassword: $2a$10$jCOw6kUjwIA8qM/kQy3opu0hjY8hQBhumxyV6tTXvQWYtQkt0Lsv6
```

2. User 2

```
email: user2@yopmail.com
password: user2
hashedPassword: $2a$10$AWt.zzlCyrAlHItTdvFkieiWj85MFEuThgDuOT/8A3bPFsOTzVgb.

```

Open [http://localhost:3000/forgot-password](http://localhost:3000/forgot-password) with your browser to see reset password page.
