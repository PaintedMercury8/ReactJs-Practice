const Button = (props) => {
  const { classId, name } = props;
  console.log(classId, name);
  //  Write your code here.
  return <button className={classId}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-container">
    <h1 className="main-head">Social Buttons</h1>
    <div className="button-container">
      <Button classId="btn-1 btn" name="Like" />
      <Button classId="btn-2 btn" name="Comment" />
      <Button classId="btn-3 btn" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
