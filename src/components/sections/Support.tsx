import { Button } from "../ui/button";

export default function Support() {
  return (
    <div id="support" className="bg-neutral-100 p-8 lg:py-16 lg:px-28 px-5">
      <div className="bg-zinc-800 rounded-3xl py-20 lg:py-36 flex flex-col justify-center items-center">
        <p className="text-4xl lg:text-6xl font-bold text-neutral-100 text-center">
          Engage without limits
        </p>
        <p className="text-md lg:text-lg text-neutral-100 text-center py-6">
          Join a growing community and talk directly with your favorites
          creators
        </p>
        <Button
          variant="outline"
          className="bg-amber-300 px-9 py-7 rounded-full text-md text-zinc-800 hover:text-neutral-100 hover:bg-zinc-800"
        >
          Join the community
        </Button>
      </div>
    </div>
  );
}
