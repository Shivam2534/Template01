"use client";
import {
  Typography,
  Box,
  Button,
  Container,
  Link,
  Grid,
  CardContent,
  Card,
  AppBar,
  Toolbar,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Icon } from "@iconify/react";
import * as React from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const creators = [
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/4a88ce45-ed90-47b0-92ce-13cea1eae360/Xdj5V184AzfXSZ3FIyLvh",
    name: "greigory",
    description: "Lezhin artist Check out",
    link: "https://example.com/greigory",
  },
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/bad263da-d746-4df4-8cc7-daa8346569fd/Eg2lsRUhbwXQVhytYnbvS",
    name: "batsouppe",
    description: "OC Merch Artist",
    link: "https://example.com/batsouppe",
  },
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/247e42f2-f265-4fe0-a45d-8a670408b8f9/VBqmtzjAhhS8ZeVQt3d1u",
    name: "ceomg",
    description: "animal crossing creator",
    link: "https://example.com/ceomg",
  },
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/57a6d4db-dda3-42d5-9ab4-ae94490a13ce/Z3xvH6cy6h1Z201Eyqipp",
    name: "ovans",
    description: "Artist + Designer",
    link: "https://example.com/ovans",
  },
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/bad263da-d746-4df4-8cc7-daa8346569fd/uLpmRl0C4xfmJEPzJx2h2",
    name: "saiyagina",
    description: "Visual dev, Webtoon creator",
    link: "https://example.com/saiyagina",
  },
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/eca5ceb3-8e73-41fb-b2fa-ae64d144dc6c/0sNv6pPFf3LUCsToQJlTp",
    name: "gabihime",
    description: "Light novelist and illustrator",
    link: "https://example.com/gabihime",
  },
];
const energyStats = [
  { value: "18,000", unit: "Wh", label: "Driving an electric car" },
  { value: "400", unit: "Wh", label: "Playing PC games" },
  { value: "100", unit: "Wh", label: "Watching TV" },
  { value: "5", unit: "Wh", label: "Chatting on DreamRP" },
];
const characters = [
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/4a88ce45-ed90-47b0-92ce-13cea1eae360/Xdj5V184AzfXSZ3FIyLvh",
    name: "Victor Castillo",
    handle: "@greigory",
    description:
      "Have a chat with Victor Castillo, the moody love interest in Gregory's web...",
  },
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/bad263da-d746-4df4-8cc7-daa8346569fd/Eg2lsRUhbwXQVhytYnbvS",
    name: "Tom Nook",
    handle: "@ceomg",
    description: "Off-brand Tom Nook",
  },
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/247e42f2-f265-4fe0-a45d-8a670408b8f9/VBqmtzjAhhS8ZeVQt3d1u",
    name: "Tiktaalik - Aventura de Supervivencia Sci-Fi (Español)",
    handle: "@saiyagina",
    description:
      "Está a bordo del Tiktaalik, una nave cuya misión es atravesar un agujero...",
  },
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/57a6d4db-dda3-42d5-9ab4-ae94490a13ce/Z3xvH6cy6h1Z201Eyqipp",
    name: "Beckett (Vampire the Masquerade)",
    handle: "@clarissaexplainingitall",
    description:
      "Cuthbert Beckett is a Gangrel scholar from the world of Vampire the Masque...",
  },
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/bad263da-d746-4df4-8cc7-daa8346569fd/uLpmRl0C4xfmJEPzJx2h2",
    name: "Bluebear",
    handle: "@ceomg",
    description:
      "Bluebear is an adorable blue bear cub who loves peaches and fire. She's an...",
  },
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/eca5ceb3-8e73-41fb-b2fa-ae64d144dc6c/0sNv6pPFf3LUCsToQJlTp",
    name: "Prince Sara Ann Winder of San Francisco",
    handle: "@clarissaexplainingitall",
    description:
      "The Ventrue ruler of San Francisco, Prince Winder is a character adapted...",
  },
  {
    image:
      "https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/eb2fd3f9-9737-405d-919f-06cab9940a33/KZwPUkNm1EpQav7hkk4mD",
    name: "K",
    handle: "@batsouppe",
    description:
      "Just having a little demon fun and righting the wrongs of the world, one sh...",
  },
];

const menuBar = [{ menuName: "Create" }, { menuName: "Chat" }];

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Create", "Chat", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Login", "Signup"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function useInView(options = {}) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const currentRef = ref.current; // Capture the current ref value
      const observer = new IntersectionObserver(([entry]) => {
        setIsInView(entry.isIntersecting);
      }, options);

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef); // Use the captured value
        }
      };
    }, [options]);

    return [ref, isInView] as const;
  }

  const [ref, isInView] = useInView({ threshold: 0.4 });
  const [ref1, isInView1] = useInView({ threshold: 0.2 });
  const [refsustainable, isInViewsustainable] = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [consent, setConsent] = useState(false);

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
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* <Header /> */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          backgroundColor: "white",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <Icon icon="mdi:menu" fontSize={22} />
          </Box>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Icon icon="lucide:sparkles" width="12" height="12" />
            </Box>
            <Box component="span" sx={{ mx: 1, fontWeight: 700 }}>
              DreamRP
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Icon icon="lucide:sparkles" width="12" height="12" />
            </Box>{" "}
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "flex-end", sm: "space-between" },
              px: { xs: 0, sm: 2 },
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {menuBar.map((item, ind) => (
                <Button key={ind} sx={{ color: "#71717A" }}>
                  {item.menuName}
                </Button>
              ))}
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  ml: 2,
                  backgroundColor: "black",
                  borderRadius: 12,
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Sign Up
              </Button>
              <Button color="inherit" sx={{ ml: 1 }}>
                Log In
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="lg"
        sx={{
          mt: 8,
          px: { xs: 0, sm: 2 },
        }}
      >
        <Box sx={{ textAlign: "center", px: 2 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: "3.5rem",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Bring your characters to life.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.secondary",
              mb: 3,
              fontSize: "1.125rem",
            }}
          >
            Pro-creator. Pro-human.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              px: 4,
              py: 1,
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#333",
              },
              borderRadius: 12,
            }}
          >
            Start Creating
          </Button>
        </Box>

        {/* <FeaturedCreators creators={creators} /> */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: "1.5rem",
              fontWeight: 600,
              mb: 4,
              textAlign: "left",
              pl: 2,
            }}
          >
            Featured Creators
          </Typography>
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 4,
              px: 2,
              pb: 2,
              "::-webkit-scrollbar": {
                height: "8px",
              },
              "::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "4px",
              },
              "::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "4px",
                "&:hover": {
                  background: "#555",
                },
              },
              msOverflowStyle: "none",
              scrollbarWidth: "thin",
            }}
          >
            {creators.map((creator, index) => (
              <Box
                key={index}
                sx={{
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center", // Centers the green box horizontally in the blue box
                  alignItems: "center", // Centers the green box vertically in the blue box
                }}
              >
                {/* <CreatorCard {...creator} /> */}
                <Box
                  sx={{
                    textAlign: "center",
                    width: "250px",
                    display: "flex",
                    flexDirection: "column", // Ensures content is stacked vertically
                    alignItems: "center", // Centers the content horizontally inside the green box
                    justifyContent: "center", // Centers the content vertically inside the green box
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    p: 5,
                    border: "2px solid #E4E4E7",
                    borderRadius: 5,
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    src={creator.image}
                    alt={creator.name}
                    sx={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      mb: 1,
                      transition: "transform 0.2s",
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    sx={{ fontWeight: 500 }}
                  >
                    {creator.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.875rem" }}
                  >
                    {creator.description}
                  </Typography>
                  <Link>{creator.link}</Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* <InteractiveStorytellingSection /> */}
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          py: 12,
          mt: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            ref={ref}
            sx={{
              backgroundColor: "black",
              color: "white",
              py: { xs: 8, md: 12 },
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container maxWidth="lg">
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                      fontWeight: 600,
                      mb: 2,
                      lineHeight: 1.2,
                    }}
                  >
                    The Next Generation of
                    <br />
                    Interactive Storytelling
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      mb: 6,
                      fontSize: { xs: "1rem", sm: "1.125rem" },
                    }}
                  >
                    Engage with your fans by letting them
                    <br />
                    chat directly with your characters.
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box
                    component="button"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      border: "none",
                      borderRadius: "50px",
                      padding: "12px 24px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                      },
                    }}
                  >
                    Get Started
                  </Box>
                </motion.div>
              </motion.div>
            </Container>
          </Box>

          <Box
            sx={{
              position: "relative",
              maxWidth: "1200px",
              // margin: "0 auto",
            }}
          >
            <Box
              component="img"
              src="https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public/images/public/images/chat_screen_black.png?width=3840&height=3840&quality=75"
              alt="Interactive Chat Interface"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            />
          </Box>
        </Container>
      </Box>
      {/* <OpportunitiesSection /> */}
      <Box sx={{ py: 12, textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 600,
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Making New
            <br />
            Opportunities
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              mb: 3,
              fontSize: "1.125rem",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            DreamRP is a new avenue for growth and fan engagement.
            <br />
            We fight for the survival of creativity by finding new ways
            <br />
            to help you monetize your work.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              mb: 8,
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Set up shop
          </Button>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#111",
                  color: "white",
                  textAlign: "left",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    Fans Subscribe
                  </Typography>
                  <Typography sx={{ mb: 4, color: "rgba(255,255,255,0.7)" }}>
                    Create premium characters that cater to your most passionate
                    fans. Subscribers enjoy unlimited access to exclusive
                    characters.
                  </Typography>
                  <Box sx={{ p: 8 }}>
                    <Box
                      component="img"
                      src="https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public//images/public/images/subscribed.png?width=1920&height=1920&quality=75"
                      alt="Character Profile"
                      sx={{
                        width: "100%",
                        borderRadius: "12px",
                        mt: 2,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#111",
                  color: "white",
                  textAlign: "left",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    Creators Earn
                  </Typography>
                  <Typography sx={{ mb: 4, color: "rgba(255,255,255,0.7)" }}>
                    Manage your fanbase and make a living doing what you love.
                    We provide the tools to help you grow your business.
                  </Typography>
                  <Box sx={{ p: 8 }}>
                    <Box
                      component="img"
                      src="https://hjvcekjqqfebmurtwjle.supabase.co/storage/v1/render/image/public//images/public/images/insights.png?width=1920&height=1920&quality=75"
                      alt="Character Profile"
                      sx={{
                        width: "100%",
                        borderRadius: "12px",
                        mt: 2,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Peoneering ethic ai */}
      <Box
        ref={ref1}
        sx={{
          bgcolor: "black",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: { xs: 8, md: 12 },
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            variants={containerVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 700,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Pioneering
                <br />
                Ethical AI
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  mb: 2,
                  maxWidth: "600px",
                }}
              >
                Join us in building the world is first
                <br />
                100% consensually-trained AI model.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  mb: 4,
                  opacity: 0.8,
                }}
              >
                Opt-in to transparency.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  fontSize: { xs: "1rem", sm: "1.125rem" },
                  py: 1.5,
                  px: 4,
                  borderRadius: "50px",
                  textTransform: "none",
                  mb: 8,
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  p: 2,
                  maxWidth: "600px",
                  backgroundColor: "white",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                  }
                  label="I consent to the use of my data for training and development of DreamRP's clean AI model."
                  sx={{
                    color: "black",
                    "& .MuiFormControlLabel-label": {
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    },
                  }}
                />
              </Box>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
      {/* <SustainableFutureSection /> */}
      <Box sx={{ py: 12, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <motion.div
            ref={refsustainable}
            initial="hidden"
            animate={isInViewsustainable ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <Box sx={{ maxWidth: "800px", mb: 8 }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    fontWeight: 600,
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  Building a
                  <br />
                  Sustainable Future
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    fontSize: "1.125rem",
                  }}
                >
                  We are powered by specialized models that are much smaller and
                  more efficient, while providing the best roleplaying
                  experience.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    fontSize: "1.125rem",
                  }}
                >
                  Below are energy consumption figures for various activities
                  over 1 hour of usage.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </Box>

            <motion.div variants={itemVariants}>
              <Grid container spacing={4} sx={{ mt: 8 }}>
                {energyStats.map((stat, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h2"
                        component="div"
                        sx={{
                          fontSize: { xs: "2.5rem", md: "3.5rem" },
                          fontWeight: 600,
                          mb: 1,
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "center",
                          gap: 1,
                        }}
                      >
                        {stat.value}
                        <Typography
                          component="span"
                          sx={{
                            fontSize: "1rem",
                            mb: 1,
                            opacity: 0.7,
                          }}
                        >
                          {stat.unit}
                        </Typography>
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.875rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          opacity: 0.7,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* FAQ */}
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
      {/* <JoinMissionSection /> */}
      <Box sx={{ py: 12, textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 600,
              mb: 4,
              lineHeight: 1.2,
            }}
          >
            Join Our Mission
          </Typography>

          <Box sx={{ mb: 6 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                px: 4,
                py: 1,
                fontSize: "0.8rem",
                mb: 2,
                "&:hover": {
                  backgroundColor: "#333",
                },
                borderRadius: 10,
              }}
            >
              Create
            </Button>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  px: 4,
                  py: 1,
                  fontSize: "0.8rem",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                  borderRadius: 10,
                }}
              >
                Support us
              </Button>
            </Box>
            <Typography
              sx={{
                color: "text.secondary",
                mt: 4,
                fontSize: "1.125rem",
              }}
            >
              Or start chatting with characters!
            </Typography>
          </Box>
        </Container>
        {/* <CharacterList /> */}
        <Box sx={{ mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 4,
              px: 2,
              pb: 2,
              "::-webkit-scrollbar": {
                height: "8px",
              },
              "::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "4px",
              },
              "::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "4px",
                "&:hover": {
                  background: "#555",
                },
              },
              msOverflowStyle: "none",
              scrollbarWidth: "thin",
            }}
          >
            {characters.map((character, index) => (
              <Box
                key={index}
                sx={{
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center", // Centers the green box horizontally in the blue box
                  alignItems: "center", // Centers the green box vertically in the blue box
                }}
              >
                {/* <CreatorCard {...creator} /> */}
                <Box
                  sx={{
                    textAlign: "center",
                    width: "300px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column", // Ensures content is stacked vertically
                    alignItems: "center", // Centers the content horizontally inside the green box
                    justifyContent: "center", // Centers the content vertically inside the green box
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    p: 5,
                    border: "2px solid #E4E4E7",
                    borderRadius: 5,
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    src={character.image}
                    alt={character.name}
                    sx={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      mb: 1,
                      transition: "transform 0.2s",
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    sx={{ fontWeight: 500 }}
                  >
                    {character.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontWeight: 500 }}
                  >
                    @{character.handle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.875rem" }}
                  >
                    {character.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* <Footer /> */}
      <Box
        component="footer"
        sx={{
          py: 2,
          mt: 2,
          borderTop: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              DreamRP Inc. 2024
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Link
                href="#"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: "0.875rem" }}
              >
                Terms of service
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: "0.875rem" }}
              >
                Privacy policy
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
