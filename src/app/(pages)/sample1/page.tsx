import Image from "next/image"

const page = () => {
    return (
        <>
            <div className="font-bold text-xl flex items-center justify-center">
                サンプル1ページ
            </div>
            <Image src="penguin.jpeg" width={200} height={100} alt="animal" />
            <Image src="./carAnimals.png" width={200} height={100} alt="animal" />
        </>

    )
}

export default page