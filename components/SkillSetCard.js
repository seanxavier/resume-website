

const SkillSetCard = ({data, title}) => {

    return (
        <>
            <div className="w-1/3 my-4">
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