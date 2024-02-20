"use client";

import { ILinks } from "@utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  link: ILinks;
}

export default function NavLink({ link }: IProps) {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && "bg-black text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}
