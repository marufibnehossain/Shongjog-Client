import EventCard from "@/components/EventCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { IEvent } from "@/types/event.type";
import {
    ArrowUpRight,
    CalendarDays,
} from "lucide-react";
import Link from "next/link";

const JoinedEventsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;

    const res = await fetch(`http://localhost:5000/events/joined/${user?.email}`);
    const data: IEvent[] = await res.json();

    return (
        <main className="w-full overflow-hidden">
            <section style={{backgroundImage: "url('/pattern-bg.png')", backgroundPosition: "center center", backgroundRepeat: "repeat"}} className="bg-[#edf5e7] px-[5vw] pb-14 pt-32 sm:pb-20 sm:pt-34 lg:pb-24 lg:pt-36">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-end gap-8">
                        <div className="text-center max-w-xl mx-auto">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-3.5 py-2 text-xs font-semibold text-primary">
                                <CalendarDays className="size-3.5" />
                                Community Events
                            </div>

                            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-heading text-center sm:text-5xl lg:text-6xl">
                                Events You{" "}
                                <span className="text-primary">
                                    Joined
                                </span>
                            </h1>

                            <p className="mt-6 text-center text-base leading-7 text-text sm:text-lg">
                                Discover the events you have joined and
                                explore the opportunities to connect with your
                                community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-surface px-[5vw] py-16 sm:py-20 lg:py-25">
                <div className="mx-auto max-w-7xl">
                    {/* <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                                Upcoming Events
                            </p>

                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
                                Make your next day count.
                            </h2>

                            <p className="mt-4 text-base leading-7 text-text">
                                Explore events happening in your community and
                                find an opportunity that feels right for you.
                            </p>
                        </div>

                        <div className="text-left md:text-right">
                            <p className="text-3xl font-bold text-heading">
                                {data.length}
                            </p>

                            <p className="text-sm text-muted">
                                upcoming opportunities
                            </p>
                        </div>
                    </div> */}

                    {data.length > 0 ? (
                        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {data.map((event: IEvent) => (
                                <li key={event.id}>
                                    <EventCard {...event} showCancel />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="rounded-[28px] border border-dashed border-stroke bg-background px-6 py-16 text-center">
                            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <CalendarDays className="size-5" />
                            </div>

                            <h3 className="mt-4 text-lg font-bold text-heading">
                                No joined events
                            </h3>

                            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
                                You haven&#39;t joined any community events yet. Explore events and join the ones that interest you.
                            </p>

                            <Link
                                href="/events"
                                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                            >
                                Browse Events
                                <ArrowUpRight className="size-4" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-surface px-[5vw] pb-16 sm:pb-20">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-4xl bg-heading px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-14">
                        <div className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/30 blur-3xl" />

                        <div className="absolute -bottom-24 left-1/3 size-56 rounded-full bg-primary/20 blur-3xl" />

                        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                            <div className="max-w-2xl">
                                <p className="text-sm font-semibold text-white/70 uppercase tracking-wider">
                                    Make an impact
                                </p>

                                <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                                    Your next community event could start with
                                    you.
                                </h2>

                                <p className="mt-4 max-w-xl leading-7 text-white/70">
                                    Create an event, invite your community and
                                    give people an opportunity to contribute
                                    to something meaningful.
                                </p>
                            </div>

                            <Link
                                href="/create-event"
                                className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                            >
                                Create an Event
                                <ArrowUpRight className="size-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default JoinedEventsPage;