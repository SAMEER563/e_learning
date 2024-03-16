import NavbarRoutes from "@/components/ui/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";

const Navbar = () => {
    return (  
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
    <MobileSidebar />
    <NavbarRoutes />
        </div>
    );
}
 
export default Navbar;