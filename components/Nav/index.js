"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookmark, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [open, setOpen] = useState();
  const router = useRouter();

  return (
    <div className="p-3 flex w-screen fixed gap-10 top-0 z-20 bg-[#000000e3] max-[765px]:py-50 max-[765px]:block md:block lg:flex">
      <div className="flex max-[765px]:flex max-[765px]:justify-between md:justify-between" data-aos="fade-right">
        <h3 className="p-color-style py-2 pl-5 ui-font-serif font-semibold text-xl max-[765px]:pl-3">
          <Link href="/">
            <span className="pr-2">S</span>
            <span className="pr-2">H</span>
            <span className="pr-2">I</span>
            <span className="pr-2">R</span>
            <span className="pr-2">O</span>
            <span className="pr-2">.</span>
            <span className="pr-2">N</span>
            <span className="pr-2">I</span>
            <span className="pr-2">M</span>
            <span className="pr-2">E</span>
            <span className="pr-2">.</span>
          </Link>
        </h3>
        <div className="text-2xl lg:hidden cursor-pointer my-auto px-5" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="p-color-style" />
        </div>
      </div>
      <div className={`${open ? "block" : "hidden"} lg:block w-inherit`}>
        <div className="lg:flex justify-between max-[765px]:block md:block">
          <div>
            <ul className="lg:flex max-[765px]:block max-[765px]:mx-0 md:block md:mx-0 mx-10 gap-10" data-aos="fade-left">
              <li className="text-slate-400 py-3 px-5 ui-font-serif font-medium text-base tracking-widest hover:text-white lg:px-3">
                <Link href="/">Home</Link>
              </li>
              <li className="text-slate-400 py-3 px-5 ui-font-serif font-medium text-base tracking-widest hover:text-white lg:px-3">
                <Link href="/List">Anime List</Link>
              </li>
              <li className="text-slate-400 py-3 px-5 ui-font-serif font-medium text-base tracking-widest hover:text-white lg:px-3">
                <Link href="/On-going">On-going</Link>
              </li>
              <li className="text-slate-400 py-3 px-5 ui-font-serif font-medium text-base tracking-widest hover:text-white lg:px-3">
                <Link href="/Completed">Completed</Link>
              </li>
              <li className="text-slate-400 py-3 px-5 ui-font-serif font-medium text-base tracking-widest hover:text-white lg:px-3">
                <Link href="/Genre">Genre</Link>
              </li>
            </ul>
          </div>
          <div className="flex pr-5 max-[765px]:pr-0 max-[765px]:pb-4 md:justify-between">
            <div className="mx-10 py-2 px-5 max-[765px]:mx-0 md:mx-0 ">
              <div className="search-input">
                <form>
                  <input
                    type="text"
                    placeholder="Search"
                    className="text-xs pl-5 w-52 h-8 border-2 rounded-2xl bg-transparent max-[765px]:w-[250px]"
                    onChange={(e) => {
                      router.push(`/Search/${e.target.value}`);
                    }}
                  />
                </form>
              </div>
            </div>
            <div className="py-2 px-5 lg:px-3">
              <Link href="/Bookmark" className="text-2xl text-slate-400 rounded-sm ui-font-serif p-color-style hover:text-white lg:px-2 ">
                <FontAwesomeIcon icon={faBookmark} className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
