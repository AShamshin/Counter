type ButtonPropsType = {
  name: string;
  callback: () => void;
  disabled?: boolean;
};

export const Button = (props: ButtonPropsType) => {
  const onClickHandler = () => {
    props.callback();
  };

  return (
    <>
      <button disabled={props.disabled} onClick={onClickHandler}>
        {props.name}
      </button>
    </>
  );
};
