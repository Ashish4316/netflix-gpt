import { useState } from "react";
import Header from "./Header";

const Login = () => {
  let[isSignIn,setSignIn] = useState(false);
  function toogleSignIn(){
    setSignIn((prev) => !prev);
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              to top,
              rgba(0,0,0,0.85) 0%,
              rgba(0,0,0,0.4) 40%,
              rgba(0,0,0,0.4) 60%,
              rgba(0,0,0,0.85) 100%
            ),
            url('https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg')
          `,
        }}
      ></div>

      {/* Header */}
      <Header />

      {/* Login Box */}
      {/* Login Box */}
<div className="relative z-10 flex h-full items-center justify-center">
  <div className="w-[450px] rounded-md bg-black/75 p-12 text-white shadow-xl">
    <h1 className="mb-6 text-3xl font-bold">{(isSignIn) ? "Sign In" : "Sign Up"}</h1>

    {/* Email */}
    <div className="mb-4">
      <input
        type="email"
        placeholder="Email or phone number"
        className="w-full rounded bg-[#333] p-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
      />
    </div>

    {!isSignIn && (<div className="mb-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded bg-[#333] p-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
      />
    </div>)}

    {/* Password */}
    <div className="mb-6">
      <input
        type="password"
        placeholder="Password"
        className="w-full rounded bg-[#333] p-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
      />
    </div>

    {/* Sign In Button */}
    <button className="w-full rounded bg-red-600 py-3 font-semibold hover:bg-red-700 transition">
      Sign In
    </button>

    {/* Remember & Help */}
    <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
      <label className="flex items-center gap-2">
        <input type="checkbox" className="accent-red-600" />
        Remember me
      </label>
      <span className="cursor-pointer hover:underline">Need help?</span>
    </div>

    {/* Footer */}
    <div className="mt-8 text-gray-400 text-sm">
      {(isSignIn) ? "New to Netflix?" : "Already a user?"}{" "}
      <span onClick={() => toogleSignIn()} className="cursor-pointer text-white hover:underline">
        {(isSignIn) ? "Sign up now" : "Sign in now"}
      </span>
    </div>
  </div>
</div>

    </div>
  );
};

export default Login;
