import { useEffect, useReducer } from "react";
import QuestContext from "./quest-context";

const savedDataJson = localStorage.getItem("quests");
const savedData = savedDataJson ? JSON.parse(savedDataJson) : [];

const defaultQuestAndNpcState = {
  quests: savedData,
  npcs: savedData,
};

const questAndNpcReducer = (state, action) => {
  if (action.type === "ADD_QUEST") {
    const newQuests = state.quests;
    newQuests.push(action.quest);

    return {
      ...state,
      quests: newQuests,
    };
  }

  if (action.type === "REMOVE_QUEST") {
    const updatedQuests = state.quests.filter(
      (quest) => quest.id !== action.id
    );
    console.log(updatedQuests);

    return {
      ...state,
      quests: updatedQuests,
    };
  }

  if (action.tpye === "ADD_NPC") {
    const newNpc = state.npcs;
    newNpc.push(action.npc);

    return {
      ...state,
      npcs: newNpc,
    };
  }

  if (action.type === "REMOVE_NPC") {
    const updatedNpc = state.npcs.filter((npc) => npc.id !== action.npc.id);
    console.log(updatedNpc);
    return {
      ...state,
      npcs: updatedNpc,
    };
  }
  return defaultQuestAndNpcState;
};

const QuestProvider = (props) => {
  const [questNpcState, dispatchQuestNpcAction] = useReducer(
    questAndNpcReducer,
    defaultQuestAndNpcState
  );

  useEffect(() => {
    localStorage.setItem("quests", JSON.stringify(questNpcState.quests));
  }, [questNpcState] );

  const addQuestHandler = (quest) => {
    dispatchQuestNpcAction({ type: "ADD_QUEST", quest });
  };

  const RemoveQuestHandler = (id) => {
    dispatchQuestNpcAction({ type: "REMOVE_QUEST", id });
  };

  const addNpcHandler = (npc) => {
    dispatchQuestNpcAction({ type: "ADD_NPC", npc });
  };

  const removeNpcHandler = (id) => {
    dispatchQuestNpcAction({ type: "REMOVE_NPC", id });
  };

  const questContext = {
    quests: questNpcState.quests,
    npcs: questNpcState.npcs,
    addQuest: addQuestHandler,
    removeQuest: RemoveQuestHandler,
    addNpc: addNpcHandler,
    removeNpc: removeNpcHandler,
  };
  return (
    <QuestContext.Provider value={questContext}>
      {props.children}
    </QuestContext.Provider>
  );
};

export default QuestProvider;
