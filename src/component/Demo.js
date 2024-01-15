import React, { useEffect, useMemo, useState } from 'react';
import "../css/Demo.css";
import image1 from "../assests/Car1.png";
import image2 from "../assests/Car2.png";
import image3 from "../assests/Car3.png";


const Demo = () => {
    const [selectedOption, setSelectedOption] = useState('popular');
    const [caroption, setcaroption] = useState({});

    const popularCars = useMemo(() => [
        { id: 1, name: 'Jaguar M6', img: image3, desc: "Four Seater Car", price: 1000 },
        { id: 2, name: 'Mercedes Benz SQ', img: image2, desc: "Four Seater Car", price: 1000 },
        { id: 3, name: 'Audi 2019 A4 Allroad', img: image1, desc: "Four Seater Car", price: 1000 }
    ], []);

    const recentCars = useMemo(() => [
        { id: 4, name: 'Audi 2019 A4 Allroad', img: image1, desc: "Four Seater Car", price: 1000 },
        { id: 5, name: 'Mercedes Benz SQ', img: image2, desc: "Four Seater Car", price: 1000 },
        { id: 6, name: 'Jaguar M6', img: image3, desc: "Four Seater Car", price: 1000 }
    ], []);

    useEffect(() => {
        if (popularCars.length > 0 && !caroption.id && selectedOption === 'popular') {
            setcaroption(popularCars[0]);
        }
        else if (recentCars.length > 0 && !caroption.id && selectedOption === 'recent') {
            setcaroption(recentCars[0]);
        }
    }, [popularCars, caroption, recentCars, selectedOption]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setcaroption({});
    };

    const handleCarOption = (option) => {
        setcaroption(option);
    };

    return (
        <div className='demo'>
            <div className='demo-left'>
                {caroption &&
                    <img src={caroption.img} alt='car' />
                }
            </div>
            <div className='demo-right'>
                <div className='demo-right-container-1'>
                    <button
                        onClick={() => handleOptionChange('popular')}
                        style={{
                            color: selectedOption === 'popular' ? 'black' : 'grey',
                        }}
                    >
                        Popular Cars
                    </button>
                    <button
                        onClick={() => handleOptionChange('recent')}
                        style={{
                            color: selectedOption === 'recent' ? 'black' : 'grey',
                        }}
                    >
                        Recent Cars
                    </button>
                </div>

                <div className='demo-right-container-2'>
                    {selectedOption === 'popular' ? (
                        <>
                            {popularCars.map((car) => (
                                <DemoCard key={car.id} car={car} handlecar={() => handleCarOption(car)} caroption={caroption} />
                            ))}
                        </>

                    ) : (
                        <>
                            {recentCars.map((car) => (
                                < DemoCard key={car.id} car={car} handlecar={() => handleCarOption(car)} caroption={caroption} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

const DemoCard = ({ car, handlecar, caroption }) => {
    return (
        <button className='democard' onMouseEnter={handlecar} style={{ boxShadow: caroption.id === car.id ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : '' }}>
            <div className='democard-1'>
                <img src={car.img} alt='car' />
            </div>
            <div className='democard-2'>
                <h3>{car.name}</h3>
                <p>{car.desc}</p>
                <h2>Rs{car.price}/day</h2>
            </div>
        </button>
    );
}

export default Demo;
