import { CardWidget } from "@/shared/Card/ui/CardWidget"
import MiniLineChart from './../../../shared/Charts/MiniLineChart/MiniLineChart';
import { Text } from "@/shared/Text/Text";
import { ArrowUp } from "lucide-react";

export const UsersWidget = () => {
  return(
    <CardWidget title="Active Users" className="h-20 w-full border p-3">
      <div className="flex justify-between w-full">
        <Text variant="subheading" className="flex">+45 <ArrowUp className="w-3"/></Text>
        <MiniLineChart />
      </div>
    </CardWidget>
  )
}