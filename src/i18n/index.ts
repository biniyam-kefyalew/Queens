import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About",
      contact: "Get in Touch",
      products: "Products",
      branches: "Branches",
      howToBuy: "How to Buy",
      payments: "Payments",

      // Common
      loading: "Loading...",
      search: "Search",
      filter: "Filter",
      getDirections: "Get Directions",
      callStore: "Call Store",
      viewDetails: "View Details",
      close: "Close",
      submit: "Submit",
      comment: "Comment",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",

      // Product page
      filterByBranch: "Filter by Branch",
      allBranches: "All Branches",
      availableAt: "Available at",
      requestProduct: "Request this product at a specific branch",
      whichBranch: "Which branch would you like this product at?",
      additionalComments: "Additional comments",
      requestSubmitted: "Request submitted successfully!",

      // Branch page
      ourBranches: "Our Branches",
      branchDetails: "Branch Details",
      paymentMethods: "Payment Methods",
      openingHours: "Opening Hours",

      // Contact page
      contactUs: "Contact Us",
      getInTouch: "Get in Touch",
      findUs: "Find Us",

      // About page
      aboutUs: "About Us",
      ourStory: "Our Story",
      ourMission: "Our Mission",
      ourValues: "Our Values",

      // How to buy page
      howToBuyTitle: "How to Buy",
      step: "Step",

      // Footer
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      subscribeNewsletter: "Subscribe to our newsletter for updates",
      subscribe: "Subscribe",

      // Languages
      language: "Language",
      english: "English",
      amharic: "አማርኛ",
    },
  },
  am: {
    translation: {
      // Navigation
      home: "ዋና ገጽ",
      about: "ስለ እኛ",
      contact: "ያግኙን",
      products: "ምርቶች",
      branches: "ቅርንጫፎች",
      howToBuy: "እንዴት መግዛት",
      payments: "ክፍያዎች",

      // Common
      loading: "እየጠብቅ...",
      search: "ፈልግ",
      filter: "አጣራ",
      getDirections: "መመሪያ ያግኙ",
      callStore: "ድርጅት ደውል",
      viewDetails: "ዝርዝር ይመልከቱ",
      close: "ዝጋ",
      submit: "ላክ",
      comment: "አስተያየት",
      name: "ስም",
      email: "ኢሜል",
      phone: "ስልክ",
      message: "መልዕክት",

      // Product page
      filterByBranch: "በቅርንጫፍ አጣራ",
      allBranches: "ሁሉም ቅርንጫፎች",
      availableAt: "የሚገኝበት",
      requestProduct: "ይህንን ምርት በተለየ ቅርንጫፍ ይጠይቁ",
      whichBranch: "ይህንን ምርት በየትኛው ቅርንጫፍ ይፈልጋሉ?",
      additionalComments: "ተጨማሪ አስተያየቶች",
      requestSubmitted: "ጥያቄዎ በተሳካ ሁኔታ ተልኳል!",

      // Branch page
      ourBranches: "ቅርንጫፎቻችን",
      branchDetails: "የቅርንጫፍ ዝርዝር",
      paymentMethods: "የክፍያ ዘዴዎች",
      openingHours: "የስራ ጊዜ",

      // Contact page
      contactUs: "ያግኙን",
      getInTouch: "ያነጋግሩን",
      findUs: "ይፈልጉን",

      // About page
      aboutUs: "ስለ እኛ",
      ourStory: "ታሪካችን",
      ourMission: "ተልዕኮአችን",
      ourValues: "እሴቶቻችን",

      // How to buy page
      howToBuyTitle: "እንዴት መግዛት",
      step: "ደረጃ",

      // Footer
      quickLinks: "ፈጣን አገናኞች",
      followUs: "ይከተሉን",
      newsletter: "ዜና ወረቀት",
      subscribeNewsletter: "ለዝማኔዎች በዜና ወረቀታችን ይመዝገቡ",
      subscribe: "ተመዝገብ",

      // Languages
      language: "ቋንቋ",
      english: "English",
      amharic: "አማርኛ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
