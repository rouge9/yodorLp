export default function Hero() {
  return (
    <div className="bg-neutral-100 p-8 py-28 px-28 flex flex-col min-h-96">
      <div className="flex">
        <div className="flex flex-col">
          <h1 className="text-7xl font-bold text-zinc-800">Learn from your</h1>
          <h1 className="text-7xl font-bold text-zinc-800">
            favorite creators
          </h1>
          <h1 className="text-7xl font-bold text-zinc-800">
            about <span className="text-amber-300">fantasy reports</span>
          </h1>
        </div>
        <div className="pl-48">
          <img src="/videoCall.svg" alt="video call" className="w-56 h-56" />
        </div>
      </div>
      <div className=" bg-zinc-800 flex flex-col rounded-tl-3xl rounded-tr-3xl">
        <img src="/hero.png" alt="hero" className="p-8 pt-24 absolute" />
      </div>
    </div>
  );
}
