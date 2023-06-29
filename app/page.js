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
      .get(`https://nya-otakudesu.vercel.app/api/v1/detail/konoba-subtitle-indonesia`)
      .then((res) => {
        setDataz(res.data.anime_detail);
      })
      .catch((err) => {
        console.log(err.message);
      });
    axios
      .get(`https://nya-otakudesu.vercel.app/api/v1/detail/ovrlod-sub-indo`)
      .then((res) => {
        setDataz2(res.data.anime_detail);
      })
      .catch((err) => {
        console.log(err.message);
      });
    axios
      .get(`https://nya-otakudesu.vercel.app/api/v1/detail/youjo-senki-subtitle-indonesia`)
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
    { datazs: dataz, foto: "/megumin.jpg", sipnopsis: "", trailer: "https://www.youtube.com/embed/h4dX58X6ln4" },
    { datazs: dataz2, foto: "/overlord.jpg", sipnopsis: "", trailer: "https://www.youtube.com/embed/ffTKNwHF70c" },
    { datazs: dataz3, foto: "/YoujoSenki.jpg", sipnopsis: "", trailer: "https://www.youtube.com/embed/JwaruTPKq9I" },
  ];

  return (
    <div>
      <div className="pt-20 pb-10 max-[765px]:pt-0 max-[765px]:pb-5">
        <div className="top-[40px] left-0 z-10 lg:w-1/2 lg:absolute md:flex md:w-full md:static md:bg-[url('/asda1.png')] max-[765px]:static max-[765px]:static max-[765px]:h-full max-[765px]:w-full max-[765px]:bg-[url('/asda1.png')]">
          <div className="bg-gradient-to-r from-[#484848b5] to-[#00000058] h-[700px] px-10 lg:py-[80px] md:py-[40px] max-[765px]:px-5 max-[765px]:py-[80px] max-[765px]:h-full">
            <div className=" w-[250px] bg-gradient-to-r from-[#000000b5] to-[#00000058] h-20 max-[765px]:hidden">
              <div className=" w-[4px] bg-[#000000] h-20">
                <h3 className="p-color-style py-7 px-5 ui-font-serif font-semibold text-xl md:px-2">
                  <Link href="/">
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
            <div>
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
              <p className="pt-10 max-[765px]:text-sm text-justify">
                {data[0].datazs && data[count].datazs.sinopsis[0]}
                <br />
                <br />
                <span className="text-xs">{data[0].datazs && data[count].datazs.detail[3]}</span>
                <br />
                <span className="text-xs">{data[0].datazs && data[count].datazs.detail[10]}</span>
              </p>
            </div>
            <div className="flex pt-[50px]">
              <Link href="/">
                <div className="px-5 py-3 bg-[#000000ce]">
                  <FontAwesomeIcon className="pr-3" icon={faPlay} />
                  Play Now
                </div>
              </Link>
              <Link href="/">
                <div className="px-5 py-3">More Detail</div>
              </Link>
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
        <div className="top-[200px] right-20 z-10 lg:absolute max-[765px]:hidden md:hidden lg:block">
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
        <Image className="brightness-100 rounded-md w-screen max-[765px]:hidden md:hidden lg:block" width={3000} height={300} src={`/asda1.png`} alt="kuso" />
      </div>
      <div>
        <ListanimeHome Tinggi={"px-10 py-[40px]"} judul={"On-going"} API={"https://otakudesu-anime-api.vercel.app/api/v1/ongoing/1"}></ListanimeHome>
        <Trending />
        <ListanimeHome2 Tinggi={"px-10 py-[40px]"} judul={"Completed"} API={"https://otakudesu-anime-api.vercel.app/api/v1/completed/1"}></ListanimeHome2>
      </div>
    </div>
  );
}
