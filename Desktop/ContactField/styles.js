import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    font-family: sans-serif;
    @media (max-width: 768px) {
        margin: 0;
    }
`;
export const Form = styled.form`
    display: block;
`;
export const CampInput = styled.div`
margin-bottom: 30px;
    label{
        display: block;
        margin-bottom: 10px;
    }
    span{
        color: red;
    }
    small{
        display: block;
        color: red;
    }
`;
export const Input = styled.input`
    height: 35px;
    width: 400px;
    border: 0.5px solid;
    border-color: #CBD6E2;
    background-color: #F5F8FA;
    border-radius: 2.5px;
    padding: 0 14px;
    font-size: 15px;
    transition: border-color 0.2s ease-in;
    appearance: none;
    outline: none;

    ${(props) =>
        props['data-haserror'] &&
        css`
            border: 1px solid red !important;
        `}
    
    &:focus{
        border: 1px solid #73B8EF;
    }

    &::placeholder{
        color: #C8C8C8;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const Select = styled.select`
    height: 35px;
    width: 430px;
    border: 0.5px solid;
    border-color: #CBD6E2;
    background-color: #F5F8FA;
    border-radius: 2.5px;
    box-sizing: border-box;
    padding: 0 14px;
    font-size: 16px;
    transition: border-color 0.2s ease-in;
    outline: none;
    &:focus{
        border: 1px solid #73B8EF;
    }
    &::placeholder{
        color: #C8C8C8;
    }
    @media (max-width: 768px) {
        margin: 0;
        width: 110%;
    }   
`;