import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import CoreSkills from '../skills/CoreSkills';

export default function Home({ innerRef }) {

   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>

         <Box>
            <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} display="flex"
               flexDirection="column"
               alignItems="center"
               justifyContent="center"
               p={'0.8rem'}
               sx={{ listStyle: 'none', paddingLeft: 0 }} >
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>

            <Box display="flex" justifyContent="center" mt={3}>
               <a
                  href={info.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Style.resumeButton}
                  style={{ background: info.gradient }} // dynamic gradient from info.js
               >
                  View Resume
               </a>
            </Box>

         </Box>

      </Box>
   )
}