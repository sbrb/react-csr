import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const SearchBarComponents = () => {
    const navigate = useNavigate();
    let elemSearch = useRef('')
    const handlerSubmit = (e) => {
        e.preventDefault();
        let searchValue = elemSearch.current.value;
        navigate(`/search/${searchValue.trim()}`);
    }
    return (
        <Form onSubmit={handlerSubmit} className='searchProducts'>
            <Form.Control ref={elemSearch} type="text" placeholder="Search" />
            <button className='btn' type="submit">
                <BsSearch />
            </button>
        </Form>
    )
}
export default SearchBarComponents;