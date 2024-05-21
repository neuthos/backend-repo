import {config} from "dotenv";
import assert from "assert";

config();

const {
  PORT,
  ACCESS_TOKEN_SECRET,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env;

assert(ACCESS_TOKEN_SECRET, "ACCESS_TOKEN_SECRET is required");

export const port = PORT;
export const accessTokenSecret = ACCESS_TOKEN_SECRET;
export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};
