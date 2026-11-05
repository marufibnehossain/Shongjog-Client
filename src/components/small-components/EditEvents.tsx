"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Image as ImageIcon,
  MapPin,
  Tag,
  Type,
} from "lucide-react";
import { useState, type ChangeEvent } from "react";
import { IEvent } from "@/types/event.type";

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

const EditEvents = ({ event, onUpdated }: { event:  IEvent; onUpdated: (updatedEvent: IEvent) => void }) => {
  const [form, setForm] = useState({
    title: event.title,
    type: event.type,
    date: new Date(event.date).toISOString().split("T")[0],
    location: event.location,
    thumbnailUrl: event.thumbnailUrl,
    description: event.description,
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setSubmitMessage("");
  };

  const handleSubmit = async () => {
    if (form.date < getLocalDateString(new Date())) {
      setSubmitMessage(
        "Choose today or a future date before publishing."
      );
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/events/${event.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setSubmitMessage(
          data.message || "Failed to update event."
        );
        return;
      }

      const updatedEvent = {
        ...event,
        ...form,
      };
      onUpdated(updatedEvent);

      setSubmitMessage("Event updated successfully!");
    } catch (error) {
      console.error("Update event error:", error);

      setSubmitMessage(
        "Something went wrong. Please try again."
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="rounded-lg border border-primary px-4 py-1.5 text-sm text-primary transition-colors hover:bg-primary/10 cursor-pointer">
        Edit
      </DialogTrigger>

      <DialogContent className="bg-surface sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
        </DialogHeader>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* Event Title */}
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
                value={form.title}
                onChange={handleChange}
                className="pl-10"
                placeholder="e.g. Winter Clothes Distribution - Mirpur 10, Dhaka"
                required
              />
            </div>
          </div>

          {/* Type + Date */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Event Type */}
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
                  value={form.type}
                  onChange={handleChange}
                  required
                  className="h-11 w-full appearance-none rounded-lg border border-stroke bg-surface pl-10 pr-10 text-sm text-heading shadow-sm outline-none transition focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20"
                >
                  <option value="Donation">Donation</option>
                  <option value="Community Support">
                    Community Support
                  </option>
                  <option value="Environmental Cleanup">
                    Environmental Cleanup
                  </option>
                  <option value="Tree Plantation">
                    Tree Plantation
                  </option>
                  <option value="Winter Relief">
                    Winter Relief
                  </option>
                  <option value="Educational Outreach">
                    Educational Outreach
                  </option>
                  <option value="Food Distribution">
                    Food Distribution
                  </option>
                </select>

                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                />
              </div>
            </div>

            {/* Event Date */}
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
                  value={form.date}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>

              <p className="text-xs text-muted">
                Dates must be today or in the future.
              </p>
            </div>
          </div>

          {/* Location */}
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
                value={form.location}
                onChange={handleChange}
                className="pl-10"
                placeholder="e.g. Mohammadpur Town Hall, Dhaka"
                required
              />
            </div>
          </div>

          {/* Thumbnail URL */}
          <div className="space-y-2">
            <label
              htmlFor="thumbnail-url"
              className="text-sm font-semibold text-heading"
            >
              Thumbnail Image URL{" "}
              <span className="text-danger">*</span>
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
                value={form.thumbnailUrl}
                onChange={handleChange}
                className="pl-10"
                placeholder="https://images.unsplash.com/photo-..."
                required
              />
            </div>

            {/* Photo Presets */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
              <span>Quick photo presets:</span>

              {photoPresets.map((preset, index) => (
                <span
                  key={preset.label}
                  className="inline-flex items-center"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setForm({
                        ...form,
                        thumbnailUrl: preset.url,
                      });

                      setSubmitMessage("");
                    }}
                    className="text-primary underline-offset-2 transition-colors hover:underline"
                  >
                    {preset.label}
                  </button>

                  {index < photoPresets.length - 1 && (
                    <span
                      className="ml-2 text-stroke"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label
              htmlFor="event-description"
              className="text-sm font-semibold text-heading"
            >
              Event Description{" "}
              <span className="text-danger">*</span>
            </label>

            <Textarea
              id="event-description"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="min-h-32"
              placeholder="Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete..."
              required
            />
          </div>

          {/* Organizer */}
          <div className="flex flex-col gap-1 rounded-lg border border-stroke bg-background px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
            <span className="text-muted">
              Organizer email attached:
            </span>

            <span className="font-semibold text-heading">
              {event.organizerEmail}
            </span>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="h-11 w-full bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover"
          >
            <CheckCircle2 aria-hidden="true" />
            Update Event
          </Button>

          {/* Message */}
          {submitMessage && (
            <p
              role="status"
              className="rounded-lg border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-heading"
            >
              {submitMessage}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditEvents;