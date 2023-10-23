import { DonutChart } from '@tremor/react';

const cities = [
    {
        name: 'New York',
        sales: 9800,
    },
    {
        name: 'total',
        sales: 5000
    }
];

const valueFormatter = (number) => (
    `$ ${Intl.NumberFormat('us').format(number).toString()}`
);

export default () => (
        <DonutChart
            data={ cities }
            category="sales"
            dataKey="name"
            valueFormatter={ valueFormatter }
            marginTop="mt-6"
            colors={["pink", "stone", "rose", "cyan", "amber"]}
        />
);