"use client";
import {
  Container,
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Stack,
} from "@mui/material";
import { Icon } from "@iconify/react";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import t50 from "../../public/t50.png";
import t52 from "../../public/t52.png";
import t53 from "../../public/t53.png";

function Page() {
  {
    /*
     ******************************************
     *        CODE OF NAVIGATION BAR          *
     ******************************************
     */
  }
  const menuBar = [
    {
      desktopName: "Home",
      mobileName: "Home",
    },
    {
      desktopName: "Affiliates",
      mobileName: "Affiliates",
    },
    {
      desktopName: "Blog",
      mobileName: "Blog",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ToggleMenuOnMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const directToClickedTag = () => {
    setIsMobileMenuOpen(false);
  };

  const features = [
    {
      icon: <Icon icon="ix:report-barchart" style={{ color: "#8ECAE6" }} />,
      title: "Manage all issues in a singular ticketing system",
    },
    {
      icon: <Icon icon="gala:search" style={{ color: "#8ECAE6" }} />,
      title: "Identify compliance issues in every article",
    },
    {
      icon: (
        <Icon
          icon="material-symbols-light:mail-outline"
          style={{ color: "#8ECAE6" }}
        />
      ),
      title: "Automatically send emails when issues are found",
    },
    {
      icon: <Icon icon="line-md:image-filled" style={{ color: "#8ECAE6" }} />,
      title: "Ensure affiliates are using your brand correctly",
    },
    {
      icon: <Icon icon="mynaui:chat-messages" style={{ color: "#8ECAE6" }} />,
      title: "Maintain all communications within a singular platform",
    },
    {
      icon: (
        <Icon icon="solar:hand-money-linear" style={{ color: "#8ECAE6" }} />
      ),
      title: "Grow into new audiences with more confidence",
    },
  ];

  const faqs = [
    {
      question: "What is Affil.ai?",
      answer:
        "Affil.ai is an AI-powered platform designed to help businesses manage and monitor their affiliate marketing programs more effectively.",
    },
    {
      question: "Who is this product for?",
      answer:
        "This product is perfect for businesses running affiliate programs, marketing managers, and anyone looking to streamline their affiliate marketing operations.",
    },
    {
      question: "What media do you support?",
      answer:
        "We support a wide range of media including text content, images, videos, and social media posts across various platforms.",
    },
    {
      question: "Got more questions?",
      answer:
        "Feel free to reach out to our support team who will be happy to help you with any additional questions you might have.",
    },
  ];

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      {/* NAVIGATION BAR */}
      <Box sx={{ width: "100%", height: 100 }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Left section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box sx={{ fontSize: 40 }}>
                <Icon icon="emojione-monotone:handshake" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Affil.ai
              </Typography>
            </Box>
          </Box>
          {/* Middle section */}
          <Box
            sx={{
              display: { xs: "none", md: "flex", justifyContent: "center" },
              gap: 2,
            }}
          >
            {menuBar.map((item, ind) => (
              <Button
                key={ind}
                sx={{ color: "black", textTransform: "none", fontSize: 16 }}
              >
                {item.desktopName}
              </Button>
            ))}
          </Box>
          {/* Right section */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              display: { xs: "none", md: "block" },
            }}
          >
            Book a Demo
          </Button>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              cursor: "pointer",
              border: isMobileMenuOpen ? "2px solid black" : "none",
              padding: isMobileMenuOpen ? "4px" : "0",
              borderRadius: "8px", // Optional for rounded corners
              transition: "all 0.3s ease", // Smooth transition for border and padding
            }}
            onClick={ToggleMenuOnMobile}
          >
            <Icon
              icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
              style={{ fontSize: "24px" }}
            />
          </Box>

          {/* Mobile Menu */}
          <Box
            sx={{
              display: isMobileMenuOpen && isSmallScreen ? "flex" : "none",
              flexDirection: "column",
              position: "absolute",
              top: "27%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: isSmallScreen ? "80%" : "50%",
              backgroundColor: "#FFFFFF",
              padding: 2,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            {menuBar.map((MenuItem, ind) => (
              <Button key={ind} onClick={directToClickedTag}>
                {MenuItem.mobileName}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION-1/ */}
      <Box
        sx={{
          bgcolor: "#002366",
          color: "white",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          {/* Text Content */}
          <Box
            sx={{
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              mb: { xs: 6, md: 8 },
              px: 2,
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              AI Compliance & Monitoring
              <br />
              For Affiliate Marketing
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
                mb: 4,
                opacity: 0.9,
              }}
            >
              Keep an eye out on all your affiliates and never miss
              <br />a compliance issue again
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "#002366",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                borderRadius: "50px",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              Book a Demo!
            </Button>
          </Box>

          {/* Images Container */}
          <Box
            sx={{
              position: "relative",
              maxWidth: "1200px",
              mx: "auto",
              px: { xs: 2, md: 8 },
            }}
          >
            {/* Left Small Image */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                left: { md: "0%" },
                bottom: { md: "15%" },
                width: { md: "200px", lg: "250px" },
                height: { md: "150px", lg: "180px" },
                bgcolor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                overflow: "hidden",
                zIndex: 2,
                transform: "translate(0, 0)", // Initial position
                transition: "transform 0.3s ease", // Smooth transition
                "&:hover": {
                  transform: "translate(-10px, -10px)", // Moves slightly up and left
                },
              }}
            >
              <Image
                src={t52}
                alt="Partner Stats Graph"
                layout="fill"
                objectFit="cover"
              />
            </Box>

            {/* Main Center Image */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "300px", sm: "400px", md: "500px" },
                mx: "auto",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                transform: "translate(0, 0)", // Initial position
                transition: "transform 0.3s ease", // Smooth transition
                "&:hover": {
                  transform: "translate(0, -10px)", // Moves slightly up
                },
              }}
            >
              <Image
                src={t50}
                alt="Dashboard Preview"
                layout="fill"
                objectFit={isSmallScreen ? "contain" : "fill"}
                priority
              />
            </Box>

            {/* Right Small Image */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                right: { md: "0%" },
                top: { md: "15%" },
                width: { md: "200px", lg: "250px" },
                height: { md: "150px", lg: "180px" },
                bgcolor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                overflow: "hidden",
                zIndex: 2,
                transform: "translate(0, 0)", // Initial position
                transition: "transform 0.3s ease", // Smooth transition
                "&:hover": {
                  transform: "translate(10px, -10px)", // Moves slightly up and right
                },
              }}
            >
              <Image
                src={t53}
                alt="Performance Metrics"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SECTION-2 */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 12, md: 8 }} alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                maxWidth: 500,
                mx: { xs: "auto", md: 0 },
                display: "flex",
                flexDirection: "column",
                gap: { xs: 6, md: 15 },
              }}
            >
              <Box>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.3rem", md: "2.5rem" },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 2,
                  }}
                >
                  Keeping Track Of Affiliates Is Hard
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem" },
                    color: "text.secondary",
                    mb: 4,
                  }}
                >
                  Affiliates are constantly generating new content and sometimes
                  changing old content. Knowing when these changes happen is
                  near impossible
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  "& svg": {
                    width: { xs: 80, sm: 40 },
                    height: { xs: 80, sm: 40 },
                    color: "primary.main",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    gap: 6,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 250, sm: 350 },
                      height: 12,
                      backgroundColor: "black",
                      borderRadius: "25% 25% 0 0",
                    }}
                  />
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 6 }}
                    >
                      <Box
                        sx={{
                          width: { xs: 150, sm: 250 },
                          height: 12,
                          backgroundColor: "black",
                          borderRadius: 1,
                        }}
                      />
                      <Box
                        sx={{
                          width: { xs: 150, sm: 250 },
                          height: 12,
                          backgroundColor: "black",
                          borderRadius: 1,
                        }}
                      />
                    </Box>
                    <Icon
                      icon="zondicons:search"
                      style={{ color: "black", width: 90, height: 90 }}
                    />{" "}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                gap: { xs: 6, md: 15 },
              }}
            >
              {/* Avatar Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 0.3fr)",
                  gap: 2,
                  mb: 4,
                }}
              >
                {[...Array(6)].map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 100,
                      height: 100,
                      justifyItems: "center",
                      alignContent: "center",
                    }}
                  >
                    {index == 1 && (
                      <Icon
                        icon="ooui:user-avatar"
                        height="100%"
                        width="100%"
                      />
                    )}
                    {index != 1 && (
                      <Icon
                        icon="ooui:user-avatar"
                        height="100%"
                        width="100%"
                        style={{ color: "#F5F5F5" }}
                      />
                    )}
                  </Box>
                ))}
              </Box>

              <Box>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.3rem", md: "2.5rem" },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 2,
                  }}
                >
                  Needles In A Haystack
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem" },
                    color: "text.secondary",
                  }}
                >
                  Affiliate content can be long and wordy. Finding all the brand
                  and compliance issues within each individual article takes
                  time & effort
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* SECTION-3 */}
      <Box sx={{ backgroundColor: "#F1F3F6" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
            {/* Left Column - Main Content */}
            <Grid item xs={12} md={5}>
              <Box sx={{ maxWidth: 500, mb: { xs: 4, md: 0 } }}>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.3rem" },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  AI Powered Monitoring
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    color: "text.secondary",
                    mb: 4,
                    lineHeight: 1.5,
                  }}
                >
                  We will empower your affiliate strategy with AI, streamlining
                  operations and boosting performance across the board
                </Typography>
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    color: "primary.main",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Learn more
                  <Button
                    component="span"
                    sx={{
                      display: "inline-block",
                      ml: 1,
                    }}
                  >
                    →
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right Column - Features Grid */}
            <Grid item xs={12} md={7}>
              <Grid container spacing={3}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Box
                        sx={{
                          "& svg": {
                            width: { xs: 40, md: 32 },
                            height: { xs: 40, md: 32 },
                          },
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.1rem" },
                          color: "black",
                          lineHeight: 1.4,
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION-3 */}
      <Box>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
            {/* Left Column - Title */}
            <Grid item xs={12} md={5}>
              <Box sx={{ maxWidth: 500, mb: { xs: 4, md: 0 } }}>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  Frequently Asked Questions
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    color: "text.secondary",
                    lineHeight: 1.5,
                  }}
                >
                  Find quick answers to help you understand our platform and
                  make the most of it
                </Typography>
              </Box>
            </Grid>

            {/* Right Column - Accordions */}
            <Grid item xs={12} md={7}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    elevation={0}
                    sx={{
                      border: "none",
                      "&:before": { display: "none" },
                      backgroundColor: "transparent",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <Icon
                          icon="octicon:plus-16"
                          fontSize={24}
                          style={{
                            transform:
                              expanded === `panel${index}`
                                ? "rotate(45deg)"
                                : "none",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      }
                      sx={{
                        padding: 0,
                        "& .MuiAccordionSummary-content": {
                          margin: 0,
                        },
                        "&.Mui-expanded": {
                          minHeight: 48,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "1.25rem", sm: "1.5rem" },
                          fontWeight: 600,
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: "0 0 16px 0" }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.125rem" },
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION-4 */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, px: 2 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              background: "linear-gradient(135deg, #87CEEB 0%, #5F9EA0 100%)",
              borderRadius: "24px",
              py: { xs: 8, sm: 10, md: 12 },
              px: { xs: 3, sm: 4, md: 6 },
              textAlign: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              sx={{
                maxWidth: "800px",
                mx: "auto",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Typography
                component="h1"
                sx={{
                  color: "white",
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Effortlessly Ensure Compliance with AI
              </Typography>

              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  mb: 6,
                  opacity: 0.9,
                }}
              >
                Eliminate the boring stuff so you can grow your affiliate
                program with confidence
              </Typography>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "#0066FF",
                  fontSize: { xs: "1rem", sm: "1.125rem" },
                  fontWeight: 600,
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 4, sm: 6 },
                  borderRadius: "50px",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  },
                  boxShadow: "none",
                }}
              >
                Book a Demo!
              </Button>
            </Box>

            {/* Gradient Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
                zIndex: 0,
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: "#002366", color: "white", pt: 6, pb: 4 }}>
        <Container maxWidth="lg">
          <Stack spacing={6}>
            {/* Main Footer Content */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", md: "center" }}
              spacing={{ xs: 4, md: 0 }}
            >
              {/* Logo and Tagline */}
              <Stack spacing={1}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  component={Link}
                  href="/"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { opacity: 0.9 },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "1.5rem", sm: "1.75rem" },
                      fontWeight: 700,
                    }}
                  >
                    Affil.ai
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    opacity: 0.8,
                  }}
                >
                  AI Compliance For Affiliate Marketing
                </Typography>
              </Stack>

              {/* Navigation Links */}
              <Stack
                direction="row"
                spacing={{ xs: 3, sm: 4 }}
                sx={{
                  "& a": {
                    color: "white",
                    textDecoration: "none",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    "&:hover": { opacity: 0.8 },
                  },
                }}
              >
                <Link href="#">Home</Link>
                <Link href="#">Affiliates</Link>
                <Link href="#">Blog</Link>
              </Stack>
            </Stack>

            {/* Divider */}
            <Box
              sx={{
                height: 1,
                bgcolor: "rgba(255, 255, 255, 0.1)",
                width: "100%",
              }}
            />

            {/* Bottom Section */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "center", sm: "center" }}
              spacing={{ xs: 2, sm: 0 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  opacity: 0.8,
                }}
              >
                © 2024 Affil AI Incorporated. All rights reserved.
              </Typography>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  "&:hover": { opacity: 0.8 },
                  display: "flex",
                }}
              >
                <Icon
                  icon="ant-design:linkedin-outlined"
                  style={{ color: "white", fontSize: 25 }}
                />{" "}
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Page;
