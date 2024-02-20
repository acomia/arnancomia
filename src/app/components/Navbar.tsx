import Link from "next/link";
import Image from "next/image";

import Logo from "@components/Logo";
import MenuButton from "@components/MenuButton";
import NavLink from "@components/NavLink";
import { links, ILinks } from "@utils/constants";

import github from "@assets/images/github.png";
import fb from "@assets/images/facebook.png";
import ig from "@assets/images/instagram.png";
import linkedin from "@assets/images/linkedin.png";

export default function Navbar() {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link: ILinks) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 justify-center">
        <Logo />
      </div>
      {/* Socials */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/acomia">
          <Image src={github} alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.facebook.com/arnancomia">
          <Image src={fb} alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/comiaarnan?igsh=MWlzdzg0MnE0dndldQ==">
          <Image src={ig} alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/arnan-comia">
          <Image src={linkedin} alt="" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        <MenuButton />
      </div>
    </div>
  );
}
