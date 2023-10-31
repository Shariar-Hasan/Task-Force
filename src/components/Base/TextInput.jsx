
const TextInput = ({ title, className = "", ...rest }) => {
    return (
        <div className={`mb-4 px-5 ${className}`}>
            <label>
                <h4>{title}</h4>
                <input type="text" className="form-control"  {...rest} />
            </label>
        </div>
    )
}

export default TextInput