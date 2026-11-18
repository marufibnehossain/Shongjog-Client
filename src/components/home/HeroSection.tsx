import Link from "next/link";
import { ArrowUpRight, HeartHandshake } from "lucide-react";
import HeroCards from "./HeroCards";

const HeroSection = () => {
  return (
    <section className="bg-herobg footer-pattern relative overflow-hidden px-[5vw] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
      <div className="absolute -left-24 top-32 size-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-24 top-20 size-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-4 py-2 text-xs font-semibold text-primary shadow-sm">
            <HeartHandshake className="size-3.5" />
            Building stronger communities together
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-heading sm:text-5xl lg:text-7xl">
            Small Actions.
            <br />
            <span className="text-primary">Meaningful Change.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text sm:text-lg">
            Discover community events, join meaningful initiatives, and
            connect with people working together to make a difference.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              Explore Events
              <ArrowUpRight className="size-4" />
            </Link>

            <Link
              href="/events/create"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stroke bg-surface px-6 py-3.5 text-sm font-semibold text-heading transition hover:border-primary hover:text-primary"
            >
              Create an Event
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl">
          {/* <div className="rounded-[24px] border border-stroke bg-surface p-5 shadow-sm">
            <p className="text-3xl font-bold text-heading">100+</p>
            <p className="mt-1 text-sm text-muted">
              Community initiatives
            </p>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-[78%] rounded-full bg-primary" />
            </div>
          </div>

          <div className="rounded-[24px] border border-stroke bg-surface p-5 shadow-sm">
            <p className="text-3xl font-bold text-heading">2.5K+</p>
            <p className="mt-1 text-sm text-muted">
              People making an impact
            </p>

            <div className="mt-6 flex -space-x-2">
              {["A", "M", "R", "S", "T"].map((letter) => (
                <div
                  key={letter}
                  className="flex size-9 items-center justify-center rounded-full border-2 border-surface bg-primary/10 text-xs font-bold text-primary"
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-heading p-5 text-white shadow-sm">
            <p className="text-sm text-white/60">Community impact</p>

            <p className="mt-2 text-3xl font-bold">Growing</p>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Every event gives people another opportunity to help.
            </p>
          </div> */}
          <HeroCards />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;