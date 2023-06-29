"use client";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons";

export default function SearchDeyail({ params }) {
  const [dataz, setDataz] = useState();
  useEffect(() => {
    axios
      .get(`https://otakudesu-anime-api.vercel.app/api/v1/search/${params.slug}`)
      .then((res) => {
        setDataz(res.data.search);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="pt-20">
      <p className="p-10 tracking-[.25em] text-xl font-bold max-[765px]:p-3 max-[765px]:text-lg"> 
        Hasil Pencarian ({dataz && dataz.length}) <FontAwesomeIcon icon={faMagnifyingGlass} />
      </p>
      <div className="grid grid-cols-2 gap-10 p-10 max-[765px]:grid-cols-1 max-[765px]:p-3">
        {dataz &&
          dataz.map((item, i) => (
            <div className="flex gap-3" key={i}>
              <Image width={150} height={100} src={item.thumb} alt="anime" className="max-[765px]:h-52 max-[765px]:w-52"></Image>
              <div>
                <Link href={`/Detail/${item.endpoint}`} className="text-2xl font-bold max-[765px]:text-sm">
                  {item.title}
                </Link>
                <div className="py-5 max-[765px]:text-sm">
                  <p>
                    <span className="font-bold">Genres</span> : {item.genres[0].name}
                    {item.genres[1] == undefined ? "" : `, ${item.genres[1].name}`} {item.genres[2] == undefined ? "" : `, ${item.genres[2].name}`}
                  </p>
                  <p>
                    <span className="font-bold">Status</span> : {item.status[0]}
                  </p>
                  <p>
                    <span className="font-bold">Rating</span> : ({item.rating} <FontAwesomeIcon icon={faStar} style={{ color: "#ffdd00" }} />)
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
