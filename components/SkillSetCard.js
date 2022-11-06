

const SkillSetCard = ({data, title}) => {

    return (
        <>
            <div className="lg:w-1/6 md:w-1/4 w-1/2  my-4">
                <h2 className="font-semibold">{title}</h2>
                <div className="">
                    {
                        data.map((skill) => {
                            return (
                                <>
                                    <div>
                                        {skill.skill}
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SkillSetCard