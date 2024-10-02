
import { inter } from "../fonts";
import jewerlyImg from '@/public/jewerly-image.png.jpg'
import Image from "next/image";


export const JewlryCard = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[351px] h-[471px] items-start justify-between relative bg-white">
      <Image className="relative flex-1 self-stretch w-full grow object-cover" alt="Jewerly image" src={jewerlyImg} />
      <div className="flex flex-col items-start pl-[29px] pr-9 pt-5 pb-2 relative flex-1 self-stretch w-full grow bg-white">
        <div className="flex flex-col items-start gap-21 relative flex-1 self-stretch w-full grow overflow-hidden">
          <div className="flex flex-col h-[201px] items-start gap-[22px]">
            <p className={`relative self-stretch [font-family:'Inter-Bold',Helvetica] font-normal text-transparent text-2xl tracking-[0.24px] leading-[29.1px]`}>
              <span className="font-bold text-[#401f0c] tracking-[0.06px]">
                Bronze Ring/Earring Set
                <br />
              </span>
            </p>
            <p className={`relative self-stretch [font-family:${inter.className}-Bold,Helvetica] font-medium text-transparent text-2xl tracking-[0.24px] leading-[29.1px]`}>
              <span className={`[font-family: ${inter.className}, Helvetica] text-black text-xs tracking-[0.01px] leading-[14.5px]`}>
                two sets of bronze earrings and two sets of male/female rings.
              </span>
            </p>
          </div>
        </div>
        <button className="relative self-stretch w-full h-12 bg-white rounded border border-solid border-[#401f0c] hover:bg-stone-400">
          <div className={`absolute w-[236px] h-9 top-1 left-6 [font-family: ${inter.className}, Helvetica] font-normal text-black text-xl text-center tracking-[-0.40px] leading-[34.2px]`}>
            Select
          </div>
        </button>
      </div>
    </div>
  );
};