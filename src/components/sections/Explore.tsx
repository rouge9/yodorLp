import { Button } from "../ui/button";

export default function Explore() {
  return (
    <div className="flex flex-col p-8 pt-36 px-40 bg-zinc-800">
      <div className="flex flex-col">
        <p className="text-7xl font-bold text-amber-300">Get direct</p>
        <p className="text-7xl font-bold text-neutral-100">
          knowledge and insight.
        </p>
      </div>
      <div className="flex justify-between items-center pt-32">
        <img src="/img-card.png" alt="card" className="" />
        <img src="/img-card1.png" alt="card" className="" />
        <img src="/img-card2.png" alt="card" className="" />
      </div>
      <div className="flex pt-32 justify-between items-center">
        <div className="flex justify-between items-center gap-24">
          <div className="flex flex-col justify-start ">
            <p className="text-7xl font-bold text-amber-300">300</p>
            <p className="text-3xl  text-neutral-100">Creators</p>
          </div>
          <div className="flex flex-col justify-start ">
            <p className="text-7xl font-bold text-amber-300">14.4k</p>
            <p className="text-3xl  text-neutral-100">Users</p>
          </div>
          <div className="flex flex-col justify-start ">
            <p className="text-7xl font-bold text-amber-300">9.11k</p>
            <p className="text-3xl  text-neutral-100">Sessions</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col justify-start">
            <p className="text-3xl text-neutral-100">Explore the</p>
            <p className="text-3xl text-neutral-100">marketplace</p>
          </div>
          <Button size="icon" className="rounded-full w-16 h-16">
            <img src="/arrow-icon.svg" alt="arrow" className="w-16 h-16" />
          </Button>
        </div>
      </div>
    </div>
  );
}
