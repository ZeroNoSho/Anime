"use client";
import axios from "axios";
import Link from "next/link";
import Download from "@/components/Eps/Download";
import { useState, useEffect } from "react";

export default function DetailCari({ params }) {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [datamiror, setDatamiror] = useState();
  const [datamiror2, setDatamiror2] = useState();
  const [datamiror3, setDatamiror3] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`https://nya-otakudesu.vercel.app/api/v1/episode/${params.slug}`)
      .then((res) => {
        setData(res.data);
        setDatamiror(res.data.mirror_embed3.straming);
        const mega = datamiror.find((ex) => ex.driver == "mega ");
        setDatamiror3(mega.link);
      })
      .catch((err) => {
        console.log(err.message);
      });

    datamiror2 == undefined
      ? axios
          .get(`https://nya-otakudesu.vercel.app${datamiror3}`)
          .then((res) => {
            setData2(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          })
      : axios
          .get(`https://nya-otakudesu.vercel.app${datamiror2}`)
          .then((res) => {
            setData2(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });

    setTimeout(() => {
      setCount(1);
    }, 3000);
  }, [datamiror2, count, datamiror3]);

  const OnclikEps = (e) => {
    const val = e.target.dataset.val;
    const mega = datamiror.find((ex) => ex.driver == val);
    setDatamiror2(mega.link);
  };

  return (
    <div className="pt-32 pb-32 px-10 text-xl max-[765px]:px-3 max-[765px]:pt-20 max-[765px]:pb-0 md:pb-0">
      <p>{data && data.title}</p>
      <div className="lg:flex max-[765px]:block md:block">
        <div>
          <div className="py-10 mx-auto">
            {data2 == undefined ? (
              <div className={"lg:block lg:w-[800px] lg:h-[500] md:w-fit md:h-fit"}>
                <p className="text-2xl font-bold py-[100px] px-[20px] max-[765px]:py-20 max-[765px]:text-sm">Jika Tidak Muncul Episode Yang Mau Ditonton gunakan Miror Ke-2 Dan Seterusnya</p>
              </div>
            ) : (
              <iframe
                className={`max-[765px]:w-fit max-[765px]:h-auto max-[765px]:m-auto md:w-full md:h-[500px] lg:w-[800px] lg:h-[480px]`}
                width="1040"
                height="560"
                frameBorder="0"
                src={data2 && data2.streaming_url}
                allowFullScreen
              ></iframe>
            )}
          </div>
          <p className="text-center lg:hidden">Miror :</p>
          <div className="flex justify-between gap-5 scrollable-div2 max-[765px]:pt-5 md:pt-5">
            {datamiror &&
              datamiror.map((item, i) => (
                <div key={i} data-val={item.driver} onClick={OnclikEps} className="text-base w-40 text-center p-3 rounded-xl border-slate-400 text-slate-400 border-2 cursor-pointer hover:text-white hover:font-semibold hover:border-white">
                  <p data-val={item.driver}>{item.driver}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="max-[765px]:pt-10 md:pt-5 mx-auto">
          <p className="text-center">Total List Episode ({data && data.list_episode.length})</p>
          <div className="grid grid-cols-4 p-5 gap-3 w-fit max-[765px]:m-auto max-[765px]:grid-cols-3 md:m-auto lg:mx-auto">
            {data &&
              data.list_episode.map((item, i) => (
                <Link
                  key={i}
                  href={`/Streaming/${item.list_episode_endpoint}`}
                  className="text-base text-center p-3 rounded-xl border-slate-400 text-slate-400 border-2 cursor-pointer hover:text-white hover:border-white"
                >
                  {item.list_episode_title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
