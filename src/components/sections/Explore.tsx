export default function Explore() {
  return (
    <div
      id="explore"
      className="flex flex-col p-8 py-16 lg:py-36 lg:px-40 bg-zinc-800"
    >
      <div className="flex flex-col">
        <p className="text-4xl lg:text-7xl  text-amber-300">Get direct</p>
        <p className="text-4xl lg:text-7xl  text-neutral-100">
          knowledge and insight.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center pt-9 lg:pt-32 gap-12 lg:gap-0">
        <img src="/img-card.png" alt="card" />
        <img src="/img-card1.png" alt="card" />
        <img src="/img-card2.png" alt="card" />
      </div>
      <div className="flex pt-16 lg:pt-32 flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-14 lg:gap-24">
          <div className="flex flex-col lg:justify-start justify-center items-center">
            <p className="text-5xl lg:text-7xl font-bold text-amber-300">300</p>
            <p className="text-xl lg:text-3xl  text-neutral-100">Creators</p>
          </div>
          <div className="flex flex-col lg:justify-start justify-center items-center">
            <p className="text-5xl lg:text-7xl font-bold text-amber-300">
              14.4k
            </p>
            <p className="text-xl lg:text-3xl  text-neutral-100">Users</p>
          </div>
          <div className="flex flex-col lg:justify-start justify-center items-center">
            <p className="text-5xl lg:text-7xl font-bold text-amber-300">
              9.11k
            </p>
            <p className="text-xl lg:text-3xl  text-neutral-100">Sessions</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center py-16">
          <div className="flex lg:flex-col justify-start gap-1">
            <p className="text-xl lg:text-3xl text-neutral-100">Explore the</p>
            <p className="text-xl lg:text-3xl text-neutral-100">marketplace</p>
          </div>
          <a href="#">
            <img
              src="/arrow-icon.svg"
              alt="arrow"
              className="w-10 h-10 lg:w-16 lg:h-16"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
