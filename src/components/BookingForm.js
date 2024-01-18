import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const intervalId = setInterval(() => {
          const now = new Date();
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
          setCurrentTime(`${hours}:${minutes}`);
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, []);

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    const onSubmit = (data) => {
        console.log(data); // Handle form submission logic here
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" {...register('name', { required: true })} />
                            {errors.name && <p>Name is required</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes =>
                                        <option key={availableTimes}>{availableTimes}</option>)
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="book-occassion">Occasion:</label>
                            <select id='book=occassion' key={occassion} value={occassion} onChange={e => setOccassion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <p>Current Time: {currentTime}</p>
                        </div>

                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={"Make Your Reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
