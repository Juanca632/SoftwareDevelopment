import React from 'react';
import { Header } from '../../components/Header/Header.js';
import "./Layout.css";


const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			{children}
		</div>
	);
}

export { Layout };
