import { useContext, useState } from "react";
import QuestContext from "../../store/quest-context";
import classes from "./QuestForm.module.css";

const QuestForm = (props) => {
  const ctx = useContext(QuestContext);
  const [enteredName, setEnteredName] = useState("");
  const [enteredGiver, setEnteredGiver] = useState("");
  const [enteredRelatedNpc, setEnteredRelatedNpc] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const inputNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputGiverHandler = (event) => {
    setEnteredGiver(event.target.value);
  };

  const inputRelatedNpcHandler = (event) => {
    setEnteredRelatedNpc(event.target.value);
  };

  const inputDescriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const generatedQuest = {
      id: Math.random(),
      name: enteredName,
      giver: enteredGiver,
      relatedNpc: enteredRelatedNpc,
      description: enteredDescription,
    };

    ctx.addQuest(generatedQuest);
  };

  console.log(ctx.quests);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label>Quest Name</label>
      <input type="text" onChange={inputNameHandler} value={enteredName} />

      <label>Giver Npc Name</label>
      <input type="text" onChange={inputGiverHandler} value={enteredGiver} />
      <label>related Npc</label>
      <input
        type="text"
        onChange={inputRelatedNpcHandler}
        value={enteredRelatedNpc}
      />

      <label>Description</label>
      <input
        type="text"
        onChange={inputDescriptionHandler}
        value={enteredDescription}
      />

      <button type="submit" onClick={props.onShowCart} >click on</button>
    </form>
  );
};

export default QuestForm;
