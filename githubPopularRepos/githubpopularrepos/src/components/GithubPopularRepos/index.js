import { Component } from "react";
import Loader from "react-loader-spinner";
import LanguageFilterItem from "../LanguageFilterItem";
import RepositoryItem from "../RepositoryItem";
import "./index.css";

const languageFiltersData = [
  { id: "ALL", language: "All" },
  { id: "JAVASCRIPT", language: "Javascript" },
  { id: "RUBY", language: "Ruby" },
  { id: "JAVA", language: "Java" },
  { id: "CSS", language: "CSS" },
];

const views = {
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
};

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    filterClick: languageFiltersData[0].id,
    view: views.success,
    calledData: [],
  };

  componentDidMount() {
    this.getData();
  }

  onClickLanguageChange = (id) => {
    this.setState({ filterClick: id }, this.getData);
  };

  getData = async () => {
    this.setState({ view: views.loading });
    const { filterClick } = this.state;
    const url = `https://apis.ccbp.in/popular-repos?language=${filterClick}`;
    const response = await fetch(url);
    const data = await response.json();

    const isSuccessful = response.ok;
    if (isSuccessful === true) {
      const filteredArray = data.popular_repos.map((eachItem) => ({
        name: eachItem.name,
        id: eachItem.id,
        issuesCount: eachItem.issues_count,
        forksCount: eachItem.forks_count,
        starsCount: eachItem.stars_count,
        avatarUrl: eachItem.avatar_url,
      }));
      this.setState({ calledData: filteredArray, view: views.success });
    } else {
      this.setState({ view: views.failure });
    }
  };

  getFunction = () => {
    const { view, calledData } = this.state;
    console.log(view, views.success);
    switch (view) {
      case views.success:
        return (
          <>
            <ul className="repository-list">
              {calledData.map((eachItem) => (
                <RepositoryItem data={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        );
      case views.loading:
        return this.renderLoader();
      case views.failure:
        return this.renderFailure();
      default:
        return null;
    }
  };

  renderMainContent = () => {
    const { filterClick } = this.state;
    return (
      <>
        {" "}
        <h1 className="main-head">Popular</h1>
        <ul className="language-options-list">
          {languageFiltersData.map((eachItem) => (
            <LanguageFilterItem
              key={eachItem.id}
              data={eachItem}
              onClickLanguageChange={this.onClickLanguageChange}
              isTrue={eachItem.id === filterClick}
            />
          ))}
        </ul>
        {this.getFunction()}
      </>
    );
  };

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  );

  renderFailure = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view"
      />
      <h1 className="went-wrong">Something Went Wrong</h1>
    </>
  );

  render() {
    return <div className="main-container">{this.renderMainContent()}</div>;
  }
}

export default GithubPopularRepos;
