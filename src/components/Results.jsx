import { useDictionary } from "../contexts/DictionaryContext";
import { ResultBody } from "./ResultBody";
import { ResultFooter } from "./ResultFooter";
import { ResultHeader } from "./ResultHeader";

function Results() {
  const { results } = useDictionary();

  return (
    <div id="results">
      {results.map((result, resultIndex) => (
        <div key={resultIndex} className="result">
          <ResultHeader result={result} />

          {result.meanings.map((block, blockIndex) => (
            <ResultBody
              key={blockIndex}
              block={block}
              blockIndex={blockIndex}
            />
          ))}

          <ResultFooter result={result} />
        </div>
      ))}
    </div>
  );
}

export default Results;
