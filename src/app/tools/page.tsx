import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work in progress",
};

export default function Tools() {
  return (
    <main>
      <Navbar />
      <div className="mt-6">
        <div>
          <h3 className="font-bold ">Software</h3>
          <p>
            Software that I use daily and other things I recommend. Here’s a
            list of all of that stuff. <i>(This page is still WIP)</i>
          </p>
        </div>
        <div className="space-y-[-15px] ml-[-17px]">
          <Link href={`https://arc.net/`} target="_blank">
            <div className="flex items-center space-x-4   p-4 rounded-lg ">
              <Image
                className=""
                src={`/tools/arc.svg`}
                height={50}
                width={50}
                alt=""
              />
              <div>
                <h2 className="font-semibold">Arc</h2>
                <p className="text-sm text-gray-600">Web browser</p>
              </div>
            </div>
          </Link>
          <Link href={`https://spotify.com/`} target="_blank">
            <div className="flex items-center space-x-4  p-4 rounded-lg ">
              <Image
                className=""
                src={`/tools/spotify.svg`}
                height={50}
                width={50}
                alt=""
              />
              <div>
                <h2 className="font-semibold">Spotify</h2>
                <p className="text-sm text-gray-600">Music and podcasts</p>
              </div>
            </div>
          </Link>
          <Link href={`https://www.figma.com/`} target="_blank">
            <div className="flex items-center space-x-4  p-4 rounded-lg ">
              <Image
                className=""
                src={`/tools/figma.svg`}
                height={50}
                width={50}
                alt=""
              />
              <div>
                <h2 className="font-semibold">Figma</h2>
                <p className="text-sm text-gray-600">Design</p>
              </div>
              <div className=""></div>
            </div>
          </Link>
          <Link href={`https://www.jetbrains.com/pycharm/`} target="_blank">
            <div className="flex items-center space-x-4   p-4 rounded-lg ">
              <Image
                className=""
                src={`/tools/pycharm.svg`}
                height={50}
                width={50}
                alt=""
              />
              <div>
                <h2 className="font-semibold">Pycharm</h2>
                <p className="text-sm text-gray-600">IDE</p>
              </div>
            </div>
          </Link>
          <Link href={`https://code.visualstudio.com/`} target="_blank">
            <div className="flex items-center space-x-4   p-4 rounded-lg ">
              <Image
                className=""
                src={`/tools/vscode.svg`}
                height={50}
                width={50}
                alt=""
              />
              <div>
                <h2 className="font-semibold">Visual Studio Code</h2>
                <p className="text-sm text-gray-600">Code editor</p>
              </div>
            </div>
          </Link>
          <Link href={`https://github.com/microsoft/terminal`} target="_blank">
            <div className="flex items-center space-x-4   p-4 rounded-lg ">
              <Image
                className=""
                src={`/tools/terminal.svg`}
                height={50}
                width={50}
                alt=""
              />
              <div>
                <h2 className="font-semibold">Windows Terminal</h2>
                <p className="text-sm text-gray-600">Terminal emulator</p>
              </div>
            </div>
          </Link>
          <Link href={`https://httpie.io/`} target="_blank">
            <div className="flex items-center space-x-4   p-4 rounded-lg ">
              <Image
                className=""
                src={`/tools/httpie.svg`}
                height={50}
                width={50}
                alt=""
              />
              <div>
                <h2 className="font-semibold">Httpie</h2>
                <p className="text-sm text-gray-600">API platform</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
