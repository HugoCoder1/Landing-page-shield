import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="flex justify-between items-center h-[49px]">
      <img
        src="Group 2.png"
        alt="Image logo"
        className="max-w-[195px] max-h-[49px]"
      />
      <div className="flex items-center gap-[40px]">
        <a href="#" className="text-[16px] font-medium opacity-100">
          Home
        </a>
        <a href="#" className="text-[16px] font-medium opacity-100">
          About Us
        </a>
        <a href="#" className="text-[16px] font-medium opacity-100">
          Service
        </a>
        <a href="#" className="text-[16px] font-medium opacity-100">
          Contact Us
        </a>
        <a href="#" className="gap-[10px]">
          <Button className="w-[120px] h-[49px] px-[35px] py-[11px] bg-[#03045E] text-[#FFFFFF] rounded-[5px] text-[18px] font-bold opacity-100">
            Login
          </Button>
        </a>
      </div>
    </div>
  );
}
