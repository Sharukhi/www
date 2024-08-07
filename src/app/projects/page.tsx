import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <main>
      <Navbar />
      <section className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center  space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Projects</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the projects that I&apos;ve worked on. <br />
                <i>(This page is still WIP)</i>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 place-items-center">
            <Link href={`https://github.com/sharukhi/khobor`} target="_blank">
              <div className="card card-compact bg-base-100 w-[325px] xl:w-96 lg:w-96 md:w-96 sm:w-96 border-2 border-[#0e1610] border-opacity-20">
                <figure>
                  <Image
                    src="/projects/khobor.jpg"
                    height={928}
                    width={548}
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title hover:underline">Khobor</h2>
                  <p className="text-base text-balance">
                    Khobor means news in Bengali. Khobor is an app that aims to
                    serve news based on Bangladesh with fewer distractions.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href={`https://github.com/sharukhi/drivesafe`}
              target="_blank"
            >
              <div className="card card-compact bg-base-100 w-[325px] xl:w-96 lg:w-96 md:w-96 sm:w-96 border-2 border-[#0e1610] border-opacity-20">
                <figure>
                  <Image
                    src="/projects/drivesafe.png"
                    height={928}
                    width={548}
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title hover:underline">Drivesafe</h2>
                  <p className="text-base text-balance">
                    Driver sleep detection and alerting system with python and
                    opencv
                  </p>
                </div>
              </div>
            </Link>
            <Link href={`https://github.com/sharukhi/oab`} target="_blank">
              <div className="card card-compact bg-base-100 w-[325px] xl:w-96 lg:w-96 md:w-96 sm:w-96 border-2 border-[#0e1610] border-opacity-20">
                <figure>
                  <Image
                    src="/projects/oab.png"
                    height={928}
                    width={548}
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title hover:underline">Oab</h2>
                  <p className="text-base text-balance">
                    Object Avoiding Robot using Arduino
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
