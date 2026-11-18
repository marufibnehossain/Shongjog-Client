import Image from "next/image";
import { ArrowUpRight, Camera } from "lucide-react";
import Link from "next/link";

const galleryItems = [
  {
    src: "/gallery/community-cleanup.jpg",
    alt: "Volunteers participating in a community cleanup",
    title: "Community Cleanup",
    category: "Environment",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/gallery/tree-plantation.jpg",
    alt: "Volunteers planting trees together",
    title: "Tree Plantation",
    category: "Plantation",
    className: "",
  },
  {
    src: "/gallery/food-distribution.jpg",
    alt: "Volunteers distributing food to the community",
    title: "Food Distribution",
    category: "Donation",
    className: "",
  },
  {
    src: "/gallery/donation-drive.jpg",
    alt: "Community members participating in a donation drive",
    title: "Donation Drive",
    category: "Community",
    className: "",
  },
  {
    src: "/gallery/community-volunteers.jpg",
    alt: "Volunteers working together at a community event",
    title: "Volunteers Together",
    category: "Community",
    className: "",
  },
];

const GallerySection = () => {
  return (
    <section className="bg-surface px-[5vw] pt-20 sm:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              <Camera className="size-3.5" />
              Community moments
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-heading sm:text-4xl">
              People coming together to make a difference.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-text">
              From cleanups and tree plantations to donation drives and
              community programs, every event creates an opportunity to make
              an impact.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-hover"
          >
            Explore events
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-45">
          {galleryItems.map((item) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-[24px] border border-stroke bg-background ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent opacity-90" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/65">
                  {item.category}
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;