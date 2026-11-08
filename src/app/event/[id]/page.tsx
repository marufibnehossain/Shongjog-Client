"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    ArrowLeft,
    ArrowUpRight,
    CalendarDays,
    MapPin,
    Share2,
    Tag,
    Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { IEvent } from "@/types/event.type";
import EditEvents from "@/components/small-components/EditEvents";
import DeleteEvents from "@/components/small-components/DeleteEvents";
import { useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";

const categoryStyles: Record<string, string> = {
    Donation: "bg-danger/10 text-danger border-danger/20",
    "Community Support":
        "bg-primary/10 text-primary border-primary/20",
    "Environmental Cleanup":
        "bg-success/10 text-success border-success/20",
    "Tree Plantation":
        "bg-success/10 text-success border-success/20",
    "Winter Relief":
        "bg-primary/10 text-primary border-primary/20",
    "Educational Outreach":
        "bg-warning/10 text-warning border-warning/20",
    "Food Distribution":
        "bg-warning/10 text-warning border-warning/20",
};

const EventDetailsPage = () => {
    const params = useParams();
    const id = params.id as string;

    const [event, setEvent] = useState<IEvent | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [joined, setJoined] = useState(false);
    const { data:session } = useSession();
    const user = session?.user;

    const handleJoinEvent = async () => {
        if (!user) {
            toast.error("Please sign in to join the event.");
            return;
        }

        const data = {
            ...user,
            ...event,
            joinedAt: new Date(),
        }
        const res = await fetch(`http://localhost:5000/events/join`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        
        const result = await res.json();

        if (!res.ok) {
            toast.error(result.message || "Failed to join event.");
        }

        setJoined(true);
        toast.success("You have successfully joined the event!");
    }


    useEffect(() => {
        const fetchEvent = async () => {
            try {
                setLoading(true);
                setError(false);

                const res = await fetch(
                    `http://localhost:5000/events/${id}`
                );

                if (!res.ok) {
                    throw new Error(`Request failed: ${res.status}`);
                }

                const data: IEvent = await res.json();

                setEvent(data);
            } catch (error) {
                console.error("Failed to fetch event:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchEvent();
        }
    }, [id]);

    useEffect(() => {
        if (!id || !session?.user?.email) return;

        const checkJoined = async () => {
            const res = await fetch(
            `http://localhost:5000/events/joined/check/${id}?email=${session.user.email}`
            );

            const data = await res.json();

            setJoined(data.joined);
        };

        checkJoined();
    }, [id, session]);

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-background">
                <div className="size-8 animate-spin rounded-full border-2 border-stroke border-t-primary" />
            </main>
        );
    }

    if (error || !event) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-background px-[5vw]">
                <div className="max-w-md text-center">
                    <h1 className="text-2xl font-bold text-heading">
                        Event not found
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-muted">
                        The event youre looking for may have been removed or
                        is no longer available.
                    </p>

                    <Link
                        href="/events"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                    >
                        <ArrowLeft className="size-4" />
                        Back to Events
                    </Link>
                </div>
            </main>
        );
    }

    const categoryClass =
        categoryStyles[event.type] ||
        "bg-primary/10 text-primary border-primary/20";

    const formattedDate = new Date(event.date).toLocaleDateString(
        "en-US",
        {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        }
    );

    return (
        <main className="min-h-screen bg-background px-[5vw] pb-20 pt-28 sm:pt-32">
            <div className="mx-auto max-w-7xl">

                {/* Back */}
                <div className="mb-8 flex items-center justify-between">
                    <Link
                        href="/events"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
                    >
                        <ArrowLeft className="size-4" />
                        Back to Upcoming Events
                    </Link>
                    <div className="flex items-center gap-2">
                        <EditEvents event={event} onUpdated={setEvent} />
                        <DeleteEvents eventId={event.id} />
                    </div>
                </div>

                {/* Main Event Card */}
                <section className="rounded-[28px] border border-stroke bg-surface p-4 shadow-sm sm:p-6 lg:p-7">

                    {/* Section Heading */}
                    {/* <div className="mb-8 flex items-center justify-between">
                        <h1 className="mb-6 text-2xl font-bold text-heading sm:text-3xl">
                            About this event
                        </h1>
                        <EditEvents event={event} />
                    </div> */}

                    <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">

                        {/* Image */}
                        <div className="relative aspect-4/3 overflow-hidden rounded-[22px]">
                            <Image
                                src={event.thumbnailUrl}
                                alt={event.title}
                                fill
                                priority
                                className="object-cover transition-transform duration-500 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col">

                            {/* Category */}
                            <div>
                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold ${categoryClass}`}
                                >
                                    <Tag className="size-3.5" />
                                    {event.type}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-heading sm:text-4xl">
                                {event.title}
                            </h2>

                            {/* Location */}
                            <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                                <MapPin className="size-4 shrink-0 text-primary" />
                                <span>{event.location}</span>
                            </div>

                            {/* Description */}
                            <p className="mt-6 text-sm leading-7 text-text sm:text-base">
                                {event.description}
                            </p>

                            {/* Information Boxes */}
                            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

                                {/* Date */}
                                <div className="flex gap-3 rounded-2xl border border-stroke bg-background p-4">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <CalendarDays className="size-5" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium text-muted">
                                        Event Date
                                    </p>

                                    <p className="mt-1 text-sm font-semibold leading-5 text-heading">
                                        {formattedDate}
                                    </p>
                                    </div>
                                </div>

                                {/* Organizer */}
                                <div className=" flex gap-3 rounded-2xl border border-stroke bg-background p-4">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Users className="size-5" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium text-muted">
                                        Organized By
                                    </p>

                                    <p className="mt-1 text-sm font-semibold leading-5 text-heading">
                                        Community Organizer
                                    </p>
                                    </div>
                                </div>

                                {/* Contact */}
                                {/* <div className="flex gap-3 rounded-2xl border border-stroke bg-background p-4">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Mail className="size-5" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium text-muted">Contact</p>

                                        <p className="mt-1 truncate text-sm font-semibold leading-5 text-heading">{event.organizerEmail}</p>
                                    </div>
                                </div> */}
                            </div>

                            {/* Actions */}
                            <div className="mt-7 flex items-center gap-3">
                                {/* <input
                                    readOnly
                                    aria-label="join event"
                                    type="date"
                                    defaultValue={new Date(event.date).toISOString().split("T")[0]}
                                /> */}
                                <button
                                    onClick={handleJoinEvent}
                                    disabled={joined}
                                    type="submit"
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-hover sm:flex-none sm:min-w-40 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {joined ? "Joined" : "Join Event"}
                                    <ArrowUpRight className="size-4" />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Share event"
                                    className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-stroke bg-background text-muted transition-colors hover:border-primary hover:text-primary"
                                >
                                    <Share2 className="size-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default EventDetailsPage;