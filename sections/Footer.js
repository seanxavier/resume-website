import styles from '../styles/Home.module.css'
import Image from 'next/image';


const FooterV1 = () => {
    return (
        <>
            <footer className={`${styles.footer}`  }>
                <a
                    href="#"
                    target=""
                    rel="noopener noreferrer"
                    className=''
                >
                    Made with love {'<3 '}
                </a>
            </footer>
        </>
    )
}

export default FooterV1;