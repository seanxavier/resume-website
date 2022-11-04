

const Layout = ({children}) =>{

    return (
        <>
            <Head>
                <title> Sample Title</title>
            </Head>

            <div>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}