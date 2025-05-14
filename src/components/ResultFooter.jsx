export function ResultFooter({ result }) {
  return (
    <div>
      <hr className="border-neutral-300 mb-5 dark:border-neutral-500" />
      {result.sourceUrls.map((source, sourceIndex) => (
        <div
          key={sourceIndex}
          className="flex flex-col md:flex-row gap-2 md:gap-5 text-bs md:items-center mb-3 last:mb-0"
        >
          <span className="text-neutral-400 underline underline-offset-4">
            Source
          </span>
          <a
            href={source}
            className="text-neutral-600 underline underline-offset-4 flex items-center gap-2.5 dark:text-neutral-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{source}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="#838383"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
}
