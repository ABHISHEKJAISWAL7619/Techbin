import data from "@/public/db/data.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import DashboardLink from "../atom/DashboardLink";
import { logout } from "@/redux/slice/auth-slice";
import toast from "react-hot-toast";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const path = usePathname();
  const router = useRouter();
  const { navigation } = data;

  return (
    <div
      className={`fixed  inset-y-0 left-0 pl-9 pt-3 z-30 transform bg-[#F9FAFB] shadow transition-transform duration-300 md:relative md:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 md:w-68 xl:w-80`}
    >
      <nav className="flex  h-full flex-col gap-7 py-4 w-64">
        <div className="flex px-2 ">
          {
            <Link href="/">
              <h1 className="font-bold text-[40px] leading-[100%] tracking-[0%] text-[#252121] mb-20 pt-3.5 ">
                LOGO
              </h1>
              <h1 className="mt-9 mb-11 font-bold h-[30px] text-gray-900 text-2xl ">
                OVERVIEW
              </h1>
            </Link>
          }
        </div>

        <ul className="vertical-scrollbar flex h-full w-full flex-col gap-2 overflow-y-auto  text-2xl">
          <div className="flex w-56 flex-col gap-5 ">
            {navigation.map((item, index) => {
              const { route, label, icon, subMenu } = item;
              return (
                <DashboardLink
                  key={index}
                  active={path === route}
                  route={route}
                  label={label}
                  heroIcon={icon}
                  handleClick={() => setIsSidebarOpen(false)}
                  subMenu={subMenu}
                />
              );
            })}

            <DashboardLink
              route="#"
              label="Log out"
              heroIcon="ri-logout-circle-fill"
              handleClick={() => {
                logout();

                router.push("/login-page");
                toast.success("Logged out successfully");
                setIsSidebarOpen(false);
              }}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
