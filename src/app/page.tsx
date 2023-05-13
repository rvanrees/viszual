"use client";

import Image from "next/image";
import logo from "./assets/logo_trans.png";
import { Footer } from "./components/Footers";

export default function Home() {
  return (
    <div className="h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Viszual</span>
              <Image width={40} height={40} src={logo} alt="Viszual" />
            </a>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://github.com/viszual"
              target="_blank"
              className="text-sm font-semibold leading-6 text-gray-800 hover:text-indigo transition"
            >
              GitHub <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate pt-0 lg:pt-8 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32 text-center">
          <div className="flex items-center justify-center ">
            <Image
              width={250}
              height={250}
              src={logo}
              alt="Viszual"
              className="p-8 mb-8"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
            Coding the{" "}
            <span className="rounded-md bg-indigo text-white p-1 px-4 hover:bg-pacific transition">
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
        <Footer />
      </div>
    </div>
  );
}
