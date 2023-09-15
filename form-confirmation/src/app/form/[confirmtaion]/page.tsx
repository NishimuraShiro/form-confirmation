"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Confirmation = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const mail = searchParams.get("mail");
  const router = useRouter();
  const handleClick = () => {
    router.push(`/form?name=${name}&mail=${mail}`);
  };
  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen">
      <h1 className="text-4xl pb-16">確認ページ</h1>
      <p className="text-3xl pb-2">名前：{name}</p>
      <p className="text-3xl pt-2">メールアドレス：{mail}</p>

      <div className="flex py-16 justify-between">
        <p className="text-3xl mr-9">
          <button
            className="bg-slate-800 text-white px-6 py-3 rounded-full"
            onClick={handleClick}
          >
            編集する
          </button>
        </p>
        <p className="text-3xl">
          <Link
            className=" bg-fuchsia-400 text-white px-6 py-3 rounded-full"
            href={"/"}
          >
            ホームへ戻る
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
