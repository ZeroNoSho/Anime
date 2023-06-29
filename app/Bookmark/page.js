"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Bookmark() {
  const [fav1, setFav1] = useState();
  const [del, setDel] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("Fav1")) !== null) {
      setFav1(JSON.parse(localStorage.getItem("Fav1")));
    }
  }, []);

  const clickDefault = (e) => {
    const slug = e.target.dataset.slug;
    if (del == 1) {
      const Fav1 = JSON.parse(localStorage.getItem("Fav1"));
      const index = fav1.findIndex((e) => e.slug === slug);
      if (index !== -1) {
        Fav1.splice(index, 1);
        localStorage.setItem("Fav1", JSON.stringify(Fav1));
        setFav1(Fav1);
      }
    } else {
      router.push(`/Detail/${slug}`);
    }
  };

  return (
    <div className="pt-20">
      <div className="max-[765px]:flex max-[765px]:p-5 max-[765px]:gap-2 max-[765px]:justify-between">
        <p className="font-bold text-center text-3xl p-10 max-[765px]:p-0 max-[765px]:text-xl">BookMark</p>
        <p className="font-bold text-right px-10 cursor-pointer max-[765px]:px-0" onClick={() => (del == 0 ? setDel(1) : setDel(0))}>
          <span className="bg-gray-800 py-2 px-10 rounded-lg hover:bg-gray-700 max-[765px]:px-5 max-[765px]:text-sm">Hapus</span>
        </p>
      </div>
      <div className="grid gap-10 p-10 lg:grid-cols-5 md:grid-cols-3 max-[765px]:grid-cols-2 max-[765px]:p-2">
        {fav1 &&
          fav1.map((item, i) => (
            <p key={i} className="image-container w-4/4 hover:text-xl hover:font-semibold" data-slug={item.slug} onClick={clickDefault}>
              <Image data-slug={item.slug} width={300} height={150} src={item.img} alt="anime" className={`brightness-50 blur-[1px] ${del == 0 ? "hover:filter-none" : ""} w-full m-auto rounded-md`} />
              <div className="image-text2 hover:text-gray-400 cursor-pointer">
                <p data-slug={item.slug}>{del == 0 ? item.title : <FontAwesomeIcon data-slug={item.slug} className="text-3xl font-[1100] hover:text-[#ff0000]" icon={faX} />}</p>
              </div>
            </p>
          ))}
      </div>
    </div>
  );
}
//href={}
