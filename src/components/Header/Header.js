import React from "react";
import { useEffect } from "react";
import { LOGO_URL } from "../../utils/URL/url";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/UserSlice/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });
    // Unsubscribe will be called when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <>
      <header className="w-full h-[75px]  flex justify-between items-center p-1">
        <div className="w-1/12 h-8 ml-6">
          <a href="/">
            <img className="w-full h-full" src={LOGO_URL} alt="Netflix logo" />
          </a>
        </div>
        {user && (
          <div className="w-10/12 flex justify-between mr-2">
            <div className="w-6/12 flex justify-evenly items-center">
              <div className="w-full h-10 flex justify-evenly items-center text-slate-100 font-sans text-sm font-semibold">
                <a href="*">
                  <p>Home</p>
                </a>
                <a href="*">
                  <p>TV Shows</p>
                </a>
                <a href="*">
                  <p>Movies</p>
                </a>
                <a href="*">
                  <p>News & Popular</p>
                </a>
                <a href="*">
                  <p>My List</p>
                </a>
                <a href="*">
                  <p>Browse by Languages</p>
                </a>
              </div>
            </div>
            <div className="w-4/12 flex justify-center items-center">
              <div className="w-11/12 h-12 flex justify-evenly text-white items-center font-sans font-semibold">
                <a href="*">
                  <span className=" text-2xl material-symbols-outlined">
                    search
                  </span>
                </a>
                <a href="*">
                  <span>{user.displayName}</span>
                </a>
                <a href="*" className="flex justify-center items-center">
                  <p className="w-9 h-9">
                    <img
                      className="w-full h-full rounded-md"
                      src={user.photoURL}
                      alt="User Info"
                    />
                  </p>
                  <p>
                    <span className="material-symbols-outlined">
                      arrow_drop_down
                    </span>
                  </p>
                </a>
                <button onClick={handleSignOut}>
                  <span className="material-symbols-outlined">logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
