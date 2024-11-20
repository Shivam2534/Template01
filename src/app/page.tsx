"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import { Icon } from "@iconify/react";
import dashboard from "../../public/dashboard.jpg";
import shortDash from "../../public/shortDash.png";

import Image from "next/image";
import { ExpandMore } from "@mui/icons-material";
// import Link from "next/link";

export default function Component() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    "Features",
    "Testimonials",
    "Highlights",
    "Pricing",
    "FAQ",
    "Blog",
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgcolor: "#04111F", height: "100%" }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "#4876EE",
          justifyContent: "center",
        }}
      >
        <Icon icon="clarity:node-solid" color="white" width="24" height="24" />
        Sitemark
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "white" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center", color: "white" }}>
            <ListItemText primary="Sign in" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              bgcolor: "white",
              color: "black",
              my: 1,
              mx: 2,
              borderRadius: 1,
            }}
          >
            <ListItemText primary="Sign up" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  const features = [
    {
      icon: "material-symbols:dashboard",
      title: "Dashboard",
      description:
        "This item could provide a snapshot of the most important metrics or data points related to the product.",
    },
    {
      icon: "material-symbols:phone-iphone",
      title: "Mobile integration",
      description:
        "This item could provide information about the mobile app version of the product.",
    },
    {
      icon: "material-symbols:devices",
      title: "Available on all platforms",
      description:
        "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
    },
  ];

  const highlights = [
    {
      icon: "mdi:cog",
      title: "Adaptable performance",
      description:
        "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
    },
    {
      icon: "mdi:wrench",
      title: "Built to last",
      description:
        "Experience unmatched durability that goes above and beyond with lasting investment.",
    },
    {
      icon: "mdi:thumb-up",
      title: "Great user experience",
      description:
        "Integrate our product into your routine with an intuitive and easy-to-use interface.",
    },
    {
      icon: "mdi:lightbulb",
      title: "Innovative functionality",
      description:
        "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
    },
    {
      icon: "mdi:headset",
      title: "Reliable support",
      description:
        "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
    },
    {
      icon: "mdi:target",
      title: "Precision in every detail",
      description:
        "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        "10 users included",
        "2 GB of storage",
        "Help center access",
        "Email support",
      ],
      buttonText: "Sign up for free",
      buttonVariant: "outlined",
    },
    {
      name: "Professional",
      price: "15",
      features: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
        "Dedicated team",
        "Best deals",
      ],
      buttonText: "Start now",
      buttonVariant: "contained",
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "30",
      features: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
      buttonText: "Contact us",
      buttonVariant: "outlined",
    },
  ];

  const faqs = [
    {
      question:
        "How do I contact customer support if I have a question or issue?",
      answer:
        "You can contact our customer support via email at support@example.com or call us at 123-456-7890.",
    },
    {
      question: "Can I return the product if it doesn't meet my expectations?",
      answer:
        "Yes, we offer a 30-day return policy. Please check our return policy for more details.",
    },
    {
      question: "What makes your product stand out from others in the market?",
      answer:
        "Our product is designed with premium materials and comes with exclusive features tailored to our customers' needs.",
    },
    {
      question: "Is there a warranty on the product, and what does it cover?",
      answer:
        "Yes, we offer a one-year warranty that covers manufacturing defects. Terms and conditions apply.",
    },
  ];

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "#04111F",
            border: "2px solid #212B3B",
            borderRadius: 5,
            my: 2,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, md: 3 },
              }}
            >
              <Icon
                icon="clarity:node-solid"
                color="white"
                width="24"
                height="24"
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: "#4876EE",
                  fontWeight: 600,
                  fontSize: { xs: 16, sm: 18 },
                }}
              >
                Probz.Ai
              </Typography>

              {!isMobile && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item}
                      sx={{
                        color: "white",
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: { xs: 12, sm: 14 },
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              )}
            </Box>

            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {!isMobile && (
                <Button
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: { xs: 12, sm: 14 },
                  }}
                >
                  Sign in
                </Button>
              )}
              {!isMobile && (
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: { xs: 12, sm: 14 },
                    "&:hover": {
                      bgcolor: "#e0e0e0",
                    },
                  }}
                >
                  Sign up
                </Button>
              )}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: "white" }}
                >
                  <Icon icon="material-symbols:menu" />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#040E1A",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          mt: {
            sm: -15,
          },
        }}
      >
        <Container maxWidth="md">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              py: { xs: 8, md: 12 },
              gap: 1,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                fontWeight: 700,
                mb: 2,
                color: "white",
              }}
            >
              Our latest{" "}
              <Box component="span" sx={{ color: "#3B82F6" }}>
                products
              </Box>
            </Typography>
            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: { xs: "1rem", sm: "1.125rem" },
                maxWidth: "800px",
                mb: 1,
              }}
            >
              Explore our cutting-edge dashboard, delivering high-quality
              solutions tailored to your needs.
            </Typography>
            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: { xs: "1rem", sm: "1.125rem" },
                maxWidth: "800px",
                mb: 4,
              }}
            >
              Elevate your experience with top-tier features and services.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                width: "100%",
                maxWidth: "600px",
              }}
            >
              <TextField
                fullWidth
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3B82F6",
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "#94A3B8",
                    opacity: 1,
                  },
                }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 500,
                  "&:hover": {
                    bgcolor: "#f8fafc",
                  },
                  width: { xs: "100%", sm: "auto" },
                  whiteSpace: "nowrap",
                }}
              >
                Start now
              </Button>
            </Box>
            <Typography sx={{ color: "#94A3B8", fontSize: "0.875rem", mt: 2 }}>
              By clicking Start now you agree to our{" "}
              <Box
                component="a"
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Terms & Conditions
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          mt: {
            md: -15,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Image src={dashboard} alt="Dashboard" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 15,
            color: "#94A0B8",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>Trusted by the best companies</Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              mt: 5,
              color: "#6E6F71",
            }}
          >
            <Typography variant="h5">Probz.ai</Typography>
            <Typography variant="h5">Google</Typography>
            <Typography variant="h5">Microsoft</Typography>
            <Typography variant="h5">Salesforce</Typography>
            <Typography variant="h5">Spotify</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#04111F", py: { xs: 6, md: 10 }, mt: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 600,
              mb: 2,
            }}
          >
            Product features
          </Typography>
          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: { xs: "1rem", md: "1.125rem" },
              maxWidth: "800px",
              mb: 6,
            }}
          >
            Provide a brief overview of the key features of the product. For
            example, you could list the number of features, their types or
            benefits, and add-ons.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: "#0A1929",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Image
                  src={shortDash}
                  alt="Dashboard Preview"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {features.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      bgcolor: "#0A1929",
                      p: 3,
                      borderRadius: 2,
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "rgba(255,255,255,0.1)",
                          borderRadius: 1,
                          p: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon
                          icon={feature.icon}
                          width={24}
                          height={24}
                          color="#94A3B8"
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "white",
                          fontSize: { xs: "1.125rem", md: "1.25rem" },
                          fontWeight: 500,
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "#94A3B8",
                        fontSize: "1rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#040E1A", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              component="h2"
              sx={{
                color: "white",
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 600,
                mb: 2,
              }}
            >
              Highlights
            </Typography>
            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: { xs: "1rem", md: "1.125rem" },
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Explore why our product stands out: adaptability, durability,
              user-friendly design, and innovation. Enjoy reliable customer
              support and precision in every detail.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    bgcolor: "#0A1929",
                    p: 4,
                    borderRadius: 2,
                    height: "100%",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "rgba(255,255,255,0.1)",
                        width: 40,
                        height: 40,
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        icon={highlight.icon}
                        width={24}
                        height={24}
                        color="#94A3B8"
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                        fontWeight: 500,
                        mb: 1,
                      }}
                    >
                      {highlight.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#94A3B8",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {highlight.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#04111F", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              component="h2"
              sx={{
                color: "white",
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 600,
                mb: 2,
              }}
            >
              Pricing
            </Typography>
            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: { xs: "1rem", md: "1.125rem" },
                maxWidth: "800px",
                mx: "auto",
                mb: 1,
              }}
            >
              Quickly build an effective pricing table for your potential
              customers with this layout.
            </Typography>
            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: { xs: "1rem", md: "1.125rem" },
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              It is built with default Material UI components with little
              customization.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 3,
              alignItems: "flex-start",
            }}
          >
            {plans.map((plan) => (
              <Card
                key={plan.name}
                sx={{
                  bgcolor: plan.recommended ? "#1E293B" : "#0F172A",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 2,
                  position: "relative",
                  overflow: "visible",
                }}
              >
                {plan.recommended && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "white",
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: "0.875rem",
                    }}
                  >
                    Recommended
                  </Box>
                )}
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
                    {plan.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "baseline", mb: 3 }}>
                    <Typography
                      component="span"
                      sx={{
                        color: "white",
                        fontSize: "2.5rem",
                        fontWeight: 600,
                      }}
                    >
                      ${plan.price}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{ color: "#94A3B8", ml: 1 }}
                    >
                      per month
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    {plan.features.map((feature) => (
                      <Box
                        key={feature}
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Icon
                          icon="mdi:check-circle"
                          color="#3B82F6"
                          width={20}
                          height={20}
                        />
                        <Typography sx={{ color: "#94A3B8", ml: 2 }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button
                    fullWidth
                    variant={plan.buttonVariant as "contained" | "outlined"}
                    sx={{
                      py: 1.5,
                      ...(plan.buttonVariant === "contained"
                        ? {
                            bgcolor: "#3B82F6",
                            color: "white",
                            "&:hover": {
                              bgcolor: "#2563EB",
                            },
                          }
                        : {
                            borderColor: "rgba(255,255,255,0.1)",
                            color: "white",
                            "&:hover": {
                              borderColor: "rgba(255,255,255,0.2)",
                            },
                          }),
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box>
        <Container
          maxWidth="md"
          sx={{ bgcolor: "#121212", color: "white", py: 4 }}
        >
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
            Frequently asked questions
          </Typography>
          <Box>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                sx={{
                  bgcolor: "#1a1a1a",
                  color: "white",
                  borderRadius: 1,
                  mb: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "white" }} />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#05070A", color: "white", py: 6, mt: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left Section - Newsletter */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                <Box
                  component="span"
                  sx={{ color: "#3B82F6", fontWeight: "bold" }}
                >
                  Probz.Ai
                </Box>
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Join the newsletter
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Subscribe for weekly updates. No spams ever!
              </Typography>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 2,
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="Your email address"
                  size="small"
                  fullWidth
                  sx={{
                    bgcolor: "#1a1a1a",
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      borderColor: "white",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3B82F6",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: "#3B82F6",
                    "&:hover": {
                      bgcolor: "#3a9cdc",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>

            {/* Right Section - Navigation Links */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                {/* Product Links */}
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    Product
                  </Typography>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                    sx={{ mb: 1 }}
                  >
                    Features
                  </Link>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                    sx={{ mb: 1 }}
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                    sx={{ mb: 1 }}
                  >
                    Highlights
                  </Link>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                    sx={{ mb: 1 }}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                  >
                    FAQs
                  </Link>
                </Grid>

                {/* Company Links */}
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    Company
                  </Typography>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                    sx={{ mb: 1 }}
                  >
                    About us
                  </Link>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                    sx={{ mb: 1 }}
                  >
                    Careers
                  </Link>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                  >
                    Press
                  </Link>
                </Grid>

                {/* Legal Links */}
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    Legal
                  </Typography>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                    sx={{ mb: 1 }}
                  >
                    Terms
                  </Link>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                    sx={{ mb: 1 }}
                  >
                    Privacy
                  </Link>
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                  >
                    Contact
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
