import ListGroup from "./components/ListGroup";
import {
  Grid,
  Segment,
  Divider,
  Container,
  Header,
  Icon,
  Image,
  Message,
  Label,
  Button,
  Menu,
  Card,
} from "semantic-ui-react";

import SideGroup from "./components/SideGroup";
import { personal_data, work_data, education_data } from "./data";
import { useLayoutEffect, useState } from "react";

const languages = [
  "Python",
  "Javascript",
  "HTML/CSS",
  "SQL",
  "Cypher",
  "Java",
  "C",
  "C#",
  "YML",
  "Matlab",
  "Typescript",
];

const frameworks = [
  "Flask",
  "Django",
  "FastAPI",
  "React",
  "React Native",
  "Express JS",
];

const cloud = [
  "Docker",
  "Git/Github",
  "AWS Services",
  "Google Cloud Platform",
  "Microsoft Azure",
  "Heroku",
  "Dataiku",
  "Jira",
];

const python = [
  "Re(gex)",
  "Pyspark",
  "Matplotlib",
  "Pandas",
  "Numpy",
  "NLTK",
  "SQLAlchemy",
  "BeautifulSoup",
  "Jupyter Notebook",
];

const db = ["Snowflake", "SQLite", "Postgres", "Neo4J", "MongoDB", "Firebase"];

function App() {
  const [theme, setTheme] = useState("light");

  const setDark = () => {
    setTheme("dark");
  };

  const setLight = () => {
    setTheme("light");
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "dark" ? "#494b54" : "#f5f5f5" }}
    >
      <Container
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          color: theme === "dark" ? "#dcdfe6" : "black",
        }}
      >
        <Grid columns="equal" stackable container relaxed="very">
          <Grid.Column width={9} style={{ margin: "0px", padding: "2rem" }}>
            <Card
              centered
              style={{
                width: "100%",
                height: "100%",
                boxShadow:
                  theme === "dark"
                    ? "none"
                    : "0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5",
                backgroundColor: theme === "dark" ? "#40424a" : "white",
              }}
            >
              <Header textAlign="center" as="h1" style={{ margin: "5px" }}>
                <Image
                  circular
                  centered
                  src="/linkedin.jpg"
                  alt="image"
                  style={{ width: "6rem" }}
                ></Image>
                <Segment
                  textAlign="center"
                  style={{
                    paddingLeft: "0.2rem",
                    paddingRight: "0.2rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.2rem",
                    border: "none",
                    boxShadow: "none",
                    margin: "0px",
                    backgroundColor: "transparent",
                  }}
                >
                  <Button.Group>
                    <Button
                      onClick={setDark}
                      style={{
                        color: theme === "dark" ? "#dcdfe6" : "black",
                        backgroundColor:
                          theme === "dark" ? "#85868f" : "#ededed",
                      }}
                    >
                      Dark Mode
                    </Button>
                    <Button.Or />
                    <Button
                      active
                      onClick={setLight}
                      style={{
                        color: theme === "dark" ? "#dcdfe6" : "black",
                        backgroundColor:
                          theme === "dark" ? "#85868f" : "#ededed",
                      }}
                    >
                      Light Mode
                    </Button>
                  </Button.Group>
                </Segment>{" "}
              </Header>
              <Card.Content>
                <Card.Header
                  style={{ color: theme === "dark" ? "#dcdfe6" : "black" }}
                >
                  Nicholas N. Wilson Software Portfolio
                </Card.Header>
                <Card.Meta>
                  <span style={{ color: "#a0a5ad" }}>
                    Last updated 08/06/2023
                  </span>
                </Card.Meta>{" "}
              </Card.Content>{" "}
              <Card.Content extra>
                <Card.Description>
                  <b style={{ color: theme === "dark" ? "#dcdfe6" : "black" }}>
                    Actively Seeking Employment In The Following Roles:
                  </b>
                </Card.Description>
                <div style={{ margin: "5px" }}></div>

                <Label
                  as="a"
                  basic
                  style={{
                    color: theme === "dark" ? "#dcdfe6" : "black",
                    backgroundColor: theme === "dark" ? "black" : "white",
                  }}
                >
                  Data Engineer
                </Label>
                <Label
                  as="a"
                  basic
                  style={{
                    color: theme === "dark" ? "#dcdfe6" : "black",
                    backgroundColor: theme === "dark" ? "black" : "white",
                  }}
                >
                  Python Engineer
                </Label>
                <Label
                  as="a"
                  basic
                  style={{
                    color: theme === "dark" ? "#dcdfe6" : "black",
                    backgroundColor: theme === "dark" ? "black" : "white",
                  }}
                >
                  Software Engineer
                </Label>

                <Message
                  style={{
                    color: theme === "dark" ? "#dcdfe6" : "black",
                    backgroundColor: theme === "dark" ? "#5d5f69" : "#f5f5f5",
                  }}
                >
                  <p>
                    After leaving my previous role at the end of 2022 I have
                    been self-employed for six months. I am now seeking a new
                    role as a python engineer in data/software. I am a
                    neuroscience and computer science graduate with more than 2
                    years combined data engineering and software engineering
                    experience.
                  </p>
                </Message>
              </Card.Content>{" "}
              <Card.Content>
                <Segment
                  style={{
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <Grid width="equal" alignItems="right" verticalAlign="middle">
                    <Grid.Row>
                      <Grid.Column width={7}>
                        <a href="https://www.linkedin.com/in/nicknwilson/">
                          <Icon name="linkedin" /> linkedin
                        </a>
                      </Grid.Column>
                      <Grid.Column alignItems="right" width={7}>
                        <a href="/Nicholas_Wilson_CV_2023_June.pdf" download>
                          <Icon name="file text" />
                          Download CV
                        </a>
                      </Grid.Column>{" "}
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={7}>
                        <a href="https://github.com/nickynw">
                          <Icon name="github" /> github
                        </a>
                      </Grid.Column>
                      <Grid.Column alignItems="center" width={7}>
                        {" "}
                        <a
                          href="mailto: nicknwilson@outlook.com"
                          style={{ width: "100%" }}
                        >
                          <Icon name="mail" />
                          nicknwilson@outlook.com
                        </a>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column
            style={{
              height: "100%",
              margin: "0px",
              padding: "2rem",
            }}
          >
            <Container
              style={{
                backgroundColor: theme === "dark" ? "#40424a" : "white",
              }}
            >
              <SideGroup theme={theme} items={languages} title="Languages" />
              <SideGroup
                theme={theme}
                items={python}
                title="Python Packages & Tools"
              />
              <SideGroup
                theme={theme}
                items={db}
                title="Databases & Data Management"
              />
              <SideGroup
                theme={theme}
                items={frameworks}
                title="Frameworks  & Web Development"
              />
              <SideGroup
                theme={theme}
                items={cloud}
                title="Cloud Services & DevOps"
              />
            </Container>
          </Grid.Column>
        </Grid>
        <Segment
          style={{
            paddingLeft: "0.2rem",
            paddingRight: "0.2rem",
            paddingTop: "0px",
            paddingBottom: "2rem",
            backgroundColor: theme === "dark" ? "#40424a" : "white",
          }}
        >
          <Grid.Column
            width={2}
            textAlign="center"
            style={{ padding: "0px", margin: "0px" }}
          >
            {" "}
          </Grid.Column>
          <Grid stackable container columns={2} relaxed="very">
            <Grid.Column style={{ paddingRight: "0px", marginRight: "0px" }}>
              <Grid.Row>
                <Divider horizontal>
                  <Header
                    as="h4"
                    style={{ color: theme === "dark" ? "white" : "black" }}
                  >
                    <Icon name="suitcase" />
                    Employment
                  </Header>
                </Divider>
                <ListGroup theme={theme} data={work_data} />
              </Grid.Row>
              <Grid.Row style={{ paddingTop: "20px" }}>
                <Divider horizontal>
                  <Header
                    as="h4"
                    style={{ color: theme === "dark" ? "white" : "black" }}
                  >
                    <Icon name="book" />
                    Education
                  </Header>
                </Divider>
                <ListGroup theme={theme} data={education_data} />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Divider horizontal>
                <Header
                  as="h4"
                  style={{ color: theme === "dark" ? "white" : "black" }}
                >
                  <Icon name="coffee" />
                  Personal Projects
                </Header>
              </Divider>
              <ListGroup theme={theme} data={personal_data} />
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
}

export default App;
