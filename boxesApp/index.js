const Box = (props) => {
  //  Write your code here.
  const { classValue, text } = props;
  return (
    <div className={classValue}>
      <h1>{text}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="boxes-container">
    <h1 className="main-head">Boxes</h1>
    <div className="main-boxes">
      <Box classValue="box1" text="Small" />
      <Box classValue="box2" text="Medium" />
      <Box classValue="box3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
