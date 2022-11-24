import { motion, Variants } from 'framer-motion'

const Experience = () => {

    const data = [
        {
            company: "Accenture",
            location: "Philippines, MNL",
            position: "Innovation Intern",
            dateStarted: "2022-07-18",
            dateFinished: "2022-10-13",
            details: [
                "Developed MS Power Platform applications based on requirements",
                "Developed Power Automate flows based on requirements",
                "Improved UI/UX on several Power App applications",
                "Designed UI prototypes using Figma"
            ]
        },
        {
            company: "Freelance",
            location: "Philippines, MNL",
            position: "Fullstack Web Developer",
            dateStarted: "2022-04-01",
            dateFinished: "2022-07-15",
            details: [
                "Continued developing an ongoing web application for a logistics company",
                "Developed a front-end & backend of the web application",
                "Tech Stack: Hapi.js framework, Handlebars, Javascript, Node.js"
            ]
        },
        {
            company: "Green Giant FM Organization (DLSU)",
            location: "Philippines, MNL",
            position: "Web Developer",
            dateStarted: "2022-03-01",
            dateFinished: "2022-09-01",
            details: [
                "Designed UI for Web and Mobile",
                "Developed user stories based on organizational needs",
            ]
        },
        {
            company: "Accenture",
            location: "Philippines, MNL",
            position: "Student Leadership Conference Delegate    ",
            dateStarted: "2022-05-01",
            dateFinished: "",
            details: [
                "Designed UI for Web and Mobile",
                "Developed user stories based on organizational needs",
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
                staggerChildren: 0.5
            }
        },
        details: {
            opacity: 1,
            y: 0,
            transition: {
                type: "Spring",
                duration: 0.5,
                staggerChildren: 0.3
            }
        }
    };

    return (
        <>
            <div className="lg:mx-40 mx-6" id="Experience">
                <motion.div
                    initial="offscreen"
                    viewport={{ once: false }}
                    whileInView="onscreen">
                    <motion.div variants={Variants}>
                        <div className="h1">
                            <h1 className="">Experience</h1>
                        </div>
                    </motion.div>

                    {data.map((data, index) => {
                        let dateStarted = new Date(data.dateStarted);
                        let dateFinished = new Date(data.dateFinished);

                        return (
                            <div key={index} className="  ">
                                <motion.div
                                    variants={Variants}
                                    className=" mb-8 rounded-2xl  hover:border-t-2 hover:border-l-2 border-opacity-50 border-0 border-slate-600 px-5 py-5"
                                    whileHover={{
                                        boxShadow: "8px 8px 1px rgba(0, 0, 0, 0.2)",
                                        transition: {
                                            type: "Spring",
                                            duration: 0,
                                            staggerChildren: 0.5
                                        }
                                    }}
                                    >
                                    <div className="font-semibold">
                                        <motion.div
                                            className="md:flex md:flex-row md:justify-between"
                                            variants={Variants} viewport={{ once: false }} >
                                            <h2>{data.company}</h2>
                                            <h2>{data.location}</h2>
                                        </motion.div>
                                        <motion.div
                                            className="md:flex md:flex-row md:justify-between"
                                            variants={Variants} viewport={{ once: false }}>
                                            <h2>{data.position}</h2>
                                            <h2>{dateStarted.toLocaleDateString('en-us', { year: "numeric", month: "long" })} {data.dateFinished === "" ? "" : "- " + dateFinished.toLocaleDateString('en-us', { year: "numeric", month: "long" })}</h2>
                                        </motion.div>
                                    </div>
                                    {data.details.map((detail, index) => {
                                        return (
                                            <motion.div
                                                variants={Variants}
                                                initial="offscreen"
                                                viewport={{ once: false }}
                                                whileInView="details"
                                                key={index}
                                            >
                                                <li key={index} className="ml-8">
                                                    {detail}
                                                </li>
                                            </motion.div>
                                        )
                                    })
                                    }
                                </motion.div>


                            </div>
                        )
                    })
                    }
                </motion.div>
            </div>

        </>
    )
}

export default Experience