import { CardWidget } from "@/shared/Card/ui/CardWidget"
import MiniLineChart from './../../../shared/Charts/MiniLineChart/MiniLineChart';
import { Text } from "@/shared/Text/Text";
import { ArrowDown } from "lucide-react";

export const DealsWidget = () => {
  return(
    <CardWidget title="Active Deals" className="h-20 w-full border p-3">
      <div className="flex justify-between w-full">
        <Text variant="subheading" className="flex">-3 <ArrowDown className="w-3"/></Text>
        <MiniLineChart />
      </div>
    </CardWidget>
  )
}