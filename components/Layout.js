import Head from "next/head"
import Header from "../sections/Header"
import FooterV1 from "../sections/Footer"

const Layout = ({children}) =>{

    return (
        <>
            <Head>
                <title> Sample Title</title>
            </Head>

            <div className="min-h-screen flex flex-col">
                <Header/>
                <main className=" dark:bg-slate-900 bg-neutral-50">
                    {children}
                </main>
                <FooterV1 />
            </div>

        </>
    )
}

export default Layout