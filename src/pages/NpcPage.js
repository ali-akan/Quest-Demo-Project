import { React, useContext } from "react";
import QuestContext from "../store/quest-context";
import NpcsItem from "../components/NPCS/NpcItem";

const NpcPage = () => {
  const ctx = useContext(QuestContext);
  const npcs = ctx.npcs;

  return (
    <div>
      {npcs.map((item, i) => (
        <NpcsItem key={i} giver={item.giver} relatedNpc={item.relatedNpc} />
      ))}
    </div>
  );
};

export default NpcPage;
