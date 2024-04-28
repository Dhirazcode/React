import React from 'react';
import vg from "../assest/cloud.avif";

const Home = () => {
  return (
    <>
    <div className='Home'>
        <main>
            <h1>Dhiraj Official</h1>
            <p>Welcome to my page</p>
        </main>
    </div>
    <div className="Home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            Hi there! My name is [Your Name], and I'm passionate about [your passions or interests]. I believe in [a personal philosophy or belief you hold dear], and I strive to [what you aim to achieve or contribute].
            </p>
        </div>
    </div>
    </>
  )
}

export default Home