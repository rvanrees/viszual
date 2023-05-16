import Image from "next/image";
import logo from "../assets/logo_trans.png";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between py-4 px-8"
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
  );
}
