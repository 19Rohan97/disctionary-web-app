export function ResultBody({ block }) {
  return (
    <div className={`${block.partOfSpeech} flex flex-col gap-8 md:gap-10`}>
      <h3 className="text-hm font-bold italic dark:text-neutral-0">
        {block.partOfSpeech}
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
      </div>
    </div>
  );
}
