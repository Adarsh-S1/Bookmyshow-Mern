import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import "../assets/css/Footer/Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div id="footer_upper">
          <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
          &nbsp;&nbsp;&nbsp;
          <p id="first">List your show</p>
          <p id="second">
            Got a show, event, activity or experience? Partner with us & get
            listed on BookMyShow
          </p>
          <button type="button" className="btn btn-primary">
            Contact today!
          </button>
        </div>
        <div id="footer_middle">
          <div className="footermiddle1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 102 102"
              id="icon-callcenter"
              fill="#c7c7c7"
            >
              <path d="M68.8 29.4c0-10.4-8.4-18.8-18.8-18.8S31.2 19 31.2 29.4 39.6 48.2 50 48.2s18.8-8.4 18.8-18.8zm-35.8 0c0-9.3 7.6-17 17-17 9.3 0 17 7.6 17 17 0 9.3-7.6 17-17 17-9.3 0-17-7.6-17-17z"></path>
              <path d="M24 30.3c.5 0 .9-.4.9-.9C24.9 15.6 36.2 4.3 50 4.3s25.1 11.3 25.1 25.1c0 13.1-10.5 28.3-24.2 29v-3.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v8.6c0 .5.4.9.9.9s.9-.4.9-.9v-2.9c14.7-.7 26-16.8 26-30.8C76.9 14.6 64.8 2.5 50 2.5S23.1 14.6 23.1 29.4c0 .5.4.9.9.9z"></path>
              <path d="M68.1 63c-.6-.2-1.2-.3-1.9-.3-.9 0-2.3.7-4.9 2.1-3.2 1.7-7.7 4-10.6 4-3.2 0-8-2.3-11.5-4-2.8-1.3-4.3-2-5.3-2-.7 0-1.3.1-1.9.3C16.7 68.2 11.2 86 11.2 96.7c0 .5.4.9.9.9H88c.5 0 .9-.4.9-.9 0-10.8-5.6-28.6-20.8-33.7zM13 95.7c.3-12.1 7.2-26.8 19.6-30.9.4-.1.8-.2 1.3-.2.6 0 2.7 1 4.5 1.9 3.9 1.9 8.7 4.2 12.3 4.2 3.3 0 7.8-2.3 11.4-4.2 1.6-.8 3.6-1.9 4.1-1.9s.9.1 1.3.2C79.9 68.9 86.7 83.6 87 95.7H13zm3.6-55.3c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c0 .5.4.9.9.9zm66.8 0c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c-.1.5.4.9.9.9z"></path>
            </svg>
            <center>
              <br />
              <span>24/7 CUSTOMER CARE</span>
            </center>
          </div>
          <div className="footermiddle1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 102 102"
              id="icon-resend"
              fill="#c7c7c7"
            >
              <path d="M92.1 69l-5.6-13.9a1 1 0 0 0-1.1-.5c-1.9.8-4.1-.2-4.8-2.1-.4-.9-.4-1.9 0-2.8.4-.9 1.1-1.6 2-2 .2-.1.4-.2.5-.4s.1-.4 0-.6l-5.6-13.9a1 1 0 0 0-1.1-.5L61 38.5l9-20.9c.2-.4 0-.9-.4-1.1L57 11.1c-.4-.2-.9 0-1.1.4a3.3 3.3 0 0 1-4.3 1.8c-.8-.3-1.4-1-1.8-1.8-.3-.8-.3-1.7 0-2.5.1-.2.1-.4 0-.6-.1-.2-.2-.4-.4-.5L36.8 2.6c-.4-.2-.9 0-1.1.4L12.3 58.2l-3.9 1.5c-.2.2-.4.3-.4.5-.1.2-.1.4 0 .6l5.6 13.9c.2.4.7.6 1.1.5 1.9-.7 4.1.2 4.8 2 .4.9.4 1.9 0 2.8s-1.1 1.6-2 2c-.2.1-.4.2-.5.4-.1.2-.1.4 0 .6l5.4 14c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l68.1-27.3c.5-.2.7-.7.6-1.2zM36.9 4.4L48 9.1c-.2 1-.2 2 .2 3 .5 1.2 1.4 2.2 2.7 2.7 2.3 1 4.8.1 6.1-1.9l11.1 4.7-9.3 21.8-4.7 1.9L59 30.2l2.5-5.8c.1-.2.1-.4 0-.6s-.2-.4-.4-.5L38 13.5c-.2-.1-.4-.1-.6 0-.2.1-.4.2-.5.4L19.1 55.5l-4.7 1.9 22.5-53zm-1.4 16.7l.8.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-.8-.3 1.8-4.3 21.6 9.2-1.8 4.3-.8-.4c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1l.8.3-5.1 12-30.7 12.4 14.2-33.5zM23.7 95.6l-5-12.4c1-.6 1.7-1.4 2.2-2.5.6-1.3.6-2.8 0-4.1-.8-2-2.8-3.4-5-3.4-.4 0-.8 0-1.2.1L9.8 61l66.5-26.7 5 12.4c-1 .6-1.7 1.4-2.2 2.5a4.9 4.9 0 0 0 0 4.1c.8 2 2.8 3.4 5 3.4.4 0 .8 0 1.2-.1l5 12.4-66.6 26.6z"></path>
              <path d="M70 42.1c-.1-.2-.2-.4-.4-.5-.2-.1-.4-.1-.6 0L20.2 61.2a1 1 0 0 0-.5 1.1L30 87.8c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l42.3-17 6.4-2.6c.4-.2.6-.7.5-1.1L70 42.1zm3.5 27.3l-.3-.8a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.4.8-34.2 13.7-.3-.7a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.3.8-5.1 2-9.6-23.9 5.1-2 .3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 34.1-13.7.3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 4.9-2 9.6 23.9-4.9 2.1z"></path>
              <path d="M30.6 65.7c-.2-.4-.7-.6-1.1-.5s-.6.7-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm3.5 8.6a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm32.2-22.9a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm1.9 9.3l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1L69.7 60a1 1 0 0 0-1.1-.5c-.4.2-.6.7-.4 1.2zm-19.5-34l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.3.4-.1.9.4 1.1zm-7.8-3.3l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1zm13.4 41.4c-.5 0-.8.4-.8.8 0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.3 1.9-4.2 4.2-4.3l-1.6 2.3c-.3.4-.2.9.2 1.2.1.1.3.1.5.1.3 0 .5-.1.7-.4l2.6-3.7c.3-.4.2-.9-.2-1.1L47.5 57c-.4-.3-.9-.2-1.2.2s-.2.9.2 1.2l1.9 1.4c-3 .3-5.4 2.9-5.4 5.9 0 3.3 2.7 6 6 6s6-2.7 6-6c.1-.5-.3-.9-.7-.9z"></path>
            </svg>
            <center>
              <br />
              <span>RESEND BOOKING CONFIRMATION</span>
            </center>
          </div>
          <div className="footermiddle1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="icon-newsletter"
              viewBox="-1 -1 102 102"
              fill="#c7c7c7"
            >
              <g id="elnewsletter">
                <path
                  className="elst0"
                  d="M97.5 90.3V33.6c0-.5-.4-1-1-1H82.9V9.8c0-.5-.4-1-1-1H18.1a1 1 0 0 0-1 1v22.8H3.5a1 1 0 0 0-1 1v56.9c0 .1.1.1.1.2v.1c0 .1.1.1.2.1.1.1.2.1.2.1.1 0 .1 0 .2.1h93.4c.1 0 .3 0 .4-.1 0 0 .1 0 .1-.1.1-.1.2-.1.2-.2v-.1c0-.1.1-.1.1-.2.1 0 .1 0 .1-.1zm-1.9-55.7v53.6L63.9 64.1l18.6-17.7 7.7-7.4c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6h-6.8v-2.7h12.9zM50.2 56.1l43.4 33.1H6.4l43.8-33.1zm32.7-16.8h4.4l-4.4 4.1v-4.1zM19.1 10.8h61.8v34.5L62.4 62.9l-11.6-8.8c-.3-.3-.8-.3-1.2 0L37.8 63 19.1 45.3V10.8zm-2 32.6l-4.4-4.1h4.4v4.1zm0-8.8v2.7h-6.8c-.4 0-.8.2-.9.6-.1.4-.1.8.2 1.1l26.5 25.2-31.8 24V34.6h12.8z"
                ></path>
                <path
                  className="elst0"
                  d="M28.9 22.5h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1zm0 10h42.7a1 1 0 0 0 0-2H28.9a1 1 0 0 0 0 2zm0 9.9h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1z"
                ></path>
              </g>
            </svg>
            <center>
              <br />
              <span>SUBSCRIBE TO THE NEWSLETTER</span>
            </center>
          </div>
        </div>
        <div id="footer_links">
          <ul>
            <p>MOVIES PLAYING IN YOUR REGION</p>
            <li>
              <Link to="">Wonder Woman 1984</Link>
            </li>
            <li>
              {" "}
              <Link to="">Tenet</Link>
            </li>
            <li>
              <Link to="">Indoo Ki Jawani</Link>
            </li>
            <li>
              {" "}
              <Link to="">Sayone</Link>
            </li>
            <li>
              <Link to="">Suraj Pe Mangal Bhari</Link>
            </li>
            <li>
              <Link to="">Omprakash Zindabad</Link>
            </li>
            <li>
              {" "}
              <Link to="">The Secret We Keep</Link>
            </li>
            <li>
              <Link to="">Eeb Allay Ooo!</Link>
            </li>
            <li>
              <Link to="">Dil Dhadakne Do</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Bajirao Mastani
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>UPCOMIG MOVIES</p>
            <li>
              <Link to="">Cheeni</Link>
            </li>
            <li>
              {" "}
              <Link to="">Murder</Link>
            </li>
            <li>
              <Link to="">Katteri</Link>
            </li>
            <li>
              {" "}
              <Link to="">Solo Brathuke</Link>
            </li>
            <li>
              <Link to="">Avanalli Ivalilli</Link>
            </li>
            <li>
              <Link to="">Vangaurd</Link>
            </li>
            <li>
              {" "}
              <Link to="">Shakeela Biopic</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Test Movie
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>MOVIES PLAYING IN YOUR REGION</p>
            <li>
              <Link to="">Musical Movies</Link>
            </li>{" "}
            <li>
              <Link to="">Tragedy Movies</Link>
            </li>
            <li>
              <Link to="">Bollywood Movies</Link>
            </li>
            <li>
              <Link to="">Fantasy Movies</Link>
            </li>{" "}
            <li>
              <Link to="">Mystery Movies</Link>
            </li>
            <li>
              <Link to="">Period Movies</Link>
            </li>
            <li>
              <Link to="">Political Movies</Link>
            </li>{" "}
            <li>
              <Link to="">Romantic Movies</Link>
            </li>
            <li>
              <Link to="">Thriller Movies</Link>
            </li>
            <li>
              <Link to="">Animation Movies</Link>
            </li>{" "}
            <li>
              <Link to="">Noir Movies</Link>
            </li>
            <li>
              <Link to="">Suspense Movies</Link>
            </li>
            <li>
              <Link to="">Devotional Movies</Link>
            </li>{" "}
            <li>
              <Link to="">Supernatural Movies</Link>
            </li>
            <li>
              <Link to="">War Movies</Link>
            </li>
            <li>
              <Link to="">Adult Movies</Link>
            </li>{" "}
            <li>
              <Link to="">Screening Movies</Link>
            </li>
            <li>
              <Link to="">Classic Movies</Link>
            </li>
            <li>
              <Link to="">Comedy Movies</Link>
            </li>{" "}
            <li>
              <Link to="">Pschological Movies</Link>
            </li>
            <li>
              <Link to="">Action Movies</Link>
            </li>
            <li>
              <Link to="">Historical Movies</Link>
            </li>{" "}
            <li>
              <Link to="">Mythological Movies</Link>
            </li>
            <li>
              <Link to="">Biography Movies</Link>
            </li>
            <li>
              <Link to="">Crime Movies</Link>
            </li>{" "}
            <li>
              <Link to="">Horror Movies</Link>
            </li>
            <li>
              <Link to="">Adaptation Movies</Link>
            </li>
            <li>
              <Link to="">Adventure Movies</Link>
            </li>{" "}
            <li>
              <Link to="">Drama Movies</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Sci-fi Movies
              </Link>
            </li>
            <br />
          </ul>
          <br />
          <ul>
            <p>MOVIES BY LANGUAGE</p>
            <li>
              <Link to="">Movies in Nepali</Link>
            </li>
            <li>
              <Link to="">Movies in Telugu</Link>
            </li>
            <li>
              <Link to="">Movies in Marathi</Link>
            </li>
            <li>
              <Link to="">Movies in Malayalam</Link>
            </li>
            <li>
              <Link to="">Movies in Japamese</Link>
            </li>
            <li>
              <Link to="">Movies in Gujarati</Link>
            </li>
            <li>
              <Link to="">Movies in English</Link>
            </li>
            <li>
              <Link to="">Movies in Hindi</Link>
            </li>
            <li>
              <Link to="">Movies in Assamese</Link>
            </li>
            <li>
              <Link to="">Movies in Haryanvi</Link>
            </li>
            <li>
              <Link to="">Movies in Bengali</Link>
            </li>
            <li>
              <Link to="">Movies in Oriya</Link>
            </li>
            <li>
              <Link to="">Movies in Portuguese</Link>
            </li>
            <li>
              <Link to="">Movies in Punjabi</Link>
            </li>
            <li>
              <Link to="">Movies in Tamil</Link>
            </li>
            <li>
              <Link to="">Movies in Bhojpuri</Link>
            </li>
            <li>
              <Link to="">Movies in Kannada</Link>
            </li>
            <li>
              <Link to="">Movies in Rajasthani</Link>
            </li>
            <li>
              <Link to="">Movies in Khasi</Link>
            </li>
            <li>
              <Link to="">Movies in Chanttisgarhi</Link>
            </li>
            <li>
              <Link to="">Movies in French</Link>
            </li>
            <li>
              <Link to="">Movies in Konkani</Link>
            </li>
            <li>
              <Link to="">Movies in Tulu</Link>
            </li>
            <li>
              <Link to="">Movies in English 7D</Link>
            </li>
            <li>
              <Link to="">Movies in Sindhi</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Movies in Urdu
              </Link>
            </li>
            <br />
          </ul>
          <br />
          <ul>
            <p>PLAYS BY GENRE IN YOUR REGION</p>
            <li>
              <Link to="">Musical Plays</Link>
            </li>
            <li>
              <Link to="">Tragedy Plays</Link>
            </li>
            <li>
              <Link to="">Historical Plays</Link>
            </li>
            <li>
              <Link to="">Mystery Plays</Link>
            </li>
            <li>
              <Link to="">Period Plays</Link>
            </li>
            <li>
              <Link to="">Political Plays</Link>
            </li>
            <li>
              <Link to="">Regional Plays</Link>
            </li>
            <li>
              <Link to="">Romantic Plays</Link>
            </li>
            <li>
              <Link to="">Thriller Plays</Link>
            </li>
            <li>
              <Link to="">Tribute Plays</Link>
            </li>
            <li>
              <Link to="">Adaptation Plays</Link>
            </li>
            <li>
              <Link to="">Adventure Plays</Link>
            </li>
            <li>
              <Link to="">Drama Plays</Link>
            </li>
            <li>
              <Link to="">Sci-Fi Plays</Link>
            </li>
            <li>
              <Link to="">Classic Plays</Link>
            </li>
            <li>
              <Link to="">Comedy Plays</Link>
            </li>
            <li>
              <Link to="">Online Streaming Plays Plays</Link>
            </li>
            <li>
              <Link to="">Psychological Plays</Link>
            </li>
            <li>
              <Link to="">Broadway Plays</Link>
            </li>
            <li>
              <Link to="">Noir Plays</Link>
            </li>
            <li>
              <Link to="">Suspense Plays</Link>
            </li>
            <li>
              <Link to="">Adult Plays</Link>
            </li>
            <li>
              <Link to="">Comtemporary Plays</Link>
            </li>
            <li>
              <Link to="">War Plays</Link>
            </li>
            <li>
              <Link to="">Action Plays</Link>
            </li>
            <li>
              <Link to="">Mythological Plays</Link>
            </li>
            <li>
              <Link to="">Biography Plays</Link>
            </li>
            <li>
              <Link to="">Horror Plays</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Fantasy Plays
              </Link>
            </li>
            <br />
          </ul>
          <br />
          <ul>
            <p>MOVIES REVIEW</p>
            <li>
              <Link to="">Trending Articles</Link>
            </li>
            <li>
              <Link to="">Latest News on Movies, Events, Plays and Sports</Link>
            </li>
            <li>
              <Link to="">Rajeev Masand Movie Reviews</Link>
            </li>
            <li>
              <Link to="">Anupama Chopra Movie Reviews</Link>
            </li>
            <li>
              <Link to="">Film Reviews</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Guest Blogging
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>MOVIE UPDATES AND CELEBRITIES</p>
            <li>
              <Link to="">Upcoming Movies</Link>
            </li>
            <li>
              <Link to="">Now Showing</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Movie Celebrities
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>THINGS TO DO IN YOUR REGION</p>
            <li>
              <Link to="">Chritmas Celeration</Link>
            </li>
            <li>
              <Link to="">Durga Puja Festival</Link>
            </li>
            <li>
              <Link to="">Hilsa Festival</Link>
            </li>
            <li>
              <Link to="">Holi Parties</Link>
            </li>
            <li>
              <Link to="">Monuments</Link>
            </li>
            <li>
              <Link to="">Nightlife</Link>
            </li>
            <li>
              <Link to="">Antiques, Heritage, Museum</Link>
            </li>
            <li>
              <Link to="">Festivals</Link>
            </li>
            <li>
              <Link to="">Gaming</Link>
            </li>
            <li>
              <Link to="">Parties</Link>
            </li>
            <li>
              <Link to="">Quizzes and Competition</Link>
            </li>
            <li>
              <Link to="">Food and Drinks</Link>
            </li>
            <li>
              <Link to="">Poila Baishakh Festival</Link>
            </li>
            <li>
              <Link to="">Adventure</Link>
            </li>
            <li>
              <Link to="">Amusement Parks</Link>
            </li>
            <li>
              <Link to="">Tourist Attractions</Link>
            </li>
            <li>
              <Link to="">Hospitals</Link>
            </li>
            <li>
              <Link to="">Navratri</Link>
            </li>
            <li>
              <Link to="">New Year Parties</Link>
            </li>
            <li>
              <Link to="">Shops and Malls</Link>
            </li>
            <li>
              <Link to="">Valentines Day celebrations</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Unique Tours
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>SPORTS EVENT IN YOUR REGION</p>
            <li>
              <Link to="">Athletics</Link>
            </li>
            <li>
              <Link to="">Archery</Link>
            </li>
            <li>
              <Link to="">Bowling</Link>
            </li>
            <li>
              <Link to="">Card Games</Link>
            </li>
            <li>
              <Link to="">Kabaddi</Link>
            </li>
            <li>
              <Link to="">E Sports</Link>
            </li>
            <li>
              <Link to="">Judo</Link>
            </li>
            <li>
              <Link to="">Muay Thai</Link>
            </li>
            <li>
              <Link to="">Motorsports</Link>
            </li>
            <li>
              <Link to="">Baseball</Link>
            </li>
            <li>
              <Link to="">Cricket</Link>
            </li>
            <li>
              <Link to="">Ice Skating</Link>
            </li>
            <li>
              <Link to="">Snooker</Link>
            </li>
            <li>
              <Link to="">Basketball</Link>
            </li>
            <li>
              <Link to="">Boat Race</Link>
            </li>
            <li>
              <Link to="">Derby Horce Race</Link>
            </li>
            <li>
              <Link to="">Rugby</Link>
            </li>
            <li>
              <Link to="">Boxing</Link>
            </li>
            <li>
              <Link to="">Chess</Link>
            </li>
            <li>
              <Link to="">Cycling</Link>
            </li>
            <li>
              <Link to="">Golf</Link>
            </li>
            <li>
              <Link to="">Mixed Martial Arts</Link>
            </li>
            <li>
              <Link to="">Pool</Link>
            </li>
            <li>
              <Link to="">Volleyball</Link>
            </li>
            <li>
              <Link to="">Walking</Link>
            </li>
            <li>
              <Link to="">Badminton</Link>
            </li>
            <li>
              <Link to="">Football</Link>
            </li>
            <li>
              <Link to="">Swimming</Link>
            </li>
            <li>
              <Link to="">wrestling</Link>
            </li>
            <li>
              <Link to="">Hockey</Link>
            </li>
            <li>
              <Link to="">Polo</Link>
            </li>
            <li>
              <Link to="">Table Tennis</Link>
            </li>
            <li>
              <Link to="">Tennis</Link>
            </li>
            <li>
              <Link to="">Kickboxing</Link>
            </li>
            <li>
              <Link to="">Shooting</Link>
            </li>
            <li>
              <Link to="">Triathlon</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Weight Lifting
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>EVENTS IN YOUR REGION</p>
            <li>
              <Link to="">Comedy Shows</Link>
            </li>
            <li>
              <Link to="">Exibitions</Link>
            </li>
            <li>
              <Link to="">Conferences</Link>
            </li>
            <li>
              <Link to="">Meetups</Link>
            </li>
            <li>
              <Link to="">Kids</Link>
            </li>
            <li>
              <Link to="">Talks</Link>
            </li>
            <li>
              <Link to="">Screening</Link>
            </li>
            <li>
              <Link to="">Award shows</Link>
            </li>
            <li>
              <Link to="">Workshops</Link>
            </li>
            <li>
              <Link to="">Music Shows</Link>
            </li>
            <li>
              <Link to="">Online Streaming Events</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Sprituality
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>CINEMAS IN TOP CITIES</p>
            <li>
              <Link to="">Cinemas in Mumbai</Link>
            </li>
            <li>
              <Link to="">Cinemas in National Capital Region (NCR)</Link>
            </li>
            <li>
              <Link to="">Cinemas in Chennai</Link>
            </li>
            <li>
              <Link to="">Cinemas in Bengaluru</Link>
            </li>
            <li>
              <Link to="">Cinemas in Hyderabad</Link>
            </li>
            <li>
              <Link to="">Cinemas in Pune</Link>
            </li>
            <li>
              <Link to="">Cinemas in Ahemdabad</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Cimenas in Kolkata
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>EVENTS IN TOP CITIES</p>
            <li>
              <Link to="">Events in Mumbai</Link>
            </li>
            <li>
              <Link to="">Events in National Capital Region (NCR)</Link>
            </li>
            <li>
              <Link to="">Events in Chennai</Link>
            </li>
            <li>
              <Link to="">Events in Bengaluru</Link>
            </li>
            <li>
              <Link to="">Events in Hyderabad</Link>
            </li>
            <li>
              <Link to="">Events in Pune</Link>
            </li>
            <li>
              <Link to="">Events in Ahemdabad</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Events in Kolkata
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>PLAYS IN TOP CITIES</p>
            <li>
              <Link to="">Plays in Mumbai</Link>
            </li>
            <li>
              <Link to="">Plays in National Capital Region (NCR)</Link>
            </li>
            <li>
              <Link to="">Plays in Chennai</Link>
            </li>
            <li>
              <Link to="">Plays in Bengaluru</Link>
            </li>
            <li>
              <Link to="">Plays in Hyderabad</Link>
            </li>
            <li>
              <Link to="">Plays in Pune</Link>
            </li>
            <li>
              <Link to="">Plays in Ahemdabad</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Plays in Kolkata
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>ACTIVITES IN TOP CITIES</p>
            <li>
              <Link to="">Things to do in Mumbai</Link>
            </li>
            <li>
              <Link to="">Things to do in National Capital Region (NCR)</Link>
            </li>
            <li>
              <Link to="">Things to do in Chennai</Link>
            </li>
            <li>
              <Link to="">Things to do in Bengaluru</Link>
            </li>
            <li>
              <Link to="">Things to do in Hyderabad</Link>
            </li>
            <li>
              <Link to="">Things to do in Pune</Link>
            </li>
            <li>
              <Link to="">Things to do in Ahemdabad</Link>
            </li>{" "}
            <li>
              <Link to="" style={{ border: "none" }}>
                Things to do in Kolkata
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>MOVIES IN TOP CITIES</p>
            <li>
              <Link to="">Movies in Mumbai</Link>
            </li>
            <li>
              <Link to="">Movies in National Capital Region (NCR)</Link>
            </li>
            <li>
              <Link to="">Movies in Chennai</Link>
            </li>
            <li>
              <Link to="">Movies in Bengaluru</Link>
            </li>
            <li>
              <Link to="">Movies in Hyderabad</Link>
            </li>
            <li>
              <Link to="">Movies in Pune</Link>
            </li>
            <li>
              <Link to="">Movies in Ahemdabad</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Movies in Kolkata
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>COUNTRIES</p>
            <li>
              <Link to="">Indonesia</Link>
            </li>
            <li>
              <Link to="">Singapore</Link>
            </li>
            <li>
              <Link to="">UAE</Link>
            </li>
            <li>
              <Link to="">Sri Lanka</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                West Indies
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>HELP</p>
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
            <li>
              <Link to="">Currents Openings</Link>
            </li>
            <li>
              <Link to="">Press Release</Link>
            </li>
            <li>
              <Link to="">Press Coverage</Link>
            </li>
            <li>
              <Link to="">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
            <li>
              <Link to="">FAQs</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Sitemap
              </Link>
            </li>
          </ul>
          <br />
          <ul>
            <p>BOOKMYSHOW EXCLUSIVES</p>
            <li>
              <Link to="">Watch Guide</Link>
            </li>
            <li>
              <Link to="">Fanhood</Link>
            </li>
            <li>
              <Link to="">Superstar</Link>
            </li>
            <li>
              <Link to="">BookASmile</Link>
            </li>
            <li>
              <Link to="">Corporate Vouchers</Link>
            </li>
            <li>
              <Link to="">Gift Cards</Link>
            </li>
            <li>
              <Link to="">List My Show</Link>
            </li>
            <li>
              <Link to="" style={{ border: "none" }}>
                Offers
              </Link>
            </li>
          </ul>
          <br />
        </div>
        <br />
        <div id="footer_lower">
          <div id="vertical_line">
            <hr />
            <Link to="">
              <img alt="" src="/logo192.png" height="75" width="auto" />
            </Link>
            <hr />
          </div>
          <br />
          <div id="footer_logos">
            <a href="https://www.facebook.com/BookMyShowIN">
              <BsFacebook size={30} fill="rgb(93, 93, 95)" />
            </a>
            <a href="https://twitter.com/BookMyShow/">
              <AiFillTwitterCircle size={38} fill="rgb(93, 93, 95)" />
            </a>{" "}
            <a href="https://instagram.com/bookmyshowin/">
              <svg
                fill="rgb(93, 93, 95)"
                height="37.5"
                length="auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1 -1 102 102"
              >
                <path d="M50 59a8.96 8.96 0 0 0 7.3-14.2 8.9 8.9 0 0 0-14.6 0A8.96 8.96 0 0 0 50 59zm19.7-20v-8.7H61V39z"></path>
                <path d="M50 5C25.2 5 5 25.2 5 50s20.2 45 45 45 45-20.2 45-45S74.8 5 50 5zm25.6 39.8v20.9c0 5.4-4.4 9.9-9.9 9.9H34.3c-5.4 0-9.9-4.4-9.9-9.9V34.3c0-5.4 4.4-9.9 9.9-9.9h31.4c5.4 0 9.9 4.4 9.9 9.9v10.5z"></path>
                <path d="M64.1 50c0 7.7-6.2 14-14 14a13.98 13.98 0 0 1-13-19.2h-7.6v20.9c0 2.7 2.2 4.9 4.9 4.9h31.4c2.7 0 4.9-2.2 4.9-4.9V44.8H63c.7 1.5 1.1 3.4 1.1 5.2z"></path>
              </svg>
            </a>{" "}
            <a href="https://www.youtube.com/user/BookMyShow/featured">
              <svg
                height="37.5"
                length="auto"
                fill="rgb(93, 93, 95)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1 -1 102 102"
              >
                <path d="M43.6 57.7c5.3-2.7 10.5-5.4 15.7-8.2-5.3-2.8-10.5-5.5-15.7-8.2v16.4z"></path>
                <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm23.9 59.2c-.6 2.6-2.8 4.6-5.4 4.9-6.1.7-12.4.7-18.5.7-6.2 0-12.4 0-18.5-.7-2.6-.3-4.7-2.2-5.4-4.9-.9-3.8-.9-7.8-.9-11.7s0-8 .9-11.7c.6-2.6 2.8-4.6 5.4-4.9 6.1-.7 12.4-.7 18.5-.7 6.2 0 12.4 0 18.5.7 2.6.3 4.7 2.2 5.4 4.9.9 3.8.9 7.8.9 11.7s0 8-.9 11.7z"></path>
              </svg>
            </a>{" "}
            <a href="https://in.pinterest.com/bookmyshow/">
              <GrPinterest size={33.5} fill="rgb(93, 93, 95)" />
            </a>{" "}
            <a href="https://www.linkedin.com/company/bookmyshow/?originalSubdomain=in">
              <svg
                fill="rgb(93, 93, 95)"
                height="37.5"
                length="auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1 -1 102 102"
              >
                <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm-7.8 63.9h-8.6V36.3h8.6v30.1zm-4-32c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm34.1 32h-8.6V47.8c0-2.2-.6-3.7-3.3-3.7-4.4 0-5.3 3.7-5.3 3.7v18.6h-8.6V36.3h8.6v2.9c1.2-.9 4.3-2.9 8.6-2.9 2.8 0 8.6 1.7 8.6 11.7v18.4z"></path>
              </svg>
            </a>
          </div>
          <div id="copyright">
            <p>
              Copyright 2020 &#169; Bigtree Entertainment Pvt. Ltd. All Rights
              Reserved. <br />
              The content and images used on this site are copyright protected
              and copyrights vests with the respective owners. The usage of the
              content and images on this website is intended to promote the
              works and no endorsement of the artist shall be implied.
              Unauthorized use is prohibited and punishable by law.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
