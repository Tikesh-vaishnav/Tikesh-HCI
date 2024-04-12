import Image from "next/image";
import Headline from "@/public/Mainhead.svg";
import FoldAsset from "@/public/banner-right.svg";
import ImageRating from '@/public/details.svg'
import Buynow from "./Buynow";
import payoption from '@/public/Payoption.svg';
const Mainfold = () => {
  return (
    <div className='flex justify-between w-full p-10 pt-0 items-center'>
      <div className='leftcont'>
        <div className='flex flex-col gap-[20px]'>
          <Image src={Headline} alt='headline' width={400}></Image>
          <p className="subtext text-[#808080] text-[12px]">
          Integrated with A.I to ensure your massage pressure is <br /> never compromised
          </p>
          <Image src={ImageRating} alt="rating" className="my-5"></Image>
          <Buynow/>
          <Image src={payoption} alt="" className="my-10"></Image>
        </div>
      </div>
      <div className='rightcont'>
        <Image src={FoldAsset} alt='Foldasset' width={450}></Image>
      </div>
    </div>
  );
};

export default Mainfold;
