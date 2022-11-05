


const Button = ({children, onClick, className}) =>{

    return(
        <button
            className={`p-2 rounded-md hover:ring-1 dark:ring-white ring-black ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button