import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import { Description } from "@mui/icons-material"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Banan",
    lastName: "Elmisrati",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like

        {
            emoji: '🌎',
            text: 'Based in Jordan'
        },
        {
            emoji: "💼",
            text: "Software Development Engineer at Material Insights"
        },
        {
            emoji: "📧",
            text: "bananalmisrati@gmail.com"
        }
    ],
    socials: [


        {
            link: "https://github.com/webcycl",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/banan-almisrati-a5b102206/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },


    ],

    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "mi-Database",
            createdFor: "@Material Insights",
            live: "https://mat-insights.com/mi-database/Automotive-Steels/01st-Gen.-Adv.-High-Strength-Steels-(Mixed-Phases)/Dual-Phase-(DP)-Steels/Free-Sample-Material?test=UAT", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            description: "At Material Insights, I developed mi-Database—a data management and visualization platform designed to help businesses organize, query, and analyze large datasets efficiently. It provides an intuitive interface for importing, cleaning, and transforming data, alongside built-in charting and reporting features. The tool integrates with multiple database systems, supports role-based access control, and offers automated data refresh scheduling, enabling teams to make data-driven decisions faster and with greater accuracy.",
            logo: "	https://d3sw8n59epysgp.cloudfront.net/images/mi-database-go.png",
            bgColor: "#FFD580	"
        },
        {
            title: "MI",
            createdFor: "@Material Insights",
            live: "https://mat-insights.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            description: "At Material Insights, I revamped MI—the company main website enhancing the website’s user experience, visual design, and clarity—making the platform more intuitive and visually appealing while ensuring information is accessible and engaging.",
            logo: "	https://d3sw8n59epysgp.cloudfront.net/images/mi-og.webp",
            bgColor: "#FFDEAD		"
        },


    ],
    resume: "https://drive.google.com/file/d/1MlE2VuagKbf3p1qsaS5nXww8c7vV_DTI/view?usp=sharing",
}