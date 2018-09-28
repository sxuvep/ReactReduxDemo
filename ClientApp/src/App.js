import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Main from './components/PlayGround/main';
export default () => (
	<Layout>
		<Route exact path="/" component={Home} />
		<Route path="/main" component={Main} />
	</Layout>
);
