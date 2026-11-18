"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/types/event.type";

export default function UpcomingEventsList() {
    const [events, setEvents] = useState<IEvent[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadEvents = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/events/upcoming`,
                {
                    cache: "no-store",
                }
            );

            const data: IEvent[] = await res.json();

            setEvents(data);
            setLoading(false);
        };

        loadEvents();
    }, []);

    if (loading) {
        return (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="h-80 animate-pulse rounded-3xl bg-background"
                    />
                ))}
            </div>
        );
    }

    if (events.length === 0) {
        return (
            <div className="mt-10 rounded-[28px] border border-dashed border-stroke bg-background px-6 py-16 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CalendarDays className="size-5" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-heading">
                    No upcoming events
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
                    There are no upcoming community events at the moment.
                </p>
            </div>
        );
    }

    return (
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
                <li key={event.id}>
                    <EventCard {...event} />
                </li>
            ))}
        </ul>
    );
}