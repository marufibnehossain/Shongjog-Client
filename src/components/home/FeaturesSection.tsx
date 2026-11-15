import {
  CalendarPlus,
  HeartHandshake,
  UsersRound,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: CalendarPlus,
    title: "Create Events",
    description:
      "Turn an idea into a community initiative and invite people to contribute.",
  },
  {
    icon: HeartHandshake,
    title: "Join Initiatives",
    description:
      "Find meaningful events around you and take part in causes you care about.",
  },
  {
    icon: UsersRound,
    title: "Build Community",
    description:
      "Connect with people who want to make a positive difference together.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-surface px-[5vw] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What you can do
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            A simple platform for meaningful action
          </h2>

          <p className="mt-4 leading-7 text-text">
            Discover opportunities, organize initiatives, and become part of a
            community that cares.
          </p>
        </div>

        <div className="mt-14 grid border-y border-stroke sm:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="border-b border-stroke p-8 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-5 font-bold text-heading">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-text">
                  {feature.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Learn more
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;