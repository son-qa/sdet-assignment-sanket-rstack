import dotenv from "dotenv";

const env = process.env.ENV || "qa";
dotenv.config({path: `.env.${env}`});

export const ENV_DATA = {
    baseUrl: process.env.BASE_URL || "",
    userEmail: process.env.USEREMAIL || "",
    password: process.env.PASSWORD || ""
};
