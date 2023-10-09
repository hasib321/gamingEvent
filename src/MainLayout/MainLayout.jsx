import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default MainLayout;
