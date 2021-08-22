import React, { useState } from "react";
import { Image, Layer, Line, Stage, Text } from "react-konva";
import useImage from "use-image";
import UBLogo from "../../../../images/UBLogo.png";
import InputField from "../../../../components/InputField/InputField";
import {
  HeaderBar,
  ConnectionBody,
  ConnectionWrapper,
  LeftSide,
  RightSide,
} from "./styled";

const KonvaImage = ({ url, ...props }) => {
  const [image] = useImage(url);
  return <Image {...props} width={60} height={60} image={image} />;
};

const Connection: React.FC = () => {
  const [state, setState] = useState({});
  return (
    <ConnectionWrapper>
      <HeaderBar>
        <h2>Объеденение</h2>
        <li>Объеденение</li>
      </HeaderBar>
      <ConnectionBody>
        <LeftSide>
          <Stage style={{ backgroundColor: "white" }} width={800} height={650}>
            <Layer>
              <Line x={40} y={50} points={[0, 0, 90, 180]} stroke="red" />
              <KonvaImage x={10} y={20} url={UBLogo} />
              <KonvaImage x={100} y={200} url={UBLogo} />
            </Layer>
          </Stage>
        </LeftSide>
        <RightSide>
          <InputField title="название" />
        </RightSide>
      </ConnectionBody>
    </ConnectionWrapper>
  );
};

export default Connection;
