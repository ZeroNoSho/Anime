"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ListanimeHome2 from "@/components/Home/Complate";

export default function Completed() {
  const [dataz1, setDataz1] = useState(1);
  const [data2, setData2] = useState();
  useEffect(() => {
    axios
      .get(`https://otakudesu-anime-api.vercel.app/api/v1/completed/${dataz1}`)
      .then((res) => {
        setData2(res.data.completed);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dataz1]);

  return (
    <div className="pt-20 px-7 max-[765px]:px-3 max-[765px]:pt-10">
      <ListanimeHome2 ketuk={dataz1} Tinggi={"px-10 py-[40px]"} judul={"Completed"} API={`https://otakudesu-anime-api.vercel.app/api/v1/completed/${dataz1}`}></ListanimeHome2>
      <div className="flex px-10 text-center max-[765px]:px-0">
        <p
          className="previous basis-1/2 cursor-pointer"
          onClick={() => {
            dataz1 == 1 ? undefined : setDataz1(dataz1 - 1);
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
