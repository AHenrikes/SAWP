import React from "react";

function Header() {
  function displayTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let timeElem = document.getElementById("time");
    let timeString = `00:${hours}:${minutes}:${seconds}`;
    timeElem.innerText = timeString
      .split(":")
      .map((e) => `0${e}`.slice(-2))
      .join(":");
  }
  setInterval(displayTime, 1000);
  return (
    <div>
      <nav>
        <ul className="grid p-4" id="headerList">
          <li className="logo">
            <a href="#" className="font-krona text-textColor1 drop-shadow-mainShadow text-[20px]">
              SAWP
            </a>
          </li>
          <li className="time">
            <p className="font-orbitron text-textColor2 opacity-40 text-[20px]" id="time">
              00:15:36:69
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
