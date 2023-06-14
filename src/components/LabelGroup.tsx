import React from "react";
import { Label } from "semantic-ui-react";

export interface LabelGroupProps {
  items: string[];
  theme: string;
}

const LabelGroup: React.FC<LabelGroupProps> = (props) => {
  return (
    <>
      {props.items?.map((item: any, index: number) => (
        <>
          <Label
            key={index}
            style={{
              margin: "2px",
              backgroundColor: props.theme === "dark" ? "#5d5f69" : "#ededed",
              color: props.theme === "dark" ? "#cbcdd1" : "black",
            }}
          >
            {item}
          </Label>
        </>
      ))}
    </>
  );
};

export default LabelGroup;
