import { projects } from "../data/projects";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Projects() {
  return (
    <main>
      <Navbar />
      <div className="container ml-[-15px] mt-[-30px] mx-auto px-4 py-8">
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.id}>
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-2 font-normal text-justify">
                {project.description}
              </p>

              <Link
                href={project.link}
                target="_blank"
                className="hover:underline font-medium"
              >
                Github
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

{
  /*
  


export default function Projects() {
  return (
    <main>
      <Navbar />
      <div className="hidden">
        <h1 className="font-bold text-2xl">Projects</h1>
      </div>
      <div>
        <ul>
          <li></li>
          <li>a</li>
          <li>a</li>
        </ul>
      </div>
    </main>
  );
}
  */
}
