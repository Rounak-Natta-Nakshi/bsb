"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100); // better UX
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    console.log("CLICKED");

    // check if main is scroll container
    const main = document.querySelector("main");

    if (main && main.scrollHeight > main.clientHeight) {
      main.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // fallback
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  if (!show) return null;

  return (
    <button onClick={scrollToTop} className="backToTop">
      ↑
    </button>
  );
}