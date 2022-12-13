import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TopicIcon from "@mui/icons-material/Topic";
import PhoneIcon from "@mui/icons-material/Phone";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,

  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

type PersistentDrawerProps = {
  children: React.ReactNode;
  onClickMenu: (id: number) => void;
};

const PersistentDrawer = ({ children, onClickMenu }: PersistentDrawerProps) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
      }}
    >
      <Box
        component={"div"}
        sx={{
          width: "64px",
          height: "64px",
          position: "fixed",
          background: "transparent",
        }}
      >
        <IconButton
          color="primary"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            display: "block",
            margin: "auto",
            ...(open && { display: "none" }),
            top: "32px",
            position: "relative",
            transform: "translate3d(0,-50%,0)",
          }}
          disableRipple
        >
          <MenuIcon sx={{ color: "#1c1c1c" }} />
        </IconButton>
      </Box>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Home", "About", "Projects", "Contact"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => onClickMenu(index)}>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <AccountCircleIcon />}
                  {index === 2 && <TopicIcon />}
                  {index === 3 && <PhoneIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>{children}</Main>
    </Box>
  );
};

export default PersistentDrawer;
