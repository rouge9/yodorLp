import { Button } from "../ui/button";

export default function Support() {
  return (
    <div className="bg-neutral-100 p-8 py-16 px-28">
      <div className="bg-zinc-800 rounded-3xl py-36 flex flex-col justify-center items-center">
        <p className="text-6xl font-bold text-neutral-100 text-center">
          Engage without limits
        </p>
        <p className="text-lg text-neutral-100 text-center py-6">
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
