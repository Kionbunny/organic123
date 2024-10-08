//import MobileNav from "@/components/shared/MobileNav";
// import { Toaster } from "@/components/ui/toaster";
import React from "react";
import Sidebar from "@/components/shared/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
     <Sidebar /> 
      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
      {/* <Toaster /> */}
    </main>
  );
};

export default Layout;
