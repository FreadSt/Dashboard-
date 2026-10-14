// KanbanColumn.tsx
import { useDroppable } from "@dnd-kit/react";
import type { ReactNode } from "react";
import type { KanbanStatus } from "../types";
import { Text } from "@/shared/Text/Text";

type KanbanColumnProps = {
  status: KanbanStatus;
  title: string;
  count: number;
  children: ReactNode;
};

export function KanbanColumn({
  status,
  title,
  count,
  children,
}: KanbanColumnProps) {
  const { ref, isDropTarget } = useDroppable({
    id: `column-${status}`,
    type: "column",
    accept: ["lead"],
    data: {
      status,
    },
  });

  return (
    <section
      ref={ref}
      className={`min-h-48 rounded-xl p-4 transition-colors ${
        isDropTarget ? "bg-blue-100" : "bg-stone-200/50"
      }`}
    >
      <header className="mb-4 flex items-center justify-between">
        <Text className="font-medium text-stone-700">{title}</Text>
        <Text className="rounded-full bg-stone-300 px-2 py-0.5 text-xs font-semibold">
          {count}
        </Text>
      </header>

      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}