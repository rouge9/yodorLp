import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <div className="bg-neutral-100 p-8 px-28 flex justify-between items-center">
      <div className="flex space-x-14 justify-center items-center">
        <img src="/logo.svg" alt="logo" className="w-28 h-16" />
        <div className="flex space-x-10 text-zinc-800">
          <a href="#" className="text-xl">
            Explore
          </a>
          <a href="#" className="text-xl">
            Company
          </a>
          <a href="#" className="text-xl">
            Support
          </a>
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
  );
}
