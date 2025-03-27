'use client';

import Link from 'next/link';
import './adminButton.css';

export default function GoToAdminButton() {
  return (
    <Link href="/admin">
      <button className="admin-button">Go to Admin</button>
    </Link>
  );
}
