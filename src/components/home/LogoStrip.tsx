const communities = [
  "Education",
  "Environment",
  "Food Support",
  "Winter Relief",
  "Community Care",
  "Donation",
];

const LogoStrip = () => {
  return (
    <section className="border-b border-stroke bg-surface px-[5vw] py-7">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-5 text-sm font-semibold text-muted">
        {communities.map((community) => (
          <span key={community}>{community}</span>
        ))}
      </div>
    </section>
  );
};

export default LogoStrip;