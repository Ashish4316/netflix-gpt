import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser,addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { logo, profile } from "../utils/constant";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  async function logout() {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      navigate("/error");
    }
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        const {uid,email, displayName} = user;
        dispatch(addUser({ uid : uid,email : email,displayName : displayName}));
        navigate("/browse");
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    })
    return () => {
    if (typeof unsubscribe === "function") unsubscribe();
  };
  },[]);
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black/90 to-black/30">
      <div className="flex items-center justify-between px-8 py-3">
        {/* Logo */}
        <img
          className="w-36 md:w-44 cursor-pointer"
          src= {logo}
          alt="Netflix"
        />

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {user && (
            <>
              {/* Profile Image */}
              <img
                className="w-9 h-9 rounded cursor-pointer hover:ring-2 hover:ring-red-600 transition"
                src={user.photoURL || profile }
                alt="Profile"
              />

              <div>
                <button
                  onClick={logout}
                  className="font-semibold text-sm text-white hover:text-red-500 transition"
                >
                  Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


