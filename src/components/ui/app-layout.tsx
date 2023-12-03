"use client";

import React, { useEffect } from "react";
import Footer from "@/components/custom/footer";
import LeftBar from "@/components/custom/leftBar";
import { Providers } from "@/components/custom/Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setIsMobile } from "@/redux/features/userSlice";

// import VConsole from "vconsole";

// if (typeof window !== "undefined") {
//   new VConsole();
// }

export function AppLayout({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const setRem = () => {
      const actualWidth =
        document.documentElement.clientWidth || document.body.clientWidth; // 实际宽度
      if (actualWidth > 431) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", setRem);
    return () => {
      window.removeEventListener("resize", setRem);
    };
  }, []);

  return (
    <Providers>
      {/* <div className="hidden md:block">
        <LeftBar />
      </div> */}
      {children}
      {/* <div className="md:hidden">
        <Footer />
      </div> */}
      <ToastContainer />
    </Providers>
  );
}
