import React from "react";
import RegisterForm from "./RegisterForm";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
const Register = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwtToken")?.value;
  if (token) redirect("/");
  return (
    <section className="h-[100vh]  flex items-center justify-center">
      <div className="m-auto bg-white rounded-lg p-5 w-full">
        <h1 className="font-bold text-4xl mb-3">Create new account</h1>
        <RegisterForm />
      </div>
    </section>
  );
};

export default Register;
