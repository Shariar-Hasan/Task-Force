
const TextareaInput = ({ title, className = "", ...rest }) => {
    return (
        <div className={`mb-4 px-5 ${className}`}>
            <label>
                <h4>{title}</h4>
                <textarea type="text" className="form-control" style={{ resize: "none" }}  {...rest} rows={5}></textarea>
            </label>
        </div>
    )
}

export default TextareaInput