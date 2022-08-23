import React from "react";


const QuestContext = React.createContext({
    quests: [],
    npcs: [],
   addQuest: () => {},
   addNpc: () => {},
   removeQuest:() => {},
   removeNpc: () => {},

});


export default QuestContext