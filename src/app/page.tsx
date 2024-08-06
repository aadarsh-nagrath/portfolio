import Header from "./components/header";
import Screen from "./pages/main";

export default function Home() {
  return (
    <>
      <div className="bg-white h-screen w-full ">
        <Header/>
        <Screen/>
      </div>
      
    </>
  );
}
