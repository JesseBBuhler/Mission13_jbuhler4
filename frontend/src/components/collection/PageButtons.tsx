function PageButtons(props: any) {
  const buttons = [];

  for (let i = 1; i <= props.NumPages; i++) {
    buttons.push(<button onClick={() => props.ChangePage(i)}>{i}</button>);
  }

  return <>{buttons}</>;
}

export default PageButtons;
