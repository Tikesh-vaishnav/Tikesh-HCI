import Image from "next/image";
import OrdersetImage from '@/public/Orderset.svg'
import OrderHeadText from '@/public/orderheadtext.svg';
const Order =() => {
    return (
        <div className="order p-10 bg-black flex px-11 justify-between w-full items-center m-auto">
            <Image src={OrdersetImage} alt="orderset" width={600}></Image>
            <div className="details flex flex-col gap-[15px]">
                <Image src={OrderHeadText} alt="Orderhead"></Image>
                <ul className="subtitle flex flex-col gap-4 text-[18px] text-[#808080]">
                1. Booster Professional Series Massager <br />
                2. 6 different massage heads (to suit all muscle groups <br /> and intensity preference) <br />
                3. Portable carry case with internal foam mould for safe <br /> and convenient storage <br /> 
                4. How-to-use instruction manual <br />
                5. USB-C charger cord <br />
                6. 18 Months Inclued Warranty <br />
                7. Free Express Delivery
                </ul>
            </div>
        </div>
    )
}

export default Order;