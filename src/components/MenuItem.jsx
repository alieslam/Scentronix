import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link
        className="mx-6 lg:mx-6 hover:text-red-900 hover:underline"
        href={address}
      >
        <Icon className="mx-6 text-2xl sm:hidden" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
