"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Box,
  ThemeProvider,
  createTheme,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Chip,
  Button,
  TextField,
  Container,
  Input,
  CardMedia,
} from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";
import probzlogo from "../../public/companyToconnect/probzlogo.svg";
import airtableauth from "../../public/companyToconnect/airtable-auth.png";
import notionauth from "../../public/companyToconnect/notion-auth.png";
import googlesheetauth from "../../public/companyToconnect/google-sheet-auth.png";
import smartsuiteauth from "../../public/companyToconnect/smartsuite-auth.png";
import xanoauth from "../../public/companyToconnect/xano-auth.png";
import mondayauth from "../../public/companyToconnect/monday-auth.png";
import supabaseauth from "../../public/companyToconnect/supabase-auth.png";
import hubspotauth from "../../public/companyToconnect/hubspot-auth.png";
import bigqueryauth from "../../public/companyToconnect/bigquery-auth.png";
import sqlauth from "../../public/companyToconnect/sql-auth.png";
import backgroundImgBox from "../../public/companyToconnect/backgroundImgBox@.svg";
import recoTemp1 from "../../public/companyToconnect/recoTemp1.jpg";
import { m } from "framer-motion";

const ImageUpdater = React.memo(
  ({ getImageSrc }: { getImageSrc: () => string }) => {
    const [, forceUpdate] = useState({});

    useEffect(() => {
      const intervalId = setInterval(() => {
        forceUpdate({});
      }, 100); // Check for updates every 100ms

      return () => clearInterval(intervalId);
    }, []);

    return (
      <Image
        src={getImageSrc()}
        alt="Data preview"
        width={400}
        height={500}
        style={{
          maxWidth: "100%",
          height: "auto",
          opacity: 0.8,
        }}
      />
    );
  }
);
ImageUpdater.displayName = "ImageUpdater";

export default function DashboardPage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      background: {
        default: "#f8f9fa",
      },
    },
  });

  const DRAWER_WIDTH = 250;

  const menuItems = [
    { text: "Apps", icon: "material-symbols:apps" },
    { text: "My templates", icon: "mdi:text-box-multiple" },
    { text: "Data sources", icon: "material-symbols:database" },
    { text: "Chat with us", icon: "material-symbols:chat" },
    { text: "Hire an expert", icon: "material-symbols:person-search" },
    { text: "Help articles", icon: "material-symbols:help-outline" },
    { text: "Video tutorials", icon: "material-symbols:play-circle" },
    { text: "Community", icon: "mdi:people-group" },
    { text: "Product updates", icon: "material-symbols:update" },
  ];

  interface Template {
    id: string;
    title: string;
    image: string;
    category: string[];
  }

  const templates: Template[] = [
    {
      id: "1",
      title: "Client Portal",
      image: recoTemp1.src,
      category: ["ALL", "WEBSITES", "PORTALS"],
    },
    {
      id: "2",
      title: "SaaS Customer Portal",
      image: recoTemp1.src,
      category: ["ALL", "WEBSITES", "INTERNAL TOOLS"],
    },
    {
      id: "3",
      title: "Investor Portal",
      image: recoTemp1.src,
      category: ["ALL", "DASHBOARDS"],
    },
    {
      id: "4",
      title: "Investor Relations Management",
      image: recoTemp1.src,
      category: ["ALL", "WEBSITES"],
    },
    {
      id: "5",
      title: "Legal Case Management",
      image: recoTemp1.src,
      category: ["ALL", "FORMS"],
    },
    {
      id: "6",
      title: "Partner Portal",
      image: recoTemp1.src,
      category: ["ALL", "CRMS"],
    },
    {
      id: "7",
      title: "Recruitment Agency Portal",
      image: recoTemp1.src,
      category: ["ALL", "MARKETPLACES"],
    },
    {
      id: "8",
      title: "Donation Tracker",
      image: recoTemp1.src,
      category: ["ALL", "MARKETPLACES"],
    },
    // Add more templates as needed
  ];

  const categories = [
    "ALL",
    "PORTALS",
    "INTERNAL TOOLS",
    "DASHBOARDS",
    "CRMS",
    "MARKETPLACES",
    "MEMBER COMMUNITIES",
    "DIRECTORIES",
    "WEBSITES",
    "FORMS",
  ];

  interface DataSource {
    name: string;
    logo: string;
    trial?: "Pro" | "Business";
    imgToshow?: string;
  }
  const dataSources: DataSource[] = [
    { name: "Airtable", logo: "logos:airtable", imgToshow: airtableauth.src },
    { name: "Notion", logo: "logos:notion-icon", imgToshow: notionauth.src },
    {
      name: "Google Sheets",
      logo: "logos:google",
      imgToshow: googlesheetauth.src,
    },
    {
      name: "SmartSuite",
      logo: "logos:smashingmagazine",
      imgToshow: smartsuiteauth.src,
    },
    { name: "Xano", logo: "logos:haxl", imgToshow: xanoauth.src },
    {
      name: "Monday.com",
      logo: "logos:monday-icon",
      imgToshow: mondayauth.src,
    },
    {
      name: "Supabase",
      logo: "logos:supabase-icon",
      imgToshow: supabaseauth.src,
    },
    { name: "HubSpot", logo: "logos:hubspot", imgToshow: hubspotauth.src },
    {
      name: "BigQuery",
      logo: "logos:google-cloud-run",
      imgToshow: bigqueryauth.src,
    },
    {
      name: "Game.com",
      logo: "vscode-icons:file-type-sql",
      imgToshow: sqlauth.src,
    },
    { name: "Code", logo: "logos:blueprint", imgToshow: googlesheetauth.src },
    {
      name: "prettyfie",
      logo: "logos:argo-icon",
      imgToshow: smartsuiteauth.src,
    },
    {
      name: "Sang.wai",
      logo: "logos:apache-superset-icon",
      imgToshow: mondayauth.src,
    },
    {
      name: "Probz.ai",
      logo: "logos:appwrite-icon",
      imgToshow: airtableauth.src,
    },
    { name: "Credwise", logo: "logos:atom-icon", imgToshow: mondayauth.src },
  ];

  const prompts = {
    "Client portal":
      "A client portal for event attendees to access information about the event and workshops.",
    "Internal tool":
      "An internal tool for team members to manage and track project resources and timelines.",
    Directory:
      "A comprehensive directory system for organizing and accessing company-wide contacts and departments.",
    "Membership platform":
      "A membership platform with user authentication, profile management, and subscription features.",
  };

  const recomandedTemplates = [
    {
      imageURl: recoTemp1.src,
      title: "Client Portal",
      templateURL: "",
    },
    {
      imageURl: recoTemp1.src,
      title: "Project Tracker",
      templateURL: "",
    },
    {
      imageURl: recoTemp1.src,
      title: "Employee Directory",
      templateURL: "",
    },
    {
      imageURl: recoTemp1.src,
      title: "Sales CRM",
      templateURL: "",
    },
    {
      imageURl: recoTemp1.src,
      title: "Content Calendar",
      templateURL: "",
    },
    {
      imageURl: recoTemp1.src,
      title: "Company Intranet",
      templateURL: "",
    },
  ];

  const MotionCard = m(Card);

  const inputRef = useRef<(HTMLDivElement | null)[]>([]); // Add type annotations
  const selectedSourceRef = useRef<HTMLElement | null>(null); // Track the currently selected source
  const ind1: React.MutableRefObject<number> = useRef(0);
  const selectedImageRef = useRef(dataSources[0].imgToshow);

  const [open, setOpen] = useState({
    dialog1: false,
    dialog2: false,
    dialog3: false,
  });

  const handler = useCallback(
    (idx: number) => () => {
      if (selectedSourceRef.current !== null) {
        selectedSourceRef.current.style.backgroundColor = "#FFFFFF";
      }

      const currentElement = inputRef.current[idx];
      if (currentElement) {
        currentElement.style.backgroundColor = "#FCEED9";
        selectedSourceRef.current = currentElement;
        ind1.current = idx;
        selectedImageRef.current = dataSources[idx].imgToshow; // Update selected image ref
      }
    },
    []
  );

  const handleOpenDialog = (val: number) => {
    if (val == 1) {
      setOpen({ dialog1: true, dialog2: false, dialog3: false });
    } else if (val == 2) {
      setOpen({ dialog1: false, dialog2: true, dialog3: false });
    } else {
      setOpen({ dialog1: false, dialog2: false, dialog3: true });
    }
  };
  const handleCloseDialog = () =>
    setOpen({ dialog1: false, dialog2: false, dialog3: false });

  console.log("Component re-rendered");

  const MotionButton = m(Button);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const selectedButtonRef = useRef<string>("Client portal");

  const handleButtonClick = useCallback((type: string) => {
    if (textareaRef.current) {
      textareaRef.current.value = prompts[type as keyof typeof prompts];
      selectedButtonRef.current = type;

      // Update character count
      const charCountElement = document.getElementById("char-count");
      if (charCountElement) {
        charCountElement.textContent = `${textareaRef.current.value.length}/200`;
      }

      // Update button styles
      document.querySelectorAll("[data-button-type]").forEach((button) => {
        if (button instanceof HTMLElement) {
          if (button.dataset.buttonType === type) {
            button.style.backgroundColor = "#2B2B2B";
          } else {
            button.style.backgroundColor = "transparent";
          }
        }
      });
    }
  }, []);

  const BackgroundPattern = () => (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        pointerEvents: "none",
        backgroundImage: `url(${backgroundImgBox.src})`,
        backgroundSize: "800px 800px",
        backgroundPosition: "center 40px",
        backgroundRepeat: "no-repeat",
      }}
    />
  );

  const StartGrids = () => {
    return (
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card
            elevation={0} // shadow becomes 0
            sx={{
              cursor: "pointer",
              "&:hover": {
                border: "1px solid #fd7e14",
              },
              border: "1px solid #F0F0F4",
              borderRadius: 5,
            }}
            onClick={() => handleOpenDialog(1)}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Box
                sx={{
                  mr: 2,
                  p: 1.3,
                  borderRadius: 1,
                  backgroundColor: "#EDF3FB",
                  border: "2px solid #DAE0E7",
                }}
              >
                <Icon icon="material-symbols:computer" width={30} height={30} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "17px",
                    letterSpacing: 0.8,
                    fontWeight: "bold",
                  }}
                >
                  Start from scratch
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "13px" }}
                >
                  Start fresh, tailor as you go.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            elevation={0}
            sx={{
              cursor: "pointer",
              "&:hover": {
                border: "1px solid #fd7e14",
              },
              border: "1px solid #F0F0F4",
              borderRadius: 5,
            }}
            onClick={() => handleOpenDialog(2)}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Box
                sx={{
                  mr: 2,
                  p: 1.3,
                  borderRadius: 1,
                  backgroundColor: "#FCEED9",
                  border: "2px solid #E8DBC8",
                }}
              >
                <Icon icon="material-symbols:stars" width={30} height={30} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "17px",
                    letterSpacing: 0.8,
                    fontWeight: "bold",
                  }}
                >
                  Generate with AI
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "13px" }}
                >
                  Write a prompt, AI does the rest.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  };

  const selectedCategoryRef = useRef<string>("ALL");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = useCallback((category: string) => {
    selectedCategoryRef.current = category;

    // Update active button styles
    document.querySelectorAll("[data-category]").forEach((button) => {
      if (button instanceof HTMLElement) {
        const isSelected = button.dataset.category === category;
        button.style.borderBottom = isSelected ? "2px solid #FF8A65" : "none";
        button.style.color = isSelected ? "#FF8A65" : "#666";
      }
    });

    // Update visible templates
    document.querySelectorAll("[data-template]").forEach((template) => {
      if (template instanceof HTMLElement) {
        const categories = template.dataset.template?.split(",") || [];
        template.style.display =
          category === "ALL" || categories.includes(category)
            ? "block"
            : "none";
      }
    });
  }, []);

  const scrollbarThumbRef = useRef<HTMLDivElement>(null);
  const [scrollRatio, setScrollRatio] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;

    if (container && scrollbarThumb) {
      const updateScrollbar = () => {
        const visibleRatio = container.clientHeight / container.scrollHeight;
        setScrollRatio(visibleRatio);
        const scrollThumbHeight = container.clientHeight * visibleRatio;
        scrollbarThumb.style.height = `${scrollThumbHeight}px`;

        // Sync scrollbar thumb position
        const thumbTop =
          (container.scrollTop / container.scrollHeight) *
          container.clientHeight;
        scrollbarThumb.style.transform = `translateY(${thumbTop}px)`;
      };

      const handleContentScroll = () => {
        updateScrollbar();
      };

      // Attach scroll listener
      container.addEventListener("scroll", handleContentScroll);

      // Initial update
      updateScrollbar();

      return () => {
        container.removeEventListener("scroll", handleContentScroll);
      };
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar Menu Drawer */}
        <Box
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            boxShadow: "20px 0px 50px rgba(0, 0, 0, 0.8)",
          }}
        >
          {/* Top Section */}
          <Box>
            {/* Logo */}
            <Box sx={{ p: 2 }}>
              <Image
                src="https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/softr_logo_icon_only.svg"
                alt="Logo"
                height={32}
                width={25}
              />
            </Box>

            {/* Menu List1 */}
            <Box>
              {menuItems.slice(0, 3).map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      minWidth: "10px",
                      gap: 1,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "25px" }}>
                      <Icon icon={item.icon} width={23} height={23} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{ sx: { fontSize: "13px" } }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          </Box>

          {/* Bottom Section */}
          <Box>
            {/* Menu List2 */}
            <Box>
              {menuItems.slice(3).map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    sx={{
                      gap: 1,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "25px" }}>
                      <Icon icon={item.icon} width={23} height={23} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{ sx: { fontSize: "13px" } }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>

            {/* Account name box */}
            <Box
              sx={{
                m: 2,
                p: 0.5,
                border: "2px solid #F5F5F7",
              }}
            >
              <ListItemButton
                sx={{
                  "$:hover": {
                    backgroundColor: "#F5F5F7",
                  },
                }}
              >
                <Avatar sx={{ mr: 2, borderRadius: "20%" }}>JP</Avatar>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontSize: "13px" }}>
                    JeeTipPoint
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ backgroundColor: "#F0F0F4", width: "45px" }}
                  >
                    Owner
                  </Typography>
                </Box>
              </ListItemButton>
            </Box>
          </Box>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "#F5F5F7",
            overflow: "auto",
            px: {
              lg: 15,
              md: 10,
            },
          }}
        >
          <Box
            sx={{
              p: 1,
              overflow: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.8,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: 20,
                  letterSpacing: "0.8px",
                  fontWeight: "bold",
                }}
              >
                Create new app
              </Typography>

              <Avatar sx={{ width: 24, height: 24, fontSize: "14px" }}>
                J
              </Avatar>
            </Box>

            <StartGrids />

            {/*1 left Dialog(Currently working) */}
            <Dialog
              open={open.dialog1}
              onClose={handleCloseDialog}
              maxWidth="lg"
              fullWidth
              PaperProps={{
                sx: {
                  borderRadius: 2,
                  overflow: "hidden",
                },
              }}
            >
              {/* Upper box */}
              <Box
                sx={{ display: "flex", minHeight: "550px", zIndex: 1, ml: 2 }}
              >
                {/* Left Section */}
                <Box
                  sx={{
                    width: "50%",
                    p: 8,
                    overflowY: "scroll",
                    maxHeight: "90vh",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                  >
                    <DialogTitle sx={{ p: 0, mb: 1 }}>
                      <Typography
                        variant="h2"
                        component="h4"
                        sx={{ fontSize: "26px", fontWeight: "bold" }}
                      >
                        What data do you want to use in this app?
                      </Typography>
                    </DialogTitle>
                    <DialogContent sx={{ p: 0, mb: 4 }}>
                      <Typography
                        color="text.secondary"
                        sx={{ fontSize: "14px" }}
                      >
                        Select a data source for this application. You can
                        change it or add more later on.
                      </Typography>
                    </DialogContent>
                  </Box>

                  <Grid container spacing={2}>
                    {dataSources.map((source, ind) => (
                      <Grid item xs={12} sm={6} key={source.name}>
                        <MotionCard
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          ref={(el) => {
                            inputRef.current[ind] = el;
                          }}
                          onClick={handler(ind)}
                          sx={{
                            cursor: "pointer",
                            border: "1px #F0F0F4",
                            backgroundColor: "#FFFFFF",
                            "&:hover": {
                              backgroundColor: "#FAFAFA",
                            },
                          }}
                        >
                          <CardContent
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                              p: "10px !important",
                            }}
                          >
                            <Box sx={{ backgroundColor: "#F5F5F7", p: 1 }}>
                              <Icon icon={source.logo} width={32} height={32} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="subtitle1">
                                {source.name}
                              </Typography>
                            </Box>
                            {source.trial && (
                              <Chip
                                label={`Trial (${source.trial})`}
                                size="small"
                                sx={{
                                  bgcolor: "error.lighter",
                                  color: "error.main",
                                  borderRadius: 1,
                                }}
                              />
                            )}
                          </CardContent>
                        </MotionCard>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Right Section */}
                <Box
                  sx={{
                    bgcolor: "grey.50",
                    p: 3,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    minHeight: "100%",
                  }}
                >
                  <IconButton
                    onClick={handleCloseDialog}
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 10,
                      backgroundColor: "#FFFFFF",
                      fontSize: 16,
                    }}
                  >
                    <Icon icon="material-symbols:close" />
                  </IconButton>

                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ImageUpdater
                      getImageSrc={() => selectedImageRef.current}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Footer */}
              <Box
                sx={{
                  borderTop: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                  p: 3.2,
                }}
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleCloseDialog}
                >
                  Connect later
                </Button>
                <Button
                  variant="contained"
                  disabled={false}
                  onClick={handleCloseDialog}
                  sx={{ backgroundColor: "#EEA941", color: "black" }}
                >
                  Continue
                </Button>
              </Box>
            </Dialog>

            {/*2 right Dialog(Currently working) */}
            <Dialog
              open={open.dialog2}
              onClose={handleCloseDialog}
              maxWidth="lg"
              fullWidth
              PaperProps={{
                sx: {
                  backgroundColor: "#202020",
                  backgroundImage:
                    "radial-gradient(circle at top right, rgba(255,255,255,0.03) 0%, transparent 70%)",
                  color: "white",
                  minHeight: "90vh",
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                },
              }}
            >
              <BackgroundPattern />
              <DialogContent sx={{ p: 0, position: "relative", zIndex: 1 }}>
                <Box sx={{ p: 4, position: "relative" }}>
                  <Box>
                    {/* Close Button */}
                    <IconButton
                      onClick={handleCloseDialog}
                      sx={{
                        position: "absolute",
                        right: 16,
                        top: 20,
                        color: "black",
                        backgroundColor: "white",
                        fontSize: 12,
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}
                    >
                      <Icon icon="material-symbols:close" />
                    </IconButton>

                    {/* Header */}
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        fontSize: "20px",
                        letterSpacing: 1,
                      }}
                    >
                      Create with AI
                    </Typography>
                  </Box>

                  <Container maxWidth="md">
                    <Box sx={{ px: 5 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 3,
                        }}
                      >
                        {/* AI Badge */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            backgroundColor: "#000",
                            px: 2,
                            py: 1,
                            width: 215,
                            border: "2px solid #000",
                            borderRadius: 10,
                          }}
                        >
                          <Icon icon="material-symbols:stars" />
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            AI-Powered app creation
                          </Typography>
                        </Box>

                        {/* Main Title */}
                        <Typography
                          variant="h3"
                          sx={{
                            mb: 2,
                            fontWeight: 600,
                            fontSize: "20px",
                            letterSpacing: 1,
                          }}
                        >
                          From prompt to reality
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            mb: 1,
                            color: "rgba(255,255,255,0.7)",
                            fontSize: "14px",
                          }}
                        >
                          I want to build an
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            gap: 2,
                            mb: 4,
                            flexWrap: "wrap",
                          }}
                        >
                          {Object.keys(prompts).map((type) => (
                            <MotionButton
                              key={type}
                              variant="contained"
                              data-button-type={type}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleButtonClick(type)}
                              sx={{
                                backgroundColor: "transparent",
                                border: "1px solid rgba(255,255,255,0.1)",
                                color: "white",
                                textTransform: "none",
                                "&:hover": {
                                  backgroundColor: "#2B2B2B",
                                },
                                borderRadius: 3,
                              }}
                            >
                              {type}
                            </MotionButton>
                          ))}
                        </Box>

                        {/* Prompt Section */}
                        <Box sx={{ position: "relative", mb: 4 }}>
                          <Typography
                            sx={{
                              mb: 2,
                              color: "rgba(255,255,255,0.7)",
                              fontSize: "15px",
                            }}
                          >
                            Here is what the app should do
                          </Typography>

                          <Button
                            sx={{
                              position: "absolute",
                              right: 0,
                              top: 0,
                              color: "#F7B955",
                              textTransform: "none",
                            }}
                          >
                            Suggest a prompt
                          </Button>

                          <TextField
                            inputRef={textareaRef}
                            multiline
                            rows={4}
                            fullWidth
                            defaultValue={prompts["Client portal"]}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                backgroundColor: "#2B2B2B",
                                color: "white",
                                "& fieldset": {
                                  borderColor: "rgba(255,255,255,0.1)",
                                },
                                "&:hover fieldset": {
                                  borderColor: "rgba(255,255,255,0.2)",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "rgba(255,255,255,0.3)",
                                },
                              },
                            }}
                          />

                          <Typography
                            id="char-count"
                            sx={{
                              position: "absolute",
                              right: 16,
                              bottom: -24,
                              color: "rgba(255,255,255,0.5)",
                              fontSize: "0.875rem",
                            }}
                          >
                            88/200
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Container>
                </Box>
                {/* Footer Buttons of box 2 */}
                <Box
                  sx={{
                    height: 96,
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    px: 4,
                    mt: 8,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: 2,
                    }}
                  >
                    <Button
                      variant="text"
                      onClick={handleCloseDialog}
                      sx={{
                        color: "black",
                        textTransform: "none",
                        border: "1px solid #F0F0F4",
                        px: 2,
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="text"
                      sx={{
                        backgroundColor: "#F7B955",
                        color: "black",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#E5A94D",
                        },
                        px: 2,
                        borderRadius: 2,
                      }}
                    >
                      Preview your app
                    </Button>
                  </Box>
                </Box>
              </DialogContent>
            </Dialog>

            {/* Recommandation box */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                height: 180,
                p: 2,
                borderRadius: 5,
                gap: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontSize: "14px" }}>
                  Recommended templates
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1.8 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {recomandedTemplates.map((template) => (
                    <Box
                      key={template.title}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.2,
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        sx={{
                          border: "1px solid #E5E5EA",
                          borderRadius: 2,
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={template.imageURl}
                          alt={template.title}
                          height={120}
                          width={119}
                          objectFit="cover"
                        ></Image>
                      </Box>
                      <Typography
                        sx={{
                          color: "#383B3D",
                          fontSize: "11px",
                          letterSpacing: 0.3,
                        }}
                      >
                        {template.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    width: "2px",
                    height: "100px",
                    backgroundColor: "#FAFAFC",
                  }}
                ></Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}
                >
                  <Box
                    sx={{
                      height: 80,
                      width: 110,
                      backgroundColor: "#FAFAFC",
                      borderRadius: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "22px",
                      "&:hover": {
                        fontSize: "24px",
                      },
                      border: "1px solid #E5E5EA",
                      cursor: "pointer",
                    }}
                    onClick={() => handleOpenDialog(3)}
                  >
                    <Icon icon="tdesign:app"></Icon>
                  </Box>

                  <Typography
                    sx={{
                      color: "#383B3D",
                      fontSize: "11px",
                      letterSpacing: 0.3,
                    }}
                  >
                    All templates
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/*Dialog 3 of Recommandation box*/}
            <Dialog
              open={open.dialog3}
              onClose={handleCloseDialog}
              maxWidth="lg"
              fullWidth
              PaperProps={{
                sx: {
                  backgroundColor: "#FAFAFC",
                  color: "white",
                  minHeight: "90vh",
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  height: "90vh",
                },
              }}
            >
              <DialogContent
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                {/* Fixed Header Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.8,
                    mb: 3,
                  }}
                >
                  {/* Close Button */}
                  <IconButton
                    onClick={handleCloseDialog}
                    sx={{
                      position: "absolute",
                      right: 16,
                      top: 20,
                      color: "black",
                      backgroundColor: "#FFFFFF",
                      fontSize: 12,
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <Icon icon="material-symbols:close" />
                  </IconButton>

                  {/* Header */}
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      fontSize: "23px",
                      letterSpacing: 1,
                      color: "black",
                    }}
                  >
                    Create new app
                  </Typography>

                  {/* StartGrids Component */}
                  <Box sx={{ height: 110 }}>
                    <StartGrids />
                  </Box>

                  {/* Search Bar */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid #DAE0E7",
                      borderRadius: "10px",
                      "&:hover": {
                        border: "1px solid #99B9E7",
                      },
                      "&.Mui-focused": {
                        borderColor: "blue",
                      },
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        padding: 1,
                        borderRadius: 1,
                      }}
                    >
                      <Box sx={{ fontSize: "16px" }}>
                        <Icon
                          icon="tdesign:search"
                          style={{ color: "#AEAEB5" }}
                        />
                      </Box>
                      <Input
                        type="text"
                        placeholder="Search templates..."
                        disableUnderline
                        sx={{ flex: 1 }}
                      />
                    </Box>
                  </Box>

                  {/* Categories Navigation */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.6,
                      overflowX: "auto",
                      scrollbarWidth: "none",
                      "&::-webkit-scrollbar": {
                        display: "none",
                      },
                    }}
                  >
                    {categories.map((category) => (
                      <Button
                        key={category}
                        data-category={category}
                        onClick={() => handleCategoryClick(category)}
                        sx={{
                          minWidth: "fit-content",
                          color: category === "ALL" ? "#FF8A65" : "#5A5D63",
                          borderBottom:
                            category === "ALL" ? "2px solid #FF8A65" : "none",
                          borderRadius: 0,
                          py: 0.3,
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "#FF8A65",
                          },
                          fontSize: "12px",
                          fontWeight: 500,
                          letterSpacing: 0.3,
                        }}
                      >
                        {category}
                      </Button>
                    ))}
                  </Box>
                </Box>

                {/* Scrollable Content Section */}
                <Box
                  sx={{
                    flex: 1,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Box
                    ref={containerRef}
                    sx={{
                      height: "100%",
                      overflowY: "auto",
                      pr: 2,
                      "&::-webkit-scrollbar": {
                        display: "none",
                      },
                      scrollbarWidth: "none",
                    }}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(250px, 1fr))",
                        gap: 1.7,
                      }}
                    >
                      {templates.map((template) => (
                        <MotionCard
                          elevation={0}
                          key={template.id}
                          data-template={template.category.join(",")}
                          sx={{
                            cursor: "pointer",
                            overflow: "hidden",
                            display: "block",
                            border: "1px solid #F0F0F4",
                            "&:hover": {
                              border: "1px solid #fd7e14",
                            },
                            borderRadius: 2,
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="200"
                            image={template.image}
                            width="100%"
                            alt={template.title}
                            sx={{
                              objectFit: "cover",
                            }}
                          />
                          <CardContent sx={{ height: 55 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontSize: "14px",
                                letterSpacing: 0.5,
                                fontWeight: 500,
                                color: "#212121",
                              }}
                            >
                              {template.title}
                            </Typography>
                          </CardContent>
                        </MotionCard>
                      ))}
                    </Box>
                  </Box>

                  {/* Custom Scrollbar */}
                  <Box
                    sx={{
                      width: "8px",
                      position: "absolute",
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundColor: "#f1f1f1",
                      borderRadius: "4px",
                    }}
                  >
                    <Box
                      ref={scrollbarThumbRef}
                      sx={{
                        width: "100%",
                        backgroundColor: "#888",
                        borderRadius: "4px",
                        position: "absolute",
                        top: 0,
                        cursor: "pointer",
                        transition: "transform 0.2s",
                      }}
                    />
                  </Box>
                </Box>
              </DialogContent>
            </Dialog>

            {/* Create new box */}
            <Box sx={{ mt: 10 }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2.5,
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      letterSpacing: "0.8px",
                      fontWeight: "bold",
                    }}
                  >
                    Probz.ai
                  </Typography>
                  <Box
                    sx={{
                      width: "2px",
                      height: "37px",
                      backgroundColor: "#E5E5EA",
                    }}
                  ></Box>{" "}
                  <Box
                    sx={{
                      border: "1px solid #E5E5EA",
                      p: 0.8,
                      borderRadius: 2,
                      backgroundColor: "#FFFFFF",
                      fontSize: "15px",
                      "&:hover": {
                        border: "1px solid #FCEED9",
                        backgroundColor: "#FCEED9",
                      },
                      color: "#5A5D63",
                    }}
                  >
                    <Icon icon="line-md:account-add"></Icon>
                  </Box>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    startIcon={<Icon icon="ri:add-fill" />}
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                      textTransform: "none",
                      borderRadius: 3,
                      boxShadow: "none",
                      fontSize: "13px",
                    }}
                  >
                    Create new
                  </Button>
                </Box>
              </Box>

              <Box sx={{ mt: 2 }}>
                <MotionCard
                  sx={{
                    maxWidth: 245,
                    backgroundColor: "#F8F9FA",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "none",
                    border: "1px solid #E5E5EA",
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        zIndex: 1,
                      }}
                    >
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          minWidth: "unset",
                          p: "2px 4px",
                          backgroundColor: "white",
                          color: "text.primary",
                          boxShadow: 1,
                          "&:hover": {
                            backgroundColor: "grey.100",
                          },
                        }}
                      >
                        <Icon icon="material-symbols:upload-file" width={15} />
                      </Button>
                    </Box>

                    {/* Preview Area */}
                    <Box
                      sx={{
                        backgroundColor: "white",
                        p: 2,
                        borderRadius: 1,
                        minHeight: 200,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: "60%",
                          height: 12,
                          backgroundColor: "#E3E8EF",
                          borderRadius: 1,
                        }}
                      />
                      <Box
                        sx={{
                          width: "80%",
                          height: 12,
                          backgroundColor: "#E3E8EF",
                          borderRadius: 1,
                        }}
                      />
                      <Box
                        sx={{
                          width: "40%",
                          height: 12,
                          backgroundColor: "#E3E8EF",
                          borderRadius: 1,
                        }}
                      />
                      <Box
                        sx={{
                          mt: 1,
                          height: 100,
                          backgroundColor: "#E3E8EF",
                          borderRadius: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon
                          icon="material-symbols:image"
                          width={32}
                          color="#B0B8C4"
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent sx={{ pt: 3 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        Untitled Application
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mt: 0.5,
                        }}
                      >
                        <Icon
                          icon="material-symbols:cloud-off"
                          width={16}
                          color="#9DA4AE"
                        />
                        <Typography variant="caption" color="text.secondary">
                          Not published
                        </Typography>
                      </Box>
                    </CardContent>

                    <Box sx={{ pr: 1 }}>
                      <IconButton
                        size="small"
                        sx={{
                          backgroundColor: "white",
                          boxShadow: 1,
                          "&:hover": {
                            backgroundColor: "grey.100",
                          },
                        }}
                      >
                        <Icon icon="material-symbols:more-horiz" />
                      </IconButton>
                    </Box>
                  </Box>
                </MotionCard>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
