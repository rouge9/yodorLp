export default function Footer() {
  return (
    <footer className="bg-neutral-100 p-8 lg:py-28 lg:px-28">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="hidden md:flex flex-col">
          <img src="logo.svg" alt="logo" className="w-28 h-16" />
          <div className="flex gap-3 py-16">
            <a href="#" className=" rounded-full">
              <img src="facebook.svg" alt="facebook" className="" />
            </a>
            <a href="#" className=" rounded-full">
              <img src="twitter.svg" alt="X" className="" />
            </a>
            <a href="#" className=" rounded-full">
              <img src="instagram.svg" alt="insta" className="" />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-20 gap-8 lg:gap-0">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg 2xl:text-2xl font-bold text-zinc-800">
              About us
            </h3>
            <ul className="flex flex-col gap-2 2xl:text-xl text-md">
              <li className="text-zinc-800  2xl:text-xl">Our Story</li>
              <li className="text-zinc-800 ">Our Team</li>
              <li className="text-zinc-800 ">Careers</li>
              <li className="text-zinc-800 ">Careers</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-zinc-800 2xl:text-2xl">
              Prodcuts
            </h3>
            <ul className="flex flex-col gap-2 2xl:text-xl text-md">
              <li className="text-zinc-800 ">Credits Card</li>
              <li className="text-zinc-800 ">Gift Cards </li>
              <li className="text-zinc-800 ">Savings account</li>
              <li className="text-zinc-800 ">NFT</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-zinc-800 2xl:text-2xl">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-2 2xl:text-xl text-md">
              <li className="text-zinc-800 ">Free rewards</li>
              <li className="text-zinc-800 ">Documentation</li>
              <li className="text-zinc-800 ">Documentation</li>
              <li className="text-zinc-800 ">Affliation program</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 pr-44">
            <h3 className="text-lg font-bold text-zinc-800 2xl:text-2xl">
              Social
            </h3>
            <ul className="flex flex-col gap-2 2xl:text-xl text-md">
              <li className="text-zinc-800 ">Change log</li>
              <li className="text-zinc-800 ">Licence</li>
              <li className="text-zinc-800 ">Site Maps</li>
              <li className="text-zinc-800 ">News</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:hidden pt-7 justify-center items-center">
          <img src="logo.svg" alt="logo" className="w-28 h-16" />
          <div className="flex gap-3 py-3">
            <a href="#" className=" rounded-full">
              <img src="facebook.svg" alt="facebook" className="w-8 h-8" />
            </a>
            <a href="#" className=" rounded-full">
              <img src="twitter.svg" alt="X" className="w-8 h-8" />
            </a>
            <a href="#" className=" rounded-full">
              <img src="instagram.svg" alt="insta" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
