import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar mt-[-20px] bg-base-100 max-w-[100%]">
      <div className="flex-1">
        <Link href={"/"}>
          <h1 className="ml-[-8px]">Sharukhi</h1>
        </Link>
      </div>
      <div className="flex-none mr-[-27px]">
        <ul className="menu menu-horizontal  text-base">
          <li className="mr-[-15px]">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="mr-[-15px]">
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
