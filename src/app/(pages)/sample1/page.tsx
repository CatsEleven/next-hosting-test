import Image from "next/image"
import nextConfig from "../../../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "/images";

const page = () => {
    return (
        <>
            <div className="font-bold text-xl flex items-center justify-center">
                サンプル1ページ
            </div>
            <Image src={`${BASE_PATH}/penguin.jpeg`} width={200} height={100} alt="animal" />
            <Image src={`${BASE_PATH}/car_animals.png`} width={200} height={100} alt="animal" />
        </>

    )
}

export default page