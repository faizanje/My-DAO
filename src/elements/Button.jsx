export default function Button({ children, handleSubmit, fullCircle, disabled, noBorder }) {
    return (
        <button
            onClick={handleSubmit}
            disabled={disabled}
            className={`flex items-center justify-evenly gap-2 text-md ${fullCircle ? "lg:p-4" : "lg:px-4 lg:py-2"}
        ${!noBorder && "border"} rounded-full p-4 ${!disabled && "hover:bg-black hover:text-white border-black"} transition-colors ${disabled && "bg-gray-200"}`}>
            {children}
        </button>
    )
}
