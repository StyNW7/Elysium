import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router";

function RootLayout() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            <div className="relative flex min-h-svh flex-col bg-background">
                <Outlet />
            </div>
            <Footer/>
        </ThemeProvider>
    );
}

export default RootLayout;