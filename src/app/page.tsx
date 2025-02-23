import Link from "next/link"

const page = () => {
  return (
    <>
      <div className="font-bold text-xl flex items-center justify-center">
        トップページ
      </div>
      <Link href="/sample1" className="text-lg underline text-blue-500 block">サンプルページ1</Link>
      <Link href="/sample2" className="text-lg underline text-blue-500 block">サンプルページ2</Link>
    </>
  )
}

export default page