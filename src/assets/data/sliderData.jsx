import metaverse from "./../images/metaverse.gif"
import coding from "./../images/coding.gif"
import idea from "./../images/idea.gif"
export const sliderData = [
    {
        descriptionData: <div>
            <h1>Top Rated <span className='text-brand'>Metaverse Brand</span></h1>
            <h2>Destiniy of our Future</h2>
            <p>We work for future goods together</p>
            <a href="#contact">
                <button className="btn btn-outline-brand px-10 py-3 rounded-sm clicked">Join Us</button>
            </a>
        </div>,
        img: metaverse
    },
    {
        descriptionData: <div>
            <h1>Code Style <span className='text-brand'>Industry Standerd</span></h1>
            <h2>Future of the code industry</h2>
            <p>Do no repeat yourself, but practice</p>
        </div>,
        img: coding
    },
    {
        descriptionData: <div>
            <h1>Build your <span className='text-brand'> Innovative Ideas</span></h1>
            <h2>Lets make a innovative world together</h2>
            <p>Thinking about joining the future of the metaverse</p>
        </div>,
        img: idea
    }
]