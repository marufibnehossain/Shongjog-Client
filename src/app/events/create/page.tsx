"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Image as ImageIcon,
  MapPin,
  Sprout,
  Tag,
  Type,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const photoPresets = [
  {
    label: "Winter Clothes",
    url: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d",
  },
  {
    label: "Blanket Relief",
    url: "https://images.unsplash.com/photo-1542931287-023b922fa89b",
  },
  {
    label: "Cleanup",
    url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15a",
  },
  {
    label: "Tree Plantation",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b",
  },
];

function getLocalDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function AddEventPage() {
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const eventDate = formData.get("date");

  if (
    typeof eventDate !== "string" ||
    eventDate < getLocalDateString(new Date())
  ) {
    setSubmitMessage("Choose today or a future date before publishing.");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/events/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const data = await res.json();

    if (!res.ok) {
      setSubmitMessage(data.message || "Failed to create event.");
      return;
    }

    setSubmitMessage("Event created successfully!");
    form.reset();
    setThumbnailUrl("");
  } catch (error) {
    console.error("Create event error:", error);
    setSubmitMessage("Something went wrong. Please try again.");
  }
};

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/"
          className="mb-5 inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-primary"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to Upcoming Events
        </Link>

        <section className="rounded-2xl border border-stroke bg-surface p-5 shadow-xl shadow-heading/5 sm:p-8">
          <div className="mb-7">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sprout aria-hidden="true" className="size-3.5" />
              Social Service Drive
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-heading sm:text-3xl">
              Create a Community Event
            </h1>
            <p className="mt-2 text-sm leading-6 text-text">
              Organize a local relief effort, environmental cleanup, or
              community support drive.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="event-title"
                className="text-sm font-semibold text-heading"
              >
                Event Title <span className="text-danger">*</span>
              </label>
              <div className="relative">
                <Type
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                />
                <Input
                  id="event-title"
                  name="title"
                  className="pl-10"
                  placeholder="e.g. Winter Clothes Distribution - Mirpur 10, Dhaka"
                  required
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="event-type"
                  className="text-sm font-semibold text-heading"
                >
                  Event Type <span className="text-danger">*</span>
                </label>
                <div className="relative">
                  <Tag
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                  />
                  <select
                    id="event-type"
                    name="type"
                    defaultValue="Donation"
                    required
                    className="h-11 w-full appearance-none rounded-lg border border-stroke bg-surface pl-10 pr-10 text-sm text-heading shadow-sm outline-none transition focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20"
                  >
                    <option>Donation</option>
                    <option>Community Support</option>
                    <option>Environmental Cleanup</option>
                    <option>Tree Plantation</option>
                    <option>Winter Relief</option>
                    <option>Educational Outreach</option>
                    <option>Food Distribution</option>
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="event-date"
                  className="text-sm font-semibold text-heading"
                >
                  Event Date <span className="text-danger">*</span>
                </label>
                <div className="relative">
                  <CalendarDays
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                  />
                  <Input
                    id="event-date"
                    name="date"
                    type="date"
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-xs text-muted">
                  Dates must be in the future (today or later).
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="event-location"
                className="text-sm font-semibold text-heading"
              >
                Location / Venue <span className="text-danger">*</span>
              </label>
              <div className="relative">
                <MapPin
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                />
                <Input
                  id="event-location"
                  name="location"
                  className="pl-10"
                  placeholder="e.g. Mohammadpur Town Hall, Dhaka"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="thumbnail-url"
                className="text-sm font-semibold text-heading"
              >
                Thumbnail Image URL <span className="text-danger">*</span>
              </label>
              <div className="relative">
                <ImageIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                />
                <Input
                  id="thumbnail-url"
                  name="thumbnailUrl"
                  type="url"
                  value={thumbnailUrl}
                  onChange={(event) => {
                    setThumbnailUrl(event.target.value);
                    setSubmitMessage("");
                  }}
                  className="pl-10"
                  placeholder="https://images.unsplash.com/photo-..."
                  required
                />
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                <span>Quick photo presets:</span>
                {photoPresets.map((preset, index) => (
                  <span key={preset.label} className="inline-flex items-center">
                    <button
                      type="button"
                      onClick={() => {
                        setThumbnailUrl(preset.url);
                        setSubmitMessage("");
                      }}
                      className="text-primary underline-offset-2 transition-colors hover:underline"
                    >
                      {preset.label}
                    </button>
                    {index < photoPresets.length - 1 && (
                      <span className="ml-2 text-stroke" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="event-description"
                className="text-sm font-semibold text-heading"
              >
                Event Description <span className="text-danger">*</span>
              </label>
              <Textarea
                id="event-description"
                name="description"
                className="min-h-32"
                placeholder="Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete..."
                required
              />
            </div>

            <div className="flex flex-col gap-1 rounded-lg border border-stroke bg-background px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="text-muted">Organizer email attached:</span>
              <span className="font-semibold text-heading">
                organizer@shongjog.org
              </span>
            </div>

            <Button
              type="submit"
              className="h-11 w-full bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover"
            >
              <CheckCircle2 aria-hidden="true" />
              Publish Event
            </Button>

            {submitMessage && (
              <p
                role="status"
                className="rounded-lg border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-heading"
              >
                {submitMessage}
              </p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}
