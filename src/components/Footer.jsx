import { socials } from "../assets/data/footers"
import { routes } from "../assets/data/routes"

const Footer = () => {
  return (
    <div className="w-100 bg-gray px-2 pt-5 text-primary footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 mx-auto p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta necessitatibus odio aperiam assumenda possimus, obcaecati officiis, enim mollitia eligendi maxime ipsum dignissimos illum minima at labore beatae voluptatem quidem ab ipsa facere numquam voluptas cupiditate. Non id nulla, omnis at accusamus porro iusto est veniam expedita quasi, odio ducimus facere labore quaerat quia hic praesentium, debitis obcaecati officiis. Fugiat quae provident delectus, sunt quia qui numquam beatae libero magnam vel exercitationem quidem quasi ullam accusantium enim deserunt et nihil quaerat sit ad doloremque, vero autem. Unde et neque quasi soluta nisi delectus debitis earum sint beatae maiores, doloremque sequi.</p>
          </div>
          <div className="col-12 col-md-3 col-lg-3 mx-auto p-5">
            <h4 className="border-b-1">Socials</h4>
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
          <div className="col-12 col-md-3 col-lg-3 mx-auto p-5">
            <ul>
              {
                routes.map(({ title, path }, i) => <li key={i}><a href={path}>{title}</a></li>)
              }
            </ul>
          </div>
        </div>
      </div>
      <p className="py-5 text-center">© Copyright Shariar Hasan || Made with Love ❤️</p>
    </div>
  )
}

export default Footer