function NotFound() {
  return (
    <div className="not-found text-center mt-[87px]">
      <span className="text-6xl">😕</span>
      <p className="text-neutral-600 text-hs font-bold text-center mt-[44px] mb-6">
        No Definitions Found
      </p>
      <p className="text-bm leading-6 text-center text-neutral-400">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

export default NotFound;
