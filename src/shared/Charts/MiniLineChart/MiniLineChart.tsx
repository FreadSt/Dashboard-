import { useProducts } from '@/entities/product/api/product.queries';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
import { toMiniLineChartData } from '../model/mapper';

export default function MiniLineChart() {
  const {data} = useProducts()
  
  const chartData = toMiniLineChartData(data?.products ?? [])
  
  return (
    <div className='w-15 h-8'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line 
            type="monotone" 
            dataKey="v" 
            stroke="var(--accent)" 
            strokeWidth={2} 
            dot={false} 
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}