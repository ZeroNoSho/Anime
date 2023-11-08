"use client";
import axios from "axios";
import Link from "next/link";
import Detail from "@/components/Eps/Detail";
import { useState, useEffect } from "react";
import Download from "@/components/Eps/Download";

export default function DetailCari({ params }) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://otakudesu-anime-api.vercel.app/api/v1/detail/${params.slug}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [params]);

  return (
    <div className="py-20 px-10 text-xl max-[765px]:px-3">
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
      <Download slug={data && data.episode_list[0].episode_endpoint}></Download>
      <p>{data && data.anime_detail.title}</p>
      <div className="grid grid-cols-4 py-5 gap-5 w-fit max-[765px]:m-auto max-[765px]:grid-cols-2">
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
                  href={`/Streaming/${item.episode_endpoint
                    .replace("https:/otakudesu.cam/anime/", "")
                    .replace("/", "")}`}
                  className="lg:h-20 text-base text-center p-3 rounded-xl border-violet-200 border-2 cursor-pointer hover:font-semibold hover:border-violet-400"
                >
                  {item.episode_title}
                </Link>
              )
            ) : (
              <Link
                key={i}
                id={i}
                href={`/Streaming/${item.episode_endpoint
                  .replace("https:/otakudesu.cam/anime/", "")
                  .replace("/", "")}`}
                className="lg:h-20 text-base text-center p-3 rounded-xl border-violet-200 border-2 cursor-pointer hover:font-semibold hover:border-violet-400"
              >
                {item.episode_title}
              </Link>
            )
          )}
      </div>
    </div>
  );
}
