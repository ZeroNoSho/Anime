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
  const [datamiror4, setDatamiror4] = useState();
  const [datamiror5, setDatamiror5] = useState();
  const [datazz, setDatazz] = useState("mirror_embed3");
  const [datazz5, setDatazz5] = useState(0);
  const [count, setCount] = useState();

  useEffect(() => {
    axios
      .get(`https://nya-otakudesu.vercel.app/api/v1/episode/${params.slug}`)
      .then((res) => {
        setData(res.data);
        setDatamiror4(res.data.mirror_embed1.straming);
        setDatamiror5(res.data.mirror_embed2.straming);
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
    if (datazz == "mirror_embed1") {
      const mega = datamiror4.find((ex) => ex.driver == val);
      setDatamiror2(mega.link);
    }
    if (datazz == "mirror_embed2") {
      const mega = datamiror5.find((ex) => ex.driver == val);
      setDatamiror2(mega.link);
    }
    if (datazz == "mirror_embed3") {
      const mega = datamiror.find((ex) => ex.driver == val);
      setDatamiror2(mega.link);
    }
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
          <p className="text-center lg:hidden pb-5">Miror :</p>
          <div className="grid grid-cols-3 text-center">
            <div>
              <p
                className="bg-slate-700 border cursor-pointer"
                onClick={() => {
                  datazz5 == 1 ? setDatazz5(0) : setDatazz5(1);
                  setDatazz("mirror_embed1");
                }}
              >
                360p
              </p>
              <div className={`${datazz5 == 1 ? " block " : "hidden"}`}>
                {datamiror4 &&
                  datamiror4.map((item, i) => (
                    <div key={i} onClick={OnclikEps} data-val={item.driver} className={`${i % 2 ? "bg-slate-800" : "bg-slate-900"} cursor-pointer`}>
                      <p data-val={item.driver}>{item.driver}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <p
                className="bg-slate-700 border cursor-pointer"
                onClick={() => {
                  datazz5 == 2 ? setDatazz5(0) : setDatazz5(2);
                  setDatazz("mirror_embed2");
                }}
              >
                480p
              </p>
              <div className={`${datazz5 == 2 ? " block " : "hidden"}`}>
                {datamiror5 &&
                  datamiror5.map((item, i) => (
                    <div key={i} data-val={item.driver} onClick={OnclikEps} className={`${i % 2 ? "bg-slate-800" : "bg-slate-900"} cursor-pointer`}>
                      <p data-val={item.driver}>{item.driver}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <p
                className="bg-slate-700 border cursor-pointer"
                onClick={() => {
                  datazz5 == 3 ? setDatazz5(0) : setDatazz5(3);
                  setDatazz("mirror_embed3");
                }}
              >
                720p
              </p>
              <div className={`${datazz5 == 3 ? " block " : "hidden"}`}>
                {datamiror &&
                  datamiror.map((item, i) => (
                    <div key={i} data-val={item.driver} onClick={OnclikEps} className={`${i % 2 ? "bg-slate-800" : "bg-slate-900"} cursor-pointer`}>
                      <p data-val={item.driver}>{item.driver}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-[765px]:pt-10 md:pt-5 mx-auto">
          <p className="text-center">Total List Episode ({data && data.list_episode.length})</p>
          <div className="grid grid-cols-4 p-5 gap-3 w-fit max-[765px]:m-auto max-[765px]:grid-cols-3 md:m-auto lg:mx-auto">
            {data &&
              data.list_episode.map((item, i) => (
                <Link key={i} href={`/Streaming/${item.list_episode_endpoint}`} className="text-base text-center p-3 rounded-xl border-slate-400 text-slate-400 border-2 cursor-pointer hover:text-white hover:border-white w-20 h-auto">
                  {data && data.list_episode.length - i}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
