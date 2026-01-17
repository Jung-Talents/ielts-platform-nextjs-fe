import Image from 'next/image'
import React from 'react'
import Button from './ui/Button/Button'

const FinalCta = () => {
  return (
    <section className='bg-(--ielts-red) p-8'>
        <div className='grid lg:grid-cols-2 xl:gap-20 2xl:gap-30 max-w-295 lg:h-127.5 mx-auto '>
          <div className='relative w-full max-sm:h-80 h-100 lg:h-full overflow-visible'>
              <div className='absolute left-1/2 -translate-x-[43%] top-1/2 -translate-y-1/2 z-0 w-50 h-50 sm:w-86.5 sm:h-86.5'><Image src="finalCTA/cta-ellipse-1.svg" alt="Man smiling on laptop" fill/></div>
              <div className='absolute left-1/2 -translate-x-[128%] top-1/2 translate-y-[15%] z-10 w-26 h-26 sm:w-45 sm:h-45'><Image src="finalCTA/cta-ellipse-2.svg" alt="Girl smiling, holding folder" fill/></div>
              <div className='absolute left-1/2 translate-x-[405%] top-1/2 translate-y-31 z-20'><Image src="finalCTA/star-3.svg" alt="Star icon" width={30} height={30}/></div>
              <div className='absolute left-1/2 -translate-x-[655%] top-1/2 translate-y-48 rotate-10 z-20'><Image src="finalCTA/star-3.svg" alt="Star icon" width={30} height={30}/></div>
              <div className='absolute left-1/2 -translate-x-[500%] top-1/2 -translate-y-40 rotate-30 z-20'><Image src="finalCTA/star-3.svg" alt="Star icon" width={30} height={30}/></div>
              <div className='absolute left-1/2 translate-x-[500%] top-1/2 -translate-y-48 rotate-30 z-20'><Image src="finalCTA/star-3.svg" alt="Star icon" width={30} height={30}/></div>
          </div>
          <div className='flex flex-col justify-center items-start'>
            <h4 className='text-white'>Let&apos;s make our dreams come true!</h4>
            <p className='text-white text-xl opacity-55 mb-5'>Học theo đúng định dạng đề thi, luyện tập hiệu quả, chấm điểm tức thì và tiết kiệm thời gian - vì chúng tôi hiểu bạn bận rộn.</p>
            <Button variant='primary-white' href='#' className='w-fit'>Đăng ký ngay</Button>
          </div>
        </div>
    </section>
  )
}

export default FinalCta
