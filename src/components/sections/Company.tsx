import { Button } from "../ui/button";

export default function Company() {
  return (
    <div
      id="company"
      className="bg-neutral-100 p-8 lg:py-28 lg:px-28 flex flex-col lg:flex-row justify-between"
    >
      <div className="flex flex-col">
        <p className="text-3xl lg:text-5xl font-bold text-zinc-800">
          Why become a
        </p>
        <p className="text-3xl lg:text-5xl font-bold text-zinc-800">creator?</p>
        <p className="text-lg lg:text-xl text-zinc-800 mt-6 text-pretty md:w-[600px]">
          Engage with your supporter and subscriber to sell your skills,
          knowledge and passions
        </p>
        <div className="flex lg:mt-6">
          <Button
            variant="outline"
            className="bg-zinc-800 px-9 py-7 border-4 rounded-full text-md text-neutral-100 hover:text-zinc-800 hover:bg-neutral-100 mt-6"
          >
            Become a creator
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col justify-center items-center space-y-4 md:w-[330px] pt-9">
            <img src="/engagement.svg" alt="Engagement" className="w-28 h-28" />
            <p className="text-2xl font-bold text-zinc-800">Engagement</p>
            <p className="text-lg text-zinc-800 text-center">
              Engage on a deeper level with the fans that matter most
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 md:w-[330px] pt-9">
            <img src="/autonomy-svg.svg" alt="anatomy" className="w-28 h-28" />
            <p className="text-2xl font-bold text-zinc-800">Autonomy</p>
            <p className="text-lg text-zinc-800 text-center">
              Full autonomy on when and who you talk to.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col justify-center items-center space-y-4 md:w-[330px] pt-9">
            <img src="/free-svg.svg" alt="free" className="w-28 h-28" />
            <p className="text-2xl font-bold text-zinc-800">Free</p>
            <p className="text-lg text-zinc-800 text-center">
              No monthly fee or sign-up fee
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 md:w-[330px] pt-9">
            <img src="/earn-svg.svg" alt="triangle" className="w-28 h-28" />
            <p className="text-2xl font-bold text-zinc-800">Earn</p>
            <p className="text-lg text-zinc-800 text-center">
              Add a new source of income that you can control
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
