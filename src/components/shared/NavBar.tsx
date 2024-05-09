import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      // cleanup
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <nav
      className={clsx(
        "bg-neutral-100 p-8 lg:px-28 sticky top-0 z-50",
        scrolled && "shadow-md"
      )}
    >
      {/* desktop */}
      <div className="hidden lg:flex space-x-14 justify-between items-center">
        <div className="flex space-x-14 justify-center items-center">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-28 h-16 cursor-pointer"
          />
          <div className="flex space-x-10 text-zinc-800 cursor-pointer">
            <Link
              activeClass="border-b-4 border-zinc-800"
              to="explore"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-zinc-800 text-xl"
            >
              Explore
            </Link>
            <Link
              activeClass="border-b-4 border-zinc-800"
              to="company"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-zinc-800 text-xl"
            >
              Company
            </Link>
            <Link
              activeClass="border-b-4 border-zinc-800"
              to="support"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-zinc-800 text-xl"
            >
              Support
            </Link>
          </div>
        </div>
        <div className="flex space-x-6 text-zinc-800 items-center justify-center">
          <p className="text-xl font-semibold">Become a Member</p>
          <Button
            className="bg-zinc-800 px-9 py-7 rounded-full text-md text-neutral-100 hover:text-zinc-800 hover:bg-neutral-100"
            variant="outline"
          >
            Sign In
          </Button>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="lg:hidden flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 cursor-pointer">
          <img src="/logo.svg" alt="Logo" className="w-20 h-10" />
        </a>
        <Sheet>
          <SheetTrigger>
            <img src="/menu.svg" alt="Menu" className="w-9 h-9 rounded-md" />
          </SheetTrigger>
          <SheetContent className="bg-neutral-100">
            <SheetHeader>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src="/logo.svg" alt="Logo" className="w-28 h-10" />
              </div>
            </SheetHeader>
            <ul className="flex flex-col items-start space-y-5 cursor-pointer pt-10">
              <Link
                activeClass="border-b-4 border-zinc-800"
                to="explore"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-zinc-800 text-lg"
              >
                Explore
              </Link>
              <Link
                activeClass="border-b-4 border-zinc-800"
                to="company"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-zinc-800 text-lg"
              >
                Company
              </Link>
              <Link
                activeClass="border-b-4 border-zinc-800"
                to="support"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-zinc-800 text-lg"
              >
                Support
              </Link>
            </ul>
            <div className="flex justify-center items-center py-20">
              <Button
                className="bg-zinc-800 px-5 py-5 rounded-full text-md text-neutral-100 hover:text-zinc-800 hover:bg-neutral-100"
                variant="outline"
              >
                Sign In
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
