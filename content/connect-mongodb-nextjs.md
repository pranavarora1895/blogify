---
title: Connect MongoDB with NextJS
slug: connect-mongodb-nextjs
date: 2024-10-17
author: Pranav Arora
description: These steps should be followed while connecting MongoDB with NextJS in our team.
image: https://media.istockphoto.com/id/2123155246/photo/database-management-concept-businessman-uses-tablet-on-global-networking-data-analysis.jpg?s=1024x1024&w=is&k=20&c=0G_IR1guPJLcyh61j43eteXhYfLqhPfwOKCahld8t2U=
---

## Step 1: Install MongoDB Dependencies

First, you need to install the official MongoDB package:

```bash
npm install mongodb
```

This package allows you to connect to a MongoDB database and perform CRUD operations.

## Step 2: Create a MongoDB Connection File

Since Next.js uses both server-side and client-side code, it's good practice to manage your MongoDB connection in a separate file. This ensures the connection is reused and only set up on the server side.

Create a new file at `lib/mongodb.js` (or any other preferred folder structure).

```js showLineNumbers {14-20,24-25}
// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to ensure the connection
  // is only created once across hot reloads in the Next.js dev server.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's fine to create a new connection every time
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
```

## Step 3: Set Up Environment Variables

Next.js stores environment variables in the `.env.local` file. Create a `.env.local` file in the root of your project and add your MongoDB connection string.

```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mydatabase
```

Make sure to replace `username`, `password`, and `mydatabase` with your actual MongoDB credentials.

## Step 4: Fetch Data from MongoDB in a Next.js API Route

Next.js API routes are perfect for server-side database connections. Create a new API route that uses the MongoDB connection.

For example, create a file `pages/api/collection.js`:

```js showLineNumbers {9}
// pages/api/collection.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("mydatabase");

    const collection = await db.collection("mycollection").find({}).toArray();

    res.status(200).json(collection);
  } catch (error) {
    res.status(500).json({ message: "Error connecting to the database", error });
  }
}
```

This route connects to your MongoDB database and fetches all documents from the collection named `mycollection`.

## Step 5: Fetch Data from MongoDB in a Next.js Page

You can also fetch MongoDB data using `getServerSideProps` to render the data on the server side for a specific page.

Example of a page (`pages/index.js`):

```js showLineNumbers {10-14, 21-25}
// pages/index.js
import clientPromise from '../lib/mongodb';

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("mydatabase");

  const collection = await db.collection("mycollection").find({}).toArray();

  return {
    props: {
      collection: JSON.parse(JSON.stringify(collection)),
    },
  };
}

export default function Home({ collection }) {
  return (
    <div>
      <h1>MongoDB Data</h1>
      <ul>
        {collection.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Step 6: Testing

You can run your Next.js app locally with:

```bash
npm run dev
```

Access the API route at `http://localhost:3000/api/collection` to see the data fetched from MongoDB, or visit the homepage to see server-side-rendered data.

## Additional Notes

- Make sure your MongoDB Atlas cluster allows connections from your IP or use a VPN if needed.
- For production, set up environment variables using platforms like Vercel, Heroku, or others.

By following these steps, you’ll have your Next.js application successfully connected to MongoDB!