"use client";
import React from "react";
import "./recommended.css";
import { gamesData } from "./data"; 
import type { Game } from "./data";

export default function RecommendedGames() {
  return (
    <section className="recommended-section">
      <h3 className="recommended-title">Recommended Games</h3>
      <div className="recommended-container">
        {gamesData.map((game: Game, index: number) => (
          <a
            key={index}
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="game-card"
          >
            <div className="game-image-container">
              <img
                src={game.image}
                alt={game.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/300x200?text=Image+Not+Available";
                }}
                className="game-image"
              />
            </div>
            <div className="game-name">{game.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
