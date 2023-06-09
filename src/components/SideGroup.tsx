import React from "react";
import { Icon, Grid, Segment } from "semantic-ui-react";
import LabelGroup from "./LabelGroup";

export interface SideGroupProps {
  items: string[];
  title: string;
}

const SideGroup: React.FC<SideGroupProps> = (props) => {
  return (
    <Segment style={{ marginBottom: "0px", marginTop: "0px" }}>
      <Grid columns="2">
        <Grid.Column
          textAlign="center"
          width={3}
          verticalAlign="middle"
          style={{
            fontSize: "0.8rem",
          }}
        >
          {props.title === "Python Packages/Tools" && (
            <Icon name="python"></Icon>
          )}
          {props.title}
        </Grid.Column>
        <Grid.Column width={12}>
          <LabelGroup items={props.items} />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default SideGroup;
