"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Stream() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push(`/`);
    }, 5000);
  }, []);

  return (
    <div className="pt-20">
      <p className="p-10 tracking-[.25em] text-xl font-bold">Kosong</p>
    </div>
  );
}
