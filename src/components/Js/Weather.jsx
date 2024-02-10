import React from "react";
import { useState, useEffect, useRef } from "react";
import { MdSearch } from "react-icons/md";

export const Weather = () => {
  const dates = new Date();
  const day = dates.getDate();
  const month = dates.getMonth();
  const monthes=['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec'];
  const dap=dates.getDay();
  const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const year = dates.getFullYear();
  const coco = useRef();
  const chancountry = useRef();
  const [place, setplace] = useState("Mumbai");
  const [btnclick, setbtnclick] = useState(0);
  const [temp, settemp] = useState(0);
  const [humidity, sethumidity] = useState(0);
  const [windspeed, setwindspeed] = useState(0);
  const [desc, setdesc] = useState("");
  const [ico, setico] = useState("");
  const [winddegree, setwinddegree] = useState(0);
  const [press, setpress] = useState(0);
  const [visibility, setvisibility] = useState(0);


  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=2f9197c8ea1ce301fb86efff47ecf5ed`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        settemp(data.main.temp);
        sethumidity(data.main.humidity);
        setwindspeed(data.wind.speed);
        setdesc(data.weather[0].description);
        setico(data.weather[0].icon);
        setwinddegree(data.wind.deg);
        setpress(data.main.pressure);
        setvisibility(data.visibility);
      });
  }, [btnclick,place]);
  
  const changesweather = () => {
    if (chancountry.current.value !== "") {
      setplace(chancountry.current.value);
      setbtnclick(btnclick + 1);
      chancountry.current.value = "";
    } else {
      alert("You forgot to enter the place in Search bar");
    }
  };

  return (
    <div>
      <div className="App" ref={coco}>

        <div className="AA">
          <div className="container">
          <h1>Weather App</h1>
            <input
              type="text"
              placeholder="Search"
              className="searchbox"
              ref={chancountry}
            />
            <button onClick={() => changesweather(chancountry)}>
              <MdSearch style={{ height: "1.0em" }} />
            </button>
            <div className="cnt">
              <div className="cnt1">
              <div className="col2">
                <h2 className="a1">
                  Weather in <span>{place}</span>
                </h2>
                <h2 className="a2">{temp}°C</h2>
                <div className="flex">
                  <img
                    src={`https://openweathermap.org/img/wn/${ico}.png`}
                    alt=""
                  />
                  <span>{desc}</span>
                </div>
                <h3 className="a3">Humidity: {humidity}%</h3>
                <h3 className="a3 visi">Visibilty:  {visibility/1000}km</h3>
                </div>
              </div>
              <div className="cnt2">
                <div className="too">
                  <h1>
                    {day}
                    {monthes[month]}
                  </h1>
                  <h10>{days[dap]}</h10>
                  <h8>{year}</h8>
                </div>
              </div>
              <div className="ctn3">
                <div className="col2 col1">
                <h3 className="a3">Wind Speed: {windspeed}km/h</h3>
                <h3 className="a3">Wind Degree: {winddegree}° deg</h3>
                <h3 className="a3">Pressure:  {press}hPa</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
