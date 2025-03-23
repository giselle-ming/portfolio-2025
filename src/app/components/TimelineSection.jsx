import TimelineItem from "./TimelineItem";

export default function TimelineSection({ items }) {
  return (
    <section className="relative mb-16">
      <h2 className="text-3xl font-semibold text-[#343660] mb-6 text-center">
        Experience
      </h2>
      <div className="mt-12 relative mb-12">
        <div className="absolute left-1/2 w-1 bg-[#BA68C8] h-full transform -translate-x-1/2 hidden sm:block"></div>
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            isLeftAligned={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
