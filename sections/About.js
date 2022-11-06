


const About = () => {

    const data = {
        name: "Sean Xavier Nieva",
        mobileNum: "+63 (917) 780 6125",
        email: "sean.xaviernieva@gmail.com",
        location: "Manila, Philippines",
        writeup: "swriteup here TBA",
        hobbies: "Drawing, Painting, Personal Finance & Stock Investing, Reading/Watching technology trends and web app technologies tutorials, Gaming"
    }

    return (
        <>
            <div className=" h-80 bg-slate-100 pt-16" id="About">
                <div className="h1">
                    <h1 className="">{data.name}</h1>
                </div>
                <div className="md:flex md:flex-col md:justify-around  text-center  ">
                    <p>{data.mobileNum}</p>
                    <p>{data.email}</p>
                    <p>{data.location}</p>
                </div>
            </div>

        </>
    )

}

export default About;