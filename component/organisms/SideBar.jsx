import data from "@/public/db/data.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import DashboardLink from "../atom/DashboardLink";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const path = usePathname();
  const router = useRouter();
  const { navigation } = data;



  return (
    <div
      className={`fixed inset-y-0  left-0 p-9 z-30 transform bg-white shadow transition-transform duration-300 md:relative md:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 md:w-96 xl:w-80`}
    >
      <nav className="flex h-full flex-col gap-7 py-4">
        <div className="flex px-4">
          {
            <Link href="/">
              <h1 className=" font-semibold  text-4xl mb-20 text-gray-600">LOGO</h1>
              <h1 className="mt-9 mb-3 font-bold text-gray-900 text-2xl " >OVERVIEW</h1>
            </Link>
          }
        </div>

        <ul className="vertical-scrollbar flex h-full w-full flex-col gap-2 overflow-y-auto  text-2xl">
          <div className="flex w-full flex-col gap-5 text-4xl ">
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
              handleClick={() => {}}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;