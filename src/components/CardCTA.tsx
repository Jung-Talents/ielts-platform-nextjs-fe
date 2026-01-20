import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardCTA: React.FC = () => {
  return (
    <div className="card-cta bg-red-500 p-10 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl">
            <div className="relative flex-shrink-0 w-[420px] h-[350px] m-10">
                <Image src="/images/CardCTA/cta-ellipse-1.0ac92645.svg" alt="CTA Image" width={300} height={300} className="absolute top-0 right-15"/>
                <Image src="/images/CardCTA/cta-ellipse-2.f597b8f9.svg" alt="CTA Image" width={150} height={150} className="absolute top-47 right-68"/>
                <Image src="/images/CardCTA/star-3.a6b54be6.svg" alt="Star" width={22} height={22} className="absolute top-13 right-0"/>
                <Image src="/images/CardCTA/star-3.a6b54be6.svg" alt="Star" width={22} height={22} 
                className="absolute top-0 right-15"/>
                <Image src="/images/CardCTA/star-3.a6b54be6.svg" alt="Star" width={22} height={22} 
                className="absolute top-81 right-92"/>
                <Image src="/images/CardCTA/star-3.a6b54be6.svg" alt="Star" width={22} height={22} 
                className="absolute top-60 right-20"/>
                <Image src="/images/CardCTA/star-3.a6b54be6.svg" alt="Star" width={22} height={22} 
                className="absolute top-8 right-89"/>
            </div>
            <div className="flex flex-col m-10 max-w-[420px]">
                <h1 className="text-3xl text-white font-bold">
                    Hành trình chinh phục IELTS
                </h1>
                <h1 className="text-3xl text-yellow-200 font-bold">
                    bắt đầu ngay hôm nay
                </h1>
                <h2 className="text-2xl text-white font-bold">
                    Và chạm đến band điểm mơ ước
                </h2>
                <p className="text-xl text-gray-100 my-4">
                    Học theo đúng định dạng đề thi, luyện tập hiệu quả, chấm điểm tức thì và tiết kiệm thời gian, vì chúng tôi hiểu bạn bận rộn.
                </p>
                <div className="block my-1 ">
                    <Link href="/auth/login">
                        <button className="bg-white border border-white text-red-500 font-bold py-4 px-6 rounded hover:bg-red-500 hover:text-white transition duration-400 ease-out-in cursor-pointer">
                            Đăng ký ngay
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CardCTA;