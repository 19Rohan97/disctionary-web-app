export function ResultHeader({ result }) {
  return (
    <div className="flex items-center justify-between gap-5">
      <div>
        <h1 className="text-[32px] md:text-hl lowercase font-bold leading-[1.3] dark:text-neutral-0">
          {result.word}
        </h1>
        <span className="text-purple-900 mt-2 block">{result.phonetic}</span>
      </div>
      {/* Audio Button */}
      {result.phonetics.find((p) => p.audio)?.audio && (
        <div
          className="audio cursor-pointer"
          role="button"
          aria-label={`Play pronunciation of ${result.word}`}
          tabIndex={0}
          onClick={() =>
            new Audio(result.phonetics.find((p) => p.audio)?.audio).play()
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <g fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
