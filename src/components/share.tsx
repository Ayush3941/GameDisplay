import { useState } from "react";
import "./share.css";

import { FaWhatsapp, FaFacebook, FaTwitter, FaReddit, FaEnvelope } from 'react-icons/fa';


export default function ShareButton() {
  const [showShare, setShowShare] = useState<boolean>(false);


  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="share-container">
      <button className="share-btn" onClick={() => setShowShare(!showShare)}>🔗 Share</button>

      {showShare && (
        <div className="share-popup">
          <button className="close-btn" onClick={() => setShowShare(false)}>✖</button>
          <h4>Share this game</h4>
          <div className="social-icons">
            <a href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={38} /></a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaFacebook size={38} /></a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaTwitter size={38} /></a>
            <a href={`https://www.reddit.com/submit?url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaReddit size={38} /></a>
            <a href={`mailto:?subject=Check this out&body=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaEnvelope size={38} /></a>
          </div>
          <div className="copy-link-box">
            <input type="text" value={window.location.href} readOnly />
            <button onClick={handleCopy}>Copy</button>
          </div>

        </div>
      )}
    </div>
  );
}
