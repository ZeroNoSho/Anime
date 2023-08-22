import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  return (
    <div id="foot" className="pt-5" data-aos="fade-up">
      <div>
        <p className="h-[42px] text-center text-xs font-semibold bg-[#a781ff7c] text-[#6a6a6a] p-3">
          All rights reserved © Copyright 2023, SHIRO.NIME. Created With <FontAwesomeIcon icon={faHeart} style={{ color: "#7d7d7d" }} /> Powered by Next js & ZeroNoSho
        </p>
      </div>
    </div>
  );
}
