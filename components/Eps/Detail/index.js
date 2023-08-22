"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { faBookmark, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Detail({ API, studio, img, episode_count, japanese_title, synopsis, status, rating, produser, genres, slug }) {
  const [fav1, setFav1] = useState();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("Fav1")) !== null) {
      const fav2 = JSON.parse(localStorage.getItem("Fav1"));
      const fav3 = fav2.find((e) => e.slug === slug);
      setFav1(fav3);
    }
  }, []);

  const clickDefault = () => {
    const fav = {
      title: API,
      slug: slug,
      img: img,
      dis: true,
    };

    let Fav1 = JSON.parse(localStorage.getItem("Fav1"));

    if (!Fav1) {
      Fav1 = [];
    }

    if (Fav1.length === 0) {
      Fav1.push(fav);
      localStorage.setItem("Fav1", JSON.stringify(Fav1));
    } else {
      const nama2 = Fav1.find((e) => e.title === API);
      if (!nama2) {
        Fav1.push(fav);
        localStorage.setItem("Fav1", JSON.stringify(Fav1));
      }
    }
    if (JSON.parse(localStorage.getItem("Fav1")) !== null) {
      const fav2 = JSON.parse(localStorage.getItem("Fav1"));
      const fav3 = fav2.find((e) => e.slug === slug);
      setFav1(fav3);
    }
  };

  return (
    <div className="flex pt-10 pb-10 max-[765px]:block max-[765px]:pt-0 max-[765px]:pb-[70px]">
      <Image className="m-auto pb-5" width={300} height={150} src={img || "/asda1.png"} alt="anime" />
      <div className="px-10 w-screen max-[765px]:px-[20px] max-[765px]:w-auto">
        <div className="flex justify-between max-[765px]:">
          <h1 className="lg:text-5xl max-[765px]:text-xl md:text-xl">
            {API} ({status})
            <br />
            <span className="lg:text-xl max-[765px]:text-xs md:text-lg">
              {japanese_title} (<FontAwesomeIcon icon={faStar} style={{ color: "#ffdd00" }} /> {rating})
            </span>
          </h1>
          <p
            className={`text-[40px] rounded-sm ui-font-serif p-color-style hover:text-violet-400 md:px-2 max-[765px]:text-[40px] max-[765px]:text-center max-[765px]:m-auto ${
              fav1 && fav1.dis == true ? "text-violet-400" : "text-violet-200"
            }`}
            onClick={clickDefault}
          >
            <FontAwesomeIcon icon={faBookmark} />
          </p>
        </div>

        <p className="lg:text-base pt-10 text-justify max-[765px]:text-base max-[765px]:pt-3 md:text-sm">{synopsis}</p>
        <br />
        <div className="flex max-[765px]:block">
          <div>
            <p className="text-xs">{episode_count}</p>
            <p className="text-xs lg:pr-10">{genres}</p>
          </div>
          <div className="pr-10">
            <p className="text-xs">{studio}</p>
            <p className="text-xs">{produser}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
