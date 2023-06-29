"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Genre() {
  const [dataz, setDataz] = useState();
  useEffect(() => {
    axios
      .get(`https://otakudesu-anime-api.vercel.app/api/v1/genres`)
      .then((res) => {
        setDataz(res.data.genres);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="pt-[100px] max-[765px]:pt-[80px]">
      <p className="text-center text-3xl font-bold max-[765px]:pb-5">Gendre List</p>
      <div className="grid grid-cols-4 p-10 max-[765px]:grid-cols-3 max-[765px]:p-3">
        {dataz &&
          dataz.map((item, i) => (
            <Link key={i} href={`Genre/${item.endpoint}`} className={`text-center border-2 p-5 max-[765px]:p-[10px] max-[765px]:text-xs ${i % 2 ? "bg-slate-800" : "bg-slate-900"}`}>
              {item.genre}
            </Link>
          ))}
      </div>
    </div>
  );
}
