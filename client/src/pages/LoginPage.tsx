import React from "react";
import { loginRequest } from "../api/auth";

export const LoginPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    const resLogin = await loginRequest(email, password);
    console.log("--resLogin--", resLogin);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="email@mail.com" />
      <input type="text" name="password" placeholder="********" />
      <button>Login</button>
    </form>
  );
};
