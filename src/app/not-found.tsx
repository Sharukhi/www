import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="container ml-[-15px] mt-[-30px] mx-auto px-4 py-8">
        <div className="flex items-center justify-center text-center">
          <div className="pt-20">
            <h2 className="text-[26px] pb-1">404 – Not found</h2>
            <p className="text-[16.6px] pb-4">The requested url was not found <br /> on the server</p>
            <div>
              <Link href="/" className="btn" >Go to home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
