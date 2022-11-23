
import { motion, Variants } from 'framer-motion'

const SkillSetCard = ({ data, title }) => {

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
                className="lg:w-1/6 md:w-1/4 w-1/2  my-4"
                initial="offscreen"
                viewport={{ once: false }}
                whileInView="onscreen"
            >
                <div>
                    <motion.h2 className="font-semibold"
                        variants={Variants}
                    >
                        {title}
                    </motion.h2>
                </div>

                <div className="">
                    {
                        data.map((skill, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={Variants}
                                    initial="offscreen"
                                    viewport={{ once: false }}
                                    whileInView="details">
                                    {skill.skill}
                                </motion.div>
                            )
                        })
                    }
                </div>
            </motion.div>
        </>
    )
}

export default SkillSetCard