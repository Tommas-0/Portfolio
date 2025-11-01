"use client";

const SectionTitle = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => (
  <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-3 my-16">
    <Icon className="w-8 h-8 text-blue-500" />
    {title}
  </h2>
);

export default SectionTitle;