"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Download({ slug }) {
  const [datazz1, setDatazz1] = useState();
  const [datazz2, setDatazz2] = useState();
  const [datazz3, setDatazz3] = useState();
  const [datazz4, setDatazz4] = useState();
  const [datazz5, setDatazz5] = useState(0);

  useEffect(() => {
    axios
      .get(`https://otakudesu-anime-api.vercel.app/api/v1/batch/${slug}`)
      .then((res) => {
        setDatazz1(res.data.batch.title);
        setDatazz2(res.data.batch.download_list.low_quality.download_links);
        setDatazz3(res.data.batch.download_list.medium_quality.download_links);
        setDatazz4(res.data.batch.download_list.high_quality.download_links);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [slug]);

  return (
    <div className={`${datazz1 == "" ? "hidden" : ""} px-5 pb-10`}>
      <p className="max-[765px]:text-sm">Download {datazz1 && datazz1}</p>
      <div className="flex grid grid-cols-3 mx-auto justify-around">
        <div className={`basis-1/4 text-center bg-slate-800 cursor-pointer ${datazz5 == 1 ? "" : "h-fit"}`}>
          <p
            className="text-base p-2 max-[765px]:text-sm max-[765px]:p-1"
            onClick={() => {
              datazz5 == 1 ? setDatazz5(0) : setDatazz5(1);
            }}
          >
            360p
          </p>
          {datazz2 &&
            datazz2.map((item, i) => (
              <div key={i} className={`py-2 text-xs ${i % 2 ? "bg-slate-800" : "bg-slate-900"} ${datazz5 == 1 ? "" : "hidden"}`}>
                <Link href={item.link}>{item.host}</Link>
              </div>
            ))}
        </div>
        <div className={`basis-1/4 text-center bg-slate-900 cursor-pointer ${datazz5 == 2 ? "" : "h-fit"}`}>
          <p
            className="text-base p-2 max-[765px]:text-sm max-[765px]:p-1"
            onClick={() => {
              datazz5 == 2 ? setDatazz5(0) : setDatazz5(2);
            }}
          >
            480p
          </p>
          {datazz3 &&
            datazz3.map((item, i) => (
              <div key={i} className={`py-2 text-xs ${i % 2 ? "bg-slate-900" : "bg-slate-800"} ${datazz5 == 2 ? "" : "hidden"}`}>
                <Link href={item.link}>{item.host}</Link>
              </div>
            ))}
        </div>
        <div className={`basis-1/4 text-center bg-slate-800 cursor-pointer ${datazz5 == 3 ? "" : "h-fit"}`}>
          <p
            className="text-base p-2 max-[765px]:text-sm max-[765px]:p-1"
            onClick={() => {
              datazz5 == 3 ? setDatazz5(0) : setDatazz5(3);
            }}
          >
            1080p
          </p>
          {datazz4 &&
            datazz4.map((item, i) => (
              <div key={i} className={`py-2 text-xs ${i % 2 ? "bg-slate-800" : "bg-slate-900"}  ${datazz5 == 3 ? "" : "hidden"}`}>
                <Link className="" href={item.link}>
                  {item.host}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
