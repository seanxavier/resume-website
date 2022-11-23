
import { motion } from 'framer-motion'
const Organizations = () => {

    const data = [
        {
            orgName: "Green Giant FM",
            position: "Web Management Pool Member",
            dateStarted: "2022-03-01",
            dateFinished: "2022-09-01",
            details: [
                "Helped design prototypes for the organization’s website for desktop and mobile devices."
            ]
        },
        {
            orgName: "Malate Literary Folio",
            position: "Photo Staffer, Former Layout Team Member ",
            dateStarted: "2019-01-01",
            dateFinished: "present",
            details: [
                "Developed a web-based mini-game for an event engagement",
                "Contributed photos; Multiple contributed photos were published in several issues of the folio",
                "Designed the folio publication together with the layout team"
            ]
        },
        {
            orgName: "La Salle Computer Society",
            position: "Member, Publicity & Creatives Junior Officer ",
            dateStarted: "2018-01-01",
            dateFinished: "2019-01-01",
            details: [
                "Designed publicity materials for the organization",
                "Planned and organized an organizational event, together with a team.",
            ]
        },
        {
            orgName: "Google Developer Student Club",
            position: "Member",
            dateStarted: "2022-03-01",
            dateFinished: "2022-09-01",
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
            <motion.div
                className="lg:mx-40  mx-6"
                id="Organizations"
                initial="offscreen"
                viewport={{ once: false }}
                whileInView="onscreen"
            >
                <motion.div
                    className="h1"
                    variants={Variants}
                >
                    <h1 className="">Organizations</h1>
                </motion.div>
                {data.map((data, index) => {
                    let dateStarted = new Date(data.dateStarted);
                    let dateFinished = data.dateFinished !== ("" || "present") ? new Date(data.dateFinished) : "";

                    return (
                        <motion.div
                            key={index}
                            className="mb-8"
                            variants={Variants}
                        >
                            <div className="font-semibold">
                                <motion.div
                                    className="md:flex md:flex-row md:justify-between"
                                    variants={Variants}
                                >
                                    <h2>{data.orgName}</h2>
                                </motion.div>
                                <motion.div
                                    className="md:flex md:flex-row md:justify-between"
                                    variants={Variants}
                                >
                                    <h2>{data.position}</h2>
                                    <h2>{dateStarted.toLocaleDateString('en-us', { year: "numeric", month: "long" })}
                                        {data.dateFinished === ("present" || "")
                                            ? (data.dateFinished === ("present") ? " - Present" : "")
                                            : "- " + dateFinished.toLocaleDateString('en-us', { year: "numeric", month: "long" })
                                        }
                                    </h2>
                                </motion.div>
                            </div>

                            {data.details.map((detail, index) => {
                                return (
                                    <motion.li
                                        key={index}
                                        className="ml-8"
                                        variants={Variants}
                                        initial="offscreen"
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
        </>
    )
}

export default Organizations