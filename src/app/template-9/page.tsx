"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ThemeProvider,
  Toolbar,
  Stack,
  Paper,
  Link,
  TextField,
  Divider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Icon } from "@iconify/react";
import Image from "next/image";
import templogo from "../../../public/templogo.png";
import prev1 from "../../../public/prev1.png";
import prev2 from "../../../public/prev2.png";
import prev3 from "../../../public/prev3.png";
import up1 from "../../../public/up1.avif";
import up2 from "../../../public/up2.avif";
import up3 from "../../../public/up3.avif";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000",
      paper: "#1a1a1a",
    },
    primary: {
      main: "#10b981", // emerald-500
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

const faqs = [
  {
    question: "What is Patched?",
    answer:
      "Patched is an AI-powered code maintenance tool that helps developers automate repetitive tasks and improve code quality.",
  },
  {
    question: "What exactly is Patchwork?",
    answer:
      "Patchwork is our open-source framework that powers Patched, allowing developers to create custom workflows for code maintenance.",
  },
  {
    question: "How is it different from Copilot?",
    answer:
      "While Copilot focuses on code completion, Patched specializes in automating maintenance tasks like documentation updates and security patches.",
  },
  {
    question: "Is Patchwork free?",
    answer:
      "Yes, Patchwork is completely free and open-source. You can use it to create and run your own custom workflows.",
  },
  {
    question: "How do I try it out?",
    answer:
      "You can start by installing Patchwork via npm, or sign up for a Patched account to access our hosted solution.",
  },
  {
    question: "I have more questions. Who do I talk to?",
    answer:
      "Join our Discord community or reach out to our support team at support@patched.codes",
  },
];

const features = [
  {
    id: "generate-readme",
    icon: "file-text-outline",
    title: "GenerateREADME",
    command: "patchwork GenerateREADME",
    configuration: ["disable_branch", "disable_pr", "force_pr_creation"],
    preview: prev1,
  },
  {
    id: "code-review",
    icon: "git-pull-request-outline",
    title: "CodeReview",
    command: "patchwork review",
    configuration: ["auto_approve", "skip_tests", "include_suggestions"],
    preview: prev2,
  },
  {
    id: "create-own",
    icon: "file-code-outline",
    title: "Create Your Own",
    command: "patchwork init",
    configuration: ["template_type", "workflow_name", "trigger_events"],
    preview: prev3,
  },
];

const features2 = [
  "Patch Vulnerabilities",
  "Upgrade Dependencies",
  "Analyze Pull Requests",
  "Generate Documentation",
  "Triage Issues",
  "Improve Code Quality",
  "Fix Bugs",
  "Create Tickets",
];

const features3 = [
  {
    icon: "carbon:network-2",
    title: "Fully Customizable",
    description: "Customize patchflows or create new ones in minutes.",
  },
  {
    icon: "carbon:security",
    title: "Privacy First",
    description: "Deploy patchwork within your own infrastructure.",
  },
  {
    icon: "carbon:code",
    title: "No code, Low code and AI Code",
    description: "Generate patchflows using prompts, builders, or code.",
  },
  {
    icon: "mdi:github",
    title: "Free and Open Source",
    description: "Patchwork is free and open-source forever!",
  },
];

const plans = [
  {
    icon: "carbon:terminal",
    name: "Free",
    price: "$0",
    period: "/ Per Month",
    description: "Always Free",
    buttonText: "Get Started",
    buttonVariant: "outlined",
    features: [
      "Access to all patchflows via App and CLI",
      "5 Patchflows per month",
    ],
    highlight: "5 Patchflows per month",
  },
  {
    icon: "carbon:chart-line",
    name: "Pro",
    price: "$99",
    period: "/ Per Month",
    description: "Starting at",
    buttonText: "Get Started",
    buttonVariant: "contained",
    features: ["All features in Free, plus", "200 Patchflows per month"],
  },
  {
    icon: "carbon:data-base",
    name: "Enterprise",
    price: "Contact Us",
    description: "Tailored pricing",
    buttonText: "Set up a Call",
    buttonVariant: "outlined",
    features: ["All features in Pro, plus", "Unlimited Patchflows*"],
  },
];

const posts = [
  {
    title: "Discover LLM-assisted workflow opportunities in your code",
    date: "SEPTEMBER 26, 2024",
    description:
      "We present a new tool -- Patched GitHub repo analyzer that helps users discover different kinds of LLM-assisted workflows in their code.",
    image: up1,
  },
  {
    title: "Build your own AutoFix with Patchwork",
    date: "SEPTEMBER 25, 2024",
    description:
      "We describe a patchflow for creating a customizable AutoFix tool that can automatically detect and fix software vulnerabilities using large language models (LLMs).",
    image: up2,
  },
  {
    title: "Evaluating code-to-readme generation using LLMs",
    date: "SEPTEMBER 21, 2024",
    description:
      "We introduce Generate README Eval, a new benchmark to evaluate how well LLMs can generate README files from entire code repositories. Our results show that Gemini-1.5 is the SOTA model on this benchmark.",
    image: up3,
  },
];
export default function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          color: "white",
        }}
      >
        {/* <Navbar /> */}
        <AppBar
          position="fixed"
          color="transparent"
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Image
                  src={templogo}
                  alt="Patched Logo"
                  width={36}
                  height={36}
                />
                <Box
                  sx={{
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    position: "relative", // Allows the ::after element to be positioned relative to this Box
                    display: "inline-block", // Ensures the underline aligns with the text width
                    "&::after": {
                      content: '""', // Required for the pseudo-element to render
                      position: "absolute",
                      left: 0,
                      bottom: -4, // Adjust the spacing between the text and the underline
                      width: "100%", // Makes the underline span the width of the text
                      height: "2px", // Thickness of the underline
                      backgroundImage:
                        "linear-gradient(90deg, #00FF00, #004400)", // Replace with gradient colors
                      boxShadow:
                        "0 33px 80px 0 rgba(0, 0, 0, 0.1), 0 16px 40px 0 rgba(0, 0, 0, 0.2)", // Shadow for effect
                      borderRadius: "1px", // Optional: rounded underline edges
                    },
                  }}
                >
                  patched
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    opacity: 0.8,
                  }}
                >
                  <Icon icon="mdi:github" width={24} height={24} />
                  <Box component="span" sx={{ ml: 1 }}>
                    1.1k
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{ textTransform: "none", color: "white" }}
                >
                  Sign In
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* <Hero /> */}
        <Box
          sx={{
            backgroundColor: "background.default",
            color: "white",
            pt: 20,
            pb: 8,
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg">
            <Typography color="textSecondary" gutterBottom>
              Trusted by 2,300+ users
            </Typography>

            <Typography variant="h2" fontWeight="bold" sx={{ mb: 3 }}>
              Patch your code and docs.
              <br />
              Effortlessly.
            </Typography>

            <Typography
              variant="h6"
              color="primary"
              sx={{
                maxWidth: 600,
                mx: "auto",
                mb: 6,
              }}
            >
              Patched automates quality and maintenance tasks, so your team can
              ship code even faster.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{ textTransform: "none", color: "white" }}
              >
                Try Patched
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Icon icon="mdi:github" />}
                sx={{ textTransform: "none", color: "white" }}
              >
                Patchwork
              </Button>
            </Stack>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              Backed by
              <Box
                component="span"
                sx={{
                  backgroundColor: "orange",
                  color: "white",
                  px: 0.5,
                }}
              >
                Y
              </Box>
              Combinator
            </Typography>
          </Container>
        </Box>

        {/* <Features /> */}
        <Box
          sx={{
            backgroundColor: "background.default",
            color: "white",
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              fontWeight="bold"
              gutterBottom
            >
              Customizable workflows that carry out tedious, repetitive tasks.
            </Typography>

            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              sx={{ maxWidth: 800, mx: "auto", mb: 4 }}
            >
              Use ready-to-go patchflows or create your own to fix bugs, patch
              vulnerabilities, update markdowns and more.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mb: 4,
              }}
            >
              {features.map((feature) => (
                <Button
                  key={feature.id}
                  variant={
                    activeFeature.id === feature.id ? "contained" : "outlined"
                  }
                  startIcon={<Icon icon={`clarity:${feature.icon}`} />}
                  onClick={() => setActiveFeature(feature)}
                  sx={{ textTransform: "none", color: "white" }}
                >
                  {feature.title}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 4,
              }}
            >
              <Paper
                sx={{
                  backgroundColor: "rgba(0,0,0,0.3)",
                  p: 2,
                  borderRadius: 2,
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={activeFeature.preview}
                  alt={activeFeature.title}
                  width={1080}
                  height={720}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Paper>
            </Box>

            <Box
              sx={{
                overflow: "hidden",
                backgroundColor: "rgba(0,0,0,0.3)",
                py: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  animation: "scroll 20s linear infinite",
                  "& > *": {
                    flex: "0 0 auto",
                    mx: 2,
                  },
                }}
              >
                {[...features2, ...features2].map((feature, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {feature}
                    <Box component="span" color="primary.main">
                      ×
                    </Box>
                  </Typography>
                ))}
              </Box>
            </Box>

            <style jsx global>{`
              @keyframes scroll {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontWeight="bold"
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            paragraph
          >
            Know more about the Patched app and our open-source framework
            Patchwork.
          </Typography>

          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={openIndex === index}
              onChange={() => setOpenIndex(openIndex === index ? null : index)}
              sx={{
                backgroundColor: "background.paper",
                mb: 2,
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>

        {/* <CoreFeatures /> */}
        <Box
          sx={{
            backgroundColor: "background.default",
            color: "white",
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center" mb={4}>
              <Typography variant="overline" color="primary" display="block">
                Core Features
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                Build the AI assistance you need.
              </Typography>
              <Typography variant="body1" color="textSecondary">
                After all you are a dev, not a pilot.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {features3.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: "rgba(0,0,0,0.3)",
                      p: 3,
                      borderRadius: 2,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Box mb={2}>
                      <Icon
                        icon={feature.icon}
                        width={48}
                        height={48}
                        color="#10b981"
                      />
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* <Pricing /> */}
        <Box
          sx={{
            backgroundColor: "background.default",
            color: "white",
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center" mb={4}>
              <Typography
                variant="overline"
                color="textSecondary"
                display="block"
              >
                Pricing Plan
              </Typography>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Usage-based pricing with cost controls.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {plans.map((plan, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: "rgba(0,0,0,0.3)",
                      p: 3,
                      borderRadius: 2,
                      border:
                        index === 1 ? "1px solid" : "1px solid transparent",
                      borderColor: index === 1 ? "primary.main" : "divider",
                      position: "relative",
                      overflow: "hidden",
                      color: "white",
                    }}
                  >
                    {index === 1 && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: 4,
                          background:
                            "linear-gradient(to right, transparent, primary.main, transparent)",
                        }}
                      />
                    )}

                    <Box display="flex" alignItems="center" mb={2} gap={1}>
                      <Icon icon={plan.icon} width={24} height={24} />
                      <Typography variant="subtitle2" color="textSecondary">
                        {plan.name}
                      </Typography>
                    </Box>

                    <Box mb={2}>
                      <Typography variant="body2" color="textSecondary">
                        {plan.description}
                      </Typography>
                      <Box display="flex" alignItems="baseline" mt={1}>
                        <Typography variant="h4" fontWeight="bold">
                          {plan.price}
                        </Typography>
                        {plan.period && (
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            ml={1}
                          >
                            {plan.period}
                          </Typography>
                        )}
                      </Box>
                    </Box>

                    <Button
                      variant={
                        plan.buttonVariant === "contained"
                          ? "contained"
                          : "outlined"
                      }
                      color="primary"
                      fullWidth
                      sx={{
                        mb: 3,
                        textTransform: "none",
                        color: "white",
                      }}
                    >
                      {plan.buttonText}
                    </Button>

                    <Box>
                      {plan.features.map((feature, featureIndex) => (
                        <Box
                          key={featureIndex}
                          display="flex"
                          alignItems="center"
                          gap={1}
                          mb={1}
                        >
                          <Icon
                            icon="carbon:checkmark"
                            color="#10b981"
                            width={20}
                            height={20}
                          />
                          <Typography variant="body2" color="textSecondary">
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {plan.highlight && (
                      <Typography variant="body2" color="textSecondary" mt={2}>
                        {plan.highlight}
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* <Blog /> */}
        <Box sx={{ bgcolor: "black", color: "white", py: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom>
              Blogs
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ color: "gray.400", mb: 4 }}
            >
              Learn what is new and get a behind-the-scenes look at Patched
            </Typography>
            <Grid container spacing={4}>
              {posts.map((post, index) => (
                <Grid item xs={12} md={4} key={index}>
                  {/* <BlogPost {...post} /> */}
                  <Box
                    sx={{
                      cursor: "pointer",
                      "&:hover img": { transform: "scale(1.05)" },
                    }}
                  >
                    {/* Image Container */}
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 2,
                        mb: 2,
                        aspectRatio: "16 / 9",
                      }}
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ color: "white", fontWeight: "bold", mb: 1 }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "gray.400", mb: 2 }}
                      >
                        {post.date}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "gray.400" }}>
                        {post.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* <Footer /> */}
        <Box sx={{ bgcolor: "black", color: "white", py: 6 }}>
          <Container maxWidth="lg">
            <Grid container spacing={8}>
              {/* Left Column */}
              <Grid item xs={12} md={6}>
                {/* Contact Section */}
                <Box mb={4}>
                  <Typography variant="h6" gutterBottom>
                    Patched Codes
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "gray.400",
                    }}
                  >
                    <Icon icon="ic:outline-mail" width={16} height={16} />
                    <Link
                      href="mailto:contact@patched.codes"
                      color="inherit"
                      underline="hover"
                    >
                      contact@patched.codes
                    </Link>
                  </Box>
                </Box>

                {/* Resources Section */}
                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 2 }}>
                    Resources
                  </Typography>
                  <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                    {["Docs", "Discord", "Blog", "Support"].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          color="textSecondary"
                          underline="hover"
                          sx={{
                            display: "block",
                            transition: "color 0.2s",
                            "&:hover": { color: "white" },
                          }}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </Box>
                </Box>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(5px)",
                    borderRadius: 2,
                    p: 4,
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    Want to see a live demo?
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray.400", mb: 3 }}>
                    Share your email with us and we will reach out to you:
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <TextField
                      type="email"
                      placeholder="your@email.com"
                      fullWidth
                      InputProps={{
                        sx: {
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          borderRadius: 1,
                          color: "white",
                          "&::placeholder": { color: "gray.500" },
                        },
                      }}
                      sx={{
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "white",
                      }}
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: "emerald.500",
                        "&:hover": { bgcolor: "emerald.600" },
                        color: "white",
                      }}
                    >
                      Request a Demo
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Bottom Section */}
            <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mt: 8 }} />
            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography variant="body2" sx={{ color: "gray.400" }}>
                Patched Codes, Inc
                <br />
                111b South Governors Avenue Dover, DE, 19904 US
              </Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                {["Github", "Huggingface", "LinkedIn", "Twitter"].map(
                  (platform) => (
                    <Link
                      key={platform}
                      href="#"
                      color="textSecondary"
                      underline="hover"
                      sx={{
                        transition: "color 0.2s",
                        "&:hover": { color: "white" },
                      }}
                    >
                      {platform}
                    </Link>
                  )
                )}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
