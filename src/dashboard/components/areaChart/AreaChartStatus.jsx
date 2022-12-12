import { Grid } from "@mui/material";
import { Title, AreaChart } from "@tremor/react";

const chartdata = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
      "The Pragmatic Engineer": 2194,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
      "The Pragmatic Engineer": 2108,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475,
      "The Pragmatic Engineer": 1812,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129,
      "The Pragmatic Engineer": 1726,
    },
  ];
  
  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

export const AreaChartStatus = () => {
  return (
    <Grid
      container
      sx={{
        borderTop: "3px solid #998693",
        borderLeft: "solid 1px white",
        boxShadow: "5px 2px 10px 1px #000000",
      }}
    >
        <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        data={chartdata}
        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
        dataKey="date"
        height="h-36"
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
        marginTop="mt-4"
      />
    </Grid>
  );
};
