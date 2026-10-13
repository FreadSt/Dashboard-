import React from "react";
import { type CardWidgetProps } from "../model/types";
import { Text } from "@/shared/Text/Text";
import { SekeletonCard } from "./SkeletonCardView";

export const CardWidget: React.FC<CardWidgetProps> = ({
  ...props
}) => {
  if (props.isLoading) return <SekeletonCard withTitle/>
  return (
    <div className={`flex flex-col overflow-hidden`} {...props}>
      <div className="flex justify-between items-center mb-4">
        <Text variant="label">
          {props.title}
        </Text>
      </div>
      <div className="flex-1 min-h-75 flex items-center justify-center">
        {props.isLoading && <span className="text-sm text-zinc-400">Loading data...</span>}
        {props.error && <span className="text-sm text-red-500">{props.error.toString()}</span>}
        {!props.isLoading && !props.error && props.children}
      </div>
    </div>
  );
};
