'use client';

import Link from 'next/link';
import './goToHome.css';

export default function GoToHome() {
  return (
    <Link href="/">
      <button className="home-button">Go to Home</button>
    </Link>
  );
}
