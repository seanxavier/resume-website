
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
                className="lg:w-1/3 md:w-1/3 w-full rounded-2xl hover:border-t-2 hover:border-l-2 border-opacity-50 border-0 border-slate-600 p-5 "
                initial="offscreen"
                viewport={{ once: false }}
                whileInView="onscreen"
                variants={Variants}
                whileHover={{
                    boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.3)",
                    // border: "2px solid",
                    transition: {
                        type: "Spring",
                        duration: .1,
                    }
                }}
            >
                <div className=' '>
                    <motion.h2 className="font-semibold text-center mb-5"
                        variants={Variants}
                    >
                        {title}
                    </motion.h2>
                </div>

                <div className="flex flex-wrap">
                    {
                        data.map((skill, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    variants={Variants}
                                    initial="offscreen"
                                    viewport={{ once: false }}
                                    whileInView="details"

                                    className='highlights-bg rounded-full px-2 py-1 m-1 w-fit'
                                    whileHover={{ scale: 1.05 }}
                                >
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