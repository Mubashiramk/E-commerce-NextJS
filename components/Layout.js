import React from "react";
import Head from "next/head";
import useStyle from "../utils/styles";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";

export default function Layout({ title, description, children }) {
  const classes = useStyle();
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
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.typography}>Flamingo</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
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
    </div>
  );
}
