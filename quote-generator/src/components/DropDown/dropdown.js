import Form from 'react-bootstrap/Form';
import React,{useEffect, useState} from 'react';
import './dropdown.css';
import { useDispatch,useSelector } from 'react-redux';
import { getTags } from '../../actions/quotes';

const DropDown = () => {
    return (


            <div class='p-5 w-50' id='DropDown'>
                <Form.Select size='lg'>
                   
                </Form.Select>
            </div>

    );
}

export default DropDown;