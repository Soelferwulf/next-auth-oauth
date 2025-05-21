"use client";

import React from "react";
import { SocialLogin } from "./SocialLogin";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);

            const name = formData.get("name");
            const email = formData.get("email");
            const password = formData.get("password");

            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "conten-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            response.status === 201 && router.push("/");
        } catch (e) {
            console.error(e.message);
        }
    }
    return (
        <>
            <form className="my-5 w-99" onSubmit={handleSubmit}>
                <div className="w-full my-1 flex justify-between items-center">
                    <label className="text-lg" htmlFor="email">
                        Name
                    </label>
                    <input
                        className="bg-slate-200 text-black w-65 px-4 py-2 rounded-lg border-1 text-md"
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div className="w-full my-1 flex justify-between items-center">
                    <label className="text-lg" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="bg-slate-200 text-black w-65 px-4 py-2 rounded-lg border-1 text-md"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div className="w-full flex justify-between items-center">
                    <label className="text-lg" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="bg-slate-200 text-black w-65 px-4 py-2 rounded-lg border-1 text-md"
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>
                <button className="bg-black text-slate-300 py-2 rounded-lg border-1 text-lg my-1 w-full ">
                    Register
                </button>
            </form>

            <SocialLogin />
        </>
    );
};

export default RegistrationForm;
