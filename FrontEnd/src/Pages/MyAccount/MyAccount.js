import React from 'react';
import { useParams } from 'react-router-dom';
import "./MyAccount.css";
import { useGetProducts } from '../../hooks/useGetProducts';
import { Account } from '../../containers/Account/Account';


const MyAccount = () => {

    const { slug } = useParams();
    

    return (
        <div className='my-account'>
            <Account/>
        </div>
    );
}

export { MyAccount };