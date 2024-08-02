import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center text-[#0e1610]  p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <Link href={`/`}>Sharukhi</Link> All right reserved.
        </p>
      </aside>
    </footer>
  );
}
