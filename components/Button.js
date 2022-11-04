


const Button = ({children, onClick, className}) =>{

    return(
        <button
            onClick={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
            className={onClick}
        >
            {children}
        </button>
    )
}