import { useRef, useState } from "react";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { checkValidation } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function toggleSignIn() {
    setIsSignIn((prev) => !prev);
    setErrorMessage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const msg = checkValidation(
      email.current.value,
      password.current.value
    );

    setErrorMessage(msg);
    if (msg) return;

    setLoading(true);

    try {
      let userCredential;
      if (!isSignIn) {
        // SIGN UP
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        await updateProfile(userCredential.user, {
          displayName: name.current.value,
        });
      } else {
        // SIGN IN
        userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
      }

      // Dispatch user to Redux store
      const user = userCredential.user;
      dispatch(
        addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || name.current?.value || "",
          photoURL: user.photoURL || null,
        })
      );
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
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

      <Header />

      {/* Login Box */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-[450px] rounded-md bg-black/75 p-12 text-white shadow-xl">
          <h1 className="mb-6 text-3xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <input
                ref={email}
                type="email"
                placeholder="Email or phone number"
                className="w-full rounded bg-[#333] p-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>

            {/* Full Name (Sign Up only) */}
            {!isSignIn && (
              <div className="mb-4">
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded bg-[#333] p-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
            )}

            {/* Password */}
            <div className="mb-6">
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="w-full rounded bg-[#333] p-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>

            {errorMessage && (
              <div className="mb-4 text-sm text-red-400">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded bg-red-600 py-3 font-semibold hover:bg-red-700 transition disabled:opacity-60"
              disabled={loading}
            >
              {loading
                ? isSignIn
                  ? "Signing in..."
                  : "Signing up..."
                : isSignIn
                ? "Sign In"
                : "Sign Up"}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-gray-400 text-sm">
            {isSignIn ? "New to Netflix?" : "Already a user?"}{" "}
            <span
              onClick={toggleSignIn}
              className="cursor-pointer text-white hover:underline"
            >
              {isSignIn ? "Sign up now" : "Sign in now"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
