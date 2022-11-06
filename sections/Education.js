

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




    return (
        <>
            <div className="lg:mx-40  mx-6" id="Education">
                <div className="h1">
                    <h1 className="">Education</h1>
                </div>
                {data.map((data, index) => {
                    let dateGraduated = new Date(data.dataGraduated)
                    return (
                        <div  className="mb-8" key={index}>
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
                                        <li key={index} className="ml-8">
                                            {detail}
                                        </li>
                                    )
                                })
                            }
                        </div>
                    )
                })
                }

            </div>
        </>
    )
}

export default Education