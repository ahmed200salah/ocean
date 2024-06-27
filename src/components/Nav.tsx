import Link from "next/link";
export default function Nav() {
  return (
    <nav className="hidden md:flex text-base gap-8 capitalize font-bold text-[#FDFFD2]">
      <Link
        className="nav-link hover:text-white transition-colors"
        href={"#features"}
      >
        features
      </Link>
      <Link
        className="nav-link hover:text-white transition-colors"
        href={"#pricing"}
      >
        pricing
      </Link>
      <Link
        className="nav-link hover:text-white transition-colors"
        href={"#Testimonials"}
      >
        Testimonials
      </Link>
      <Link
        className="nav-link hover:text-white transition-colors"
        href={"#Contact"}
      >
        Contact
      </Link>
    </nav>
  );
}
