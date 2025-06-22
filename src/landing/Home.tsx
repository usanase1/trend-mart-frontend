import React from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export default function HomePage(){

  return(
    <div>
      <NavBar/>
      <div className="h-24 bg-white text-black">
        Home contents will be here
      </div>
      <Footer/>
    </div>
  )
}