import Heading from "./SmallComponents/Heading"

const SubscribeNewletter = () => {
  return (
    <div className="subscription my-30">
      <div className="container text-center">
        <Heading>Subscribe to Newsletter</Heading>
        <h2 className="my-2">Subscribe to Our Newsletter to stay connected with us.</h2>
        <p className="my-2 text-muted">Lets Grow Together</p>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8 mx-auto text-center border-2">
              <div className="subscribe-form w-100">
                <input  type="text" placeholder="Subscribe to our newsletter" />
                <button className="btn btn-brand w-20" >Subscribe</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeNewletter