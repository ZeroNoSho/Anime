"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ListanimeHome2({ judul, API, Tinggi, ketuk, kol }) {
  const [data2, setData2] = useState();

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setData2(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [ketuk]);

  return (
    <div className={`${Tinggi} max-[765px]:px-0`}>
      <div className="text-xl pb-10 font-semibold tracking-[5px]">
        <Link href={`/${judul}`}>{`${judul} Anime`}</Link>
      </div>
      <div
        className={`grid gap-10 lg:grid-cols-6 md:grid-cols-3 max-[765px]:grid-cols-2`}
      >
        {data2 &&
          data2.completed.map(
            (item, i) =>
              i < 24 && ( // Tampilkan hanya jika indeks kurang dari 5
                <Link
                  key={i}
                  href={`/Detail/${item.endpoint
                    .replace("https:/otakudesu.cam/anime/", "")
                    .replace("/", "")}`}
                  className="image-container w-4/4 hover:text-xl hover:font-semibold"
                >
                  <Image
                    width={300}
                    height={150}
                    src={item.thumb}
                    alt="anime"
                    className="brightness-50 blur-[1px] hover:filter-none w-full m-auto rounded-md"
                  />
                  <div className="image-text2 hover:text-gray-400 cursor-pointer">
                    <p>{item.title}</p>
                  </div>
                </Link>
              )
          )}
      </div>
    </div>
  );
}
