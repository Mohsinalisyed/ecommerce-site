import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { HeaderContainer, CloseMenu, LogoContainer, StyledNavLink } from "./style";
import ProfileImg from "../assets/ProfileImg.png";
import { AnalyticIcon, Box, DashboardIcon, Flex, Img, InventoryIcon, LogoutIcon, NotificationIcon, ProductIcon, StyledText } from "../utlis";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import useWindowWidth from "../hooks/useWindowWidth";

interface MainSidebarProps {
    menuCollapse: boolean;
    setMenuCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainSidebar: React.FC<MainSidebarProps> = ({
    menuCollapse,
    setMenuCollapse,
}) => {
    const [activeItem, setActiveItem] = useState<string>("dashboard");
    const [resSideBar, setResSidebar]=useState(false)
    const width = useWindowWidth();
    useEffect(() => {
        if (width < 960) {
            setMenuCollapse(true);
            setResSidebar(true)
        }
        else {
            setMenuCollapse(false);
            setResSidebar(false)
        }
    }, [width])
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
                {!resSideBar  && <CloseMenu onClick={menuIconClick}>
                    {menuCollapse ? (
                        <FiArrowRightCircle />
                    ) : (
                        <FiArrowLeftCircle />
                    )}
                </CloseMenu>}
                <Menu>
                    <StyledNavLink to="/dashboard" className={activeItem === "dashboard" ? 'active' : 'inactive'}>
                    <MenuItem
                        icon={<DashboardIcon active={activeItem === "dashboard" } />}
                        active={activeItem === "dashboard"}
                        onClick={() => handleMenuItemClick("dashboard")}
                    >
                       
                            {!resSideBar && !menuCollapse && 'Dashboard'}
                        
                        </MenuItem>
                    </StyledNavLink>
                    <StyledNavLink to="/dashboard/comingsoon" className={activeItem === "products" ? 'active' : 'inactive'}>

                    <MenuItem
                        icon={<ProductIcon active={activeItem === "products"} />}
                        active={activeItem === "products"}
                        onClick={() => handleMenuItemClick("products")}
                    >
                            {!resSideBar && !menuCollapse  && 'Products'}
                        </MenuItem>
                    </StyledNavLink>

                    <StyledNavLink to="/dashboard/comingsoon" className={activeItem === "notifications" ? 'active' : 'inactive'}>

                    <MenuItem
                        icon={<NotificationIcon active={activeItem === "notifications"} />}
                        active={activeItem === "notifications"}
                        onClick={() => handleMenuItemClick("notifications")}
                    >
                            {!resSideBar && !menuCollapse  &&  'Notifications'}
                        
                    </MenuItem>
                </StyledNavLink>
                    <StyledNavLink to="/dashboard/comingsoon" className={activeItem === "analytics" ? 'active' : 'inactive'}>
                    <MenuItem
                        icon={<AnalyticIcon active={activeItem === "analytics"} />}
                        active={activeItem === "analytics"}
                        onClick={() => handleMenuItemClick("analytics")}
                    >
                            {!resSideBar && !menuCollapse  &&  'Analytics'}
                    </MenuItem>
                </StyledNavLink>
                    <StyledNavLink to="/dashboard/comingsoon" className={activeItem === "inventory" ? 'active' : 'inactive'}>
                    <MenuItem
                        icon={<InventoryIcon active={activeItem === "inventory"} />}
                        active={activeItem === "inventory"}
                        onClick={() => handleMenuItemClick("inventory")}
                    >
                            {!resSideBar && !menuCollapse  && 'Inventory'}
                        </MenuItem>
                    </StyledNavLink>

                </Menu>
     
                <Menu style={{ position: "absolute", bottom: "0", left: menuCollapse ? '0' :'24px' }}>
                    <StyledNavLink to="/" className={activeItem === "inventory" ? 'active' : 'inactive'}>
                    <MenuItem icon={<LogoutIcon />}>
                            {!resSideBar && !menuCollapse  && 'Logout'}
                        </MenuItem>
                </StyledNavLink>
                </Menu>
            </Sidebar>
        </HeaderContainer>
    );
};

export default MainSidebar;
