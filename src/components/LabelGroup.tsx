import React from "react";
import { Label } from "semantic-ui-react";

export interface LabelGroupProps {
  items: string[];
}

const LabelGroup: React.FC<LabelGroupProps> = (props) => {
  return (
    <>
      {props.items?.map((item: any, index: number) => (
        <>
          <Label key={index} style={{ margin: "2px" }}>
            {item}
          </Label>
        </>
      ))}
    </>
  );
};

export default LabelGroup;
