import React from 'react';
import './Home.css'; 

const Home = () => {
  // Function to split the text into lines with eight words each
  const splitText = (text) => {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    for (let i = 0; i < words.length; i++) {
      line += words[i] + ' ';
      if ((i + 1) % 8 === 0) {
        lines.push(line.trim());
        line = '';
      }
    }
    if (line !== '') {
      lines.push(line.trim());
    }
    return lines;
  };

  // Text content
  const textContent = `Discover thousands of cocktail recipes from around the world. Whether you're looking for classic cocktails or trendy new creations, we've got you covered.`;

  // Split the text into lines with eight words each
  const lines = splitText(textContent);

  return (
    <div className="landing-page">
      <div className="home" style={{ alignItems: 'flex-start' }}> 
        <h2 style={{ color: 'white' }}>Welcome to the Cocktail Database</h2> {/* Update heading color */}
        <div className="card"> 
          <p className="text" style={{ textAlign: 'left', backgroundColor: 'white', color: 'black' }}> {/* Update text background and color */}
            {lines.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="card"> 
          <p className="text"> 
            Start exploring now and find your perfect cocktail for any occasion!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
