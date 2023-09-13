import Link from "next/link";

export default function Home() {
  return (
    <div className="text-5xl flex flex-col items-center justify-center min-h-screen">
      {/* Next.js@12 */}
      {/* <Link href={"form"}>
        <a>Formぺーじへ飛ぶ</a>
      </Link> */}
      {/* Next.js@13 */}
      <Link href={"form"}>Formぺーじへ飛ぶ</Link>
    </div>
  );
}
