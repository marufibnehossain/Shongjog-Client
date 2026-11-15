import EventCard from "@/components/EventCard";
import { IEvent } from "@/types/event.type";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

interface UpcomingEventsSectionProps {
  events: IEvent[];
}

const UpcomingEventsSection = ({
  events,
}: UpcomingEventsSectionProps) => {
  return (
    <section className="bg-surface px-[5vw] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              <CalendarDays className="size-3.5" />
              Upcoming events
            </div>

            <h2 className="mt-4 text-3xl font-bold text-heading sm:text-4xl">
              Find your next opportunity to help.
            </h2>

            <p className="mt-4 leading-7 text-text">
              Discover upcoming community events and find a cause that matters
              to you.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
          >
            View all events
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
