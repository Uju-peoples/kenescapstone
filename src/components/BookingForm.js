import React, { useState, useEffect } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState("");
    const [currentTime, setCurrentTime] = useState("");


    useEffect(() => {
        const intervalId = setInterval(() => {
          const now = new Date();
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
          setCurrentTime(`${hours}:${minutes}`);
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);

    const handleSubmit = (e) =>{
          e.preventDefault();
          props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
       <header>
          <section>
             <form onSubmit={handleSubmit}>
                <fieldset>
                    <>
                    <label htmlFor="book-date">Choose Date:</label>
                    <input id='book-date' value={date}  onChange={(e) => handleChange(e.target.value)} type='date' required/>
                    </>

                    <>
                    <label htmlFor="book-time">Choose Time:</label>
                    <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                        <option value="">Select a Time</option>
                        {
                            props.availableTimes.availableTimes.map(availableTimes =>
                             {return <options key={availableTimes}>{availableTimes}</options>})
                        }
                    </select>
                    </>

                    <>
                    <label htmlFor="book-guests">Number of Guests:</label>
                    <input id='book-guests' min='1' value={guests} onChange={(e) =>
                    setGuests(e.target.value)}/>
                    </>
                    <>
                    <label htmlFor="book-occassion">Occassion:</label>
                    <select id='book=occassion' key={occassion} value={occassion} 
                    onChange={e => setOccassion (e.target.value)}>
                         <option>Birthday</option>
                         <option>Anniversary</option>
                         <option>Engagement</option>
                    </select>
                    </>

                    <>
                      <p>Current Time: {currentTime}</p>
                    </>

                    <div className='btnReceive'>
                        <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
                    </div>
                </fieldset>
             </form>
          </section>
       </header>
    );
};

export default BookingForm;