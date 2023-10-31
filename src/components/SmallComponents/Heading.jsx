
const Heading = ({ children, ...rest }) => {
    return (
        <h1 {...rest} className="heading text-center my-10 text-primary">
            <span className="px-10 py-1">{children}</span>
        </h1>
    )
}

export default Heading