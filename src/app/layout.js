import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { dbConnect } from "../lib/mongo";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "next-auth-oauth authentication",
    description: "Jiri tries to do next-auth-oath with tapaScript",
};

export default async function RootLayout({ children }) {
    const conn = await dbConnect();
    // console.log(conn);
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
            </body>
        </html>
    );
}
