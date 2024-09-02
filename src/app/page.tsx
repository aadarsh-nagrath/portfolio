import Header from "./components/header";
import SideNav from "./components/side-nav";
import Screen from "./pages/main";

export default function Home() {
  return (
    <>
      <div className="bg-white h-screen w-full ">
        <Header/>
        <SideNav/>
        <Screen/>
      </div>
      
    </>
  );
}
