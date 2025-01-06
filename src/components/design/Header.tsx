import { useState } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center h-[49px] px-4 md:px-8 relative">
      {/* Logo */}
      <img
        src="Group 2.png"
        alt="Image logo"
        className="max-w-[195px] max-h-[49px]"
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-[40px]">
        <a href="#" className="text-[16px] font-medium">
          Home
        </a>
        <a href="#" className="text-[16px] font-medium">
          About Us
        </a>
        <a href="#" className="text-[16px] font-medium">
          Service
        </a>
        <a href="#" className="text-[16px] font-medium">
          Contact Us
        </a>
        <Button className="w-[120px] h-[49px] px-[35px] py-[11px] bg-[#03045E] text-[#FFFFFF] rounded-[5px] text-[18px] font-bold">
          Login
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center ml-4"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          // Close icon (cross)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger icon (menu)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        )}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-[49px] left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            <a
              href="#"
              className="text-[16px] font-medium"
              onClick={() => setMobileMenuOpen(false)} // Close on click
            >
              Home
            </a>
            <a
              href="#"
              className="text-[16px] font-medium"
              onClick={() => setMobileMenuOpen(false)} // Close on click
            >
              About Us
            </a>
            <a
              href="#"
              className="text-[16px] font-medium"
              onClick={() => setMobileMenuOpen(false)} // Close on click
            >
              Service
            </a>
            <a
              href="#"
              className="text-[16px] font-medium"
              onClick={() => setMobileMenuOpen(false)} // Close on click
            >
              Contact Us
            </a>
            <Button
              className="w-[120px] h-[49px] px-[35px] py-[11px] bg-[#03045E] text-[#FFFFFF] rounded-[5px] text-[18px] font-bold"
              onClick={() => setMobileMenuOpen(false)} // Close on click
            >
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
