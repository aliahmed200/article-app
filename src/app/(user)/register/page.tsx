import React from "react";
import RegisterForm from './RegisterForm'
const Register = () => {
  return <section className="h-[100vh]  flex items-center justify-center">
  <div className="m-auto bg-white rounded-lg p-5 w-full">
    <h1 className="font-bold text-4xl mb-3">Create new account</h1>
    <RegisterForm />
  </div>
</section>
};

export default Register;
