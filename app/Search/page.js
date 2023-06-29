"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchDeyail() {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() => {
            router.push(`/`)
        }, 5000);
    },[])
  
  return (
    <div className="pt-20">
      <p className="p-10 tracking-[.25em] text-xl font-bold">
        Hasil Pencarian (0) <FontAwesomeIcon icon={faMagnifyingGlass} />
      </p>
    </div>
  );
}
