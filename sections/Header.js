import Link from "next/link"
import Button from "../components/Button"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"


const Header = () => {

    const themeChanger = () => {
        const { theme, setTheme } = useTheme();
        const [mounted, setMounted] = useState(false);
        useEffect(() => setMounted(true), []);
        if (!mounted) return null;
        return (
            <>
                <Button
                    className=""
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                    Toggle to {theme === 'light' ? 'Dark' : 'Light'}
                </Button>
            </>

        )
    }

    return (
        <>
            <header>
                <ul>
                    <Link href="/" className="">Home</Link>
                    <Link href="/about">About</Link>
                </ul>
            </header>

            {themeChanger()}
        </>

    )
}

export default Header