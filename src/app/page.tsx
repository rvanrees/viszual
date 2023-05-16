"use client";

import { Header } from "./components/Header";
import { Content } from "./components/Content";
export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-around bg-gradient-to-br from-white to-gray-100">
      <Header />
      <Content />
    </div>
  );
}
