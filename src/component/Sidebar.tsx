import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/style.css";
import { HeaderContainer, CloseMenu, LogoContainer } from "./style"; // Import styled components

const MainSidebar: React.FC = () => {
    const [menuCollapse, setMenuCollapse] = useState<boolean>(false);

    const menuIconClick = () => {
        setMenuCollapse(prev => !prev);
    };

    return (
        <HeaderContainer>
            <Sidebar collapsed={menuCollapse}>
                <LogoContainer className="logotext">
                    <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
                </LogoContainer>
                <CloseMenu onClick={menuIconClick}>
                    {menuCollapse ? 'open' : 'close'}
                </CloseMenu>
                <Menu>
                    <MenuItem active={true}>Home</MenuItem>
                    <MenuItem>Category</MenuItem>
                    <MenuItem>Favourite</MenuItem>
                    <MenuItem>Author</MenuItem>
                    <MenuItem>Settings</MenuItem>
                </Menu>
                <Menu style={{ position:"absolute", bottom:"0"}}>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </Sidebar>
        </HeaderContainer>
    );
};

export default MainSidebar;
