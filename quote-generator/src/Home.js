import './Home.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTags, randomQuotes } from './actions/quotes';
import Header from './components/Header/header.js';
import DropDown from './components/DropDown/dropdown';
import Button from 'react-bootstrap/Button';
import Cards from './components/Cards/cards';


function Home() {

     const dispatch = useDispatch();

    useEffect(() => {
        dispatch(randomQuotes());
        dispatch(getTags());
    }, [dispatch])


    return (

        <>
            <Header />
            <div class="text-center">
                <Cards />
                <DropDown />
                <Button className='rounded-pill' id="button" size="lg" onClick={() => dispatch(randomQuotes())}><h4>Next Quote</h4></Button>
            </div>
        </>
    );
}

export default Home;