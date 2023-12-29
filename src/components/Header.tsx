import { useEffect, useState } from "react";

function Header() {
  const [dateTime, setDateTime] = useState(new Date());

  // effect for live timer based on current location in a hh:mm:ss:ms format || ms = millisecond
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 10);

    return () => clearInterval(interval);
  }, []);
  return (
    <div id="header">
      <nav>
        <ul className="grid p-4" id="headerList">
          <li className="logo">
            <a href="#home" className="font-krona text-textColor1 drop-shadow-mainShadow text-[20px] md:text-[24px] xxlg:text-[32px]">
              SAWP
            </a>
          </li>
          <li className="time">
            <p className="font-orbitron text-textColor2 opacity-40 text-[20px] md:text-[24px] xxlg:text-[32px]" id="time">
              {dateTime.toLocaleTimeString("it-IT")}
            </p>
          </li>
          <li className="github-icon ml-auto hover:brightness-150">
            <a href="https://github.com/HenrikesA/SAWP">
              <img className="text-textColor1" src="./src/assets/github.png" alt="github icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
