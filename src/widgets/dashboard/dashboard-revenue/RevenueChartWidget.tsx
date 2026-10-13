import type { Product } from '@/entities/product/model/product.types';
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export type ChartDataPoint = Pick<Product, 'price' | 'title'>

interface RevenueBarChartProps {
  data: ChartDataPoint[];
}

export const RevenueBarChart: React.FC<RevenueBarChartProps> = ({ data }) => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="title" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar dataKey="price" fill="var(--text)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
