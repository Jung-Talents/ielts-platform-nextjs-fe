import Image from 'next/image';

export default function IELTSBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* The background with the split */}
      <div
        className="absolute right-0 top-0 h-full bg-[#F5222D]"
        style={{
          width: '60%',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      {/* Main Component Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[600px] lg:min-h-[893px]">
        <div className="flex items-center justify-between h-full py-12 lg:py-0">

          {/* Left Side Container */}
          <div className="space-y-6 z-10 lg:pt-[235px] w-full lg:w-[45%] lg:pr-8">

            {/* Red Line */}
            <p
              className="text-[#FF2D38] text-base sm:text-lg lg:text-2xl leading-tight lg:leading-[30px]"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 400 }}
            >
              Luyện thi IELTS miễn phí tại nhà
            </p>

            {/* Heading */}
            <h1
              className="text-[#141414] text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[60px]"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Hiệu quả thực tế,
              <br />
              kết quả thực chứng
            </h1>

            {/* Description */}
            <p
              className="text-[#8C8C8C] text-sm sm:text-base lg:text-2xl leading-relaxed lg:leading-[30px] max-w-xl"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 400 }}
            >
              Nền tảng luyện thi IELTS trực tuyến giúp bạn
              luyện tập theo định dạng thật, kiểm tra kết
              quả tức thì và học mọi lúc – mọi nơi.
            </p>

            {/* Start Button */}
            <button
              className="w-full sm:w-auto px-6 sm:px-8 h-11 sm:h-12 bg-[#F5222D] hover:bg-[#d91d27] text-white rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl"
              style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: '16px',
                lineHeight: '32px',
                letterSpacing: '-0.6px',
                fontWeight: 400
              }}
            >
              Bắt đầu luyện ngay
            </button>
          </div>

          {/* Right Cards Section */}
          <div className="relative z-10 lg:pt-[185px] w-full lg:w-[50%] lg:ml-auto">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-[600px] lg:ml-auto">

              {/* Listening Card */}
              <div
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-200 min-h-[180px] sm:min-h-[200px] lg:min-h-[240px]"
                style={{ boxShadow: '0px 20px 50px rgba(18, 17, 39, 0.08)' }}
              >
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {/* Icon */}
                  <div className="relative w-9 sm:w-10 lg:w-[45px] h-7 sm:h-8 lg:h-9">
                    <Image
                      src="/icons/Listening.svg"
                      alt="Listening icon"
                      width={45}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#141414] text-sm sm:text-base leading-tight font-semibold capitalize"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    Bài Nghe
                  </h3>

                  {/* Details */}
                  <div className="flex flex-col gap-1 sm:gap-1.5 text-xs sm:text-sm lg:text-base">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Image
                        src="/icons/TestTimeClock.svg"
                        alt="40 phút"
                        width={100}
                        height={24}
                        className="h-5 sm:h-6 lg:h-6 w-auto"
                      />
                      <span
                        className="text-[#141414]"
                        style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 400}}
                      >
                        Tổng điểm:
                      </span>
                      <span
                        className="text-[#ECA13A] font-medium"
                        style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                      >
                        6.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button
                  className="mt-3 sm:mt-4 px-4 sm:px-5 lg:px-6 h-7 sm:h-8 lg:h-9 bg-white border border-[#FF2D38] rounded text-[#FF2D38] text-xs sm:text-sm hover:bg-[#FFF5F5] transition-colors duration-200"
                  style={{
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontWeight: 400
                  }}
                >
                  Tham gia
                </button>
              </div>

              {/* Reading Card */}
              <div
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-200 min-h-[180px] sm:min-h-[200px] lg:min-h-[240px]"
                style={{ boxShadow: '0px 20px 50px rgba(18, 17, 39, 0.08)' }}
              >
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {/* Icon */}
                  <div className="relative w-9 sm:w-10 lg:w-[45px] h-7 sm:h-8 lg:h-9">
                    <Image
                      src="/icons/Reading.svg"
                      alt="Reading icon"
                      width={45}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#141414] text-sm sm:text-base leading-tight font-semibold capitalize"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    Bài Đọc
                  </h3>

                  {/* Coming Soon */}
                  <p
                    className="text-[#BFBFBF] text-sm sm:text-base lg:text-lg"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 400 }}
                  >
                    (Sắp ra mắt)
                  </p>
                </div>
              </div>

              {/* Speaking Card */}
              <div
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-200 min-h-[180px] sm:min-h-[200px] lg:min-h-[240px]"
                style={{ boxShadow: '0px 20px 50px rgba(18, 17, 39, 0.08)' }}
              >
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {/* Icon */}
                  <div className="relative w-9 sm:w-10 lg:w-[45px] h-7 sm:h-8 lg:h-9">
                    <Image
                      src="/icons/Speaking.svg"
                      alt="Speaking icon"
                      width={45}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#141414] text-sm sm:text-base leading-tight font-semibold capitalize"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    Bài Nói
                  </h3>

                  {/* Coming Soon */}
                  <p
                    className="text-[#BFBFBF] text-sm sm:text-base lg:text-lg"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 400 }}
                  >
                    (Sắp ra mắt)
                  </p>
                </div>
              </div>

              {/* Writing Card */}
              <div
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-200 min-h-[180px] sm:min-h-[200px] lg:min-h-[240px]"
                style={{ boxShadow: '0px 20px 50px rgba(18, 17, 39, 0.08)' }}
              >
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {/* Icon */}
                  <div className="relative w-9 sm:w-10 lg:w-[45px] h-7 sm:h-8 lg:h-9">
                    <Image
                      src="/icons/Writing.svg"
                      alt="Writing icon"
                      width={45}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#141414] text-sm sm:text-base leading-tight font-semibold capitalize"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    Bài Viết
                  </h3>

                  {/* Coming Soon */}
                  <p
                    className="text-[#BFBFBF] text-sm sm:text-base lg:text-lg"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 400 }}
                  >
                    (Sắp ra mắt)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
