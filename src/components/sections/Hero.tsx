export default function Hero() {
  return (
    <div
      id="hero"
      className="bg-neutral-100 p-8 lg:py-28 lg:px-28 flex flex-col lg:min-h-96"
    >
      <div className="flex">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-7xl font-bold text-zinc-800">
            Learn from your
          </h1>
          <h1 className="text-2xl lg:text-7xl font-bold text-zinc-800">
            favorite creators
          </h1>
          <h1 className="text-2xl lg:text-7xl font-bold text-zinc-800">
            about <span className="text-amber-300">fantasy reports</span>
          </h1>
        </div>
        <div className="lg:pl-48 lg:pt-0 pt-16 ">
          <img
            src="/videoCall.svg"
            alt="video call"
            className="w-28 h-28 lg:w-56 lg:h-56"
          />
        </div>
      </div>
      <div className="hidden lg:flex flex-col bg-zinc-800 rounded-tl-3xl rounded-tr-3xl">
        <img src="/hero.png" alt="hero" className="p-8 pt-24 absolute" />
      </div>
      <div className="block lg:hidden bg-zinc-800 rounded-tl-3xl rounded-tr-3xl">
        <img
          src="/hero.png"
          alt="hero"
          className="lg:p-8 lg:pt-24 absolute pt-4 w-[350px]"
        />
      </div>
    </div>
  );
}
