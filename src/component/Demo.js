import React, { useEffect, useState } from 'react';
import "../css/Demo.css";
import { useSelector } from 'react-redux';


const Demo = () => {
    const [selectedOption, setSelectedOption] = useState('popular');
    const [caroption, setcaroption] = useState({});

    const { products } = useSelector((state) => state.products);
    const popularCars = products.slice(3, 6);
    const recentCars = products.slice(6, 9);



    useEffect(() => {
        if (popularCars.length > 0 && !caroption._id && selectedOption === 'popular') {
            setcaroption(popularCars[0]);
        }
        else if (recentCars.length > 0 && !caroption._id && selectedOption === 'recent') {
            setcaroption(recentCars[0]);
        }
    }, [popularCars, caroption._id, recentCars, selectedOption]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setcaroption({});
    };

    const handleCarOption = (option) => {
        setcaroption(option);
    };

    return (
        <div id="ride" className='demo'>
            <div className='demo-left'>
                {caroption && caroption.images && caroption.images.length > 0 &&
                    <img src={caroption.images[0].url} alt='car' />
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
                                <DemoCard key={car._id} car={car} handlecar={() => handleCarOption(car)} caroption={caroption} />
                            ))}
                        </>

                    ) : (
                        <>
                            {recentCars.map((car) => (
                                < DemoCard key={car._id} car={car} handlecar={() => handleCarOption(car)} caroption={caroption} />
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
        <button className='democard' onMouseEnter={handlecar} style={{ boxShadow: caroption._id === car._id ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : '' }}>
            <div className='democard-1'>
                <img src={car.images[0].url} alt='car' />
            </div>
            <div className='democard-2'>
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <h2>Rs{car.price}/day</h2>
            </div>
        </button>
    );
}

export default Demo;
