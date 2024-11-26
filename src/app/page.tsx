"use client";
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  Paper,
} from "@mui/material";
import Image from "next/image";
import voidLogo from "../../public/voidLogo.png";
import c1 from "../../public/c1.png";
import c2 from "../../public/c2.png";
import c3 from "../../public/c3.png";
import { Icon } from "@iconify/react";
import Link from "next/link";

function Page() {
  const menuBar = [
    {
      desktopName: "Discord",
      onMobile: true,
    },
    {
      desktopName: "GitHub",
      onMobile: false,
    },
  ];

  const shortcutsWithImage = [
    {
      shortcut: "Tab",
      des: "Press 'Tab' to apply autocomplete.",
      img: c1,
    },
    {
      shortcut: "Ctrl + K",
      des: "Edit your selection inline.",
      img: c2,
    },
    {
      shortcut: "Ctrl + L",
      des: "Ask questions and include files.",
      img: c3,
    },
    {
      shortcut: "Ctrl + L",
      des: "Ask questions and include files.",
      img: c3,
    },
  ];

  const LLMmodels = [
    {
      Heading: "Host Locally",
      CompanyImg: [
        { companyIcon: '<Icon icon="devicon:google" />' },
        { companyIcon: '<Icon icon="logos:microsoft-icon" />' },
        { companyIcon: '<Icon icon="arcticons:openai-chatgpt" />' },
      ],
      subHeading1: "Never run out of API credits again. We offer",
      subHeading2: "tools like Ollama to host quality models locally.",
      overlapOrGap: true,
    },
    {
      Heading: "Host Locally",
      CompanyImg: [
        { companyIcon: '<Icon icon="devicon:google" />' },
        { companyIcon: '<Icon icon="logos:microsoft-icon" />' },
      ],
      subHeading1: "Send direct to Claude, GPT, or Gemini. Unlike other",
      subHeading2: "editors, we don't act as a middleman to your LLM calls.",
      overlapOrGap: false,
    },
  ];

  return (
    <Box>
      {/* Navigation bar */}
      <Box
        sx={{
          width: "100%",
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            paddingLeft: { xs: "16px", lg: "100px" }, // Dynamic left padding
            paddingRight: { xs: "16px", lg: "100px" }, // Dynamic right padding
            maxWidth: "xl",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              px: 2,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
              height: 52,
            }}
          >
            {/* Left section */}
            <Box sx={{ display: "flex", gap: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={voidLogo.src}
                  alt="Void Logo"
                  width={45}
                  height={45}
                />
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bolder", fontSize: 27, mb: 1 }}
                >
                  Void
                </Typography>
                <Button
                  sx={{
                    color: "black",
                    textTransform: "none",
                    ml: 3,
                    fontSize: { xs: 15, md: 18 },
                  }}
                >
                  Waitlist
                </Button>
              </Box>
            </Box>

            {/* Right section */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                {menuBar.map((item, ind) => (
                  <Button
                    key={ind}
                    sx={{
                      color: "black",
                      textTransform: "none",
                      fontSize: { xs: 15, md: 18 },
                      display: {
                        xs: item.onMobile === false ? "none" : "block",
                        sm: "block",
                      },
                    }}
                  >
                    {item.desktopName}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Code Of Section-1 */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          pb: 10,
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            pointerEvents: "none",
          },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: { xs: "16px", lg: "100px" }, // Dynamic left padding
            paddingRight: { xs: "16px", lg: "100px" }, // Dynamic right padding
            maxWidth: "xl",
            gap: 15,
          }}
        >
          <Stack
            spacing={4}
            alignItems="center"
            sx={{
              textAlign: "center",
              position: "relative",
              p: 6,
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: 2,
            }}
          >
            {/* Cube Logo */}
            <Box
              sx={{
                width: { xs: 170, sm: 200 },
                height: { xs: 170, sm: 200 },
                position: "relative",
                mb: { xs: 4, sm: 6 },
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Image
                src={voidLogo}
                alt="Void Logo"
                width={120}
                height={120}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                mb: { xs: 2, sm: 3 },
              }}
            >
              The open source
              <br />
              AI code editor.
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" },
                color: "text.secondary",
                maxWidth: "600px",
                mb: { xs: 4, sm: 6 },
                fontWeight: "normal",
              }}
            >
              Void is an open source Cursor alternative. Write code with the
              best AI tools, use any model, and retain full control over your
              data.
            </Typography>

            {/* Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 3 }}
              sx={{ mb: { xs: 6, sm: 8 } }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Icon icon="mdi:github" />}
                sx={{
                  borderRadius: "50px",
                  px: { xs: 2, sm: 4 },
                  py: 1.5,
                  fontSize: "1.1rem",
                  backgroundColor: "#3A72ED",
                  "&:hover": {
                    backgroundColor: "#1a1e21",
                  },
                  boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
                }}
              >
                Star on Github
              </Button>
              <Button
                variant="contained"
                size="large"
                endIcon={<Icon icon="mdi:arrow-right" />}
                sx={{
                  borderRadius: "50px",
                  px: { xs: 2, sm: 4 },
                  py: 1.5,
                  fontSize: "1.1rem",
                  backgroundColor: "#5D6672",
                  "&:hover": {
                    backgroundColor: "#555",
                  },
                  boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
                }}
              >
                Get Access
              </Button>
            </Stack>

            {/* Y Combinator Badge */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                color: "text.secondary",
                opacity: 0.8,
              }}
            >
              <Typography variant="body2">Backed by</Typography>
              <Box>
                <Box
                  sx={{
                    color: "white",
                    backgroundColor: "#FB651E",
                    px: 1,
                    py: 0.5,
                    fontSize: "0.875rem",
                    fontWeight: "bold",
                  }}
                  component="span"
                >
                  Y
                </Box>{" "}
                <Box sx={{ color: "#FB651E" }} component="span">
                  Combinator
                </Box>
              </Box>
            </Stack>
          </Stack>

          <Stack
            spacing={{ xs: 4, sm: 6, md: 8 }}
            alignItems="center"
            justifyContent="center"
            sx={{
              textAlign: "center",
              position: "relative",
              p: { xs: 2, sm: 4, md: 6, lg: 8 },
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
              borderRadius: 2,
              backgroundColor: "#F3F4F6",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                mb: { xs: 2, sm: 3, md: 4 },
              }}
            >
              The AI Features You Love.
            </Typography>

            <Grid
              container
              spacing={{ xs: 0, sm: 4, md: 5 }}
              justifyContent="center"
            >
              {shortcutsWithImage.map((item, ind) => (
                <Grid
                  item
                  key={ind}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: { xs: 8 },
                  }}
                >
                  <Stack
                    spacing={3}
                    alignItems="center"
                    sx={{
                      height: "100%",
                      width: "100%",
                      maxWidth: 350,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                      }}
                    >
                      {item.shortcut}
                    </Typography>
                    <Typography
                      sx={{
                        width: "100%",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        flexGrow: 1,
                      }}
                    >
                      {item.des}
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        height: 0,
                        paddingTop: "75%", // 4:3 aspect ratio
                        position: "relative",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.img}
                        alt={`${item.shortcut} image`}
                        layout="fill"
                        objectFit="cover"
                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                      />
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>

          <Stack
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{
              textAlign: "center",
              position: "relative",
              p: 2,
              pt: 7,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
              borderRadius: 2,
            }}
          >
            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              Powered by VS Code.
            </Typography>

            {/* Description */}
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" },
                color: "text.secondary",
                maxWidth: "600px",
                fontWeight: "normal",
              }}
            >
              Void is a fork of VS Code. We let you transfer over all your
              themes, keybinds, and settings in one click.
            </Typography>

            {/* Logos */}
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent="center"
              sx={{ mt: 4 }}
            >
              {/* VS Code Logo */}
              <Box
                sx={{ width: { xs: 48, sm: 64 }, height: { xs: 48, sm: 64 } }}
              >
                <Icon
                  icon="vscode-icons:file-type-vscode"
                  width="100%"
                  height="100%"
                />
              </Box>

              {/* Bidirectional Arrow */}
              <Icon
                icon="mdi:arrow-left-right"
                width={24}
                height={24}
                style={{ opacity: 0.5 }}
              />

              {/* Void Logo (Cube) */}
              <Box
                sx={{
                  width: { xs: 48, sm: 64 },
                  height: { xs: 48, sm: 64 },
                  position: "relative",
                }}
              >
                <Image
                  src={voidLogo}
                  alt="Void Logo"
                  width={64}
                  height={64}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Code Of Section-2 */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#E2E8F0",
          overflow: "hidden",
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 16 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: { xs: "30px", sm: "40px", md: "50px" },
            bgcolor: "white",
            borderRadius: "0 0 50% 50%",
          }}
        />

        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
              }}
            >
              Community Features.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                color: "text.secondary",
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              Anyone can advance our Roadmap or build their own AI integration.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {shortcutsWithImage.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    bgcolor: "#E2E8F0",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {item.shortcut}
                  </Typography>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      pt: "56.25%",
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.shortcut}
                      layout="fill"
                      objectFit="cover"
                      style={{ borderRadius: 10 }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            borderRadius: "40% 40% 0 0",
            width: "100%",
            height: { xs: "30px", sm: "40px", md: "50px" },
            bgcolor: "white",
          }}
        />
      </Box>

      {/* Code Of Section-3 */}
      <Box sx={{ pt: 10 }}>
        <Container
          maxWidth={false}
          sx={{
            paddingLeft: { xs: "16px", lg: "100px" }, // Dynamic left padding
            paddingRight: { xs: "16px", lg: "100px" }, // Dynamic right padding
            maxWidth: "xl",
            margin: "0 auto",
          }}
        >
          <Stack
            spacing={4}
            alignItems="center"
            sx={{
              textAlign: "center",
              position: "relative",
              p: 6,
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: 2,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                  fontWeight: 800,
                  mb: 2,
                  letterSpacing: "-0.02em",
                }}
              >
                Any LLM, Anywhere.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  color: "text.secondary",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Host your own models locally, or communicate directly with your
                favorites.
              </Typography>
            </Box>

            {/* Cards Grid */}
            <Grid container spacing={4}>
              {LLMmodels.map((model, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, sm: 4 },
                      height: "100%",
                      bgcolor: "#E5E7EB",
                      borderRadius: 2,
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        component="h3"
                        sx={{
                          fontSize: { xs: "1.5rem", sm: "1.75rem" },
                          fontWeight: 700,
                          mb: 3,
                          textAlign: "center",
                        }}
                      >
                        {model.Heading}
                      </Typography>

                      {/* Company Icons */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mb: 3,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            backgroundColor: "#E5E7EB",
                          }}
                        >
                          {model.CompanyImg.map((company, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                ml: model.overlapOrGap
                                  ? idx === 0
                                    ? 0
                                    : -0.6 // Overlap
                                  : idx === 0
                                  ? 0
                                  : 1, // Gap
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 1,
                                width: 60,
                                height: 60,
                                borderRadius: 2,
                                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                                backgroundColor: "white",
                              }}
                            >
                              <Icon
                                icon={company.companyIcon.replace(
                                  /<Icon icon="|" \/>/g,
                                  ""
                                )}
                                style={{
                                  opacity: 0.8,
                                  fontSize: 100, // Controls size
                                }}
                              />
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      {/* Description */}
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "text.secondary",
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          lineHeight: 1.6,
                        }}
                      >
                        <Typography>{model.subHeading1}</Typography>
                        <Typography>{model.subHeading2}</Typography>
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Code Of Section-4 */}
      <Box sx={{ my: 15 }}>
        <Container
          maxWidth={false}
          sx={{
            paddingLeft: { xs: "16px", lg: "100px" }, // Dynamic left padding
            paddingRight: { xs: "16px", lg: "100px" }, // Dynamic right padding
            maxWidth: "xl",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              bgcolor: "#1a1f2e",
              borderRadius: 4,
              p: { xs: 10, sm: 18, md: 20 },
              textAlign: "center",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Stack spacing={4} alignItems="center">
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                  fontWeight: 700,
                  color: "white",
                  mb: { xs: 3, md: 4 },
                }}
              >
                Get Started with Void.
              </Typography>

              <Stack spacing={2} sx={{ width: "100%", maxWidth: 280 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                      <Icon icon="mdi:github" />
                    </Box>
                  }
                  sx={{
                    bgcolor: "#3b82f6",
                    fontSize: "1rem",
                    py: 1.5,
                    borderRadius: 50,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#2563eb",
                    },
                  }}
                >
                  Star on Github
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  endIcon={
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                      <Icon icon="mdi:arrow-top-right" />
                    </Box>
                  }
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    fontSize: "1rem",
                    py: 1.5,
                    borderRadius: 50,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.15)",
                    },
                  }}
                >
                  Get Access
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            paddingLeft: { xs: "16px", lg: "100px" }, // Dynamic left padding
            paddingRight: { xs: "16px", lg: "100px" }, // Dynamic right padding
            maxWidth: "xl",
            margin: "0 auto",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 0 }}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Copyright */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                order: { xs: 2, sm: 1 },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              © 2024 Glass Devtools, Inc. - All rights reserved.
            </Typography>

            {/* Logo */}
            <Box
              sx={{
                order: { xs: 1, sm: 2 },
                position: "relative",
                width: 60, // Set the box dimensions (if needed)
                height: 60, // Adjust as per your requirement
              }}
            >
              <Image
                src={voidLogo}
                alt="Glass Devtools Logo"
                width={60} // Set image width independently
                height={60} // Set image height independently
                style={{
                  objectFit: "contain", // Ensures the image fits inside its box without distortion
                }}
              />
            </Box>

            {/* Contact Links */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                order: { xs: 3, sm: 3 },
              }}
            >
              <Link
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:discord" width={24} height={24} />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:github" width={24} height={24} />
              </Link>
              <Link href="mailto:hello@voideditor.com">
                hello@voideditor.com
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Page;
