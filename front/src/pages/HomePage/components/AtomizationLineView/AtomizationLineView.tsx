import React from "react";
import { observer } from "mobx-react-lite";
import { ReactComponent as Add } from "../../../../images/icons/add.svg";
import IconButton from "../../../../components/IconButton/IconButton";
import AutoFlow from "../AutoFlow/AutoFlow";
import Event from "../../../../components/Events/Event";
import Fork from "../../../../components/Events/Fork";
import AtomatizationStore from "../../../../stores/AtomatizationStore";

import {
  HeaderBar,
  OrderBody,
  AtomizationLineWrapper,
  RightSide,
  LeftSide,
} from "./styled";

const AtomizationLineView = observer(() => {
  return (
    <AtomizationLineWrapper>
      <HeaderBar>
        <h2>Редактировать цепочки автоматизации</h2>
        <IconButton>
          <Add />
        </IconButton>
      </HeaderBar>
      <OrderBody>
        <LeftSide>
          <AutoFlow />
        </LeftSide>
        <RightSide>
          {AtomatizationStore.nodes.map(node => {
            switch (node.type) {
              case "event":
                return (
                  <Event
                    key={node.title}
                    onClick={() => {
                      AtomatizationStore.addEvent({
                        type: node.type,
                        title: node.title,
                      });
                    }}
                    {...node}
                  >
                    {node.title}
                  </Event>
                );
              case "fork":
                return (
                  <Fork
                    key={node.title}
                    onClick={() => {
                      AtomatizationStore.addEvent({
                        type: node.type,
                        title: node.title,
                      });
                    }}
                    {...node}
                  >
                    {node.title}
                  </Fork>
                );
            }
          })}
        </RightSide>
      </OrderBody>
    </AtomizationLineWrapper>
  );
});

export default AtomizationLineView;
