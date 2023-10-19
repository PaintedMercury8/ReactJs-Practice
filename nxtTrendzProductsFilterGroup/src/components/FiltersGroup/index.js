import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    titleSearch,
    changeTitle,
    categoryOptions,
    ratingsList,
    stateCategory,
    stateRating,
    changeCategory,
    changeRating,
    resetFilter,
  } = props
  const changeInputSearch = event => {
    if (event.key === 'Enter') {
      changeTitle(event.target.value)
    }
  }

  const changeCategoryState = event => {
    changeCategory(event.currentTarget.value)
  }
  const changeRatingState = event => {
    changeRating(event.currentTarget.value)
  }

  const resetStateFilter = event => {
    resetFilter()
  }

  return (
    <div className="filters-group-container">
      <div className="input-container-search">
        <input
          type="search"
          placeholder="Search"
          onKeyDown={changeInputSearch}
          className="search-input"
        />
        <BsSearch className="search-icon-1" />
      </div>
      <ul className="filter-category-list">
        <li>
          <h3>Category</h3>
        </li>
        {categoryOptions.map(eachItem => (
          <li key={eachItem.categoryId}>
            <button
              className={
                stateCategory === eachItem.categoryId
                  ? 'selected-category'
                  : 'category'
              }
              type="button"
              onClick={changeCategoryState}
              value={eachItem.categoryId}
            >
              <p
                className={
                  stateCategory === eachItem.categoryId
                    ? 'selected-para'
                    : 'para'
                }
              >
                {eachItem.name}
              </p>
            </button>
          </li>
        ))}
      </ul>

      <ul className="filter-rating-list">
        <li className="rating-head">
          <h3>Rating</h3>
        </li>
        {ratingsList.map(eachItem => (
          <li className="filter-rating-item" key={eachItem.ratingId}>
            <button
              type="button"
              className="rating-button"
              value={eachItem.ratingId}
              onClick={changeRatingState}
            >
              <img
                src={eachItem.imageUrl}
                className="rating-img"
                alt={`rating ${eachItem.ratingId}`}
              />
              <p
                className={
                  stateRating === eachItem.ratingId
                    ? 'selected-category up'
                    : 'up'
                }
              >
                & up
              </p>
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-btn" type="button" onClick={resetStateFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
