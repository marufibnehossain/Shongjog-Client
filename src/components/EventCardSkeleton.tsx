const EventCardSkeleton = () => {
  return (
    <article className="overflow-hidden rounded-[28px] border border-stroke bg-surface p-2.5 shadow-sm">
      <div className="animate-pulse overflow-hidden rounded-[22px] bg-background">
        
        {/* Image */}
        <div className="p-2">
          <div className="aspect-[16/10] rounded-[17px] bg-stroke" />
        </div>

        {/* Content */}
        <div className="px-5 pb-5 pt-2">
          {/* Title */}
          <div className="h-6 w-3/4 rounded bg-stroke" />

          {/* Description */}
          <div className="mt-3 space-y-2">
            <div className="h-4 w-full rounded bg-stroke" />
            <div className="h-4 w-2/3 rounded bg-stroke" />
          </div>

          {/* Event information */}
          <div className="mt-5 space-y-3 border-t border-stroke pt-4">
            <div className="h-4 w-2/3 rounded bg-stroke" />
            <div className="h-4 w-1/2 rounded bg-stroke" />
          </div>
        </div>
      </div>

      {/* Bottom action */}
      <div className="mt-2 rounded-[18px] px-4 py-4">
        <div className="h-4 w-24 animate-pulse rounded bg-stroke" />
      </div>
    </article>
  );
};

export default EventCardSkeleton;