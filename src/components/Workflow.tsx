import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { workflowList } from '@/lib/data'
   

const Workflow = () => {
  return (
    <div className='px-[10%] py-16 mt-10 bg-white'>
        <Carousel
    opts={{
      align: "start",
    }}
    className="w-full "
  >
    <CarouselContent>
      {workflowList.map((item, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
          <div className="bg-white rounded-md h-64">
            <div className={`h-10 w-full ${item.color} rounded-t-md relative`}>
                <div className='h-10 w-10 bg-white absolute bottom-[-15px] left-3 rounded-md p-1'>
                    <img src={item.img} alt="" />
                </div>
            </div>

            <div className='p-3 pt-6'>
                <h5 className='mb-2 text-lg font-bold tracking-tight'>
                    {item.title}
                </h5>
                <p className='mb-3 font-normal text-gray-700'>
                    {item.desc}
                </p>
            </div>
        
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
    </div>
  )
}

export default Workflow