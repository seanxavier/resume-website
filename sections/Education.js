
import { motion } from 'framer-motion'
const Education = () => {

    const data = [
        {
            school: "De La Salle University - Manila",
            degree: "Bachelor of Science in Information Systems",
            dataGraduated: "2023-01-01",
            details: [
                "Dean's Lister, CGPA: 3.2"
            ]
        },
        {
            school: "De La Salle University - Manila",
            degree: "Science, Technology, Engineering and Mathematics (STEM) Strand    ",
            dataGraduated: "2018-06-01",
            details: [

            ]
        }
    ]
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
            <div className="lg:mx-40  mx-6" id="Education">
                <motion.div
                    initial="offscreen"
                    viewport={{ once: false }}
                    whileInView="onscreen"
                >

                    <div className="h1">
                        <motion.h1 className="" variants={Variants}>Education</motion.h1>
                    </div>
                    {data.map((data, index) => {
                        let dateGraduated = new Date(data.dataGraduated)
                        return (
                            <motion.div className="mb-8" key={index} variants={Variants}>
                                <div className="font-semibold">
                                    <h2>{data.school} </h2>
                                    <div className="md:flex md:flex-row md:justify-between">
                                        <h2>{data.degree}</h2>
                                        <h2>{dateGraduated.toLocaleDateString('en-us', { year: "numeric", month: "long" })}</h2>
                                    </div>
                                </div>

                                {
                                    data.details.map((detail, index) => {
                                        return (
                                            <motion.li
                                                key={index}
                                                className="ml-8"
                                                variants={Variants}
                                                initial="offscreen"
                                                viewport={{ once: false }}
                                                whileInView="details"
                                            >
                                                {detail}
                                            </motion.li>
                                        )
                                    })
                                }
                            </motion.div>
                        )
                    })
                    }
                </motion.div>
            </div>
        </>
    )
}

export default Education