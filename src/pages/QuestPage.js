import { React, useContext } from "react";
import QuestContext from "../store/quest-context";
import QuestItem from "../components/Quest/QuestItem";
import Modal from "../components/UI/Modal";
const QuestPage = (props) => {
  const ctx = useContext(QuestContext);
  const quests = ctx.quests;

  return (
    <Modal onClose={props.onClose}>
    <div>
      {quests.map((item, i) => (
        <QuestItem
          key={i}
          name={item.name}
          giver={item.giver}
          relatedNpc={item.relatedNpc}
          description={item.description}
        />
      ))}
    </div>
    </Modal>
  );
};

export default QuestPage;
