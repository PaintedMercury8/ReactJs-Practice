// Write your code here
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {data} = props
  return (
    <div className="individual-graph-container">
      <h1 className="individual-graph-container-head">Vaccination by Age</h1>

      <PieChart width={800} height={350}>
        <Pie
          cx="50%"
          cy="40%"
          data={data}
          dataKey="count"
          startAngle={0}
          endAngle={360}
          outerRadius="60%"
        >
          <Cell name="18-44" fill=" #2d87bb" />
          <Cell name="45-60" fill=" #a3df9f" />
          <Cell name="Above 60" fill="  #64c2a6" />
        </Pie>
        <Tooltip />
        <Legend
          iconType="circle"
          layout="horizontal"
          horizontalAlign="middle"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
