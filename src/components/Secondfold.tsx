import Image from "next/image";
import Bannerbtm from '@/public/bannerdeliver.svg';
import Messagegum from '@/public/messagegun.svg';

const SecondFold = ()=>{
    return (
        <div className="flex w-full flex-col justify-center items-center gap-10 w-full">
            <Image src={Bannerbtm} alt="banner"></Image>
            <Image src={Messagegum} alt="banner"></Image> 
        </div>
    )
}

export default SecondFold;