import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="foot" className="pt-20" data-aos="fade-up">
      <hr className="h-[4px] border-none bg-[#484848]" />
      <div className="flex justify-evenly gap-4 my-10">
        <div className="w-[250px]">
          <p className="font-semibold">About</p>
          <hr className="h-[4px] border-none bg-[#484848]" />
          <p className="text-xs"> SHIRO.NIME. – Download Batch dan Streaming Anime Subtitle Indonesia Lengkap.</p>
        </div>
        <div className="w-[250px]">
          <p className="font-semibold">Tips</p>
          <hr className="h-[4px] border-none bg-[#484848]" />
          <p className="text-xs">Ayo Simpan dan Bookmark halaman SHIRO.NIME. di HP kalian ya!</p>
        </div>
        <div className="w-[250px]">
          <p className="font-semibold">Info</p>
          <hr className="h-[4px] border-none bg-[#484848]" />
          <p className="text-xs">Untuk kenyamanan dan kemudahan silahkan gunakan Browser Google Chrome.</p>
        </div>
      </div>
      <div>
        <p className="text-center text-xs font-semibold bg-[#202020] text-[#6a6a6a] p-3">
          All rights reserved © Copyright 2023, SHIRO.NIME. Created With <FontAwesomeIcon icon={faHeart} style={{ color: "#7d7d7d" }} /> Powered by Next js & ZeroNoSho
        </p>
      </div>
    </div>
  );
}
