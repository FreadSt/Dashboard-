import { CardWidget } from "@/shared/Card/ui/CardWidget"
import { useProducts } from "@/entities/product/api/product.queries"
import { RevenueBarChart, type ChartDataPoint } from "@/widgets/dashboard/dashboard-revenue/RevenueChartWidget"
import { Text } from "@/shared/Text/Text"
import { LeadsWidget } from './../../../widgets/dashboard/leads/LeadsWidget';
import { DealsWidget } from "@/widgets/dashboard/deals/DealsWidget"
import { UsersWidget } from "@/widgets/dashboard/users/Users";

export const Dashboard = () => {
  const { data: product, isLoading, error } = useProducts()

  const chartData: ChartDataPoint[] = (product?.products ?? [])
    .slice(0, 10)
    .map((product) => ({
      title: product.title,
      price: product.price,
    }))

  return(
    <div className="flex flex-1 min-h-0 flex-col overflow-auto">
      <Text align="left" className="mb-3" variant="subheading">Dashboard</Text>
      <div className="grid grid-span-3 gap-3">
        <LeadsWidget />
        <DealsWidget />
        <UsersWidget />

        <div className="grid col-span-3 gap-3">
          <CardWidget title="Product price" isLoading={isLoading} error={error} className="p-3 border">
            <RevenueBarChart data={chartData} />
          </CardWidget>
        </div>
      </div>
    </div>
  )
}
