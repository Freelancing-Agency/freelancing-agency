"use client";
import Link from "next/link";


const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/about`}
          className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
        >
          About Us
        </Link>

        <Link
          href={`/privacy`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Privacy Policy
        </Link>
        <Link
          href={`/disclaimer`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Disclaimer
        </Link>
        {/* <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Using Tailwind Components
        </Link> */}
      </li>
    </>
  );
};

export default SidebarLink;
