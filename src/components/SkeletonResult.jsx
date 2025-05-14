export default function SkeletonResult() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Title & phonetic */}
      <div className="space-y-2">
        <div className="h-8 w-1/3 bg-neutral-300 rounded-md dark:bg-neutral-700"></div>
        <div className="h-5 w-1/4 bg-neutral-200 rounded-md dark:bg-neutral-600"></div>
      </div>

      {/* Meaning header */}
      <div className="mt-6">
        <div className="h-4 w-24 bg-neutral-300 rounded dark:bg-neutral-600 mb-4"></div>
        <ul className="space-y-3">
          <li className="h-4 w-full bg-neutral-200 rounded dark:bg-neutral-700"></li>
          <li className="h-4 w-11/12 bg-neutral-200 rounded dark:bg-neutral-700"></li>
          <li className="h-4 w-3/4 bg-neutral-200 rounded dark:bg-neutral-700"></li>
        </ul>
      </div>

      {/* Synonyms */}
      <div className="mt-6 flex items-center gap-4">
        <div className="h-4 w-20 bg-neutral-300 rounded dark:bg-neutral-600"></div>
        <div className="h-4 w-2/5 bg-purple-300 rounded dark:bg-purple-700"></div>
      </div>
    </div>
  );
}
