import classes from "./QuestItem.module.css";

const QuestItem = (props) => {
  return (
    <li className={classes.item}>
      <blockquote>
        <div><strong>Name:</strong> {props.name} </div>
        <div><strong>Giver:</strong>{props.giver}</div>
        <div><strong>Related Npc:</strong> {props.relatedNpc}</div>
        <div> <strong>Description</strong> {props.description}</div>
      </blockquote>
    </li>
  );
};

export default QuestItem;
