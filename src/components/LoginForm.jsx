"use client";

import { useRouter } from "next/navigation";

import { SocialLogin } from "./SocialLogin";

import { doCredentialLogin } from "../app/actions";

import { useState } from "react";

const LoginForm = () => {
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleFormSubmit(event) {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);

            const response = await doCredentialLogin(formData);

            if (!!response.error) {
                setError(response.error.message);
            } else {
                router.push("/home");
            }
        } catch (e) {
            console.error(e);
            setError("Check your credentials");
        }
    }

    return (
        <>
            <div className="text-xl text-red-600">{error}</div>
            <form className="my-5 w-99" onSubmit={handleFormSubmit}>
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
                    Login
                </button>
            </form>

            <SocialLogin />
        </>
    );
};

export default LoginForm;
