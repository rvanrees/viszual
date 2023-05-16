import Lottie from "lottie-react";
import animation from "../assets/test.json";

export function Content() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Lottie className="mb-8" animationData={animation} />
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
        Coding the{" "}
        <span className="rounded-md bg-indigo text-white py-2 px-4 hover:bg-pacific transition">
          <a href="https://en.wikipedia.org/wiki/Future" target="_blank">
            future
          </a>
        </span>{" "}
        .
      </h1>
      <div className="mt-16 flex items-center justify-center gap-x-6">
        <a
          href="mailto:mail@viszual.io"
          className="rounded-md bg-pacific px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo transition"
        >
          Get started
        </a>
        <a
          href="https://twitter.com/viszualio"
          target="_blank"
          className="text-sm font-semibold leading-6 text-gray-800 hover:text-indigo transition"
        >
          Stay tuned <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
