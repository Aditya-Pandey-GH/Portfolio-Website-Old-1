import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import Data from "../Data";
import Download from './svgs/download.svg';

const IntroComponent = () => {
    return (
        <div className="homeComponent">
            <img
                src={Data.pfp}
                alt='Profile Pic'
                className='homePFP' />
            <div className='homeDetailsName'>
                <Typewriter
                    words={[
                        "HEY PROS 👋",
                        "I am " + Data.name.regular
                    ]}
                    loop={0}
                    typeSpeed={40}
                    deleteSpeed={40}
                    cursor />
            </div>
            <div className='homeDetailsProf'>[ {Data.profession} ]</div>
            <div className='homeDetailsCV'>
                <Link to={Data.resumeLink} target="_blank">
                    <img src={Download} alt="" />
                    CLICK TO DOWNLOAD RESUME
                    <img src={Download} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default IntroComponent;