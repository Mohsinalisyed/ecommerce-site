import { Outlet } from "react-router-dom";
import MainSidebar from "../../component/Sidebar";
import { Box } from "./Box"; // Assuming Box is a styled component
import { useState } from "react";

const Layout = () => {
    const [menuCollapse, setMenuCollapse] = useState<boolean>(false);

    const contentStyle: React.CSSProperties = {
        flex: 1,
        paddingLeft: !menuCollapse ? '266px' : '100px',
        overflowY: 'auto',
    };
    const layoutContainer: React.CSSProperties = {
        display: 'flex',
        height: '100vh',
    };

    return (
        <Box style={layoutContainer}>
            <MainSidebar
                menuCollapse={menuCollapse}
                setMenuCollapse={setMenuCollapse}
            />
            <Box style={contentStyle}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
