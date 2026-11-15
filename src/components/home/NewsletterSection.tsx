import { ArrowUpRight } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="bg-white px-[5vw] py-16">
      <div className="mx-auto max-w-7xl">
        <div
          className="overflow-hidden rounded-[30px] px-6 py-10 sm:px-10 lg:px-14"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Stay connected
              </p>

              <h2 className="mt-3 text-3xl font-bold text-heading">
                Get community updates in your inbox.
              </h2>

              <p className="mt-3 leading-7 text-text">
                Stay informed about upcoming initiatives and opportunities to
                make an impact.
              </p>
            </div>

            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-full border border-stroke bg-surface px-5 py-3 text-sm text-heading outline-none placeholder:text-muted focus:border-primary"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Subscribe
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;