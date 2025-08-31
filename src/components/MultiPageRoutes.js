import Home from "./portfolio/Portfolio";
import About from "./about/About";
import Skills from "./skills/Skills";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Projects from "./projects/Projects";
export default function MultiPageRoutes() {
    return (
        
        <Routes>
            <Route exact path={'/portfolio'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/skills'} element={<Skills />} />

            <Route exact path={'/projects'} element={<Projects />} />
        </Routes>
    )
}