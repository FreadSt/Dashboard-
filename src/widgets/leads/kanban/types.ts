import type { User } from "@/entities/users/model/user.types";

export type KanbanStatus = 'contacted' | 'negotiation' | 'offer' | 'closed';

export type UserWithStatus = User & {
  status: KanbanStatus
}