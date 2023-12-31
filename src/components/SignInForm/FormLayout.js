import SignIn from "../Form/SignIn";
import Header from "../Header/Header";
// import { useTranslation } from "react-i18next";
const FormLayout = () => {
  // const{t} = useTranslation();
  return (
    <>
      <div className="w-[100%] h-[150vh] relative">
        <img
          className="w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix"
        />
        <div className="w-full h-full bg-black absolute top-0 opacity-60"></div>
        <div className="absolute top-0 w-full h-full">
          <Header />
          <SignIn />
        </div>
        <div className="w-full h-38 bg-black opacity-70 absolute bottom-0">
          <div className="w-8/12 h-full mx-auto p-2 flex justify-between items-center text-white">
            <div className=" w-4/12 h-full p-2 flex flex-col justify-around ">
              <h1 className="text-lg">Questions?Call 000-800-919-1694</h1>
              <p>FAQ</p>
              <p>Privacy</p>
              <div className="w-6/12 h-10 bg-gray-800 rounded-md border">
                <select
                  className="w-full h-full text-center bg-transparent text-white text-md"
                  defaultValue={"en"}
                >
                  <option value="en" className="bg-white text-black">
                    English
                  </option>
                  <option value="hin" className="bg-white text-black">
                    हिंदी
                  </option>
                  <option value="fr" className="bg-white text-black">
                    French
                  </option>
                </select>
              </div>
            </div>
            <div className="w-3/12 p-2">
              <p>Help Center</p>
              <p>Corporate Information</p>
            </div>
            <div className="w-2/12 p-2">
              <p>Terms of Use</p>
            </div>
            <div className="w-2/12 p-2">
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
