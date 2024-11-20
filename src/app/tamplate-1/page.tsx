"use client";
import Image from "next/image";
import Link from "next/link";
// import c1 from "../../public/c1.jpg";
// import c11 from "../../public/c11.jpg";
import c1 from "../../../public/c1.jpg";
import c11 from "../../../public/c11.jpg";
import {
  AppBar,
  Box,
  Button,
  Card,
  Collapse,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { Icon } from "@iconify/react";
import { useTheme } from "@mui/material";

// MOBILE IMPORTS
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type Anchor = "top" | "left" | "bottom" | "right";

const menuItems = [
  {
    title: "Landings",
    items: ["Hero section", "Villen section", "My section"],
  },
  { title: "Company", items: ["About", "Careers", "Contact"] },
  { title: "Account", items: ["Login", "Register"] },
  { title: "Pages", items: ["Basic", "Advanced"] },
  { title: "Blog", items: ["Latest", "Archive"] },
  { title: "Portfolio", items: ["Projects", "Case Studies"] },
];

export default function Component() {
  const [menuAnchors, setMenuAnchors] = useState<{
    [key: string]: HTMLElement | null;
  }>({});

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    title: string
  ) => {
    setMenuAnchors({ ...menuAnchors, [title]: event.currentTarget });
  };

  const handleMenuClose = (title: string) => {
    setMenuAnchors({ ...menuAnchors, [title]: null });
  };

  // code of second container
  const features = [
    {
      icon: <Icon icon="mdi:webhook" />,
      title: "Built for developers",
      description:
        "Probz.Ai is built to make your life easier. Variables, build tooling, documentation, and reusable components.",
    },
    {
      icon: <Icon icon="mdi:flask-outline" />,
      title: "Designed to be modern",
      description:
        "Designed with the latest design trends in mind. Probz.Ai feels modern, minimal, and beautiful.",
    },
    {
      icon: <Icon icon="mdi:code-tags" />,
      title: "Documentation for everything",
      description:
        "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
    },
  ];

  // this is a code of a 3rd container
  const theme = useTheme();

  const stats = [
    {
      number: "300+",
      description:
        "300 + component compositions, which will help you to build any page easily.",
    },
    {
      number: "45+",
      description:
        "45 + landing and supported pages to Build a professional website.",
    },
    {
      number: "99%",
      description: "99% of our customers rated 5-star our themes over 5 years.",
    },
  ];

  const featuresOfC3 = [
    {
      icon: <Icon icon="mdi:palette" />,
      title: "Themeable",
      description:
        "Customize any part of our components to match your design needs.",
    },
    {
      icon: <Icon icon="mdi:weather-night" />,
      title: "Light and dark UI",
      description:
        "Optimized for multiple color modes. Use light or dark, your choice.",
    },
    {
      icon: <Icon icon="mdi:puzzle" />,
      title: "Composable",
      description:
        "Designed with composition in mind. Compose new components with ease.",
    },
    {
      icon: <Icon icon="mdi:puzzle" />,
      title: "Developer experience",
      description:
        "Guaranteed to boost your productivity when building your app or website.",
    },
    {
      icon: <Icon icon="mdi:puzzle" />,
      title: "Continuous updates",
      description:
        "We continually deploy improvements and new updates to theFront.",
    },
    {
      icon: <Icon icon="mdi:puzzle" />,
      title: "Free support",
      description:
        "6 months of free technical support to help you build your website faster.",
    },
  ];

  // CODE OF SIDE MENU BAR FOR MOBILE
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const [openSection, setOpenSection] = useState<string | null>(null);
  const menuItemsMobile = {
    LANDINGS: ["Hero section", "Villen section", "My section"],
    COMPANY: ["About Us", "Careers", "Press"],
    ACCOUNT: ["Profile", "Settings", "Logout"],
    PAGES: ["Contact Us", "FAQ", "Terms of Service"],
  };

  const handleMouseEnter = (section: string) => {
    setOpenSection(section); // Expand the hovered section
  };
  const handleMouseEnterClick = (section: string) => {
    setOpenSection(section); // Expand the hovered section
  };

  const handleMouseLeave = () => {
    setOpenSection(null); // Collapse the section
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Object.keys(menuItemsMobile).map((text, index) => (
          <Box
            key={text}
            onMouseEnter={() => handleMouseEnter(text)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMouseEnterClick(text)}
          >
            {/* Main List Item */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <Icon icon="mdi:inbox" />
                  ) : (
                    <Icon icon="mdi:email" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
                {openSection === text ? (
                  <Icon icon="mdi:chevron-up" />
                ) : (
                  <Icon icon="mdi:chevron-down" />
                )}
              </ListItemButton>
            </ListItem>

            {/* Sub-list */}
            <Collapse in={openSection === text} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{
                  pl: 4,
                  ml: 4,
                }}
              >
                {menuItemsMobile[text as keyof typeof menuItemsMobile].map(
                  (subItem) => (
                    <ListItem
                      key={subItem}
                      disablePadding
                      onClick={toggleDrawer("left", false)}
                    >
                      <ListItemButton>
                        <ListItemText primary={subItem} />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
      <Divider />
      <List>
        {["BLOG", "PORTFOLIO"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <Icon icon="mdi:inbox" />
                ) : (
                  <Icon icon="mdi:email" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{ minHeight: "100vh", bgcolor: "background.default", width: "100%" }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link
              href="/"
              passHref
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1,
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                Ai{" "}
              </Box>
              <Typography
                color="black"
                variant="h6"
                component="div"
                sx={{ fontWeight: 700 }}
              >
                Probz
              </Typography>
            </Link>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                alignItems: "center",
              }}
            >
              {menuItems.map(({ title, items }) => (
                <Box key={title} color="black">
                  <Button
                    color="inherit"
                    endIcon={<Icon icon="mdi:chevron-down" />}
                    onClick={(e) => handleMenuOpen(e, title)}
                  >
                    {title}
                  </Button>
                  <Menu
                    anchorEl={menuAnchors[title]}
                    open={Boolean(menuAnchors[title])}
                    onClose={() => handleMenuClose(title)}
                    MenuListProps={{
                      onMouseLeave: () => handleMenuClose(title), // Automatically close on mouse leave
                      sx: {
                        backgroundColor: "#f9f9f9", // Light background color
                        borderRadius: "8px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Smooth shadow effect
                        padding: "8px 0", // Space around the menu items
                      },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#1565C0", // Light background color for dropdown
                        borderRadius: "8px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Smooth shadow effect
                        padding: "2px 0", // Space around the menu items
                        mt: -1,
                      }}
                    />
                    {items.map((item) => (
                      <MenuItem
                        key={item}
                        onClick={() => handleMenuClose(title)}
                        sx={{
                          fontSize: "14px",
                          padding: "10px 20px",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 255, 0.1)", // Subtle blue hover effect
                            color: "blue", // Change text color on hover
                          },
                        }}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ))}
              <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                Buy now
              </Button>
            </Box>

            {/* MOBILE MENU */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer("left", true)}
              >
                <Icon icon="mdi:menu" />{" "}
              </IconButton>

              {/* Drawer for Side Menu */}
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 100%)",
          pt: { xs: 8, md: 12 },
          pb: { xs: 20, md: 24 }, // Extra padding to account for the curve
          overflow: "hidden", // Ensure the SVG doesn't create scrollbars
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
              <Typography
                color="text.primary"
                variant="h2"
                component="h1"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Turn your ideas <br /> into{" "}
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -2,
                      width: "100%",
                      height: "14px",
                      backgroundColor: "#FAE8C1",
                      zIndex: -1,
                    },
                  }}
                >
                  success.
                </Box>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Probz.Ai will make your product look modern and professional
                while saving you precious time.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button variant="contained" color="primary" size="large">
                  View pages
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  Documentation
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                position: "relative",
                height: { xs: "300px", md: "500px" },
                width: "100%",
              }}
            >
              <Image
                src={c1}
                alt="Website screenshots"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
          </Box>
        </Container>
        {/* Custom SVG for the curved bottom */}
        <Box
          component="svg"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "10%", // Adjust this value to change the curve's height
            zIndex: 1,
          }}
        >
          <path
            fill="#ffffff"
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>

      {/* THIS IS A 2RD CONATINER */}
      <Container>
        <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 8 }} color="#1E2022">
              <Typography
                component="h2"
                variant="h3"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                Build accessible React apps with speed
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                Build a beautiful, modern website with flexible, fully
                customizable, atomic MUI components.
              </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        backgroundColor: "primary.lighter",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "primary.main",
                        mb: 2,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 500,
                        mb: 1,
                      }}
                      color="#1E2022"
                    >
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: "center", mt: 8 }}>
              <Typography
                component="h2"
                variant="h3"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                }}
                color="#1E2022"
              >
                Build tools and full documention
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  maxWidth: 800,
                  mx: "auto",
                }}
              >
                Components, plugins, and build tools are all thoroughly
                documented with live examples and markup for easier use and
                customization.
              </Typography>
            </Box>
          </Container>
        </Box>

        <Container
          sx={{
            width: "100%",
            display: "flex", // Enables flexbox
            justifyContent: "center", // Horizontally centers the Box
            alignItems: "center", // Vertically centers the Box
          }}
        >
          <Box
            sx={{
              bgcolor: "#21325B", // Background color
              color: "#FFFFFF", // Text color for better readability
              padding: 2, // Optional: Adds spacing inside the Box
              width: {
                xs: "90%", // For extra-small screens (mobile)
                sm: "70%", // For small screens (tablet)
                md: "50%", // For medium screens (laptops)
                lg: "40%", // For large screens (desktop)
              },
              borderRadius: "10px",
            }}
          >
            <Typography> &gt; $ yarn install</Typography>
            <Typography sx={{ color: "#57A64A" }}>&#47;&#47; or</Typography>
            <Typography> &gt; $ npm install</Typography>
            <br />
            <Typography sx={{ color: "#57A64A" }}>
              &#47;&#47; Everything installed!
            </Typography>
            <br />
            <br />
            <Typography>&gt; $ yarn start</Typography>
            <Typography sx={{ color: "#57A64A" }}>&#47;&#47; or</Typography>
            <Typography>&gt; $ npm run start</Typography>
            <br />
            <Typography sx={{ color: "#57A64A" }}>
              {" "}
              &#47;&#47; LiveReload started. Opening localhost:3000
            </Typography>
          </Box>
        </Container>
      </Container>

      {/* THIS IS A 3RD CONATINER */}
      <Box
        component="section"
        sx={{
          position: "relative",
          background: "linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 100%)",
          pt: { xs: 8, md: 12 },
          pb: { xs: 20, md: 24 }, // Extra padding to account for the curve
          overflow: "hidden", // Ensure the SVG doesn't create scrollbars
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  color: "black",
                }}
              >
                The powerful and flexible theme for all kinds of businesses
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4 }}>
                Whether you are creating a subscription service, an on-demand
                marketplace, an e-commerce store, or a portfolio showcase,
                Probz.Ai helps you create the best possible product for your
                users.
              </Typography>

              <Grid container spacing={4}>
                {stats.map((stat, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 500,
                        color: "primary.main",
                        mb: 1,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.description}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "300px", md: "500px" },
                  width: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={c11}
                  alt="Business professional"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 8 }}>
            {featuresOfC3.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxShadow: theme.shadows[1],
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "common.white",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box
          component="svg"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: {
              xs: "2%",
              sm: "10%",
            }, // Adjust this value to change the curve's height
            zIndex: 1,
          }}
        >
          <path
            fill="#ffffff"
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>

      {/* THIS IS A  4TH CONTAINER */}
      <Box component="footer">
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            textAlign: "center",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h2"
              variant="h4"
              sx={{
                fontWeight: 300,
                mb: 2,
                color: "black",
              }}
            >
              Get started with Probz.Ai today
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                mb: 4,
                maxWidth: "md",
                mx: "auto",
              }}
            >
              Build a beautiful, modern website with flexible, fully
              customizable, atomic MUI components.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" color="primary" size="large">
                View pages
              </Button>
              <Button variant="outlined" color="primary" size="large">
                Documentation
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* Footer Section */}
        <Container maxWidth="lg">
          <Box
            sx={{
              py: 4,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Link
              href="/"
              passHref
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  component="span"
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: 1,
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  Ai
                </Box>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: 700, color: "black" }}
                >
                  Probz.Ai.
                </Typography>
              </Box>
            </Link>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              alignItems="center"
            >
              <Link href="/" passHref style={{ textDecoration: "none" }}>
                <Typography
                  color="text.primary"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  Home
                </Typography>
              </Link>
              <Link
                href="/documentation"
                passHref
                style={{ textDecoration: "none" }}
              >
                <Typography
                  color="text.primary"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  Documentation
                </Typography>
              </Link>
              <Button variant="outlined" color="primary" size="small">
                Purchase now
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              py: 4,
              borderTop: "1px solid",
              borderColor: "divider",
              textAlign: "center", // This centers the text for both small and medium screens
            }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              © Probz.Ai. 2021, Maccarian. All rights reserved
            </Typography>
            <Typography variant="body2" color="text.secondary">
              When you visit or interact with our sites, services or tools, we
              or our authorised service providers may use cookies for storing
              information to help provide you with a better, faster and safer
              experience and for marketing purposes.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
