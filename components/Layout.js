import Head from "next/head"
import Header from "../sections/Header"

const Layout = ({children}) =>{

    return (
        <>
            <Head>
                <title> Sample Title</title>
            </Head>

            <div className="min-h-screen flex flex-col">
                <Header/>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout