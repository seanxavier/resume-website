import SkillSetCard from "../components/SkillSetCard"



const Skills = () => {

    const data = {
        development: [
            { skill: "Web", proficiency: 7 },
            { skill: "Android App", proficiency: 2 },
            { skill: "Windows App", proficiency: 2 },
            { skill: "Low-code", proficiency: 4 },
        ],
        language: [
            { skill: "Javascript", proficiency: 7 },
            { skill: "HTML", proficiency: 8 },
            { skill: "CSS", proficiency: 8 },
            { skill: "C", proficiency: 2 },
            { skill: "Java", proficiency: 2 },
            { skill: "Python", proficiency: 2 },
        ],
        methodologies: [
            { skill: "SDLC", proficiency: 7 },
            { skill: "WaterFall", proficiency: 7 },
            { skill: "Agile/Scrum", proficiency: 7 },
            { skill: "DevOps", proficiency: 3 },
        ],
        database: [
            { skill: "MongoDB", proficiency: 7 },
            { skill: "SQL", proficiency: 2 },
        ],
        frameworks: [
            { skill: "ExpressJS", proficiency: 7 },
            { skill: "ReactJS", proficiency: 3 },
            { skill: "NextJS", proficiency: 4 },
            { skill: "HapiJS", proficiency: 3 },
        ],
        technology: [
            { skill: "PowerBI", proficiency: 5 },
            // { skill: "Knime", proficiency: 3 },
            { skill: "Microsoft Power Platform", proficiency: 5 },
            { skill: "MS Power Apps", proficiency: 5 },
            { skill: "MS Power Automate", proficiency: 4 },
            { skill: "MS Sharepoint", proficiency: 4 },
            { skill: "Git", proficiency: 7 },
            { skill: "Heroku", proficiency: 6 },
        ]
    }


    return (
        <>
            <div className="lg:mx-40  mx-6" id="Skills">
                <div className="h1">
                    <h1 className="">Skills</h1>
                </div>
                <div className="flex flex-row flex-wrap  justify-between">

                    <SkillSetCard data={data.development} title="Development"/>
                    <SkillSetCard data={data.language} title="Programming Languages"/>
                    <SkillSetCard data={data.methodologies} title="Methodologies"/>
                    <SkillSetCard data={data.database} title="Database"/>
                    <SkillSetCard data={data.frameworks} title="Frameworks"/>
                    <SkillSetCard data={data.technology} title="Technologies"/>

                </div>

            </div>
        </>
    )
}

export default Skills