"use client";

import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Chip,
  Avatar,
  AvatarGroup,
  Paper,
  Select,
  LinearProgress,
  Grid,
  AccordionSummary,
  AccordionDetails,
  Stack,
  CardContent,
  Accordion,
  Card,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";
import logo from "../../public/logo.png";
import img1 from "../../public/img1.webp";
import user1 from "../../public/user1.jpg";
import user2 from "../../public/user2.jpg";
import user3 from "../../public/user3.jpg";

const pages = [
  "About",
  "Blog",
  { name: "Portfolio", isNew: true },
  "Dashboard",
  "Pricing",
  "Contact",
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const technologies = [
    { icon: "logos:react", label: "React" },
    { icon: "logos:material-ui", label: "Material-UI" },
    { icon: "logos:nextjs-icon", label: "Next.js" },
    { icon: "logos:typescript-icon", label: "TypeScript" },
    { icon: "logos:redux", label: "Redux" },
    { icon: "vscode-icons:file-type-light-js", label: "JavaScript" },
  ];

  const features = [
    {
      icon: "mdi:account-tie",
      title: "Expert Advisor",
      description: "Suspendisse vestibulum eu erat ac scelerisque.",
      iconBg: "#FFF1F0",
    },
    {
      icon: "mdi:bank",
      title: "Effective Support",
      description: "Suspendisse vestibulum eu erat ac scelerisque.",
      iconBg: "#E3F2FD",
    },
    {
      icon: "mdi:calculator",
      title: "Low Fees",
      description: "Suspendisse vestibulum eu erat ac scelerisque.",
      iconBg: "#E6F7F0",
    },
    {
      icon: "mdi:chart-line",
      title: "Loan Facility",
      description: "Suspendisse vestibulum eu erat ac scelerisque.",
      iconBg: "#FFF4E5",
    },
  ];

  const features1 = [
    {
      icon: "mdi:account-group",
      title: "Team Scheduling",
      isActive: true,
    },
    {
      icon: "mdi:bank",
      title: "Payments",
      isActive: false,
    },
    {
      icon: "mdi:code-brackets",
      title: "Embedding",
      isActive: false,
    },
    {
      icon: "mdi:workflow",
      title: "Workflows",
      isActive: false,
    },
  ];

  const accordionItems = [
    {
      title: "Factor in outside colleagues",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit inventore.",
    },
    {
      title: "Combine teammate schedules",
      content:
        "Factor in availability for required attendees, and skip checking for conflicts for optional attendees.",
      expanded: true,
    },
    {
      title: "Round robin pooling",
      content:
        "veniam facilis accusamus voluptasctus expedita, obcaecati nihil, hic debitis excepturi exercitationem!",
    },
  ];

  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const handleAccordionToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const testimonials = [
    {
      content:
        "This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!",
      author: "Jenny Wilson",
      role: "CEO & Head of Comp Inc.",
      avatar: user1,
    },
    {
      content:
        "Pellentesque varius semper odio non pretium. Nullam sagittis neque orci, eu elementum enim.",
      author: "Robert Fox",
      role: "CTO of Tech Corp",
      avatar: user2,
    },
    {
      content:
        "Suspendisse vestibulum eu erat ac scelerisque. Integer condimentum elit vel magna.",
      author: "Sarah Chen",
      role: "Product Director",
      avatar: user3,
    },
  ];

  const companies = [
    { name: "Intel" },
    { name: "Oracle" },
    { name: "Dell" },
    { name: "Samsung" },
    { name: "Infosys" },
    { name: "Capgemini" },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const sections = [
    {
      title: "Applications",
      links: ["Kanban", "Invoice List", "eCommerce", "Chat", "Tickets", "Blog"],
    },
    {
      title: "Forms",
      links: [
        "Form Layout",
        "Form Horizontal",
        "Form Wizard",
        "Form Validation",
        "Quill Editor",
      ],
    },
    {
      title: "Tables",
      links: [
        "Basic Table",
        "Fixed Header",
        "Pagination Table",
        "React Dense Table",
        "Row Selection Table",
        "Drag n Drop Table",
      ],
    },
  ];

  const socialLinks = [
    { icon: "mdi:facebook", url: "#" },
    { icon: "mdi:twitter", url: "#" },
    { icon: "mdi:instagram", url: "#" },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      {/* Navbar */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: 100,
          bgcolor: "#E5F3FB",
          position: "fixed",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <Container maxWidth="lg">
          <AppBar position="static" color="transparent" elevation={0}>
            {/* <Container maxWidth="xl"> */}
            <Toolbar disableGutters>
              {/* Logo - Desktop */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Image src={logo} alt="logo" height={30} width={30} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Probz.Ai
                </Typography>
              </Box>

              {/* Mobile menu */}
              <Box
                sx={{
                  display: { xs: "flex", md: "none", alignItems: "center" },
                }}
              >
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <Icon icon="material-symbols:menu" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={typeof page === "string" ? page : page.name}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">
                        {typeof page === "string" ? page : page.name}
                        {typeof page !== "string" && page.isNew && (
                          <Chip
                            label="New"
                            size="small"
                            sx={{
                              ml: 1,
                              bgcolor: "#e3f2fd",
                              color: "#0095ff",
                            }}
                          />
                        )}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Logo - Mobile */}
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  gap: 1,
                  flexGrow: 1,
                }}
              >
                <Image src={logo} alt="logo" height={24} width={24} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Probz.Ai
                </Typography>
              </Box>

              {/* Desktop menu */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={typeof page === "string" ? page : page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: "text.primary",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {typeof page === "string" ? page : page.name}
                    {typeof page !== "string" && page.isNew && (
                      <Chip
                        label="New"
                        size="small"
                        sx={{ bgcolor: "#CDDFF8", color: "#0A98FF" }}
                      />
                    )}
                  </Button>
                ))}
              </Box>

              {/* Login button */}
              <Box>
                <Button variant="contained" color="primary">
                  Log In
                </Button>
              </Box>
            </Toolbar>
            {/* </Container> */}
          </AppBar>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box sx={{ width: "100%", bgcolor: "#E5F3FB" }}>
        <Container maxWidth="lg" sx={{ pt: 15, bgcolor: "#E5F3FB" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                A feature-packed dashboard built for developers needs.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <AvatarGroup max={3} sx={{ mr: 2 }}>
                  <Avatar alt="User 1" src={user1.src} />
                  <Avatar alt="User 2" src={user2.src} />
                  <Avatar alt="User 3" src={user3.src} />
                </AvatarGroup>
                <Typography variant="body1" color="text.secondary">
                  52,589+ developers & agencies using our templates
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
                {technologies.map((tech) => (
                  <Box
                    key={tech.label}
                    sx={{
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "background.paper",
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  >
                    <Icon icon={tech.icon} width="24" height="24" />
                  </Box>
                ))}
              </Box>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  mb: {
                    md: 10,
                    sm: 10,
                    xs: 10,
                  },
                }}
              >
                Log In
              </Button>
            </Box>

            {/* Dashboard Preview */}
            <Box sx={{ flex: 1, display: { xs: "none", lg: "block" } }}>
              <Paper
                elevation={3}
                sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper" }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Congratulations Jonathan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    You have done 38% more sales
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      sx={{ mr: 2, p: 1, bgcolor: "#E7F7F0", borderRadius: 1 }}
                    >
                      <Icon
                        icon="mdi:basket"
                        color="#4CAF50"
                        width="24"
                        height="24"
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6">64 new orders</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Processing
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      sx={{ mr: 2, p: 1, bgcolor: "#FFF8E1", borderRadius: 1 }}
                    >
                      <Icon
                        icon="mdi:clock-outline"
                        color="#FFC107"
                        width="24"
                        height="24"
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6">4 orders</Typography>
                      <Typography variant="body2" color="text.secondary">
                        On hold
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{ mr: 2, p: 1, bgcolor: "#E8EAF6", borderRadius: 1 }}
                    >
                      <Icon
                        icon="mdi:truck-delivery"
                        color="#3F51B5"
                        width="24"
                        height="24"
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6">12 orders</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Delivered
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6">Total Orders</Typography>
                    <Select
                      value="This Week"
                      size="small"
                      sx={{ minWidth: 120 }}
                    >
                      <MenuItem value="This Week">This Week</MenuItem>
                      <MenuItem value="Last Week">Last Week</MenuItem>
                      <MenuItem value="Last Month">Last Month</MenuItem>
                    </Select>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Weekly order updates
                  </Typography>
                  <Box
                    sx={{
                      height: 100,
                      bgcolor: "#F5F5F5",
                      borderRadius: 1,
                      p: 2,
                    }}
                  >
                    {/* Placeholder for chart */}
                    <Typography variant="body2" color="text.secondary">
                      Chart placeholder
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Latest Deal
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Last 7 days
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    $98,500
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Coupons used: 18/40
                    </Typography>
                    <Typography variant="body2" color="primary">
                      45%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={45}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ width: "100%", bgcolor: "white" }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ maxWidth: 600, mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Over 45,000 clients and counting.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Pellentesque varius semper odio non pretium. Nullam sagittis neque
              orci, eu elementum enim.
            </Typography>
            <Button
              variant="text"
              color="primary"
              sx={{
                p: 0,
                "&:hover": {
                  background: "none",
                  textDecoration: "underline",
                },
              }}
            >
              Request a Callback
            </Button>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} sm={6} md={3} key={feature.title}>
                <Box>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: feature.iconBg,
                      mb: 2,
                    }}
                  >
                    <Icon icon={feature.icon} width={24} height={24} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ width: "100%", bgcolor: "white" }}>
        <Box sx={{ py: 8, bgcolor: "#f8fafc" }}>
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 6 }}
            >
              {features1.map((feature) => (
                <Card
                  key={feature.title}
                  sx={{
                    flex: 1,
                    cursor: "pointer",
                    bgcolor: feature.isActive
                      ? "primary.main"
                      : "background.paper",
                    color: feature.isActive
                      ? "primary.contrastText"
                      : "text.primary",
                    "&:hover": {
                      bgcolor: feature.isActive ? "primary.dark" : "grey.100",
                    },
                    transition: "background-color 0.3s",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 2,
                      "&:last-child": { pb: 2 },
                    }}
                  >
                    <Icon
                      icon={feature.icon}
                      width={24}
                      height={24}
                      color={feature.isActive ? "white" : "currentColor"}
                    />
                    <Typography variant="subtitle1">{feature.title}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
            {/* Main Content */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              {/* Dashboard Preview */}
              <Box
                sx={{
                  flex: "1.5",
                  width: "100%",
                }}
              >
                <Image src={img1} alt="img1"></Image>
              </Box>

              {/* Feature Description */}
              <Box sx={{ flex: 1, width: "100%" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    fontWeight: 700,
                    mb: 4,
                  }}
                >
                  Protect your focus.
                </Typography>

                {/* Accordion Items */}
                <Stack spacing={2} sx={{ mb: 4 }}>
                  {accordionItems.map((item, index) => (
                    <Accordion
                      key={index}
                      expanded={expandedIndex === index}
                      onChange={() => handleAccordionToggle(index)}
                      sx={{
                        boxShadow: "none",
                        "&:before": { display: "none" },
                        bgcolor: "transparent",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <Icon
                            icon={`mdi:${
                              expandedIndex === index ? "minus" : "plus"
                            }`}
                          />
                        }
                        sx={{
                          px: 0,
                          "& .MuiAccordionSummary-content": {
                            my: 0,
                          },
                        }}
                      >
                        <Typography variant="h6">{item.title}</Typography>
                      </AccordionSummary>
                      {item.content && (
                        <AccordionDetails sx={{ px: 0 }}>
                          <Typography color="text.secondary">
                            {item.content}
                          </Typography>
                        </AccordionDetails>
                      )}
                    </Accordion>
                  ))}
                </Stack>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          {/* Testimonials Section */}
          <Grid
            container
            spacing={4}
            sx={{
              flexDirection: { xs: "column", md: "row" }, // Stack on small screens, side-by-side on larger screens
              alignItems: "flex-start",
            }}
          >
            {/* Left Content */}
            <Grid
              item
              xs={12}
              md={6} // Take half-width on medium and larger screens
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                  mb: 2,
                  color: "text.primary",
                }}
              >
                Words from customers
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Pellentesque varius semper odio non pretium.
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <IconButton
                  onClick={handlePrevSlide}
                  sx={{ color: "text.primary" }}
                >
                  <Icon icon="mdi:chevron-left" width={24} />
                </IconButton>
                <IconButton
                  onClick={handleNextSlide}
                  sx={{ color: "text.primary" }}
                >
                  <Icon icon="mdi:chevron-right" width={24} />
                </IconButton>
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ ml: 2, color: "text.secondary" }}
                >
                  {currentSlide + 1}/{testimonials.length}
                </Typography>
              </Box>
            </Grid>

            {/* Right Content - Testimonial Card */}
            <Grid
              item
              xs={12}
              md={6} // Take half-width on medium and larger screens
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                position: "relative",
                minHeight: "200px",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    mb: 4,
                    color: "text.primary",
                  }}
                >
                  {testimonials[currentSlide].content}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src={testimonials[currentSlide].avatar.src}
                    alt={testimonials[currentSlide].author}
                    sx={{ width: 64, height: 64 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {testimonials[currentSlide].author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonials[currentSlide].role}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ display: { sm: "block", md: "none" } }}>
                <IconButton
                  onClick={handlePrevSlide}
                  sx={{ color: "text.primary" }}
                >
                  <Icon icon="mdi:chevron-left" width={24} />
                </IconButton>
                <IconButton
                  onClick={handleNextSlide}
                  sx={{ color: "text.primary" }}
                >
                  <Icon icon="mdi:chevron-right" width={24} />
                </IconButton>
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ ml: 2, color: "text.secondary" }}
                >
                  {currentSlide + 1}/{testimonials.length}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Company Logos */}
          <Stack
            direction="row"
            spacing={isMobile ? 2 : 4}
            alignItems="center"
            justifyContent="space-between"
            sx={{
              mt: 8,
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            {companies.map((company) => (
              <Typography
                key={company.name}
                sx={{
                  height: "40px",
                  filter: "grayscale(100%)",
                  opacity: 0.7,
                  transition: "opacity 0.3s",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                {company.name}
              </Typography>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#0A1929", color: "white", pt: 8, pb: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {sections.map((section) => (
              <Grid item xs={12} sm={6} md={3} key={section.title}>
                <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
                  {section.title}
                </Typography>
                {section.links.map((link) => (
                  <Typography
                    key={link}
                    component={Link}
                    href="#"
                    sx={{
                      display: "block",
                      mb: 1,
                      color: "grey.500",
                      textDecoration: "none",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Grid>
            ))}

            {/* Social Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
                Follow us
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.icon}
                    href={social.url}
                    sx={{
                      color: "grey.500",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    <Icon icon={social.icon} width={24} height={24} />
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Bar */}
          <Box
            sx={{
              mt: 8,
              pt: 4,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Icon icon="fa6-solid:bird" color="#0095ff" width="20" />
              <Typography variant="body2" color="grey.500">
                All rights reserved by Probz.Ai.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" color="grey.500">
                Produced by
              </Typography>
              <Link
                href="#"
                sx={{
                  color: "#0095ff",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Probz.Ai
              </Link>
            </Box>

            {/* Scroll to top button */}
            <IconButton
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{
                position: "fixed",
                bottom: 24,
                right: 24,
                bgcolor: "#0095ff",
                color: "white",
                "&:hover": {
                  bgcolor: "#0076cc",
                },
              }}
            >
              <Icon icon="mdi:arrow-up" width={24} />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
