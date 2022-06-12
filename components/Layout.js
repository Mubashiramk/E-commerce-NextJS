import React, { useContext } from "react";
import Head from "next/head";
import useStyle from "../utils/styles";
import NextLink from "next/link";
// import { createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
} from "@material-ui/core";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const classes = useStyle();
  const theme = createTheme({
    typography: {
      fontSize: 15,
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <div>
      <Head>
        <title>
          {title
            ? `${title} - Flemingo Next E-Commerce`
            : "Flemingo Next E-Commerce"}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.typography}>Flemingo</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart </Link>
              </NextLink>

              <NextLink href="/login" passHref>
                <Link> Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Flemingo e-commerce</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
