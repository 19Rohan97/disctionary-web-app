export function ResultBody({ block }) {
  return (
    <div className={`${block.partOfSpeech} flex flex-col gap-8 md:gap-10`}>
      <h3 className="text-hm font-bold italic dark:text-neutral-0 flex items-center gap-5">
        <span>{block.partOfSpeech}</span>
        <hr className="w-full border-neutral-300 dark:border-neutral-500" />
      </h3>

      <div>
        <h4 className="text-base md:text-hs text-neutral-400 mb-4 md:mb-6">
          Meaning
        </h4>
        <ul className="list-disc list-outside ps-4 md:ps-10">
          {block.definitions.map((define, defineIndex) => (
            <li
              key={defineIndex}
              className="mb-3 last:mb-0 text-[15px] md:text-[18px] dark:text-neutral-0"
            >
              <span>{define.definition}</span>
              {define.example && (
                <span className="example">"{define.example}"</span>
              )}
            </li>
          ))}
        </ul>

        {block.synonyms.length > 0 && (
          <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-6">
            <h4 className="text-base md:text-hs text-neutral-400">Synonyms</h4>
            <p className="text-purple-900 font-bold text-base md:text-hs">
              {block.synonyms.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
