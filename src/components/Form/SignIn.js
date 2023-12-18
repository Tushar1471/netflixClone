import React, { useState, useRef } from "react";
import { ValidationFormSignIn } from "../../utils/Validations/ValidationForm.js";
import { ValidationFormSignUp } from "../../utils/Validations/ValidationForm.js";
import { auth } from "../../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/UserSlice/userSlice.js";
import { USER_URL } from "../../utils/URL/url.js";
import { useTranslation } from "react-i18next";
const SignIn = () => {
  const { t } = useTranslation();
  const [isSign, setSignIn] = useState(true);
  const [ErrorMsg, setErrorMsg] = useState(null);
  const [NewError, setNewError] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSign = () => {
    setSignIn(!isSign);
  };

  const handleValidation = () => {
    if (isSign) {
      const formValidatorSignIn = ValidationFormSignIn(
        email.current.value,
        password.current.value
      );
      setErrorMsg(formValidatorSignIn);
      if (ErrorMsg) return;
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          window.location.reload();
        });
    } else {
      const formValidatorSignUp = ValidationFormSignUp(
        name.current.value,
        email.current.value,
        password.current.value
      );
      setNewError(formValidatorSignUp);
      if (NewError) return;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_URL,
          })
            .then(() => {
              // Profile update
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              console.log(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <div className=" w-4/12 h-[60%]  mx-auto mt-10 bg-black px-16 py-16 opacity-70">
        <div className="p-2 ">
          <h1 className="text-white font-sans text-3xl font-semibold mb-1">
            {isSign ? t("signInHeader") : t("signUpHeader")}
          </h1>
          <form
            className="h-72 flex flex-col justify-evenly items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              {!isSign && (
                <input
                  ref={name}
                  className="w-full h-12 rounded-sm indent-3 border border-none outline-none mb-6 text-white bg-slate-600"
                  type="text"
                  name="Name"
                  placeholder={t("name")}
                  spellCheck="false"
                  autoComplete="off"
                />
              )}
              <input
                ref={email}
                className="w-full h-12 rounded-sm indent-3 border border-none outline-none mb-6 text-white bg-slate-600"
                type="email"
                name="Email"
                placeholder={t("ePlaceholder")}
                spellCheck="false"
                autoComplete="off"
              />
              <input
                ref={password}
                className="w-full h-12 rounded-sm indent-3 border-none outline-none text-white bg-slate-600"
                type="password"
                name="Password"
                placeholder={t("password")}
                autoComplete="off"
              />
            </div>
            <p className="text-red-600 font-bold">
              {isSign ? ErrorMsg : NewError}
            </p>
            <button
              onClick={handleValidation}
              className="w-full p-4 bg-gradient-to-r from-red-900 to-orange-600 filter brightness-200 text-white rounded-md"
            >
              {isSign ? t("inBtn") : t("upBtn")}
            </button>
          </form>
          <div className="w-full h-10 -mt-4  flex justify-between items-center text-slate-300">
            <div className="flex justify-center items-center">
              <input
                type="checkbox"
                name="Remember Me"
                placeholder="Remember me"
                id="remMe"
              />
              <label htmlFor="remMe" className="text-sm ml-1">
                {t("remember")}
              </label>
            </div>
            <div>
              <p className="text-sm">
                <a href="/">{t("help")}</a>
              </p>
            </div>
          </div>
          <p className="text-slate-400">
            {isSign ? t("newUser") : t("existed")}&nbsp;&nbsp;
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleSign}
            >
              {isSign ? t("signUp") : t("signInNow")}
            </span>
          </p>
          <p className="text-slate-400 text-xs mt-4 text-center">
            {t("footerContent")}
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
