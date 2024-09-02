"use client"
import { useState } from "react";
import Header from "./components/header";
import SideNav from "./components/side-nav";
import Screen from "./pages/main";

export default function Home() {
  const [activeScreen, SetActiveScreen] = useState(0); 

  return (
    <>
      <div className="bg-white h-screen w-full ">
        <Header/>
        <SideNav  OnSelectScreen = {SetActiveScreen}  />
        <Screen ActiveScreen = {activeScreen} />
      </div>
      
    </>
  );
}
