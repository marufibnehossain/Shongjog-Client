import {
  ArrowUpRight,
  CalendarDays,
  HeartHandshake,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const HeroCards = () => {
  return (
    <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">

      {/* ===================================================== */}
      {/* CARD 1 - EVENT GROWTH                                 */}
      {/* ===================================================== */}

      <article className="group overflow-hidden rounded-[28px] border-8 border-surface bg-surface shadow-sm transition-transform duration-300 hover:-translate-y-2">
        <div
          className="relative flex h-full min-h-60 flex-col overflow-hidden rounded-[21px]"
          style={{ backgroundColor: "#ffe1c5" }}
        >
          {/* Top content */}
          <div className="relative z-10 flex items-start justify-between px-5 pt-5">
            <div>
              <div className="text-3xl font-bold leading-none text-[#18231D]">
                +38%
              </div>

              <p className="mt-1 text-sm font-medium text-[#18231D]">
                Event participation
              </p>
            </div>

            <div className="flex size-12 items-center justify-center rounded-full bg-black text-white">
              <TrendingUp className="size-5" />
            </div>
          </div>

          {/* Chart */}
          <div className="flex flex-1 items-end px-6 pb-6 pt-4">
            <div className="flex h-36 w-full items-end justify-between gap-2">
              {[
                25, 42, 32, 52, 45, 68, 58, 82, 70, 95, 78, 100, 88, 108,
              ].map((height, index) => (
                <div
                  key={index}
                  className="flex h-full flex-1 items-end gap-1"
                >
                  <div
                    className="w-1/2 rounded-t-full bg-[#18231D]"
                    style={{ height: `${height}%` }}
                  />

                  <div
                    className="w-1/2 rounded-t-full bg-white"
                    style={{
                      height: `${Math.min(height + 15, 100)}%`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom action */}
        <div className="flex items-center justify-between px-2 py-3">
          <span className="text-sm text-[#18231D]">
            Discover events
          </span>

          <ArrowUpRight className="size-4 text-heading transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </article>


      {/* ===================================================== */}
      {/* CARD 2 - COMMUNITY ENGAGEMENT                         */}
      {/* ===================================================== */}

      <article className="group overflow-hidden rounded-[28px] border-8 border-surface bg-surface shadow-sm transition-transform duration-300 hover:-translate-y-2">
        <div
          className="relative flex h-full min-h-60 flex-col overflow-hidden rounded-[21px]"
          style={{ backgroundColor: "#d8f4df" }}
        >
          {/* Decorative circles */}
          <div className="absolute -right-18 -bottom-16 animate-[spin_10s_linear_infinite]">
            <svg className="w-full" fill="#C5EBCE87" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243 243"><path d="M226.259 182.068C237.206 163.204 243 142.294 243 121.5 243 54.505 188.495 0 121.5 0c-20.795 0-41.706 5.794-60.57 16.742C55.17 9.948 46.583 5.624 37 5.624c-17.3 0-31.376 14.075-31.376 31.375 0 9.584 4.324 18.172 11.118 23.932C5.794 79.794 0 100.706 0 121.5 0 188.495 54.505 243 121.5 243c20.794 0 41.705-5.794 60.57-16.742 5.76 6.794 14.348 11.118 23.931 11.118 17.3 0 31.376-14.075 31.376-31.375 0-9.584-4.324-18.173-11.118-23.933M8.623 37C8.623 21.353 21.353 8.624 37 8.624s28.375 12.729 28.375 28.375-12.729 28.376-28.375 28.376S8.623 52.645 8.623 36.999M121.5 240C56.159 240 3 186.84 3 121.5c0-20.141 5.586-40.406 16.142-58.724a31.2 31.2 0 0 0 17.857 5.599c17.3 0 31.375-14.076 31.375-31.376a31.2 31.2 0 0 0-5.598-17.857C81.093 8.586 101.358 3 121.5 3 186.84 3 240 56.159 240 121.5c0 20.14-5.586 40.406-16.142 58.723a31.2 31.2 0 0 0-17.857-5.598c-17.3 0-31.375 14.075-31.375 31.376a31.2 31.2 0 0 0 5.598 17.857C161.907 234.414 141.641 240 121.5 240m84.501-5.624c-15.647 0-28.375-12.729-28.375-28.375s12.728-28.376 28.375-28.376 28.376 12.73 28.376 28.376-12.73 28.375-28.376 28.375M121.5 60.249c-33.774 0-61.251 27.477-61.251 61.251s27.477 61.251 61.251 61.251 61.251-27.478 61.251-61.251-27.478-61.251-61.251-61.251m0 119.502c-32.12 0-58.251-26.13-58.251-58.251S89.38 63.249 121.5 63.249s58.251 26.131 58.251 58.251-26.13 58.251-58.251 58.251m0-89.626c-17.3 0-31.376 14.075-31.376 31.375s14.075 31.376 31.376 31.376c17.3 0 31.375-14.075 31.375-31.376S138.8 90.125 121.5 90.125m0 59.751c-15.646 0-28.376-12.73-28.376-28.376s12.73-28.375 28.376-28.375 28.375 12.729 28.375 28.375-12.729 28.376-28.375 28.376"></path></svg>
          </div>

          <div className="relative z-10 flex h-full flex-col p-5">

            <div className="flex items-center gap-2">
              <HeartHandshake className="size-5 text-primary" />

              <h3 className="text-2xl font-bold text-[#18231D]">
                Community Engagement
              </h3>
            </div>

            {/* Statistics */}
            <div className="mt-9 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-text dark:text-[#4A554F]">
                  Participants
                </p>

                <p className="mt-1 text-xl font-bold text-[#18231D]">
                  2,648
                </p>
              </div>

              <div>
                <p className="text-xs text-[#4A554F]">
                  Events
                </p>

                <p className="mt-1 text-xl font-bold text-[#18231D]">
                  147
                </p>
              </div>

              <div>
                <p className="text-xs text-[#4A554F]">
                  Joined
                </p>

                <p className="mt-1 text-xl font-bold text-[#18231D]">
                  93%
                </p>
              </div>
            </div>

            {/* Community avatars */}
            <div className="mt-auto flex -space-x-2">
              {[
                "M",
                "A",
                "R",
                "S",
                "T",
                "+",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex size-11 items-center justify-center rounded-full border-2 border-[#d8f4df] bg-primary/15 text-xs font-bold text-primary"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom action */}
        <div className="flex items-center justify-between px-2 py-3">
          <span className="text-sm text-heading">
            Explore community
          </span>

          <ArrowUpRight className="size-4 text-heading transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </article>


      {/* ===================================================== */}
      {/* CARD 3 - COMMUNITY COLLABORATION                      */}
      {/* ===================================================== */}

      <article className="group overflow-hidden rounded-[28px] border-8 border-surface bg-surface shadow-sm transition-transform duration-300 hover:-translate-y-2">
        <div
          className="relative flex h-full min-h-60 flex-col overflow-hidden rounded-[21px]"
          style={{ backgroundImage: "url(/team-work-image.webp)", backgroundColor: "#f3d7f5", backgroundSize: "contain", backgroundPosition: "bottom left", backgroundRepeat: "no-repeat" }}
        >
          {/* Decorative background */}
          <div className="relative z-10 flex h-full flex-col p-5">

            <div className="max-w-[80%]">
              <div className="flex items-center gap-2">
                <UsersRound className="size-5 text-primary" />

                <h3 className="text-2xl font-bold text-[#18231D]">
                  Community Together
                </h3>
              </div>

              <p className="mt-4 max-w-60 text-sm leading-6 text-[#4A554F]">
                Bring people together through meaningful events that turn
                shared ideas into real community impact.
              </p>
            </div>

            {/* Community visual */}
            {/* <div className="relative mt-auto flex items-end justify-end">
              <div className="relative flex size-32 items-center justify-center rounded-full bg-primary/10">
                <div className="absolute -left-5 bottom-3 flex size-14 items-center justify-center rounded-full border-4 border-[#f3d7f5] bg-primary/20">
                  <UsersRound className="size-6 text-primary" />
                </div>

                <div className="flex size-20 items-center justify-center rounded-full bg-primary">
                  <HeartHandshake className="size-9 text-white" />
                </div>

                <div className="absolute -right-4 top-3 flex size-12 items-center justify-center rounded-full border-4 border-[#f3d7f5] bg-primary/20">
                  <HeartHandshake className="size-5 text-primary" />
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom action */}
        <div className="flex items-center justify-between px-2 py-3">
          <span className="text-sm text-heading">
            Join an initiative
          </span>

          <ArrowUpRight className="size-4 text-heading transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </article>

    </div>
  );
};

export default HeroCards;