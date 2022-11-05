import styles from '../styles/Home.module.css'
import Image from 'next/image';


const FooterV1 = () => {
    return (
        <>
            <footer className={styles.footer}>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=''
                >
                    Made with love {'<3 '}
                    {/* <span className={styles.logo}>
                        <Image src={"/resume-website/public/vercel.svg"} alt="Vercel Logo" width={72} height={16} />
                    </span> */}
                </a>
            </footer>
        </>
    )
}

export default FooterV1;