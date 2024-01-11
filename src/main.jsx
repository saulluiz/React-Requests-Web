import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Post from './pages/Post.jsx';
import Patch from './pages/Patch.jsx';
import Get from './pages/Get.jsx';

//https://www.youtube.com/watch?v=XqxUHVVO7-U
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/post' element={<Post />} />
                    <Route path='/patch' element={<Patch />} />
                    <Route path='/get' element={<Get />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
