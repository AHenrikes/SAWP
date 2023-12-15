import { useEffect, useState } from "react";

function Header() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <nav>
        <ul className="grid p-4" id="headerList">
          <li className="logo">
            <a href="#" className="font-krona text-textColor1 drop-shadow-mainShadow text-[20px] md:text-[24px] xxlg:text-[32px]">
              SAWP
            </a>
          </li>
          <li className="time">
            <p className="font-orbitron text-textColor2 opacity-40 text-[20px] md:text-[24px] xxlg:text-[32px]" id="time">
              {dateTime.toLocaleTimeString("it-IT") + `:${dateTime.getMilliseconds()}`}
            </p>
          </li>
          <li className="github-icon ml-auto hover:brightness-150">
            <a href="https://github.com/HenrikesA/SAWP">
              <img className="" src="./src/assets/images/github.png" alt="github icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
