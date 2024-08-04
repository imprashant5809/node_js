import React, { useState } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "", 
    email: "",
    password: "",
    cpassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault;
  };
  console.log(form);
  return (
    <div className="grid place-items-center h-[100vh]">
      <div className="w-[80%] h-[90%] shadow-black shadow-lg grid place-items-center">
        <h1 className="text-3l font-bold text-center">Register</h1>
        <form
          onSubmit={handleSubmit}
          className="w-[80%] flex flex-col justify-center items-center p-8 gap-4"
        >
          <input
            className="w-full p-2 border-black border-b-2"
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
          />
          <input
            className="w-full p-2 border-black border-b-2"
            type="email"
            name="email"
            id=""
            placeholder="Enter email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
          />
          <input
            className="w-full p-2 border-black border-b-2"
            type="password"
            name="password"
            id=""
            placeholder="Enter Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
          />
          <input
            className="w-full p-2 border-black border-b-2"
            type="password"
            name="cpassword"
            id=""
            placeholder="Re Enter password"
            onChange={(e) => setForm({ ...form, cpassword: e.target.value })}
            value={form.cpassword}
          />
          <button
            type="submit"
            className="p-2 px-4 bg-slate-500 rounded-md text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
