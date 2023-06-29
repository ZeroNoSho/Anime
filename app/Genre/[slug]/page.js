"use client";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function GendreDetails({ params }) {
  const [dataz, setDataz] = useState();
  const [dataz1, setDataz1] = useState(1);
  console.log(dataz1);
  useEffect(() => {
    axios
      .get(`https://otakudesu-anime-api.vercel.app/api/v1/genres/${params.slug}/${dataz1}`)
      .then((res) => {
        setDataz(res.data.genreAnime);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dataz1]);
  return (
    <div className="pt-20">
      <div className="grid p-10 lg:grid-cols-3 md:grid-cols-2 md:p-2 max-[765px]:p-0 max-[765px]:grid-cols-1">
        {dataz &&
          dataz.map((item, i) => (
            <div key={i} className={`text-center border-2 p-5 flex ${i % 2 ? "bg-slate-800" : "bg-slate-900"}`}>
              <Image className="max-[765px]:h-40 max-[765px]:w-40" width={150} height={100} src={item.thumb} alt="anime"></Image>
              <div>
                <Link className="text-lg" href={`/Detail/${item.link}`}>
                  {item.title} (<FontAwesomeIcon icon={faStar} style={{ color: "#ffdd00" }} /> {item.rating})
                </Link>
                <p></p>

                <div className="text-justify pt-5 px-3">
                  <p className="scrollable-div text-xs">{item.sinopsis}</p>
                  <p className="text-xs pt-3">
                    Genre : {item.genre[0]}, {item.genre[1]}
                  </p>
                  <p className="text-xs">Total Episode : {item.episode}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex px-10 text-center pt-3 ">
        <p
          className="previous basis-1/2 cursor-pointer"
          onClick={() => {
            dataz1 == 1 ? undefined : setDataz1(dataz1 - 1);
          }}
        >
          &laquo; Previous
        </p>
        <p>{dataz1}</p>
        <p
          className="next basis-1/2 cursor-pointer"
          onClick={() => {
            dataz.length == 15 ? setDataz1(dataz1 + 1) : undefined;
          }}
        >
          Next &raquo;
        </p>
      </div>
    </div>
  );
}
