"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "School",
    page: "school",
  },
  {
    label: "Research",
    page: "research",
  },
  {
    label: "Statues",
    page: "statues",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <header className='w-full mx-auto  px-4 sm:px-24 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600'>
      <div className='max-w-4xl mx-auto justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-end justify-between pb-6 md:pb-8 md:block'>
            <Link
              to='home'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(!navbar)}
            >
              <div className='flex items-end cursor-pointer'>
                {currentTheme === "dark" ? (
                  <Image
                    src='/logo_hand_b.png'
                    alt=''
                    width={80}
                    height={80}
                    className={`flex mt-8 md:block pb-0 mt-0`}
                  />
                ) : (
                  <Image
                    src='/logo_hand_w.png'
                    alt=''
                    width={80}
                    height={80}
                    className={`flex mt-8 md:block pb-0 mt-0`}
                  />
                )}

                <h2 className='text-3xl font-bold'>BINTA</h2>
              </div>
            </Link>
            <div className='md:hidden'>
              <button
                className='p-2 mt-6 text-gray-700 rounded-md outline-none focus:border-gray-300 focus:border dark:text-white dark:border-gray-600 dark:focus-border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-2 mt-6 md:block md:pb-0 md:mt-4 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className='items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0 cursor-pointer'>
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className='bg-slate-200 p-1 rounded-2xl'
                >
                  <RiSunLine size={25} color='black' />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className='bg-slate-200 p-1 rounded-2xl'
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
