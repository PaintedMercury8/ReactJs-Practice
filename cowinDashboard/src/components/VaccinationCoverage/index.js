// Write your code here
import {
  BarChart,
  Legend,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import './index.css'

const VaccineCoverage = props => {
  const {data} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="individual-graph-container">
      <h1 className="individual-graph-container-head">Vaccination Coverage</h1>

      <BarChart data={data} margin={{top: 5}} width={800} height={450}>
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
          }}
        />
        <YAxis tick={{stroke: 'gray'}} tickFormatter={DataFormatter} />
        <Legend wrapperStyle={{padding: 30}} />
        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#5a8dee"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          radius={[5, 5, 0, 0]}
        />
        <Tooltip />
      </BarChart>
    </div>
  )
}

export default VaccineCoverage
