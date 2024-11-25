"use client";
import { Container, Box, Typography, Button, Stack, Grid } from "@mui/material";
import Image from "next/image";
import voidLogo from "../../public/voidLogo.png";
import c1 from "../../public/c1.png";
import c2 from "../../public/c2.png";
import c3 from "../../public/c3.png";
import { Icon } from "@iconify/react";

function Page() {
  const menuBar = [
    {
      desktopName: "Discord",
    },
    {
      desktopName: "GitHub",
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
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.04), transparent)",
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
                  px: 4,
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
                  px: 4,
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
              spacing={{ xs: 3, sm: 4, md: 5 }}
              justifyContent="center"
              alignItems="stretch"
            >
              {shortcutsWithImage.map((item, ind) => (
                <Grid item key={ind} xs={12} sm={6} md={4} lg={4}>
                  <Stack
                    spacing={2}
                    alignItems="center"
                    sx={{
                      height: "100%",
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
    </Box>
  );
}

export default Page;
