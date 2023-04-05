function PageButtons(props: any) {
  const buttons = [];

  for (let i = 1; i <= props.NumPages; i++) {
    buttons.push(
      <button
        className={
          "btn btn-default" + (i == props.page ? "disabled btn-dark" : "active")
        }
        onClick={() => props.ChangePage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <>
      <div className="btn-group-vertical">{buttons}</div>
    </>
  );
}

export default PageButtons;
