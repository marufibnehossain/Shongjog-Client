"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  UserRound,
  X,
} from "lucide-react";
import { IEvent } from "@/types/event.type";
import { useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

// const categoryStyles: Record<string, string> = {
//   Donation: "bg-danger/10 text-danger",
//   "Community Support": "bg-primary/10 text-primary",
//   "Environmental Cleanup": "bg-success/10 text-success",
//   "Tree Plantation": "bg-success/10 text-success",
//   "Winter Relief": "bg-primary/10 text-primary",
//   "Educational Outreach": "bg-warning/10 text-warning",
//   "Food Distribution": "bg-warning/10 text-warning",
// };

// const categoryBackgrounds: Record<string, string> = {
//   "Donation": "var(--event-donation)",
//   "Community Support": "var(--event-community)",
//   "Environmental Cleanup": "var(--event-environment)",
//   "Tree Plantation": "var(--event-plantation)",
//   "Winter Relief": "var(--event-winter)",
//   "Educational Outreach": "var(--event-education)",
//   "Food Distribution": "var(--event-food)",
// };

const EventCard = ({
  id,
  title,
  description,
  type,
  thumbnailUrl,
  location,
  date,
  organizerEmail,
  showCancel=false,
  showEdit=false,
}: IEvent) => {
  const [isCancelling, setIsCancelling] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const categoryClass =
    "bg-white/80 text-primary font-bold";

  const categoryBackground =
    "#edf5e7";

  const handleCancel = async () => {
    const { data: jwtToken } = await authClient.token();
    const res = await fetch(`http://localhost:5000/events/joined/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken?.token}`,
      },
      body: JSON.stringify({
        email: session?.user?.email,
      }),
    })
    const data = await res.json();

    setIsCancelling(false);

    toast.success("Event cancelled successfully.");

    if (res.ok) {
      router.refresh();
    }
  }

  return (
    <article className="group overflow-hidden rounded-[28px] border border-stroke bg-surface p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Category Colored Content */}
      <div
        className="overflow-hidden rounded-[22px]"
        style={{ backgroundColor: categoryBackground }}
      >
        {/* Image */}
        <div className="relative overflow-hidden p-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[17px]">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Category */}
            <span
              className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs backdrop-blur-md ${categoryClass}`}
            >
              {type}
            </span>

            {/* Date */}
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-heading/90 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <CalendarDays className="size-3.5" />
              {date}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-5 pt-2">
          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-heading transition-colors group-hover:text-primary">
            {title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-text">
            {description}
          </p>

          {/* Event Information */}
          <div className="mt-4 space-y-2.5 border-t border-heading/10 pt-4">
            <div className="flex items-start gap-2 text-sm text-text">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />

              <span className="line-clamp-1">
                {location}
              </span>
            </div>

            <div className="flex items-start gap-2 text-sm text-text">
              <UserRound className="mt-0.5 size-4 shrink-0 text-primary" />

              <span className="line-clamp-1">
                {organizerEmail}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="mt-2 flex items-center justify-between rounded-[18px] bg-background-soft px-4 py-1">
        <Link
          href={`/event/${id}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary-hover"
        >
          View Event

          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        {
          showCancel && (
            <button
              type="button"
              onClick={handleCancel}
              disabled={isCancelling}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-danger transition-colors hover:text-danger/80 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
            >
              <X className="size-4" />

              {isCancelling ? "Cancelling..." : "Cancel"}
            </button>
          )
        }
      </div>
    </article>
  );
};

export default EventCard;