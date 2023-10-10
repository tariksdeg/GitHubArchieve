"use client"
import { useState } from "react";
import Link from "next/link"; 
import Image from "next/image";
import { BsGrid3X3GapFill, AiOutlineSearch } from "react-icons/bs";
import NavLinks from "./Navlinks";
import HeaderButton from "../HeaderButton";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black   py-3 w-full ">
      <div className="flex items-center w-full text-xs font-medium justify-around">
        <div className="z-50   md:w-auto w-full flex justify-between"> 
          <Link href="/" className="md:cursor-pointer">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAABICAQAAADSOpYzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfmBwMNKhI4Vg/yAAABMklEQVR42u3aQW6DMBBAUZyT5eSFE/RInS5psOKx8Scq0n9ZNXjA+VE3VpZFkiRJkiShYo0rrYPPWyf3+3VYXZL138nTuudLxLVfVCmHrcXY+uqjteejPF7/XH5G1teXe+ebt1E/Q0IMCTEkxJAQQ0IMCTEkxJAQQ0IMCTEkxJCQ+4XcBq+Orj87n54oPlv3iWc2Xk3A55tzZs8rd+l55OT54PB5ZLrhMjd/2M3keeXufv/a/5QhIYaEGBJiSIghIYaEGBJiSIghIYaEGBJiSEgaMjtG+/B+tw/f8eVqlPq1X7xYlX5wfTXfPj/095Hv1tdfRPLJ/X3kvRkSYkiIISGGhBgSYkiIISGGhBgSYkiIISGGhDwuOOH7a+t4p//qmflticYrf946OS9JkiRJkk75BUgSur6QrNyYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA3LTAzVDEzOjQyOjE4KzAwOjAwKpbwNQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNy0wM1QxMzo0MjoxOCswMDowMFvLSIkAAAAASUVORK5CYII="
              alt="OKX - Önde Gelen Kripto Para Borsası"
              title="OKX"
              width={82}
              height={36}
            />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <BsGrid3X3GapFill name={`${open ? "close" : "menu"}`} />

          </div>
        </div>
        <ul className="md:flex  hidden uppercase items-center gap-8  font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>

        <div className="md:block hidden  ">
          <Link className="m-3" href="#">
            Giriş Yap
          </Link>
          <HeaderButton />
        </div>
        {/* <BsGrid3X3GapFill className="md:block hidden md:cursor-pointer " /> */}
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-black absolute   w-full top-0 overflow-y-auto bottom-0 py-20 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-2 inline-block text-black ">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <HeaderButton />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;























































