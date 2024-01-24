import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TitleExample from './2.useEffect/2.1.useTitle/index';
import ClickExample from './2.useEffect/2.2.useClick/index';
import HoverExample from './2.useEffect/2.3.useHover';
import LeaveExample from './2.useEffect/2.4.useBeforeLeave';
import FadeInExample from './2.useEffect/2.5.1.useFadeIn';
import NetworkExample from './2.useEffect/2.5.2.useNetwork';
import ScrollExample from './2.useEffect/2.6.1.useScroll';
import FullScreenExample from './2.useEffect/2.6.2.useFullScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<FullScreenExample />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
