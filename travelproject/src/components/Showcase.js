import React, { useState, useEffect } from 'react';
import './Showcase.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Montgenevre from '../images/montgenevre.jpg';
import Paris from '../images/Paris.jpg';
import Maldives from '../images/Maldives.jpg';
import Plane from '../images/Plane.png';

function Showcase() {
    const apiKeyWeather = '5c2c43afa1737aa54d8a93bce5cc1809';
    const apiKeyTimeZone = 'Q4V4ZO0T7DXO';
    const locations = [
        {
            name: 'Montgenevre',
            image: Montgenevre,
            info: 'Montgenevre is a scenic alpine town known for skiing.',
            lat: 44.9333,
            lon: 6.7244
        },
        {
            name: 'Paris',
            image: Paris,
            info: 'Paris, France s capital, is a major European city.',
            lat: 48.8566,
            lon: 2.3522
        },
        {
            name: 'Maldives',
            image: Maldives,
            info: 'The Maldives are known for their beautiful islands.',
            lat: 3.2028,
            lon: 73.2207
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [infoVisible, setInfoVisible] = useState(false);
    const [weather, setWeather] = useState(null);
    const [time, setTime] = useState('');

    useEffect(() => {
        if (infoVisible) {
            fetchWeatherAndTime(locations[currentIndex].lat, locations[currentIndex].lon);
        }
    }, [infoVisible, currentIndex]);

    const fetchWeatherAndTime = async (lat, lon) => {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeyWeather}&units=metric`;
        const timeUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKeyTimeZone}&format=json&by=position&lat=${lat}&lng=${lon}`;

        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        setWeather(weatherData.main.temp);

        const timeResponse = await fetch(timeUrl);
        const timeData = await timeResponse.json();
        setTime(new Date(timeData.timestamp * 1000).toLocaleTimeString());
    };

    const handlePlaneClick = () => {
        setInfoVisible(!infoVisible);
    };

    const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
        setInfoVisible(false);
    };

    const goPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex + locations.length - 1) % locations.length);
        setInfoVisible(false);
    };

    const { name, image, info, lat, lon } = locations[currentIndex];

    return (
        <div className='showcase'>
            <div className='gallery-showcase'>
                <div className="showcase-content">
                    <button className='leftBtn' onClick={goPrevious}>&lt;</button>
                    <div className="content-div" style={{ backgroundImage: `url(${image})` }}>
                        <div className='gAbout'>
                            <h2>{name}</h2>
                            <button onClick={handlePlaneClick}><img src={Plane} alt='plane'></img></button>
                        </div>
                    </div>
                    <button className='rightBtn' onClick={goNext}>&gt;</button>
                </div>
            </div>
            {infoVisible && (
                <div className='showcaseInformation'>
                    <p>{info}</p>
                    <p>Temperature: {weather} °C</p>
                    <p>Local Time: {time}</p>
                    <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false} style={{ height: "200px", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[lat, lon]}>
                            <Popup>{name}</Popup>
                        </Marker>
                    </MapContainer>

                </div>
            )}
        </div>
    );
}

export default Showcase;