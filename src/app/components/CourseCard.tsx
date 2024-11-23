interface Course{
    image:string,
    pname:string,
    title:string,
    description:string,
}

export default function CourseCard({image, pname, title, description}:Course){
    return(
        <div className="w-[320px] md:w-[416px] h-[534px] bg-[#f6f6f6] rounded-[5px] flex-col justify-start items-start gap-6 flex">
                  <img
                    className="self-stretch h-[300px]"
                    src={image}
                  />
                  <div className="self-stretch h-[210px] px-4 pb-6 flex-col justify-start items-start gap-6 flex">
                    <div className="h-[122px] flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch justify-end items-start gap-2 inline-flex">
                        <div className="grow shrink basis-0 text-black text-sm font-semibold font-['Roboto'] leading-[21px]">
                          {pname}
                        </div>
                        <div className=" justify-evenly items-center gap-1 flex flex-row">
                      <div className="flex items-center gap-2">
                        <img
                          src="/icons/star.svg"
                          alt="Star"
                          className="w-[24px] h-[24px] object-cover text-[#d9d9d9] 
                          opacity-55"
                        />
                        <span className="text-black text-sm font-semibold font-['Roboto']">
                          5.0
                        </span>
                      </div>
                    </div>
                      </div>
                      <div className="self-stretch text-black text-2xl font-bold font-['Roboto'] leading-[33.60px]">
                        {title}
                      </div>
                      <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">
                        {description}
                      </div>
                    </div>
                    <div className="w-[382px] justify-start items-center gap-4 inline-flex">
                      <div className="px-5 py-2 rounded-[5px] border border-black justify-center items-center gap-2 flex">
                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                          Enroll Now
                        </div>
                      </div>
                      <div className="px-5 py-2 rounded-[5px] justify-center items-center gap-2 flex">
                        <div className="text-black text-base font-medium font-['Roboto'] leading-normal">
                          $400
                        </div>
                      </div>
                    </div>
                  </div>
                </div>            
    )
}