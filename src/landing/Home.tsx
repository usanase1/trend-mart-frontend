import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function HomePage(){

  return(
    <div>
      <Navbar/>
      <div className="h-24 bg-white text-black">
        Home contents will be here
      </div>
      <Footer/>
    </div>
  )
}