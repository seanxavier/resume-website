import Link from "next/link";
import { useRouter } from "next/router"
import Button from "../components/Button"
import { motion } from 'framer-motion'



const Certification = () => {

    const data = [
        {
            certName: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
            issuer: "The Hong Kong University of Science and Technology ",
            dateIssued: "2022-04-04",
            link: "https://www.coursera.org/account/accomplishments/verify/LRKX4Y5CJ74R"
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

    const router = useRouter();





    return (
        <>
            <motion.div
                className="lg:mx-40 mx-6"
                id="Certifications"
                initial="offscreen"
                viewport={{ once: false }}
                whileInView="onscreen"
            >
                <motion.div className="h1" variants={Variants}>
                    <h1 className="">Certifications</h1>
                </motion.div>
                {data.map((data, index) => {
                    let dateIssued = new Date(data.dateIssued)
                    return (
                        <motion.div
                            className="mb-8"
                            key={index}
                            variants={Variants}
                        >
                            <div className="font-semibold ">
                                <motion.div
                                    className="md:flex md:flex-row md:justify-between "
                                    variants={Variants}
                                >
                                    <h2 aria-label="view">{data.certName} </h2>
                                    <h2>{dateIssued.toLocaleDateString('en-us', { year: "numeric", month: "long" })}</h2>
                                </motion.div>
                                <motion.div
                                    className="md:flex md:flex-row md:justify-between"
                                    variants={Variants}
                                >
                                    <h2>{data.issuer}</h2>
                                    <Link
                                        className="hover:decoration-solid underline decoration-dotted"
                                        href={data.link}
                                        target="_blank"
                                    >
                                        View Certificate
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )
                })
                }

            </motion.div>
        </>
    )
}

export default Certification