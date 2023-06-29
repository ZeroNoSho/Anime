"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Trending() {
  const [dataz, setDataz] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge/trending/anime`)
      .then((res) => {
        setDataz(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount >= 9 ? 0 : prevCount + 1));
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="image-container px-10 pb-10 pt-10 max-[765px]:px-0">
      <Image className="brightness-100 rounded-md w-screen max-[765px]:h-[150px]" width={3000} height={200} src={dataz == undefined ? `/megumin.jpg` : dataz.data[count].attributes.coverImage.large} alt="kuso" />
      <p className="image-text text-3xl max-[765px]:text-xl">Anime Trending</p>
    </div>
  );
}

//dataz = undefined ? `/megumin.jpg` : dataz.data[count].attributes.coverImage.large
