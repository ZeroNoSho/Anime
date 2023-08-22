"use client";
import axios from "axios";
import Listanime from "@/components/List";
import { useState, useEffect } from "react";

export default function List() {
  const [dataz, setDataz] = useState();
  useEffect(() => {
    axios
      .get(`https://otakudesu-anime-api.vercel.app/api/v1/anime-list`)
      .then((res) => {
        setDataz(res.data.manga_list);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="py-28 grid grid-cols-2">
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"#"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"A"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"B"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"C"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"D"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"E"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"F"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"G"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"H"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"I"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"J"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"K"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"L"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"M"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"N"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"O"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"P"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"Q"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"R"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"S"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"T"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"U"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"V"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"W"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"X"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"Y"}></Listanime>
        <Listanime daftarFilms={dataz && dataz} hurufDepans={"Z"}></Listanime>
      </div>
    </div>
  );
}
