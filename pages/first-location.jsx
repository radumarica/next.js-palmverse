import Image from "next/image"

const FirstLocation = () => {
    return (
        <section className="min-h-screen bg-dark_bg text-[#ECF7FD] font-exo flex flex-col   pt-0">

            <div className="bg-[#ECF7FD] py-2 w-full">

                <h1 className="md:text-4xl text-[28px] text-center  font-bold px-3 text-black">What We Build?</h1>
                <h1 className="md:text-2xl text-[18px] text-center  font-semibold px-3 text-black">Web3 Hotel Booking Platform </h1>
            </div>
            <div className="md:w-[80rem] mx-auto">


                <li className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left pt-4 list-item ">Palmverse aims to bridge the web2 hotel booking experience to web3.</li>
                <li className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left pt-4 list-item ">On-chain cryptocurrency payments. </li>
                <li className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left pt-4 list-item ">We Onboard properties/hotels into web3 giving access to new customers.</li>
                <li className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left pt-4 list-item ">Live Beta Booking platform with Solana pay integrated. Multi-chain coming soon.</li>
                <li className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left pt-4 list-item ">Revolutionizing the hospitality industry -</li>
                <li className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left pt-4 list-item ">Boost D2C growth for hotel brands through NFT memberships.</li>
                {/* <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left pt-4">Earn cashback rewards, in crypto, while traveling.</p>
                <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left pt-4">We Onboard hotels into web3 and access web3 customers. </p> */}

                {/* <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left pt-4">We rent and refurbish old properties, converting them into the Palmverse brand model. </p>
                <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left">With this business plan, we can achieve a quick global expansion, keeping the rent expense of the properties low by refurbishing the buildings to meet the Palmverse standards.</p>
                <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left">The first Palmverser Hotel & Hostel will have approx. 17 rooms (private and shared) with co-working space, a pool, and a bar.</p>
                <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left">We aim to bridge the web2 booking experience to web3, by accepting On-chain cryptocurrency payments to book stays in the first NFT Hotel in Costa Rica.</p> */}
            </div>

            <div className="pt-10">
                <div className="relative  mx-auto bg-[#ECF7FD] text-black py-1 w-screen md:w-full md:py-2">

                    <h1 className="md:text-4xl text-[28px]  font-bold  text-center leading-9 ">1st NFT Hotel & Hostel in Costa Rica- Accepting On-Chain crypto payments. </h1>
                    <p className="md:text-2xl text-[18px]  font-semibold  hidden md:block text-center leading-9 ">Extra Benefits for the NFT Holders  </p>

                </div>
                <p className="md:text-2xl text-[18px]  font-semibold md:hidden   text-center leading-9 ">Extra Benefits for the NFT Holders  </p>

                <div className="md:w-[80rem] mx-auto " >
                    <li className="text-[18px] leading-[22px] font-medium list-item py-2 mt-4  px-3">Pilot Project to prove the concept for onboarding hotels on the Web3 booking platform. </li>
                    <li className="text-[18px] leading-[22px] font-medium list-item py-2  px-3">First Palmverse Hotel was rented in Tamarindo- Costa Rica, a surf paradise about 41 miles from Liberia International Airport.</li>
                    <li className="text-[18px] leading-[22px] font-medium list-item py-2  px-3">After a quick refurbishment, the hotel will be open shortly after the mint. </li>
                    <li className="text-[18px] leading-[22px] font-medium list-item py-2  px-3">Will have approx. 17 rooms (private and shared) with co-working space, a pool, and a bar</li>
                    <li className="text-[18px] leading-[22px] font-medium list-item py-2  px-3">Up to 25% discount for holders to book rooms inside Palmverse Costa Rica. </li>
                    <li className="text-[18px] leading-[22px] font-medium list-item py-2 mb-4  px-3">Web3 IRL DAO hub for amazing events.</li>




                    <div className="justify-center hidden md:flex">

                        <Image src='/images/first_hotel.png' alt="first hotel" height={550} width={1000} layout="fixed" />
                    </div>

                    <div className="flex justify-center md:hidden">

                        <Image src='/images/first_hotel.png' alt="first hotel" height={250} width={420} layout="fixed" />
                    </div>
                    <div className="flex justify-center  md:hidden mt-4 ">
                        <Image src='/images/left-nft.png' alt='left-nft' height={230} width={220} layout='fixed' />
                    </div>
                </div>
                <div className="bg-[#ECF7FD] text-black py-2">

                    <h1 className="md:text-4xl text-[28px]  font-bold text-center    ">Why Costa Rica?</h1>
                </div>
                <div className="md:w-[80rem] mx-auto " >

                    <div className="text-[21px] relative     font-medium mt-4  text-[#ECF7FD]  "><div className="absolute z-50 -top-5 left-0 lg:-left-3" >

                    </div><p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left"> Costa Rica was chosen considering multiple factors such as crypto-friendly regulations for operating a web3 booking platform and the year-round season being considered a famous tropical tourist destination. </p></div>
                    <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left  ">Usual activities in Costa Rica are surfing, rafting, sailing, ATV tours, volcano tours, natural parks visits, hiking, turtle watching, horseriding, and many more.</p>
                    <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left  ">Possible 2nd and 3rd Palmverse locations, which are also crypto-friendly :</p>
                    <ul className="pl-8 pb-8" >
                        <li className="list-disc py-1 text-[18px] leading-[21px] font-bold">Miami</li>
                        <li className="list-disc py-1 text-[18px] leading-[21px] font-bold">Portugal</li>
                        <li className="list-disc py-1 text-[18px] leading-[21px] font-bold">Panama</li>
                    </ul>
                    <div className=" justify-end -mt-48 hidden md:flex">
                        <Image src='/images/left-nft.png' alt='left-nft' height={280} width={300} layout='fixed' />
                    </div>


                </div>
            </div>
        </section>
    )

}

export default FirstLocation