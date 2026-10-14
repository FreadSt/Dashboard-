import { Text } from "@/shared/Text/Text"
import CustomersKanban from "@/widgets/leads/kanban/KanbanBoard"

export const Leads = () => {
  return(
    <div>
      <Text variant="subheading">Leads</Text>
      <CustomersKanban />
    </div>
  )
}