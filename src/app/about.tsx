import "./page.css"

import {gamesData} from "../components/data"

interface AboutTabProps {
  i: number;
}
export default function AboutTab({ i }: AboutTabProps) {
 
  return (
    <>
      <h3>Introduction</h3>
      <p>
        {gamesData[i].intro}
      </p>

      <h3>How to Play</h3>
      <div className="iframe-container">
        <iframe
          width={gamesData[i].width}

          height={gamesData[i].height}

          src={gamesData[i].src}

          title={gamesData[i].title}

          frameBorder={gamesData[i].frameBorder}

          allow={gamesData[i].allow}
          referrerPolicy={gamesData[i].referrerPolicy}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
