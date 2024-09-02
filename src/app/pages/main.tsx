import { useState } from "react";
import StartLayout from "../components/startLayout";
import AnCScreen from "./anc";
import BlogScreen from "./blogs";
import ContactScreen from "./contact";
import ProjectScreen from "./projects";
import ResExpScreen from "./ResumeExp";

type ActiveSType = {
    ActiveScreen : number;
}

export const Screen = ({ActiveScreen}: ActiveSType) => {

    const renderScreen = () => {
        switch (ActiveScreen) {
          case 0:
            return <StartLayout />;
          case 1:
            return <ResExpScreen />;
          case 2:
            return <ProjectScreen />;
          case 3:
            return <AnCScreen />;
          case 4:
            return <BlogScreen />;
          case 5:
            return <ContactScreen />;
          default:
            return <StartLayout />;
        }
    };


    return (
    <div className="bg-[#F5F4FB] h-[92vh] w-[94vw] rounded-3xl border border-gray-950 absolute right-5 overflow-auto">
      {renderScreen()}
    </div>
    )
}

export default Screen;
