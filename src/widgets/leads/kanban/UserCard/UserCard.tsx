import type { UserWithStatus } from "../types";
import { useSortable } from "@dnd-kit/react/sortable";

type UserCardProps = UserWithStatus & {
  index: number;
};

export const UserCard = ({
  id,
  index,
  status,
  image,
  firstName,
  lastName,
  email,
  company,
  address,
}: UserCardProps) => {
  const { ref, isDragging } = useSortable({
    id: `lead-${id}`,
    index,
    group: status,
    type: "lead",
    accept: ["lead"],
    data: {
      leadId: id,
      status,
    },
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-3 cursor-pointer rounded-lg border border-stone-200 bg-white p-4 shadow-sm ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={firstName}
          className="h-10 w-10 rounded-full bg-stone-100 object-cover"
        />

        <div>
          <div className="text-sm font-medium">
            {firstName} {lastName}
          </div>
          <div className="text-xs text-stone-400">
            {company?.name || "Independent"}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 text-xs text-stone-500">
        <div className="whitespace-nowrap truncate">📧 {email}</div>
        <div>📍 {address?.city || "Not specified"}</div>
      </div>
    </div>
  );
};