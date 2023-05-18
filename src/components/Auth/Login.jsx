import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("login", email);
  console.log("login", password);
  return (
    <div className="Login my-48">
      <h1 className="text-3xl text-center font-bold mb-5">Welcome to CourseBundler</h1>

      <form class="max-w-lg mx-auto">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmial.com"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button
          class="bg-yellow-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
          type="submit"
        >
          Sign In
        </button>
        <Link
        to="/forgetpassword"
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </Link>

        <div className="mt-3">
          New User ?{" "}
          <Link to="/register">
            {" "}
            <button className="text-yellow-500">Sign Up</button>
          </Link>
        </div>

      </form>
    </div>
  );
};

export default Login;
