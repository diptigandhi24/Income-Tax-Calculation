import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index';
//to create the db
import { initDB } from './components/Indexdb/indexdb';
initDB();
render(<App />, document.getElementById('app'));
