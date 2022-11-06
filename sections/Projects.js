import Link from "next/link";


const Projects = () => {

    const data = [
        {
            projectName: "Human-Resource Information System with Analytics",
            dateFinished: "2022-07-01",
            repositoryLink: "",
            deployedLink: "",
            details: [
                "The HRIS integrates a group of companies’ HR processes from onboarding to offboarding, performance management, and training.",
                "Designed with HTML, CSS, Node.js, JQuery, Handlebars, MongoDB, PowerBI",
                "Capstone Project/Thesis",
            ]
        },
        {
            projectName: "TrackShip",
            dateFinished: "2021-02-01",
            repositoryLink: "",
            deployedLink: "",
            details: [
                "A Bidding and Vessel Tracking System developed for an oil tankering and logistics company.",
                "Designed with HTML, CSS, Node.js, JQuery, and Handlebars. Used MongoDB as database",
                "Built for a web development course",
            ]
        },
        {
            projectName: "Chapter One",
            dateFinished: "2020-10-01",
            repositoryLink: "https://github.com/iliwysfyasbysuoi/Chapter-One--Refactored-",
            deployedLink: "https://chapterone-itisdev.seanxavier.one/",
            details: [
                "An e-Commerce website that meets the requirements of a bookstore. The platform is capable of the sales processes, messaging, reports, and book requesting.",
                "Designed with HTML, CSS, Node.js, JQuery, and Handlebars. Used MongoDB as a database.",
            ],

        }
    ]



    return (
        <>
            <div className="lg:mx-40  mx-6" id="Projects">
                <div className="h1">
                    <h1 className="">Projects</h1>
                </div>
                {data.map((data, index) => {
                    let dateFinished = new Date(data.dateFinished);

                    return (
                        <div key={index} className="mb-8">
                            <div className="font-semibold">
                                <div className="md:flex md:flex-row md:justify-between">
                                    <h2>{data.projectName}</h2>
                                    <h2>{dateFinished.toLocaleDateString('en-us', { year: "numeric", month: "long" })} {data.dateFinished === "" ? "" : "- " + dateFinished.toLocaleDateString('en-us', { year: "numeric", month: "long" })}</h2>
                                </div>
                                <div className="md:flex md:flex-row md:justify-start ">
                                    {data.repositoryLink !== ""
                                        ? <Link
                                            className="hover:decoration-solid underline decoration-dotted mr-2"
                                            href={data.repositoryLink}
                                            target="_blank"
                                        >
                                            View Repository
                                        </Link>
                                        : ""


                                    }
                                    {data.deployedLink !== ""
                                        ? <Link
                                            className="hover:decoration-solid underline decoration-dotted mr-2"
                                            href={data.deployedLink}
                                            target="_blank"
                                        >
                                            Live Demo Site
                                        </Link>
                                        :""
                                    }



                                </div>
                            </div>

                            {data.details.map((detail, index) => {
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

export default Projects