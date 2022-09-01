import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";

const navs = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Who we are',
        link: '/who-we-are'
    },
    {
        name: 'Roadmap',
        link: '/roadmap'
    },
    {
        name: 'FAQ',
        link: '/faq'
    },

]

const Header = () => {
    const router = useRouter();
    const { pathname } = router;

    const isActive = (link) => link === pathname;



    return <Navbar
        fluid={true}
        style={{ fontFamily: "'Exo 2', ' sans- serif'", backgroundColor: '#2A2A29', borderBottom: '1px solid gray' }}
    >
        <Navbar.Brand href="/images/logo.png">
            <Image
                src="/images/logo.png"
                height={60}
                width={60}
                layout="fixed"
                alt="Flowbite Logo"
            />
            <span className=" whitespace-nowrap text-2xl font-medium  pl-2  dark:text-white">
                Palmverse
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            {
                navs.map(nav => (
                    <Navbar.Link
                        key={nav.link}
                        href={nav.link}
                        style={{
                            fontSize: '18px',
                            fontWeight: '500',
                            color: "white",
                            textDecoration: isActive(nav.link) && 'underline',
                            textUnderlineOffset: '8px'
                        }}
                    >
                        {nav.name}
                    </Navbar.Link>
                ))
            }
            <a style={{
                fontSize: '18px',
                fontWeight: '500',
                color: "white",

                textUnderlineOffset: '8px'
            }} href="https://www.book-palmverse.com/" target='_blank' rel="noreferrer" >


                Book

            </a>
        </Navbar.Collapse>
    </Navbar>
}

export default Header