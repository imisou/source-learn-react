const { createElement } = React;

function IdComponent() {
  const [count, setCount] = React.useState(1);
  const vid = React.useId();

  const handleChange = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    setCount(count + 1);
  }, []);
  return (
    <div>
      <div> count = {count}</div>
      <div> vid = {vid}</div>
      <button onClick={handleChange}>修改</button>
    </div>
  );
}


export default IdComponent;
