import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { HeaderContainer, CloseMenu, LogoContainer } from "./style";

interface MainSidebarProps {
    menuCollapse: boolean;
    setMenuCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainSidebar: React.FC<MainSidebarProps> = ({ menuCollapse, setMenuCollapse }) => {
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
                    {menuCollapse ? 'Open' : 'Close'}
                </CloseMenu>
                <Menu>
                    <MenuItem>
                        <NavLink to="/home" style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? 'blue' : 'inherit',
                        })}>
                            Home
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/home/category" style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? 'blue' : 'inherit',
                        })}>
                            Category
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/home/favourite" style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? 'blue' : 'inherit',
                        })}>
                            Favourite
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/home/author" style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? 'blue' : 'inherit',
                        })}>
                            Author
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/home/settings" style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? 'blue' : 'inherit',
                        })}>
                            Settings
                        </NavLink>
                    </MenuItem>
                </Menu>
                <Menu style={{ position: "absolute", bottom: "0" }}>
                    <MenuItem>
                        <NavLink to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Logout
                        </NavLink>
                    </MenuItem>
                </Menu>
            </Sidebar>
        </HeaderContainer>
    );
};

export default MainSidebar;
