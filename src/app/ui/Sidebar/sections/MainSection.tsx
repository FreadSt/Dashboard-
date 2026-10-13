import { Text } from "@/shared/Text/Text";
import { NAV_LINKS } from "../links/Links"
import { NavLink } from "react-router-dom";

type MainSection = {
  isCollapsed: boolean
}

export const MainSection = ({isCollapsed}: MainSection) => {
  return(
    <section className="py-3 flex flex-col items-center gap-3">
        <h5 className={`${isCollapsed&& "w-0 opacity-0"} font-bold text-sm py-3 whitespace-nowrap transition-opacity`}>Section for links</h5>

        {NAV_LINKS.map(({label, to, icon: Icon}) => (
          <NavLink 
            key={to} 
            end={to === "/"}
            className={`
              ${!isCollapsed && "border"}
              px-2 py-1.5 group
              flex w-full justify-start items-center 
              gap-2 cursor-pointer font-bold
              hover:scale-105 transition-all duration-100 ease-in-out hover:bg-black hover:text-white
              `}
            to={to}
            >
            <Icon />
            <Text
              variant="label"
              className={`${
                isCollapsed ? "opacity-0 w-0" : "opacity-100 group-hover:text-white"
              }`}
            >
              {label}
            </Text>
          </NavLink>
        ))}
      </section>
  )
}