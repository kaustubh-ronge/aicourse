import { config } from 'dotenv';
import path from 'path';

// Explicitly load the .env.local file
config({ path: path.resolve(process.cwd(), '.env.local') });

/** @type {import("drizzle-kit").Config} */
export default {
    schema: "./configs/schema.jsx", // Correct schema path
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING, // Ensure it’s being read from .env.local
    },
};

// Debugging step to check if the variable is loaded
if (!process.env.NEXT_PUBLIC_DB_CONNECTION_STRING) {
    console.error("Error: NEXT_PUBLIC_DB_CONNECTION_STRING is not set!");
    process.exit(1); // Exit if variable is not found
}
