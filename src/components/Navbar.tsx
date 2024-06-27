import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 w-full bg-slate-900/50 z-30 backdrop-blur-md">
      <div className="relative container py-6 flex justify-between transition-all">
        <Logo />
        <Nav />
        <MobileNav/>
      </div>
    </header>
  );
}
