// app/ClientHome.tsx
'use client';
import './page.css';
import { useState } from 'react';

import AboutTab from './about';
import UGCTab from './ugc';
import AnnouncementTab from './announcement';
import ReviewsTab from './review';
import Share from "../components/share";
import Like from "../components/like";
import Recommended from "../components/recommended";
import Review from "../components/review";
import ReviewPop from "../components/reviewPop";

import { FaWindows, FaAndroid, FaPlay } from "react-icons/fa";
import { gamesData } from "../components/data";

export default function ClientHome({ i }: { i: number }) {
  const [selectedTab, setSelectedTab] = useState('About');

  const renderTab = () => {
    switch (selectedTab) {
      case 'About':
        return <AboutTab i={i} />;
      case 'UGC':
        return <UGCTab />;
      case 'Announcement':
        return <AnnouncementTab />;
      case 'Reviews':
        return <ReviewsTab />;
      default:
        return <AboutTab i={i}/>;
    }
  };

  return (
    <div className="page-container">
      <section className="page-header">
        <h2>{gamesData[i].head}</h2>
        <p>{gamesData[i].desc}</p>

        <div className="platform-container">
          <div className="platform-icons">
            <div className="diss">
              <FaWindows size={24} />
              <FaAndroid size={30} />
            </div>
            <button className="play-btn" onClick={() => window.location.href = gamesData[i].site}>
              <FaPlay size={18} /> Play
            </button>
          </div>
          <div className="action-buttons">
            <Like />
            <Share />
          </div>
        </div>
      </section>

      <nav className="tab-nav">
        {['About', 'UGC', 'Announcement', 'Reviews'].map((tab) => (
          <span
            key={tab}
            className={selectedTab === tab ? 'active' : ''}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </span>
        ))}
      </nav>

      <section className="game-section">{renderTab()}</section>

      <section className="game-info">
        <p><strong>Studio:</strong> Nightingale Studio</p>
        <p><strong>Chain:</strong> Polygon 🔗</p>
        <p><strong>Token:</strong> Mard</p>
        <p><strong>Genre:</strong> Idle RPG, Free to Play</p>
        <ReviewPop />
      </section>

      <Review />
      <br />
      <Recommended />
    </div>
  );
}
