import EventCardSkeleton from "@/components/EventCardSkeleton";

const Loading = () => {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero */}
      <section className="bg-herobg px-[5vw] pb-14 pt-32 sm:pb-20 sm:pt-34 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto h-8 w-40 animate-pulse rounded-full bg-stroke" />

            <div className="mx-auto mt-5 h-12 w-80 animate-pulse rounded-lg bg-stroke sm:h-14" />

            <div className="mx-auto mt-6 h-5 w-full animate-pulse rounded bg-stroke" />
            <div className="mx-auto mt-2 h-5 w-2/3 animate-pulse rounded bg-stroke" />
          </div>
        </div>
      </section>

      {/* Event cards */}
      <section className="bg-surface px-[5vw] py-16 sm:py-20 lg:py-25">
        <div className="mx-auto max-w-7xl">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>
                <EventCardSkeleton />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Loading;