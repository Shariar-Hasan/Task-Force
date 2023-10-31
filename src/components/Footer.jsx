import { socials } from "../assets/data/footers"
import { routes } from "../assets/data/routes"

const Footer = () => {
  return (
    <div className="w-100 bg-gray px-2 pt-5 text-primary footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 mx-auto p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis, reprehenderit modi rem nam libero!</p>
            <br />
            <p>Official Website : <span className="text-brand">www.officialWebsite.com</span></p>
            <br />
            <p>Contact : +8801800000000</p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mx-auto p-5">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-6">
                <h4 className="">Socials</h4>
                <ul>
                  {
                    socials.map(({ title, icon }, i) =>
                      <li key={i}>
                        <span className="icon">{icon}</span> <span className="link">{title}</span>
                      </li>
                    )
                  }
                </ul>
              </div>
              <div className="col-6 col-md-6 col-lg-6 text-right">
                <ul>
                  {
                    routes.map(({ title, path }, i) => <li key={i}><a href={path}>{title}</a></li>)
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="py-5 text-center">© Copyright Shariar Hasan || Made with Love ❤️</p>
    </div>
  )
}

export default Footer