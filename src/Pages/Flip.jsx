// src/App.js
import React, { useState, useEffect } from "react";
import "../css/flip.css";
import animalIcons from "../animalIcons"; 

const shuffleArray = (array) => {
  return array
    .concat(array) // Duplicate for pairs
    .sort(() => 0.5 - Math.random());
};

const Flip = () => {
  const [tiles, setTiles] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    setTiles(shuffleArray(animalIcons));
  }, []);

  const handleTileClick = (index) => {
    if (selectedTiles.length < 2 && !selectedTiles.includes(index)) {
      setSelectedTiles([...selectedTiles, index]);
    }
  };

  useEffect(() => {
    if (selectedTiles.length === 2) {
      const [firstIndex, secondIndex] = selectedTiles;
      if (tiles[firstIndex] === tiles[secondIndex]) {
        setMatchedPairs([...matchedPairs, tiles[firstIndex]]);
      }
      setTimeout(() => {
        setSelectedTiles([]);
      }, 1000);
    }
  }, [selectedTiles, tiles, matchedPairs]);

  return (
    <div className="App ">
      <div className="grid">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${selectedTiles.includes(index) || matchedPairs.includes(tile) ? "flip" : ""}`}
            onClick={() => handleTileClick(index)}
          >
            <div className="tile-inner">
              {/* Front of the card (hidden initially) */}
              <div className="tile-front"></div>
              {/* Back of the card (shows animal when flipped) */}
              <div className="tile-back">
                {(selectedTiles.includes(index) || matchedPairs.includes(tile)) && (
                  <img src={tile} alt="animal" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flip;
