import React, { useState, useEffect } from 'react';
import "../css/Predict.css"
import axios from 'axios';
import Loader from './layout/Loader';

const Predict = () => {
    const [data, setData] = useState({});

    const [company, setcompany] = useState("");
    const [car_model, setcar_model] = useState("");
    const [year, setyear] = useState("");
    const [fuel_type, setfuel_type] = useState("");
    const [kilo_driven, setkilo_driven] = useState("");

    const [loading, setloading] = useState(false);
    const [prediction, setprediction] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://cschirag.pythonanywhere.com/get-predict-data');
                const data = response.data;
                console.log(data);
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCompanyChange = (e) => {
        const selectedCompany = e.target.value;
        setcompany(selectedCompany);

        const filteredCarModels = data.car_models.filter(model => model.includes(selectedCompany));
        setcar_model("");
        setData(prevData => ({
            ...prevData,
            filteredCarModels,
        }));
    };

    const handlepredict = async (e) => {
        e.preventDefault();
        if (!company || !car_model || !year || !fuel_type || !kilo_driven) {
            alert('Please fill in all fields.');
            return;
        }
        try {
            setloading(true);
            const response = await axios.post('https://cschirag.pythonanywhere.com/predict', {
                company,
                year: parseInt(year),
                car_model: car_model,
                fuel_type: fuel_type,
                kilo_driven: parseInt(kilo_driven),
            });
            setloading(false);
            setprediction(response.data.prediction);

        } catch (error) {
            setloading(false);
            console.error('Error making prediction:', error);
        }

    }

    return (
        <>
            {
                loading ? <Loader /> : (
                    <>
                        <div className='predict'>
                            <div className='predict-container'>
                                <div className='container-header'>
                                    <h1>Car Price Predictor</h1>
                                    <h3>Predict Your Old Car Price</h3>
                                </div>
                                <div className='container-body'>
                                    <form className='body-form'>
                                        <div class="predict-form-group">
                                            <label><b>Company Name</b></label>
                                            <select id="company" name="company" required="1" onChange={handleCompanyChange}>
                                                <option value="" selected disabled>Select Company</option>
                                                {data.companies &&
                                                    data.companies.map((company, index) => <option value={company} key={index}>{company}</option>)}
                                            </select>
                                        </div>
                                        <div class="predict-form-group">
                                            <label><b>Car Model</b></label>
                                            <select id="car_model" name="car_model" required="1" onChange={(e) => setcar_model(e.target.value)}>
                                                <option value="" selected disabled>Select Car Model</option>
                                                {data.filteredCarModels &&
                                                    data.filteredCarModels.map((model, index) => <option value={model} key={index}>{model}</option>)}
                                            </select>
                                        </div>
                                        <div class="predict-form-group">
                                            <label><b>Year of Purchase</b></label>
                                            <select id="year" name="year" required="1" onChange={(e) => setyear(e.target.value)}>
                                                <option value="" selected disabled>Select Year of Purchase</option>
                                                {data.years &&
                                                    data.years.map((year, index) => <option value={year} key={index}>{year}</option>)}
                                            </select>
                                        </div>
                                        <div class="predict-form-group">
                                            <label><b>Fuel Type</b></label>
                                            <select id="fuel_type" name="fuel_type" required="1" onChange={(e) => setfuel_type(e.target.value)}>
                                                <option value="" selected disabled>Select Fuel Type</option>
                                                {data.fuel_types &&
                                                    data.fuel_types.map((fuel_type, index) => <option value={fuel_type} key={index}>{fuel_type}</option>)}
                                            </select>
                                        </div>
                                        <div class="predict-form-group">
                                            <label><b>Kilometers Travelled</b></label>
                                            <input type="text" name="kilo_driven" id="kilo_driven" placeholder="Enter Number of Kilometers Travelled" required="1" onChange={(e) => setkilo_driven(e.target.value)} />
                                        </div>
                                        <div class="predict-form-group">
                                            <button onClick={handlepredict}>Predict Price</button>
                                        </div>

                                    </form>

                                    {
                                        prediction && (
                                            <div className='predict-output'>
                                                <h1>{prediction && `Car Estimated Price: ₹${prediction}`}</h1>
                                            </div>
                                        )
                                    }

                                </div>

                            </div >
                        </div >
                    </>
                )
            }

        </>

    );
};

export default Predict;
