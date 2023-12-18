import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    signInBtn: "Sign In",
                    description: "Unlimited movies, TV shows and more",
                    priceStatics: "Starts at ₹149.Cancel anytime.",
                    memberShipStatics: "Ready to watch?Enter your email to create or restart your membership.",
                    placeHolder: "Email address",
                    btnName: "Get Started",
                    signInHeader: "Sign In",
                    signUpHeader: "Sign Up",
                    ePlaceholder: "Email or Phone number",
                    password: "Password",
                    inBtn: "Sign In",
                    remember: "Remember me",
                    help: "Need Help?",
                    newUser: "New to Netflix!",
                    signUp: "Sign Up Now",
                    footerContent: "Sign in is protected by Google reCAPTCHA to ensure you're not a bot",
                    name: "Enter your name",
                    upBtn: "Sign Up",
                    existed: "Already existed",
                    signInNow: "Sign In Now",
                }
            },
            hi: {
                translation: {
                    signInBtn: "दाखिल करना",
                    description: "असीमित फिल्में, टीवी शो और बहुत कुछ",
                    priceStatics: "₹149 से प्रारंभ। किसी भी समय रद्द करें।",
                    memberShipStatics: "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।",
                    placeHolder: "मेल पता",
                    btnName: "शुरू हो जाओ",
                    signInHeader: "दाखिल करना",
                    signUpHeader: "साइन अप करें",
                    ePlaceholder: "ईमेल या फ़ोन नंबर",
                    password: "पासवर्ड",
                    inBtn: "दाखिल करना",
                    remember: "मुझे याद करो",
                    help: "मदद की ज़रूरत है?",
                    newUser: "नेटफ्लिक्स पर नया!",
                    signUp: "अभी साइनअप करें",
                    footerContent: "यह सुनिश्चित करने के लिए कि आप बॉट नहीं हैं, साइन इन Google reCAPTCHA द्वारा सुरक्षित है",
                    name: "अपना नाम दर्ज करें",
                    upBtn: "साइन अप करें",
                    existed: "पहले से मौजूद हैं?",
                    signInNow: "अभी साइन इन करें",

                }
            },
            fr: {
                translation: {
                    signInBtn: "Se connecter",
                    description: "Films, émissions de télévision et plus illimités",
                    priceStatics: "À partir de 149 ₹. Annulez à tout moment.",
                    memberShipStatics: "Prêt à regarder ? Entrez votre e-mail pour créer ou redémarrer votre abonnement.",
                    placeHolder: "Adresse e-mail",
                    btnName: "Commencer",
                    signInHeader: "Connectez-vous",
                    signUpHeader: "Connectez-vous Up",
                    ePlaceholder: "E-mail ou numéro de téléphone",
                    password: "Mot de passe",
                    inBtn: "Connectez-vous",
                    remember: "Se souvenir de moi",
                    help: "Besoin d'aide ?",
                    newUser: "Nouveau sur Netflix ! ",
                    signUp: "Inscrivez-vous maintenant",
                    footerContent: "La connexion est protégée par Google reCAPTCHA pour vous assurer que vous n'êtes pas un robot",
                    name: "Entrez votre nom",
                    upBtn: "Connectez-vous Up",
                    existed: "Existait déjà",
                    signInNow: "Connectez vous maintenant",
                }
            }
        }
    })