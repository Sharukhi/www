import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work in progress",
};

export default function Wip() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center overflow-y-hidden">
        <div className="text-center grid grid-cols-1 place-items-center">
          <Image
            className=""
            height={350}
            width={350}
            src="/svg/wip.svg"
            alt=""
          />
          <h1>Work in progress</h1>
          <br />
          <Link className="btn " href={`/`}>
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
