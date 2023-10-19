import "./index.css";

const RepositoryItem = (props) => {
  const { data } = props;
  const { name, issuesCount, forksCount, starsCount, avatarUrl } = data;
  return (
    <li className="repository-item">
      <img src={avatarUrl} alt={name} className="repo-img" />
      <h2 className="repo-head">{name}</h2>
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stars"
        />
        <p className="count">{starsCount} stars</p>
      </div>
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stars"
        />
        <p className="count">{forksCount} forks</p>
      </div>
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="stars"
        />
        <p className="count">{issuesCount} open issues</p>
      </div>
    </li>
  );
};

export default RepositoryItem;
