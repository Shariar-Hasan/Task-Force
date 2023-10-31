
const SubHeading = ({ children, ...rest }) => {
    return (
        <h2 {...rest} className="sub-heading text-left my-7">
            <span className="py-1">{children}</span>
        </h2>
    )
}

export default SubHeading