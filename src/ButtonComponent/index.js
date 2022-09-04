const ButtonComponent = (props) => {
  const { className, content } = props;
  return (
    <div>
      <button className={className}>{content}</button>
    </div>
  );
};

export default ButtonComponent;
