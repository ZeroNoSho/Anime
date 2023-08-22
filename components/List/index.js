"use client";
import Link from "next/link";
import { useState } from "react";
export default function Listanime({ hurufDepans, daftarFilms }) {
  const [datazz5, setDatazz5] = useState("");
  
  function pilahFilm(daftarFilm, hurufDepan) {
    const filmYangCocok = [];

    daftarFilm &&
      daftarFilm.map((item) => {
        if (hurufDepans == "#") {
          if (!item.title.charAt(0).match(/[a-zA-Z]/)) {
            filmYangCocok.push(item);
          }
        }
        if (item.title.charAt(0).toLowerCase() == hurufDepan.toLowerCase()) {
          filmYangCocok.push(item);
        }
      });

    return filmYangCocok;
  }

  const filmHurufADepan = pilahFilm(daftarFilms, hurufDepans);

  return (
    <div className={`text-center ${datazz5 == hurufDepans ? " h-full " : "h-fit"}`}>
      <p
        className="bg-violet-200 border-2 cursor-pointer"
        onClick={() => {
          datazz5 == hurufDepans ? setDatazz5("") : setDatazz5(hurufDepans);
        }}
      >
        {hurufDepans}
      </p>
      <div className={`${datazz5 == hurufDepans ? "" : "hidden"}`}>
        {filmHurufADepan &&
          filmHurufADepan.map((item, i) => (
            <div key={hurufDepans + i} className={`py-2 text-xs border ${i % 2 ? "bg-violet-100" : "bg-violet-200"}`}>
              <Link href={`/Detail/${item.endpoint}`}>{item.title}</Link>
            </div>
          ))}
      </div>
    </div>
  );
}
