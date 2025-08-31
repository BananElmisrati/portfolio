import Home from "./portfolio/Portfolio";
import About from "./about/About";
import React from 'react';
import { Box } from "@mui/material";
import Projects from "./projects/Projects";

export default function SinglePageRoutes({refs}) {
    return (<Box mt={'3rem'}>
        <Home innerRef={refs.refHome}/>
        <About innerRef={refs.refAbout}/>
        <Projects innerRef={refs.refPortfolio}/>
    </Box>)
}