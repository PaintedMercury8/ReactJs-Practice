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

const VaccinationByGender = props => {
  const {data} = props
  return (
    <div className="individual-graph-container">
      <h1 className="individual-graph-container-head">Vaccination by gender</h1>

      <PieChart width={800} height={350}>
        <Pie
          cy="60%"
          data={data}
          dataKey="count"
          innerRadius="25%"
          outerRadius="50%"
          startAngle={0}
          endAngle={180}
        >
          <Cell name="Male" fill=" #f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill=" #2cc6c6" />
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

export default VaccinationByGender
