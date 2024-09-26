import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { HeaderContainer, CloseMenu, LogoContainer, StyledNavLink } from "./style";
import ProfileImg from "../assets/ProfileImg.png";
import { AnalyticIcon, Box, DashboardIcon, Flex, Img, InventoryIcon, LogoutIcon, NotificationIcon, ProductIcon, StyledText } from "../utlis";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

interface MainSidebarProps {
    menuCollapse: boolean;
    setMenuCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainSidebar: React.FC<MainSidebarProps> = ({
    menuCollapse,
    setMenuCollapse,
}) => {
    const [activeItem, setActiveItem] = useState<string>("dashboard"); // Set default active item

    const menuIconClick = () => {
        setMenuCollapse((prev) => !prev);
    };

    const handleMenuItemClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <HeaderContainer>
            <Sidebar collapsed={menuCollapse}>
                <LogoContainer className="logotext">
                    <Flex alignItems="center" gap="12px">
                        <Img src={ProfileImg} alt="ProfileImg" />
                        <Box>
                            <StyledText color="#09090A" fontFamily="OpenSans-Bold" weight="700" lineHeight="22px" size="16px">
                                Mark Wood
                            </StyledText>
                            <br />
                            <StyledText color="#1F1F22" fontFamily="OpenSans-Light" weight="400" lineHeight="20px" size="14px">
                                marki@demo.com
                            </StyledText>
                        </Box>
                    </Flex>
                </LogoContainer>
                <CloseMenu onClick={menuIconClick}>
                    {menuCollapse ? (
                        <FiArrowRightCircle />
                    ) : (
                        <FiArrowLeftCircle />
                    )}
                </CloseMenu>
                <Menu>
                    <MenuItem
                        icon={<DashboardIcon active={activeItem === "dashboard" } />}
                        active={activeItem === "dashboard"}
                        onClick={() => handleMenuItemClick("dashboard")}
                    >
                        <StyledNavLink to="/dashboard" className={activeItem === "dashboard" ? 'active' : 'inactive'}>
                            Dashboard
                        </StyledNavLink>
                    </MenuItem>
                    <MenuItem
                        icon={<ProductIcon active={activeItem === "products"} />}
                        active={activeItem === "products"}
                        onClick={() => handleMenuItemClick("products")}
                    >
                        <StyledNavLink to="/dashboard/comingsoon" className={activeItem === "products" ? 'active' : 'inactive'}>
                            Products
                        </StyledNavLink>
                    </MenuItem>
                    <MenuItem
                        icon={<NotificationIcon active={activeItem === "notifications"} />}
                        active={activeItem === "notifications"}
                        onClick={() => handleMenuItemClick("notifications")}
                    >
                        <StyledNavLink to="/dashboard/comingsoon" className={activeItem === "notifications" ? 'active' : 'inactive'}>
                            Notifications
                        </StyledNavLink>
                    </MenuItem>
                    <MenuItem
                        icon={<AnalyticIcon active={activeItem === "analytics"} />}
                        active={activeItem === "analytics"}
                        onClick={() => handleMenuItemClick("analytics")}
                    >
                        <StyledNavLink to="/dashboard/comingsoon" className={activeItem === "analytics" ? 'active' : 'inactive'}>
                            Analytics
                        </StyledNavLink>
                    </MenuItem>
                    <MenuItem
                        icon={<InventoryIcon active={activeItem === "inventory"} />}
                        active={activeItem === "inventory"}
                        onClick={() => handleMenuItemClick("inventory")}
                    >
                        <StyledNavLink to="/dashboard/comingsoon" className={activeItem === "inventory" ? 'active' : 'inactive'}>
                            Inventory
                        </StyledNavLink>
                    </MenuItem>
                </Menu>
                <Menu style={{ position: "absolute", bottom: "0", left: menuCollapse ? '0' :'24px' }}>
                    <MenuItem icon={<LogoutIcon />}>
                        <StyledNavLink to="/">
                            Logout
                        </StyledNavLink>
                    </MenuItem>
                </Menu>
            </Sidebar>
        </HeaderContainer>
    );
};

export default MainSidebar;
