import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    lng: "np",
    returnObjects: true,
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          navbar: {
            name: "Bharatpur Nagarpalika",
            contact: "Contact",
            key1: "Home",
            key2: {
              key: "About us",
              subKey: {
                key1: "Introduction",
                key2: "Ward Introduction",
                key3: "Team",
              },
            },
            key3: "Our Work",
            key4: {
              key: "Source",
              subKey: {
                key1: "Publication",
                key2: "Report",
              },
            },
            key5: {
              key: "Updates",
              subKey: {
                key1: "Notice",
                key2: "News",
                key3: "Photo",
                key4: "Video",
              },
            },
            key6: "Contact",
            key7: "Profile",
          },
        },
      },
      np: {
        translation: {
          navbar: {
            name: "भरतपुर नगरपालिका",
            contact: "सम्पर्क",
            key1: "गृहपृष्ठ",
            key2: {
              key: "हाम्रो बारेमा",
              subKey: {
                key1: "परिचय",
                key2: "वडाको विवरण",
                key3: "टाेली",
              },
            },
            key3: " हाम्रो काम",
            key4: {
              key: "स्रोत",
              subKey: {
                key1: "प्रकाशन",
                key2: "प्रतिवेदन",
              },
            },

            key5: {
              key: "अपडेट",
              subKey: {
                key1: "सूचना",
                key2: "समाचार",
                key3: "फोटो",
                key4: "भिडियो",
              },
            },
            key6: "सम्पर्क",
            key7: "प्रोफाइल",
          },
        },
      },
    },
  });
