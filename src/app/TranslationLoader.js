"use client";

import React, { useEffect } from "react";
import i18n from "../i18n"; // Your initialized i18n instance

export default function TranslationLoader({ children }) {
  useEffect(() => {
    fetch("/locales/en/aboutMe.json")
      .then((res) => res.json())
      .then((data) => {
        i18n.addResourceBundle("en", "translation", data, true, false);
        i18n.changeLanguage("en");
      })
      .catch((error) => {
        console.error("Error fetching translation:", error);
      });
  }, []);

  return <>{children}</>;
}
