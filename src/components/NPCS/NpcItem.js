const NpcsItem = (props) => {
  return (
    <div>
      <div>{props.giver}</div>
      <div>{props.relatedNpc}</div>
    </div>
  );
};

export default NpcsItem;
