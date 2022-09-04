import Image from "next/image"

const FirstLocation = () => {
    return (
        <section className="min-h-screen bg-dark_bg text-[#ECF7FD] font-exo flex flex-col   pt-0">

            <div className="bg-[#ECF7FD] py-2 w-full">

                <h1 className="text-4xl font-bold text-center text-black">What We Build?</h1>
            </div>
            <div className="w-[80rem] mx-auto">


                <p className="text-[21px] font-medium pb-4 text-center md:text-left pt-4">We rent and refurbish old properties, converting them into the Palmverse brand model. </p>
                <p className="text-[21px] font-medium py-1 text-center md:text-left">With this business plan, we can achieve a quick global expansion, keeping the rent expense of the properties low by refurbishing the buildings to meet the Palmverse standards.</p>
                <p className="text-[21px] font-medium py-1 text-center md:text-left">The first Palmverser Hotel & Hostel will have approx. 17 rooms (private and shared) with co-working space, a pool, and a bar.</p>
                <p className="text-[21px] font-medium py-1 text-center md:text-left">We aim to bridge the web2 booking experience to web3, by accepting On-chain cryptocurrency payments to book stays in the first NFT Hotel in Costa Rica.</p>
                <div className="pt-10">
                    <h1 className="text-4xl font-medium text-center">1st Location - Tamarindo, Costa Rica</h1>
                    <p className="text-[21px] font-medium py-4  text-center">The first location was rented in the heart of the busiest surf town in Costa Rica. </p>


                    <div className="flex justify-center">

                        <Image src='/images/first_hotel.png' alt="first hotel" height={550} width={1000} layout="fixed" />
                    </div>
                    <h1 className="text-4xl font-medium text-center">1st Location - Tamarindo, Costa Rica</h1>
                    <p className="text-[21px] font-medium py-4 text-center md:text-left  pt-16">Costa Rica was chosen as the first location considering multiple factors such as the year-round season and good market prices for hotel rooms. </p>
                    <p className="text-[21px] font-medium py-4 text-center md:text-left  ">Secondly, Costa Rica Is considered a  cryptocurrency paradise due to the widespread adoption of cryptocurrencies by its citizens. Many stores accept cryptocurrency as payment</p>
                    <p className="text-[21px] font-medium py-4 text-center md:text-left  ">We will implement cryptocurrency payments at the front desk and on our website. </p>
                    <p className="text-[21px] font-medium py-4 text-center md:text-left  ">Usual activities in Costa Rica are surfing, rafting, sailing, ATV tours, volcano tours, natural parks visits, hiking, turtle watching, horseriding, and many more. </p>
                    <p className="text-[21px] font-medium py-4 text-center md:text-left  ">Possible 2nd and 3rd Palmverse locations, which are also crypto-friendly :</p>
                    <ul className="pl-8" >
                        <li className="list-disc py-2 text-[21px] font-bold">Miami</li>
                        <li className="list-disc py-2 text-[21px] font-bold">Portugal</li>
                        <li className="list-disc py-2 text-[21px] font-bold">Panama</li>
                    </ul>
                    <div className=" justify-end -mt-56 hidden md:flex">
                        <Image src='/images/left-nft.png' alt='left-nft' height={330} width={310} layout='fixed' />
                    </div>
                    <div className="flex justify-end -mt-40 md:hidden ">
                        <Image src='/images/left-nft.png' alt='left-nft' height={230} width={220} layout='fixed' />
                    </div>

                </div>
            </div>
        </section>
    )

}

export default FirstLocation