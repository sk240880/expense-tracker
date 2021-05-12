interface IChartBarPros {
  label: string;
  maxValue: number;
  value: number;
}

interface IChartProps{
    dataPoints:IDataPoints[];
}

interface IDataPoints{
    label:string;
    value:number;
}