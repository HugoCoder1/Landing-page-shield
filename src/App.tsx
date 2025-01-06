import Header from "./components/design/Header";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="max-w-[1186px] mx-auto px-4 md:px-6">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="mt-[120px]">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-y-8 md:gap-x-[40px] items-center">
          {/* Text Content */}
          <div className="flex flex-col py-14 gap-y-[30px] text-center md:text-left">
            <h1 className="font-bold text-[32px] md:text-[48px] text-[#03045E]">
              Fully Managed Cloud & <br className="hidden md:block" />
              <span>Web Hosting</span>
            </h1>
            <p className="text-[14px] md:text-[16px] text-[#03045E] text-opacity-[50%]">
              Dedicated resources, full root access, & easy scaling. It's the
              virtual private server you've been craving.
            </p>
            <Button className="w-[188px] h-[50px] md:h-[61px] px-[20px] md:px-[38px] py-[10px] md:py-[17px] bg-[#0098FF] rounded-[5px] text-white hover:bg-[#007ACC] transition-colors mx-auto md:mx-0">
              View Pricing
            </Button>
          </div>

          {/* Image */}
          <img
            src="casual-life-3d-excited-young-woman-receiving-like-notifications-on-her-laptop 1.png"
            className="w-full max-w-[400px] md:max-w-[624px] h-auto"
            alt="Excited young woman receiving notifications on her laptop"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
