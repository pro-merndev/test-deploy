'use client';

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const chartData = [
  { month: '01/01', amount: 3800 },
  { month: '02/01', amount: 900 },
  { month: '03/01', amount: 1000 },
  { month: '04/01', amount: 2000 },
  { month: '05/01', amount: 950 },
  { month: '06/01', amount: 1900 }
];

const chartConfig = {
  amount: {
    label: 'amount',
    color: '#fff'
  },
  month: {
    label: 'month',
    color: '#fff'
  }
} satisfies ChartConfig;

export function AreaGraph() {
  return (
    <ChartContainer config={chartConfig} className='aspect-square max-h-[250px] w-full'>
      {/* <ResponsiveContainer width="100%" height={300}> */}
        <LineChart
          data={chartData}
          // margin={{
          //   left: 12,
          //   right: 12
          // }}
        >
          {/* <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#008B65" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#008B65" stopOpacity={0} />
            </linearGradient>
          </defs> */}

          {/* CartesianGrid with custom line styles */}
          <CartesianGrid
            stroke="#2F2F2F"
            color="#fff"
            vertical={true}
            horizontal={true}
            strokeDasharray="3 3"
            strokeWidth={3}
          />

          {/* Y-axis for dollar amounts */}
          <YAxis
            domain={[0, 4000]}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => `$${value}`}
          />

          {/* X-axis for months */}
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />

          {/* Tooltip */}
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          {/* Line with gradient fill and shadow */}
          <Line
            dataKey="amount"
            type="linear"
            stroke="#fff"
            strokeWidth={3}
            dot={false}
            fillOpacity={1}
            fill="url(#colorGradient)" // Applying the gradient shadow
          />
        </LineChart>
      {/* </ResponsiveContainer> */}
    </ChartContainer>
  );
}
