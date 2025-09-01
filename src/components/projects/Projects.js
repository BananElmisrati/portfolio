import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid, Grow } from "@mui/material";
import { info } from "../../info/Info";

export default function Projects({ innerRef }) {
  return (
    <Box id={'portfolio'} ref={innerRef} style={{ paddingTop: "40px" }}>
      <Grid container display={'flex'} justifyContent={'center'}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Grow in={true} timeout={500 + index * 300}>
              <div>
                <PortfolioBlock
                  image={project.image}
                  live={project.live}
                  source={project.source}
                  title={project.title}
                  createdFor={project.createdFor}
                  description={project.description}
                  logo={project.logo}
                  bgColor={project.bgColor}
                  logoIcon={project.logoIcon}
                />
              </div>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
