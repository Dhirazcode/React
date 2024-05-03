import React from 'react';
import vg from "../assest/cloud.avif";
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram,AiFillFacebook} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="Home" >
        <main>
            <h1>Dhiraj Official</h1>
            <p>Welcome to my page</p>
        </main>
    </div>
    <div className="Home2" id="Home">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            Hi there! My name is [Your Name], and I'm passionate about [your passions or interests]. I believe in [a personal philosophy or belief you hold dear], and I strive to [what you aim to achieve or contribute].
            </p>
        </div>
    </div>

    <div className="Home3" id="About">
        <div>
            <h1>
                how are you here!
            </h1>
            <p>
            I'm doing well, thank you for asking! As an AI language model, I don't have feelings or emotions like humans do, but I'm here and ready to assist you with any questions or tasks you have. How can I help you today?
            </p>
        </div>
    </div>
    <div className="Home4" id="Brand">
        <div>
        <h1>Brands</h1>
        <article>
            <div style={{animationDelay:"0.5s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{animationDelay:"0.4s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
            <div style={{animationDelay:"0.2s"}}>
                <AiFillFacebook/>
                <p>Facebook</p>
            </div>
            <div style={{animationDelay:"0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Youtube</p>
            </div>
        </article>
        </div>
    </div>
    </>
  )
}

export default Home