"use client";
import axios from "axios";
import Link from "next/link";
import Detail from "@/components/Eps/Detail";
import { useState, useEffect } from "react";

export default function DetailCari({ params }) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://otakudesu-anime-api.vercel.app/api/v1/detail/${params.slug}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [params]);

  return (
    <div className="pt-20 px-10 text-xl max-[765px]:px-3">
      <Detail
        status={data && data.anime_detail.detail[5]} //6
        episode_count={data && data.anime_detail.detail[6]}
        studio={data && data.anime_detail.detail[9]}
        genres={data && data.anime_detail.detail[10]}
        produser={data && data.anime_detail.detail[3]}
        rating={data && data.anime_detail.detail[2]} //5
        API={data && data.anime_detail.title} //3
        img={data && data.anime_detail.thumb} //1
        japanese_title={data && data.anime_detail.detail[1]} //4
        synopsis={data && data.anime_detail.sinopsis[0]} //2
        slug={params.slug}
      />
      <div>
        <p className="p-5">{data && data.anime_detail.title}</p>
      </div>
      <div className="grid grid-cols-4 p-5 gap-3 w-fit max-[765px]:m-auto max-[765px]:grid-cols-2 md:m-auto lg:mx-auto">
        {data &&
          data.episode_list.map((item, i) =>
            data && data.anime_detail.detail[5] == "Status: Completed" ? (
              i === 0 ? (
                ""
              ) : i == data.episode_list.length - 1 ? (
                ""
              ) : (
                <Link
                  key={i}
                  href={`http://localhost:3000/Streaming/${item.episode_endpoint}`}
                  className="lg:h-20 text-base text-center p-3 rounded-xl border-slate-400 text-slate-400 border-2 cursor-pointer hover:text-white hover:font-semibold hover:border-white"
                >
                  {item.episode_title}
                </Link>
              )
            ) : (
              <Link
                key={i}
                id={i}
                href={`http://localhost:3000/Streaming/${item.episode_endpoint}`}
                className="lg:h-20 text-base text-center p-3 rounded-xl border-slate-400 text-slate-400 border-2 cursor-pointer hover:text-white hover:font-semibold hover:border-white"
              >
                {item.episode_title}
              </Link>
            )
          )}
      </div>
    </div>
  );
}
