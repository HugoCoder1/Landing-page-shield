// import "./App.css";
import Header from "./components/design/Header";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="max-w-[1186px] mx-auto">
      <Header />
      <div className="w-[1249px] h-[456px] mt-[120px]">
        <div className="flex flex-col md:flex-row justify-between gap-x-[40px] ">
          <div className="flex flex-col  py-14 gap-y-[45px] ">
            <h1 className="font-bold text-[48px]  text-[#03045E] h-auto">
              Fully Managed Cloud & <br />
              <span>Web Hosting</span>
            </h1>
            <p className="text-[16px] text-[#03045E] text-opacity-[50%]">
              Delicated ressources , full root access, & easy scalling . It's
              the virtual private server you've been cravin
            </p>
            <Button className="w-[188px] h-[61px] px-[38px] py-[17px] bg-[#0098FF] opacity-100 rounded-[5px] hover:bg-[#0098FF] transition-colors">
              View Pricing
            </Button>
          </div>
          <img
            src="casual-life-3d-excited-young-woman-receiving-like-notifications-on-her-laptop 1.png"
            className="w-[624px] h-[456px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
