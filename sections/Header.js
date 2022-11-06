import Link from "next/link"
import Button from "../components/Button"
import { useTheme } from "next-themes"
import { useState, useEffect, useRef } from "react"


const Header = () => {

    const themeChanger = () => {
        const { theme, setTheme } = useTheme();
        const [mounted, setMounted] = useState(false);
        useEffect(() => setMounted(true), []);
        if (!mounted) return null;
        return (
            <>
                <div className=" fixed right-2 p-2 top-2 text-center mx-auto self-center items-center">
                    <Button
                        className=""
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ?
                            // moon outline
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                            :
                            // moon solid
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                            </svg>
                        }
                    </Button>
                </div>
            </>

        )
    }

    const headerLinks = [
        { label: "About", path: "#About" },
        { label: "Education", path: "#Education" },
        { label: "Skills", path: "#Skills" },
        { label: "Experience", path: "#Experience" },
        { label: "Certifications", path: "#Certifications" },
        { label: "Projects", path: "#Projects" },
        { label: "Organizations", path: "#Organizations" },
    ]


    return (
        <>
            <header className="flex flex-row flex-wrap  items-center h-16  fixed w-full dark:bg-slate-900 bg-neutral-50">
                <ul className="ml-4">
                    {
                        headerLinks.map((link, index) => {
                            return (
                                <Link href={link.path} className="py-2 px-5 mx-1 hover:underline hover:underline-offset-8 hover:decoration-inherit hover:decoration-from-font text-base " key={index}>
                                    {link.label}
                                </Link>
                            )
                        })
                    }
                </ul>
            </header>

            {themeChanger()}
        </>

    )
}

export default Header