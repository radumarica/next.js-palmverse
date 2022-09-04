import { useState } from "react";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from 'next/link'
const navs = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Who We Are?',
        link: '/who-we-are'
    },



]

const Header = () => {
    const [showDrop, setShowDrop] = useState(false)
    const router = useRouter();
    const { pathname } = router;
    const [mobilNav, setMobilNav] = useState(false)

    // const isActive = (link) => link === pathname;



    return <Navbar
        fluid={true}
        style={{ fontFamily: "'Exo 2', ' sans- serif'", backgroundColor: '#2A2A29', borderBottom: '1px solid gray', height: '100px', padding: "1rem 0.8rem" }}
    >
        <Navbar.Brand href="/">
            <Image
                src="/images/logo.png"
                height={70}
                width={70}
                layout="fixed"
                alt="Flowbite Logo"
            />
            <span className=" whitespace-nowrap text-[40px] font-semibold  pl-2  text-[#ECF7FD]">
                PALMVERSE
            </span>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setMobilNav(!mobilNav)} />
        <Navbar.Collapse>
            {
                navs.map(nav => (
                    <Link
                        key={nav.link}
                        href={nav.link}

                    >
                        <h3 className="hover:text-[#13D511] text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer ">

                            {nav.name}
                        </h3>
                    </Link>
                ))
            }
            {<div className="relative">



                <h3 onMouseEnter={() => setShowDrop(true)} className="hover:text-[#13D511] text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                    What We Build?
                </h3>

                {
                    showDrop && (
                        <div className="absolute z-10 top-8 -left-2   bg-dark_bg pr-5 pl-3 pb-3 w-40" onMouseEnter={() => setShowDrop(true)} onMouseLeave={() => setShowDrop(false)}>
                            <Link
                                href={'first-location'}

                            >
                                <h3 className="hover:text-[#13D511] text-center text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                                    1st Location
                                </h3>
                            </Link>
                            <Link
                                href={'/roadmap'}

                            >
                                <h3 className="hover:text-[#13D511] text-center text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                                    Roadmap
                                </h3>
                            </Link>
                            <a className="hover:text-[#13D511] text-center text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer " href="https://www.book-palmverse.com/" target='_blank' rel="noreferrer" >
                                <h3 className="text-center">
                                    Whitepaper
                                </h3>

                            </a>
                        </div>
                    )
                }
            </div>
            }


            <Link

                href='/faq'

            >
                <h3 className="hover:text-[#13D511] text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer ">

                    FAQ
                </h3>
            </Link>
            <a className="hover:text-[#13D511] text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer " href="https://www.book-palmverse.com/" target='_blank' rel="noreferrer" >
                Book

            </a>
        </Navbar.Collapse>
        {
            mobilNav && (
                <div className=" pb-6 pt-10  flex flex-col  absolute z-50 right-0 w-screen  top-20 bg-dark_bg h-[91vh] ">
                    <div className="flex flex-col items-center  justify-center space-y-8 pt-20">
                        {
                            navs.map(nav => (
                                <Link
                                    key={nav.link}
                                    href={nav.link}

                                >
                                    <h3 onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-2xl py-2 text-[#ECF7FD] transition-all font-semibold cursor-pointer ">

                                        {nav.name}
                                    </h3>
                                </Link>
                            ))
                        }

                        <div className="relative">



                            <h3 onClick={() => setShowDrop(!showDrop)} onMouseEnter={() => setShowDrop(true)} className="hover:text-[#13D511] text-2xl text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                                What We Build?
                            </h3>

                            {
                                showDrop && (
                                    <div className="bg-dark_bg  pl-3 pb-3 w-40" onMouseEnter={() => setShowDrop(true)} onMouseLeave={() => setShowDrop(false)}>
                                        <Link
                                            href={'first-location'}

                                        >
                                            <h3 onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-xl text-center pt-4  text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                                                1st Location
                                            </h3>
                                        </Link>
                                        <Link
                                            href={'/roadmap'}

                                        >
                                            <h3 onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-xl text-center py-4 text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                                                Roadmap
                                            </h3>
                                        </Link>
                                        <a className="hover:text-[#13D511] text-xl text-center pt-4 text-[#ECF7FD] transition-all font-semibold cursor-pointer " href="https://www.book-palmverse.com/" target='_blank' rel="noreferrer" >

                                            <h1 onClick={() => setMobilNav(false)} className="text-center">

                                                Whitepaper
                                            </h1>
                                        </a>
                                    </div>
                                )
                            }
                            <Link

                                href='/faq'

                            >
                                <h3 onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-2xl text-center py-10 text-[#ECF7FD] transition-all font-semibold cursor-pointer ">

                                    FAQ
                                </h3>
                            </Link>
                            <a onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-2xl text-center text-[#ECF7FD] transition-all font-semibold cursor-pointer " href="https://www.book-palmverse.com/" target='_blank' rel="noreferrer" >
                                <h1 className="text-center"> Book</h1>

                            </a>
                        </div>


                    </div>
                </div>)
        }
    </Navbar>
}

export default Header