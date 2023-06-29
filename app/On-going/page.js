"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ListanimeHome from "@/components/Home/Ongoing";

export default function Ongoing() {
  const [dataz1, setDataz1] = useState(1);
  const [data2, setData2] = useState();
  useEffect(() => {
    axios
      .get(`https://otakudesu-anime-api.vercel.app/api/v1/ongoing/${dataz1}`)
      .then((res) => {
        setData2(res.data.ongoing);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dataz1]);

  console.log(data2 && data2.length);

  return (
    <div className="pt-20 px-7 max-[765px]:px-3 max-[765px]:pt-10">
      <ListanimeHome ketuk={dataz1} Tinggi={"px-10 py-[40px]"} judul={"On-going"} API={`https://otakudesu-anime-api.vercel.app/api/v1/ongoing/${dataz1}`} />
      <div className="flex px-10 text-center max-[765px]:px-0">
        <p
          className="previous basis-1/2 cursor-pointer"
          onClick={() => {
            dataz1 == 0 ? undefined : setDataz1(dataz1 - 1);
          }}
        >
          &laquo; Previous
        </p>
        <p className="next basis-1/2">{dataz1}</p>
        <p
          className="next basis-1/2 cursor-pointer"
          onClick={() => {
            data2 && data2.length == 25 ? setDataz1(dataz1 + 1) : undefined;
          }}
        >
          Next &raquo;
        </p>
      </div>
    </div>
  );
}
