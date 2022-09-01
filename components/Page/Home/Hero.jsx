import Image from "next/dist/client/image"

// const firstSetIcons = [
//     '/icons/hotel.png',
//     '/icons/pay.png',
//     '/icons/group.png',

// ]

const firstSetIcons = [
    {
        link: '/icons/hotel.png',
        title: 'PHYSICAL NFTHOTEL & HOSTEL'
    },
    {
        link: '/icons/pay.png',
        title: 'CRYPTO BOOKING PLATFORM'
    },
    {
        link: '/icons/hotel.png',
        title: 'NFTS AS MEMBERSHIP DAO ACCESS'
    },
]

const secondSetIcons = [
    {
        link: '/icons/tag.png',
        title: 'Up to 30% Discounts for Rooms & Drinks'
    },
    {
        link: '/icons/hand.png',
        title: 'Profits Added to DAO treasury. Holders Rewarded'
    },
    {
        link: '/icons/coin.png',
        title: 'Seed Tokens Allocation'
    },
    {
        link: '/icons/cycle.png',
        title: 'Cashback Travel Rewards'
    },
]

const Hero = () => {
    return <section className="w-full flex flex-col items-center bg-dark_bg text-white  px-5 pt-8 pb-16 font-exo">
        <h1 className="text-4xl font-semibold text-center ">THE 1ST NFT HOTEL & HOSTEL CHAIN </h1>
        <p className="text-3xl text-center py-10 font-medium md:w-9/12 ">Palmverse builds technologies that help people connect IRL, join communities, and bridge the web2 travel experience to web3.</p>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-evenly items-center py-5 w-[80%] mx-auto" >
            {
                firstSetIcons.map(icon => (
                    <div key={icon.link} className="flex flex-col items-center">
                        <Image src={icon.link} alt={icon.link} height={140} width={140} layout={"fixed"} />
                        <h1 className="text-2xl font-medium md:w-[80%] text-center py-2">{icon.title}</h1>
                    </div>
                ))
            }
        </div>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-evenly items-center w-[90%] mx-auto py-16">
            <div className="md:w-[50%] md:mx-auto md:px-4">

                <Image src='/icons/groot.png' alt='palmverse-groot' height={400} width={400} layout="fixed" />
            </div>
            <h1 className="text-3xl text-center font-medium">Whether you’re a travel addict, digital nomad, <span className="text-green_text">an NFT wanderer</span>, or a surfer looking for paradise, you’ve come to the right place.</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4 py-16 " >
            <div className="flex flex-col">
                <h1 className="text-3xl font-medium  text-center py-6">
                    NFT UTILITIES - TRAVEL 2 EARN</h1>
                <div className="grid grid-cols-2 gap-4 py-4">
                    {
                        secondSetIcons.map(icon => (
                            <div key={icon.link} className="flex flex-col items-center">
                                <Image src={icon.link} alt={icon.link} height={130} width={130} layout={"fixed"} />
                                <h1 className="text-2xl font-medium w-[90%] text-center py-2">{icon.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col justify-end items-center py-4 md:py-0" >

                <Image src='/images/laptop.png' alt='laptop palverse' width={771} height={432} />
                <h1 className="text-3xl font-medium text-center py-2">

                    FUNCTIONAL BOOKING PLATFORM
                </h1>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center py-16 space-y-10 md:space-y-0" >
            <h1 className="text-3xl font-semibold md:w-[70%] mx-auto text-center ">We refurbish old buildings and leverage our unique property conversion model to turn them into the Palmverse brand. </h1>
            <div className="scale-110 md:scale-100">

                <Image src='/images/hotel1.png' alt='palmverse hotel' width={1000} height='560' />
            </div>
            <button className="rounded-full px-12 py-4 font-semibold btn tracking-widest" >Learn More</button>
        </div>
        <div className="flex flex-col items-center justify-center pt-14 pb-8" >
            <h1 className="text-3xl font-semibold w-[70%] mx-auto text-center ">
                HOW IT WORKS </h1>
            <Image src='/images/map.png' alt='palmverse hotel' width={1100} height='600' />

        </div>

    </section>
}

export default Hero