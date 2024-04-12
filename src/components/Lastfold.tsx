import Image from "next/image";
import LastFoldImage from '@/public/recovery-banner.svg'

const LastFold = () => {
    return (
        <div className="lastfol flex w-full">
            <Image src={LastFoldImage} alt="Last fold"></Image>
        </div>
    )
}

export default LastFold;