import { ArrowUpRight, UsersRound, CalendarDays } from "lucide-react";
import Link from "next/link";

const ImpactSection = () => {
  return (
    <section className="bg-herobg dark:bg-background px-[5vw] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] bg-heading dark:bg-surface px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80">
                <UsersRound className="size-3.5" />
                Community Impact
              </div>

              <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                Together, small contributions can create lasting change.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/65">
                Shongjog brings people and community initiatives together so
                that helping others becomes easier, more accessible, and more
                connected.
              </p>

              <Link
                href="/events"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Explore the community
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[22px] bg-white/5 p-6">
                <CalendarDays className="size-5 text-primary" />
                <p className="mt-6 text-3xl font-bold">100+</p>
                <p className="mt-2 text-sm text-white/55">
                  Community events
                </p>
              </div>

              <div className="rounded-[22px] bg-primary/20 p-6">
                <UsersRound className="size-5 text-primary" />
                <p className="mt-6 text-3xl font-bold">2.5K+</p>
                <p className="mt-2 text-sm text-white/55">
                  Community members
                </p>
              </div>

              <div className="col-span-2 rounded-[22px] bg-white/5 p-6">
                <p className="text-sm text-white/50">
                  Every action matters.
                </p>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-primary" />
                </div>

                <div className="mt-3 flex justify-between text-xs text-white/45">
                  <span>People connected</span>
                  <span>Growing every day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;