"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ListanimeHome from "@/components/Home/Ongoing";
import ListanimeHome2 from "@/components/Home/Complate";
import Trending from "@/components/Home/trending";

export default function Home() {
  const [dataz, setDataz] = useState();
  const [dataz2, setDataz2] = useState();
  const [dataz3, setDataz3] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`https://nya-otakudesu.vercel.app/api/v1/detail/demount-play-sub-indo`)
      .then((res) => {
        setDataz(res.data.anime_detail);
      })
      .catch((err) => {
        console.log(err.message);
      });
    axios
      .get(`https://nya-otakudesu.vercel.app/api/v1/detail/kamisama-katsudou-sub-indo`)
      .then((res) => {
        setDataz2(res.data.anime_detail);
      })
      .catch((err) => {
        console.log(err.message);
      });
    axios
      .get(`https://nya-otakudesu.vercel.app/api/v1/detail/oshi-noko-sub-indo`)
      .then((res) => {
        setDataz3(res.data.anime_detail);
      })
      .catch((err) => {
        console.log(err.message);
      });

    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount >= 2 ? 0 : prevCount + 1));
    }, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const data = [
    { datazs: dataz, foto: "/megumin.jpg", eps: "dmdp-episode-1-sub-indo", detail: "demount-play-sub-indo", trailer: "https://www.youtube.com/embed/I0vXkPt_bNA" },
    { datazs: dataz2, foto: "/overlord.jpg", eps: "kamikatsu-episode-1-sub-indo", detail: "kamisama-katsudou-sub-indo", trailer: "https://www.youtube.com/embed/IDevmGYN-OU" },
    { datazs: dataz3, foto: "/YoujoSenki.jpg", eps: "ont-episode-1-sub-indo", detail: "oshi-noko-sub-indo", trailer: "https://www.youtube.com/embed/zntY4A4GPU0" },
  ];

  return (
    <div>
      <div className="pb-10 max-[765px]:pt-0 max-[765px]:pb-5">
        <div className="md:flex md:w-full md:static max-[765px]:static max-[765px]:static max-[765px]:h-full max-[765px]:w-full">
          <div className="flex h-[700px] px-10 lg:py-[50px] md:py-[40px] max-[765px]:px-5 max-[765px]:py-[80px] max-[765px]:h-full">
            <div>
              <div className=" w-[250px] bg-gradient-to-r from-[#cacaca] to-[#e5e5e5] h-20 max-[765px]:hidden">
                <div className=" w-[4px] bg-[#acabab] h-20">
                  <h3 className=" p-color-style py-7 px-5 ui-font-serif font-semibold text-xl md:px-2">
                    <Link href="/" className="text-violet-400">
                      <span className="pr-2">S</span>
                      <span className="pr-2">H</span>
                      <span className="pr-2">I</span>
                      <span className="pr-2">R</span>
                      <span className="pr-2">O</span>
                      <span className="pr-2">.</span>
                      <span className="pr-2">N</span>
                      <span className="pr-2">I</span>
                      <span className="pr-2">M</span>
                      <span className="pr-2">E</span>
                      <span className="pr-2">.</span>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="lg:h-[380px]">
                <h1 className="lg:text-5xl pt-10 max-[765px]:text-2xl max-[765px]:pt-0 md:text-2xl">{data[0].datazs && data[count].datazs.title}</h1>
                <h1 className="text-xl max-[765px]:text-lg">{data[0].datazs && data[count].datazs.detail[1]}</h1>
                <div className="md:hidden lg:hidden max-[765px]:pt-10">
                  <iframe
                    className="max-[765px]:w-full max-[765px]:h-full md:w-fit md:h-fit"
                    width="560"
                    height="315"
                    src={data[0].trailer && data[count].trailer}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="pt-10 max-[765px]:text-sm text-justify ">
                  {data[0].datazs && data[count].datazs.sinopsis[0]}
                  <br />
                  <br />
                  <span className="text-xs">{data[0].datazs && data[count].datazs.detail[3]}</span>
                  <br />
                  <span className="text-xs">{data[0].datazs && data[count].datazs.detail[10]}</span>
                </p>
              </div>
              <div className="flex pt-[50px]">
                <Link href={`/Streaming/${data[count].eps}`}>
                  <div className="px-5 py-3 bg-[#8b5cf6] rounded-md text-white">
                    <FontAwesomeIcon className="pr-3" icon={faPlay} />
                    Play Now
                  </div>
                </Link>
                <Link href={`/Detail/${data[count].detail}`}>
                  <div className="px-5 py-3 ">More Detail</div>
                </Link>
              </div>
            </div>
            <div className="top-[200px] max-[765px]:hidden md:hidden lg:block pl-20 m-auto">
              <iframe
                width="560"
                height="315"
                src={data[0].datazs && data[count].trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="lg:absolute p-5 my-auto max-[765px]:hidden md:block lg:hidden md:w-full h-full">
            <iframe
              width="300"
              height="180"
              src={data[0].datazs && data[count].trailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div>
        <ListanimeHome Tinggi={"px-10 py-[40px]"} judul={"On-going"} API={"https://otakudesu-anime-api.vercel.app/api/v1/ongoing/1"}></ListanimeHome>
        <Trending />
        <ListanimeHome2 kol={"18"} Tinggi={"px-10 py-[40px]"} judul={"Completed"} API={"https://otakudesu-anime-api.vercel.app/api/v1/completed/1"}></ListanimeHome2>
      </div>
    </div>
  );
}
