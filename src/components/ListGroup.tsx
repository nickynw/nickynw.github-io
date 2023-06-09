import React from "react";
import { Item, Label, Statistic, Grid } from "semantic-ui-react";
import LabelGroup from "./LabelGroup";

export interface ListGroupProps {
  data: any;
}

const ListGroup: React.FC<ListGroupProps> = (props) => {
  return (
    <Item.Group>
      {props.data.map((item: any, index: number) => (
        <Grid key={index} container columns="equal">
          <Grid.Column textAlign="center">
            <Statistic>
              {item.date}

              <Statistic.Label style={{ fontSize: "0.8rem" }}>
                {item.dateLabel}
              </Statistic.Label>
            </Statistic>
          </Grid.Column>

          <Grid.Column width={13}>
            <Item>
              {item.github && (
                <a href={item.github}>
                  <Label
                    size="massive"
                    color="black"
                    basic
                    icon="github"
                    floating
                    style={{ border: "none" }}
                  ></Label>
                </a>
              )}
              <Item.Content>
                {item.url ? (
                  <Item.Header as="a">
                    <a style={{ textDecoration: "underline" }} href={item.url}>
                      {item.title}
                    </a>
                  </Item.Header>
                ) : (
                  <Item.Header>
                    {" "}
                    <b style={{ fontWeight: "900" }}> {item.title}</b>
                  </Item.Header>
                )}
                <Item.Meta>
                  <span style={{ color: "#a0a5ad" }} className="cinema">
                    {item.subtitle}
                  </span>
                </Item.Meta>
                <Item.Description
                  style={{ marginTop: "1rem", marginBottom: "0.8rem" }}
                >
                  {item.description}
                </Item.Description>
                <Item.Extra>
                  <LabelGroup items={item.tags} />
                </Item.Extra>
              </Item.Content>
            </Item>
          </Grid.Column>
        </Grid>
      ))}
    </Item.Group>
  );
};

export default ListGroup;
