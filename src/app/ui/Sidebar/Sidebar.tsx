import { useState } from "react";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { MainSection } from "./sections/MainSection";
import { Button } from "@/shared/Button/ui/Button";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleCollapse = () => {
    setIsCollapsed((prev: boolean) => !prev);
  };

  return (
    <nav
      className={`${isCollapsed ? "w-10" : "w-38"} 
				min-h-screen flex flex-col gap-3 items-center
			  border-r 
        overflow-hidden
				transition-all duration-300 ease-in-out`}
    >
      <div className="h-14.25 border-b w-[calc(100%+29.5px)] box-border flex flex-col justify-center items-center">
        <Button onClick={toggleCollapse} intent="ghost">
          {isCollapsed ? <ArrowRightToLine /> : <ArrowLeftToLine />}
        </Button>
      </div>

      <MainSection isCollapsed={isCollapsed}/>

    </nav>
  );
};

export default Sidebar;
