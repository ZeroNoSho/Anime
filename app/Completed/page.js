"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Completed() {
  const [dataz1, setDataz1] = useState(1);
  const [data2, setData2] = useState();
  const [hidden, setHidden] = useState(0);
  useEffect(() => {
    axios
      .get(`https://otakudesu-anime-api.vercel.app/api/v1/completed/${dataz1}`)
      .then((res) => {
        data2 == null ? setData2(res.data.completed) : setData2([...data2, ...res.data.completed]);
        res.data.ongoing.length == 0 ? setHidden(1) : "";
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dataz1]);

  return (
    <div className="pt-10 pb-5 px-7 max-[765px]:px-3 max-[765px]:py-10">
      <div className={`max-[765px]:px-0`}>
        <div className="text-xl pb-10 font-semibold tracking-[5px]">
          <Link href={`/Completed`}>{`Completed Anime`}</Link>
        </div>
        <div className={`grid gap-10 lg:grid-cols-5 md:grid-cols-3 max-[765px]:grid-cols-2`}>
          {data2 &&
            data2.map((item, i) => (
              <Link key={i} href={`/Detail/${item.endpoint}`} className="image-container w-4/4 hover:text-xl hover:font-semibold">
                <Image width={300} height={150} src={item.thumb} alt="anime" className="brightness-50 blur-[1px] hover:filter-none w-full m-auto rounded-md" />
                <div className="image-text2 hover:text-gray-400 cursor-pointer">
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div
        className={`pt-10 px-10 text-center max-[765px]:px-0 cursor-pointer ${hidden == 1 ? "hidden" : "block"}`}
        onClick={() => {
          setDataz1(dataz1 + 1);
        }}
      >
        Load More
      </div>
    </div>
  );
}
