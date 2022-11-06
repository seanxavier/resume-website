import Link from "next/link";
import { useRouter } from "next/router"
import Button from "../components/Button"


const Certification = () => {

    const data = [
        {
            certName: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
            issuer: "The Hong Kong University of Science and Technology ",
            dateIssued: "2022-04-04",
            link: "https://www.coursera.org/account/accomplishments/verify/LRKX4Y5CJ74R"
        }
    ]

    const router = useRouter();





    return (
        <>
            <div className="lg:mx-40" id="Certifications">
                <div className="h1">
                    <h1 className="">Certifications</h1>
                </div>
                {data.map((data, index) => {
                    let dateIssued = new Date(data.dateIssued)
                    return (
                        <div className="mb-8" key={index}>
                            <div className="font-semibold">
                                <div className="md:flex md:flex-row md:justify-between">
                                    <h2 aria-label="view">{data.certName} </h2>
                                    <h2>{dateIssued.toLocaleDateString('en-us', { year: "numeric", month: "long" })}</h2>
                                </div>
                                <div className="md:flex md:flex-row md:justify-between">
                                    <h2>{data.issuer}</h2>
                                    <Link
                                        className="hover:underline"
                                        href={data.link}
                                        target="_blank"
                                    >
                                        View Certificate
                                    </Link>




                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </div>
        </>
    )
}

export default Certification