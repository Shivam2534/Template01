"use client";
import {
  Container,
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useState } from "react";
import u1 from "../../public/u1.svg";
import u2 from "../../public/u2.svg";
import u3 from "../../public/u3.svg";
import u4 from "../../public/u4.svg";
import u5 from "../../public/u5.svg";
import Image from "next/image";
import Link from "next/link";
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
      desktopName: "Features",
      mobileName: "Features",
    },
    {
      desktopName: "Kart Chat",
      mobileName: "Chat",
    },
    {
      desktopName: "Privacy Policy",
      mobileName: "Privacy Policy",
    },
    {
      desktopName: "Documentation",
      mobileName: "Documentation",
    },
    {
      mobileName: "Sign in",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ToggleMenuOnMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const directToClickedTag = () => {
    setIsMobileMenuOpen(false);
  };
  {
    /*
     ******************************************
     *        CODE OF SECTION-1               *
     ******************************************
     */
  }
  const sponserNames = [
    { imgURL: u1 },
    { imgURL: u2 },
    { imgURL: u3 },
    { imgURL: u4 },
    { imgURL: u5 },
  ];
  {
    /*
     ******************************************
     *        CODE OF SECTION-2               *
     ******************************************
     */
  }
  const aiAgents = [
    {
      agentName: "AI Sales Agents",
      agentIcon: <Icon icon="mdi:cellphone" />,
      describtion:
        " Our AI agents are trained emulate the behavior of your sales team. Sales agents are not a one-type-fits-all. We allow for advanced customization for personality, tone, and more.",
    },
    {
      agentName: "Sector Specific Reranker ",
      agentIcon: <Icon icon="mdi:alarm" />,
      describtion:
        "Our Reranker aims to predict what products each user is more likely to purchase. These models are trained individually for each store with advanced low latency technology.",
    },
    {
      agentName: "Granular Personalization ",
      agentIcon: <Icon icon="mdi:code-braces" />,
      describtion:
        "We train Large AI models to customize the information shown to each user. We adjust product recommendations, FAQs, and the layout of your website for each user.",
    },
  ];
  {
    /*
     ******************************************
     *           CODE OF FOOTER               *
     ******************************************
     */
  }
  const navItems = ["Features", "Kart Chat", "Book a Demo", "Twitter"];

  return (
    <Box>
      {/* Navigation bar */}
      <Box sx={{ width: "100%", height: 145 }}>
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
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              KART AI
            </Typography>
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
            Get started
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

      {/* CODE OF SECTION-1 */}
      <Box sx={{ py: 8 }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            height: 530,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 2, // Add horizontal padding for small screens
            }}
          >
            {/* Main Heading */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                mb: 1,
                textAlign: "center", // Consistent alignment across screen sizes
                fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" }, // Responsive font size
              }}
            >
              AI-powered
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                textAlign: "center",
                fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" }, // Responsive font size
              }}
            >
              <Box component="span" sx={{ color: "#1E40AF" }}>
                personalization agents
              </Box>{" "}
              trained for
            </Typography>

            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" }, // Responsive font size
                mb: 2,
              }}
            >
              your store.
            </Typography>

            {/* Supporting Text */}
            <Typography
              variant="body1"
              sx={{
                color: "#334155",
                mb: 4,
                textAlign: "center",
                px: { xs: 2, sm: 4 }, // Add padding for better spacing on small screens
              }}
            >
              Every customer is unique. Your store should adapt to each one.
            </Typography>

            {/* CTA Button */}
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": { backgroundColor: "#333" },
                  borderRadius: 10,
                  px: 4, // Add padding for a better button size
                  py: 1.5,
                }}
              >
                Book a demo
              </Button>
            </Box>
          </Box>

          {/* Sponsor Section */}
          <Grid item xs={12} md={6} sx={{ marginTop: "auto" }}>
            <Grid container spacing={1} justifyContent="center">
              {sponserNames.map((sponser, ind) => (
                <Grid
                  item
                  xs={4}
                  sm={2}
                  key={ind}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={sponser.imgURL}
                    alt={`Sponsor ${ind}`}
                    width={100}
                    height={50}
                    layout="intrinsic"
                    quality={85} // Optimize image quality
                    loading="lazy" // Lazy load images for better performance
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CODE OF SECTION-2 */}
      <Box
        sx={{
          py: 4,
          background: "linear-gradient(to left, #FFFFFF, #E7E9EC)",
        }}
      >
        <Container>
          {/* Heading Section */}
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  textAlign: { md: "center" }, // Center-align for better visual appeal
                  mb: 2,
                  fontSize: 30, // Responsive font size
                }}
              >
                Personalization agents for{" "}
                <Box component="span" sx={{ color: "#4F46E5" }}>
                  your business
                </Box>
                <Typography
                  sx={{
                    color: "#495360",
                    textAlign: { md: "center" },
                    fontSize: 18,
                    mt: 3,
                  }}
                >
                  We train large AI models to personalize your store for each
                  and every customer. Bring the future of retail to your
                  business today.
                </Typography>
              </Typography>
            </Grid>
          </Grid>

          {/* AI Agents Section */}
          <Grid
            container
            spacing={3}
            sx={{
              mt: 10,
            }}
          >
            {aiAgents.map((agent, ind) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={ind}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "left",
                  gap: 2,
                  px: 2,
                }}
              >
                {/* Agent Details */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box sx={{ fontSize: 20, color: "#4F46E5" }}>
                    {agent.agentIcon}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      fontSize: 15,
                    }}
                  >
                    {agent.agentName}

                    <Typography
                      component="span"
                      sx={{
                        color: "#6B7280", // A softer gray for descriptions
                        fontSize: 15,
                      }}
                    >
                      {agent.describtion}
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CODE OF FOOTER*/}
      <Box
        component="footer"
        sx={{
          py: 4,
          pt:7,
          backgroundColor: "#f9f9f9", // Optional for a light footer background
          borderTop: "1px solid #e0e0e0", // Optional top border for separation
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center">
            {/* Logo */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                letterSpacing: 1,
                textAlign: "center",
              }}
            >
              KART AI
            </Typography>

            {/* Navigation */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 4 }}
              alignItems="center"
              justifyContent="center"
            >
              {navItems.map((item) => (
                <Typography
                  key={item}
                  component="a"
                  href="#"
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>

            {/* Bottom Section */}
            <Divider
              sx={{ width: "100%", borderColor: "divider", borderWidth: "1px" }}
            />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              width="100%"
            >
              {/* Copyright */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Copyright © {new Date().getFullYear()} Kart. All rights
                reserved.
              </Typography>

              {/* Social Icons */}
              <Stack direction="row" spacing={2}>
                <IconButton
                  href="#"
                  aria-label="Twitter"
                  sx={{ color: "text.secondary" }}
                >
                  <Icon icon="mdi:twitter" width={20} />
                </IconButton>
                <IconButton
                  href="#"
                  aria-label="LinkedIn"
                  sx={{ color: "text.secondary" }}
                >
                  <Icon icon="mdi:linkedin" width={20} />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Page;
