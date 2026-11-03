import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URL as string);
const db = client.db('auth-db');

export const auth = betterAuth({
    emailAndPassword: { 
        enabled: true, 
        // autoSignIn: false,
    },
    socialProviders: {
        google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },

        github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },
    },

    account: {
		accountLinking: {
            enabled: true,
			trustedProviders: ["github", "google"], // Add your provider ID here
		},
	},
    database: mongodbAdapter(db, {
        client,
    }),
});