"use client"
import React, { useState } from 'react';
import './page.css';
import {gamesData} from "../../../components/data"
import {supabase} from "../../../supabase/supabase"
import GoToHome from "./goToHome"

export default function Home() {
  const [selectedGame, setSelectedGame] = useState<number>(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { data, error } = await supabase.from('show') .update({ value: selectedGame }).eq('id', 'choose'); 

    if (error) {
      console.error('Error updating value:', error);
    } else {
      console.log('Updated game:');
    }
  };

  return (
    <div>
    <GoToHome/>
    <div className="page-container-admin">
      <h2>What To Host??</h2>
      <form onSubmit={handleSubmit}>
        <div className="image-options">
          {gamesData.map((game, index) => (
            <label key={index} className="image-option">
              <input
                type="radio"
                name="game"
                value={game.value}
                onChange={() => setSelectedGame(game.value)}
              />
              <img src={game.image} alt={game.name} className="game-image" />
            </label>
          ))}
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </div>
  );
}
