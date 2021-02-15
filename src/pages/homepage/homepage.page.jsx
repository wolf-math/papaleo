import './homepage.style.scss';

import Face from './../../assets/pap.jpg';

const Homepage = () => {
    return(
        <div className="home">
            <div className="hero">
                <h1>Ron Papaleo</h1>
                <h3>Drums, Keyboard, Accordian</h3>
                <img src={Face} alt="Ron Papaleo" />
            </div>
            <div className="content">

            </div>
        </div>
    )
}

export default Homepage;