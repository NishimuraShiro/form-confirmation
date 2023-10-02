"use client";
import { useRouter, useSearchParams } from "next/navigation";

import React, {
  ChangeEvent,
  FormEvent,
  useRef,
  useState,
  useEffect
} from "react";

interface FormData {
  name: string;
  mail: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mail: ""
  });

  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const searchParams = useSearchParams();
  const paramsName = searchParams.get("name") || "";
  const paramsMail = searchParams.get("mail") || "";

  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // console.log(value);
    setFormData({ name: value, mail: formData.mail });
    // setName(mail);
  };

  const handleSubmit = async (e: FormEvent) => {
    // e.preventDefault();
    // const formDataParams = new URLSearchParams();
    // formDataParams.append("name", formData.name);
    // formDataParams.append("mail", formData.mail);
    // console.log(formData);
    // router.push(`/form/confirmation?${formDataParams.toString()}`);
  };

  // const nameInputRef = useRef<HTMLInputElement | null>(null);
  // useEffect(() => {
  //   if (nameInputRef) {
  //     nameInputRef.current?.focus();
  //   }
  // }, [nameInputRef]);

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center py-2 min-h-screen"
      >
        <h1 className="pb-8 text-3xl">Hello Next13</h1>
        <div className="flex pb-7 text-xl">
          <p>名前：</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            // ref={nameInputRef}
          />
        </div>
        <div className="flex pb-7 text-xl">
          <p>メールアドレス：</p>
          <p>{formData.name}</p>
          <input
            type="text"
            name="mail"
            value={formData.mail}
            onChange={handleInputChange}
            // ref={nameInputRef}
          />
        </div>

        <div className="flex pb-7 text-xl">
          <p>名前：</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={nameInputHandler}
            // ref={nameInputRef}
          />
        </div>
        <button className="text-xl text-slate-950 bg-yellow-200 px-8 py-4 rounded-lg transform transition-transform duration-100 hover:bg-red-200">
          確認ページへ
        </button>
      </form>
    </>
  );
};
export default Form;
