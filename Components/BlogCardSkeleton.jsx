import React from "react";

// Shadcn-like skeleton utilities built with Tailwind
// Matches the approximate layout and size of BlogItem
const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-200 ${className}`} />
);

const BlogCardSkeleton = () => {
  return (
    <div className="w-[330px] sm:w-[300px] shrink-0 border border-black bg-white">
      {/* Image placeholder */}
      <Skeleton className="w-full h-[200px] border-b border-black" />

      {/* Category pill */}
      <div className="ml-5 mt-5 mb-2">
        <Skeleton className="h-5 w-24 bg-black/80" />
      </div>

      {/* Title and description */}
      <div className="p-5">
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-2/3" />

        {/* Read more */}
        <div className="mt-4 flex items-center gap-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
