
import { motion } from 'framer-motion'


const About = () => {

    const data = {
        name: "Sean Xavier Nieva",
        mobileNum: "+63 (917) 780 6125",
        email: "sean.xaviernieva@gmail.com",
        location: "Manila, Philippines",
        writeup: "swriteup here TBA",
        hobbies: "Drawing, Painting, Personal Finance & Stock Investing, Reading/Watching technology trends and web app technologies tutorials, Gaming"
    }

    const Variants = {
        offscreen: {
            opacity: 0,
            y: 50
        },
        onscreen: {
            opacity: 1,
            y: 0,

            transition: {
                type: "Spring",
                duration: 0.8,
                staggerChildren: 0.3
            }
        },
        details: {
            opacity: 1,
            y: 0,
            transition: {
                type: "Spring",
                duration: 0.5
            }
        }
    };

    return (
        <>
            <motion.div
                className=" h-80  pt-16"
                id="About"
                initial="offscreen"
                viewport={{ once: false }}
                whileInView="onscreen"
            >
                <motion.div className="h1" variants={Variants}>
                    <h1 className="">{data.name}</h1>
                </motion.div>
                <motion.div className="md:flex md:flex-col md:justify-around  text-center  " variants={Variants}>
                    {/* <p>{data.mobileNum}</p> */}
                    <motion.p variants={Variants}>{data.email}</motion.p>
                    <motion.p variants={Variants}>{data.location}</motion.p>
                </motion.div>
                <div>
                    <p>

                    </p>
                </div>
            </motion.div>

        </>
    )

}

export default About;