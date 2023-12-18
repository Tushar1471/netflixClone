import { HOMEPAGE_URL, LOGO_URL } from "../../utils/URL/url";
import { useTranslation } from "react-i18next";
const Homepage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="w-[100%] h-[100vh] relative font-sans">
        <img className="w-full h-full" src={HOMEPAGE_URL} alt="Netflix" />
        <div className="w-full h-full bg-black absolute top-0 opacity-90 bg-gradient-to-t from-slate-700 to-slate-900"></div>
        <div className="w-full h-full absolute top-0 opacity-60">
          <div className="w-full h-24  flex justify-between items-center">
            <div className="w-2/12 h-16 ml-8">
              <img className="w-full h-full" src={LOGO_URL} alt="Random" />
            </div>
            <div className="w-3/12 h-16 p-1 mr-8 flex justify-evenly items-center">
              <div className="w-6/12 h-10 bg-gray-800 rounded-md border">
                <select
                  className="w-full h-full text-center bg-transparent text-white text-md"
                  defaultValue={"en"}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                  <option value="en" className="bg-white text-black">
                    English
                  </option>
                  <option value="hi" className="bg-white text-black">
                    हिंदी
                  </option>
                  <option value="fr" className="bg-white text-black">
                    French
                  </option>
                </select>
              </div>
              <div className="w-4/12 h-10">
                <button className="w-full h-full bg-red-800 hover:bg-red-900 rounded-md text-white">
                  <a href="/login">{t("signInBtn")}</a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-6/12 p-4 mt-36 ml-32 text-white">
            <p className="text-5xl  font-bold leading-[75px]">
              {t("description")}
            </p>
            <p className="text-3xl mt-5 mb-9">{t("priceStatics")}</p>
            <p className="text-md text-slate-400">{t("memberShipStatics")}</p>
            <div className="w-full h-16 flex justify-between mt-5">
              <div className="w-7/12 h-full bg-gray-900 rounded-md text-white">
                <input
                  type="email"
                  className="rounded-md indent-4 w-full h-full bg-transparent"
                  placeholder={t("placeHolder")}
                />
              </div>
              <div className="w-4/12 h-full rounded-lg bg-red-600 mr-10">
                <button className="w-full  h-full text-xl font-bold flex justify-center items-center">
                  {t("btnName")}
                  <span className="material-symbols-outlined ml-2 text-xl">
                    arrow_forward_ios
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
