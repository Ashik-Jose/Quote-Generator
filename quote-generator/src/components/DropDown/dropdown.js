import Form from 'react-bootstrap/Form';
import React, { useEffect } from 'react';
import './dropdown.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTags, randomTagQuotes } from '../../actions/quotes';

const DropDown = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTags());
    }, [dispatch])
    const tags = useSelector((state) => state.tags);

    const handleChange = (event) => {
        dispatch(randomTagQuotes(event.target.value));
    }

    return (
        <div class='p-5 mt-3 w-50' id='DropDown' onChange={handleChange}>

            <Form.Select className='rounded-pill' size='lg'>
                {
                    tags.map((tag) => (
                        <option value={tag.name}>{tag.name}</option>
                    )
                    )}
            </Form.Select>
        </div>

    );
}

export default DropDown;