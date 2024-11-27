"use client";

import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Link,
  IconButton,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import t6 from "../../public/t6.avif";
import t61 from "../../public/t61.avif";
import t62 from "../../public/t62.avif";
import t63 from "../../public/t63.avif";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const companies = [
    "Deloitte",
    "Google",
    "Morgan Stanley",
    "POLITICO",
    "Bloomberg",
    "Deloitte",
    "Google",
    "Morgan Stanley",
    "POLITICO",
    "Bloomberg", // Duplicated for seamless loop
  ];

  const PricingCard = ({
    title,
    price,
    period = "/month",
    description,
    buttonText,
    saveText = "",
    isEnterprise = false,
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          bgcolor: "rgba(255,255,255,0.05)",
          borderRadius: "24px",
          p: 4,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            {title}
          </Typography>
          {!isEnterprise && (
            <Box sx={{ display: "flex", alignItems: "baseline", mb: 1 }}>
              <Typography
                variant="h3"
                component="span"
                sx={{ fontWeight: 600 }}
              >
                ${price}
              </Typography>
              <Typography
                variant="body1"
                component="span"
                sx={{ color: "primary.main", ml: 1 }}
              >
                {period}
              </Typography>
            </Box>
          )}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              mb: 3,
              minHeight: saveText ? "80px" : "auto",
            }}
          >
            {description}
          </Typography>
          {saveText && (
            <Typography
              sx={{
                color: "primary.main",
                mb: 2,
                fontSize: "0.9rem",
              }}
            >
              {saveText}
            </Typography>
          )}
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            bgcolor: isEnterprise ? "rgba(255,255,255,0.1)" : "primary.main",
            "&:hover": {
              bgcolor: isEnterprise ? "rgba(255,255,255,0.15)" : "primary.dark",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </motion.div>
  );

  const socialLinks = [
    { icon: "mdi:twitter", url: "#" },
    { icon: "mdi:instagram", url: "#" },
    { icon: "mdi:linkedin", url: "#" },
    { icon: "ic:baseline-discord", url: "#" },
  ];

  const footerLinks = [
    { text: "Contact us", url: "#" },
    { text: "Careers", url: "#" },
    { text: "Terms of service", url: "#" },
    { text: "Privacy policy", url: "#" },
  ];

  return (
    <Box sx={{ bgcolor: "#000", minHeight: "100vh", color: "white" }}>
      {/* NAVBAR */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          backdropFilter: "blur(10px)",
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Icon
            icon="sparkles"
            style={{ color: "#4169E1", fontSize: "24px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Capitol AI
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="text" sx={{ color: "white" }}>
            Log In
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#4169E1",
              "&:hover": { bgcolor: "#3154b3" },
            }}
          >
            Sign Up →
          </Button>
        </Box>
      </Box>

      {/* <HeroSection /> */}
      <Container maxWidth="lg" sx={{ pt: 20, pb: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontSize: isMobile ? "3rem" : "5rem",
              fontWeight: 600,
              mb: 4,
            }}
          >
            Create Powerful Content
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
              lineHeight: 1.6,
            }}
          >
            Capitol AI is a smart document creator with advanced API and SDK
            solutions. We transform publishers into AI-native companies that
            deliver the customized experiences their customers demand.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#4169E1",
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                "&:hover": { bgcolor: "#3154b3" },
                borderRadius: 10,
              }}
            >
              Sign Up →
            </Button>
          </Box>
        </motion.div>
      </Container>

      {/* <VideoSection /> */}
      <Box sx={{ bgcolor: "#000", py: 10 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingBottom: "56.25%", // 16:9 aspect ratio
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <source
                  src="https://player.vimeo.com/progressive_redirect/playback/1006332809/rendition/720p/file.mp4?loc=external&signature=887e76bdef97c039eb89d7c4598ace500c820045426972380686209f5682f1bd"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
            <Typography
              variant="body1"
              align="center"
              sx={{
                mt: 2,
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.875rem",
              }}
            >
              Watch how Capitol AI transforms content creation
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* <TrustedBySection /> */}
      <Box sx={{ bgcolor: "#161618", py: 10, overflow: "hidden" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 8, fontWeight: 600 }}
          >
            Trusted By Professionals From
          </Typography>
        </Container>

        <motion.div
          style={{
            display: "flex",
            width: "fit-content",
            gap: "4rem",
            opacity: 0.6,
          }}
          animate={{
            x: [0, -1800],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {companies.map((company, index) => (
            <Typography
              key={`${company}-${index}`}
              variant="h6"
              sx={{
                fontWeight: 500,
                color: "rgba(255,255,255,0.8)",
                whiteSpace: "nowrap",
              }}
            >
              {company}
            </Typography>
          ))}
        </motion.div>

        <Container maxWidth="lg" sx={{ py: 15 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 600, mb: 3 }}>
                Transform Ideas Into Actionable Content Instantly
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                }}
              >
                Simply enter a prompt, and Capitol AI instantly generates
                high-quality, customizable content for reports, analyses, and
                more—customizable to your enterprise is specific needs.
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "#fff",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            >
              <Image
                src={t6}
                alt="Document Preview"
                width={800}
                height={450} // Adjust dimensions as needed
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ********************* WORKING AREA*************************************** */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 15, sm: 25 },
        }}
      >
        <Box sx={{ bgcolor: "#000000", color: "white", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
              {/* Left Column - Text Content */}
              <Grid item xs={12} md={5}>
                <Box sx={{ maxWidth: 480 }}>
                  <Typography
                    component="h2"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                      fontWeight: 700,
                      lineHeight: 1.2,
                      mb: 3,
                    }}
                  >
                    Transform Ideas Into Actionable Content Instantly
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.1rem", sm: "1.25rem" },
                      opacity: 0.8,
                      lineHeight: 1.6,
                      color: "#C5C5C5",
                    }}
                  >
                    Simply enter a prompt, and Capitol AI instantly generates
                    high-quality, customizable content for reports, analyses,
                    and more—customizable to your enterprise is specific needs.
                  </Typography>
                </Box>
              </Grid>

              {/* Right Column - Image */}
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    height: { xs: "300px", sm: "400px", md: "400px" },
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Left Image (60% Width) */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "60%",
                      height: "100%",
                      overflow: "hidden", // Ensure content does not spill outside the box
                    }}
                  >
                    <Image
                      src={t61}
                      alt="AI Generated Content Preview 1"
                      layout="fill"
                      objectFit="cover"
                      priority
                      style={{
                        borderTopLeftRadius: "12px",
                        borderBottomLeftRadius: "12px",
                        transition: "transform 0.3s ease", // Smooth transition for the image only
                      }}
                    />
                  </Box>

                  {/* Right Image (40% Width) */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "40%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={t62}
                      alt="AI Generated Content Preview 2"
                      layout="fill"
                      objectFit="cover"
                      priority
                      style={{
                        borderTopRightRadius: "12px",
                        borderBottomRightRadius: "12px",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box sx={{ bgcolor: "#000000", color: "white", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={{ xs: 4, md: 8 }}
              alignItems="center"
              sx={{ xs: "column-reverse" }}
            >
              {/* Left column */}
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    height: { xs: "300px", sm: "400px", md: "500px" },
                    overflow: "hidden",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                    justifyContent: { xs: "center" },
                  }}
                >
                  {/* Left Image (60% Width) */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "60%",
                      height: "100%",
                      borderRadius: 1,
                      overflow: "hidden", // Ensure content does not spill outside the box
                    }}
                  >
                    <Image
                      src={t63}
                      alt="AI Generated Content Preview 1"
                      layout="fill"
                      objectFit="cover"
                      priority
                      style={{
                        transition: "transform 0.3s ease", // Smooth transition for the image only
                      }}
                    />
                  </Box>
                </Box>
              </Grid>

              {/* Right Column - Text Content */}
              <Grid item xs={12} md={5}>
                <Box sx={{ maxWidth: 480 }}>
                  <Typography
                    component="h2"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                      fontWeight: 700,
                      lineHeight: 1.2,
                      mb: 3,
                    }}
                  >
                    Dynamic Template Customization
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.1rem", sm: "1.25rem" },
                      opacity: 0.8,
                      lineHeight: 1.6,
                      color: "#C5C5C5",
                    }}
                  >
                    Leverage our versatile templates or design your own with
                    Capitol AI’s intuitive editor. Create professional, branded
                    documents quickly and ensure every piece of content aligns
                    with your organization’s standards.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* ************************************************************ */}

      {/* <PricingSection /> */}
      <Box sx={{ bgcolor: "#000", py: 15 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 2, fontWeight: 600 }}
          >
            Pricing
          </Typography>
          <Typography
            align="center"
            sx={{
              mb: 8,
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.2rem",
            }}
          >
            Try Capitol AI free for 7 days, no credit card required
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: 4,
            }}
          >
            <PricingCard
              title="Basic"
              price="10"
              description="Unlimited document creation and AI editing features."
              buttonText="Get Started"
            />
            <PricingCard
              title="Enterprise"
              price="6"
              description="For large-scale integration, customization, whitelabeling, and API/SDK access, get in touch for a tailored plan to suit your organization's needs."
              buttonText="Get In Touch"
              isEnterprise={true}
            />
            <PricingCard
              title="Annual"
              price="8"
              description="All the features of Basic plan with annual billing."
              saveText="Save $2 per month when you pay a total of $96 for the year."
              buttonText="Get Started"
            />
          </Box>
        </Container>
      </Box>

      {/* <Footer /> */}
      <Box
        sx={{
          bgcolor: "#000",
          py: 6,
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "flex-start" },
              gap: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Icon
                icon="sparkles"
                style={{ color: "#4169E1", fontSize: "24px" }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Capitol AI
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.url}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    "&:hover": { color: "white" },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.icon}
                  href={social.url}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    "&:hover": { color: "white" },
                  }}
                >
                  <Icon icon={social.icon} />
                </IconButton>
              ))}
            </Box>
          </Box>

          <Typography
            align="right"
            sx={{
              color: "rgba(255,255,255,0.7)",
              mt: 4,
              fontSize: "0.875rem",
            }}
          >
            Copyright 2022-2024 Capitol AI
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
