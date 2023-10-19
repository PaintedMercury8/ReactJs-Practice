import './index.css'

const FilterComponent = props => {
  const {
    employmentTypesList,
    salaryRangesList,
    changeParamsState,
    changeSalaryRange,
  } = props

  const changeCheckbox = event => {
    changeParamsState(event.target.value, event.target.checked)
  }

  const changeRadioRange = event => {
    changeSalaryRange(event.target.value)
  }

  return (
    <>
      <ul className="filter-employment-container">
        <li>
          <h2>Type of Employment</h2>
        </li>
        {employmentTypesList.map(eachItem => (
          <li className="employment-type-item" key={eachItem.employmentTypeId}>
            <input
              type="checkbox"
              value={eachItem.employmentTypeId}
              id={eachItem.employmentTypeId}
              className="input-checkbox"
              onChange={changeCheckbox}
            />
            <label
              htmlFor={eachItem.employmentTypeId}
              className="employment-type-label"
            >
              {eachItem.label}
            </label>
          </li>
        ))}
      </ul>
      <hr />
      <ul className="filter-employment-container">
        <li>
          <h2>Salary Range</h2>
        </li>
        {salaryRangesList.map(eachItem => (
          <li className="employment-type-item" key={eachItem.salaryRangeId}>
            <input
              type="radio"
              value={eachItem.salaryRangeId}
              name="salary"
              className="salary-radio"
              id={eachItem.salaryRangeId}
              onChange={changeRadioRange}
            />
            <label
              htmlFor={eachItem.salaryRangeId}
              className="employment-type-label"
            >
              {eachItem.label}
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FilterComponent
