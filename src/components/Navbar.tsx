import Image from "next/image"
import Logo from '@/public/logo.svg';

const Navbar = () => {
    return (
        <div className="flex items-center px-10 w-full py-10">
            <Image src={Logo} alt="logo"></Image>
        </div>
    )
}

export default Navbar;