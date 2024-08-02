import Link from "next/link";
import { Crimson_Text } from "next/font/google";
import Image from "next/image";
import type { Metadata } from "next";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Work in progress",
};

export default function Wip() {
  return (
    <main className={crimsonText.className}>
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
