// KanbanBoard.tsx
import { DragDropProvider } from "@dnd-kit/react";
import { useEffect, useState } from "react";
import { useUsers } from "@/entities/users/api/user.queries";
import { COLUMNS } from "@/constants/kanban/constant";
import { KanbanColumn } from "./KanbanColumns/KanbanColumn";
import { UserCard } from "./UserCard/UserCard";
import type { UserWithStatus } from "./types";

export default function CustomersKanban() {
  const { data, isLoading } = useUsers();
  const [leads, setLeads] = useState<UserWithStatus[]>([]);

  useEffect(() => {
    if (!data?.users) return;

    setLeads((currentLeads) => {
      const currentStatuses = new Map(
        currentLeads.map((lead) => [lead.id, lead.status]),
      );

      return data.users.map((user) => ({
        ...user,
        status: currentStatuses.get(user.id) ?? "contacted",
      }));
    });
  }, [data?.users]);

  if (isLoading) {
    return <div className="p-8">Loading leads...</div>;
  }

  return (
    <DragDropProvider
      onDragEnd={({ operation, canceled }) => {
        if (canceled) return;

        console.log("Drag ended", {
      canceled,
      source: operation.source?.data,
      target: operation.target?.data,
    });

        const leadId = operation.source?.data.leadId;
        const nextStatus = operation.target?.data.status;

        if (typeof leadId !== "number") return;

        if (!COLUMNS.some((column) => column.id === nextStatus)) {
          return;
        }

        setLeads((currentLeads) =>
          currentLeads.map((lead) =>
            lead.id === leadId ? { ...lead, status: nextStatus } : lead,
          ),
        );
      }}
    >
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
        {COLUMNS.map((column) => {
          const columnLeads = leads.filter((lead) => lead.status === column.id);

          return (
            <KanbanColumn
              key={column.id}
              status={column.id}
              title={column.title}
              count={columnLeads.length}
            >
              {columnLeads.map((lead, index) => (
                <UserCard key={lead.id} {...lead} index={index} />
              ))}
            </KanbanColumn>
          );
        })}
      </div>
    </DragDropProvider>
  );
}
