import "./index.css";

const LanguageFilterItem = (props) => {
  const { data, onClickLanguageChange, isTrue } = props;
  const { id, language } = data;

  const onClickLanguage = () => {
    onClickLanguageChange(id);
  };

  return (
    <li
      className={
        isTrue ? "language-list-item btn-highlight" : "language-list-item"
      }
    >
      <button
        className={isTrue ? "btn font-style" : "btn"}
        onClick={onClickLanguage}
        type="button"
      >
        {language}
      </button>
    </li>
  );
};

export default LanguageFilterItem;
