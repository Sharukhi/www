import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()}
          <Link href={`/`} className="hover:underline">
            Sharukhi 
          </Link>
          All right reserved.
        </p>
      </aside>
    </footer>
  );
}
