import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@material-ui/core";

const App = () => {
  const [longURL, setLongURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrls, setShortUrls] = useState([]);

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  const getLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item;
  };

  const handleURLShortner = (e) => {
    e.preventDefault();
    getShortURL(longURL);
    setLongURL("");
  };

  useEffect(() => {
    const savedUrls = JSON.parse(getLocalStorage("shorturls"));
    console.log(savedUrls);
    if (savedUrls !== null) {
      setShortUrls(savedUrls);
    }
  }, [longURL]);

  async function getShortURL(longURL) {
    try {
      setLoading(true);
      if (longURL === "") {
        throw Error;
      }
      const response = await axios.get("https://api.shrtco.de/v2/shorten", {
        params: {
          url: longURL,
        },
      });

      const shorturlsObj = JSON.parse(getLocalStorage("shorturls"));

      if (shorturlsObj !== null) {
        const longUrls = shorturlsObj.map((urlObj) => {
          return urlObj["longURL"];
        });

        if (!longUrls.includes(longURL)) {
          setShortUrls([
            ...shortUrls,
            {
              longURL,
              shortUrls: response["data"]["result"]["full_short_link"],
            },
          ]);
          setLocalStorage(
            "shorturls",
            JSON.stringify([
              ...shorturlsObj,
              {
                longURL,
                shortUrls: response["data"]["result"]["full_short_link"],
              },
            ])
          );
        }
      } else {
        setShortUrls([
          ...shortUrls,
          { longURL, shortUrls: response["data"]["result"]["full_short_link"] },
        ]);
        setLocalStorage(
          "shorturls",
          JSON.stringify([
            {
              longURL,
              shortUrls: response["data"]["result"]["full_short_link"],
            },
          ])
        );
      }

      console.log(JSON.parse(getLocalStorage("shorturls")));

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    setLongURL(e.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleURLShortner}>
        <input
          type="url"
          placeholder="Shorten URL link here"
          className="url-input"
          onChange={handleChange}
          value={longURL}
        />
        {/* <Button>Shorten it</Button> */}
        <input type="submit" value="Shorten it" />
      </form>
      {loading ? <h1>Loading...</h1> : ""}
      {shortUrls
        ? shortUrls.map((url) => {
            return (
              <div key={shortUrls.indexOf(url)}>
                <div>
                  <a href={url.longURL}>{url.longURL}</a>
                </div>
                <div>
                  <a href={url.shortUrls}>{url.shortUrls}</a>
                </div>
              </div>
            );
          })
        : null}
      {/* <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container> */}
    </React.Fragment>
  );
};

export default App;
