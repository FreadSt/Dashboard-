import { CardWidget } from "@/shared/Card/ui/CardWidget"
import MiniLineChart from './../../../shared/Charts/MiniLineChart/MiniLineChart';
import { Text } from "@/shared/Text/Text";
import { ArrowUp } from "lucide-react";

export const LeadsWidget = () => {
  return(
    <CardWidget title="Total Leads" className="h-20 w-full border p-3">
      <div className="flex justify-between w-full">
        <Text variant="subheading" className="flex">+193 <ArrowUp className="w-3"/></Text>
        <MiniLineChart />
      </div>
    </CardWidget>
  )
}