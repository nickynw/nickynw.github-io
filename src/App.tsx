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
  Menu,
  Card,
} from "semantic-ui-react";

import SideGroup from "./components/SideGroup";
import { personal_data, work_data, education_data } from "./data";

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
  return (
    <div className="App">
      <Container style={{ padding: "1rem" }}>
        {" "}
        <Segment style={{ backgroundColor: "#f2f0f0" }}>
          <Grid columns="equal" stackable container relaxed="very">
            <Grid.Column width={7} style={{ margin: "0px", padding: "1rem" }}>
              <Card
                centered
                style={{
                  width: "100%",
                  height: "100%",
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
                </Header>
                <Card.Content>
                  <Card.Header>
                    Nicholas N. Wilson Software Portfolio
                  </Card.Header>
                  <Card.Meta>Last updated 08/06/2023</Card.Meta>{" "}
                </Card.Content>{" "}
                <Card.Content style={{ padding: "0px" }}>
                  <Menu>
                    <a href="https://www.linkedin.com/in/nicknwilson/">
                      <Menu.Item as="a">
                        <Icon name="linkedin" /> linkedin
                      </Menu.Item>{" "}
                    </a>{" "}
                    <a href="https://github.com/nickynw">
                      <Menu.Item as="a">
                        <Icon name="github" />
                        github
                      </Menu.Item>{" "}
                    </a>
                    <a
                      href="mailto: nicknwilson@outlook.com"
                      style={{ width: "100%" }}
                    >
                      <Menu.Item as="a">
                        <Icon name="mail" /> nicknwilson@outlook.com
                      </Menu.Item>
                    </a>
                  </Menu>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>
                    <b>Actively Seeking Employment In The Following Roles:</b>
                  </Card.Description>
                  <div style={{ margin: "5px" }}></div>

                  <Label as="a" basic>
                    Data Engineer
                  </Label>
                  <Label as="a" basic>
                    Python Engineer
                  </Label>
                  <Label as="a" basic>
                    Software Engineer
                  </Label>
                </Card.Content>
                <Card.Content extra>
                  <Message>
                    <p>
                      After leaving my previous role at the end of 2022 I have
                      been self-employed for six months. I am now seeking a new
                      role as a python engineer in data/software. I am a
                      neuroscience and computer science graduate with more than
                      2 years combined data engineering and software engineering
                      experience.
                    </p>
                  </Message>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column
              style={{ height: "100%", margin: "0px", padding: "1rem" }}
            >
              <Container>
                <SideGroup items={languages} title="Languages" />
                <SideGroup items={python} title="Python Packages/Tools" />
                <SideGroup items={db} title="Databases & Data Management" />
                <SideGroup
                  items={frameworks}
                  title="Frameworks  & Web Development"
                />
                <SideGroup items={cloud} title="Cloud Services & DevOps" />
              </Container>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment
          style={{
            paddingLeft: "0.2rem",
            paddingRight: "0.2rem",
            paddingTop: "0px",
            paddingBottom: "2rem",
          }}
        >
          <Grid stackable container columns={2} relaxed="very">
            <Grid.Column>
              <Divider horizontal>
                <Header as="h4">
                  <Icon name="coffee" />
                  Personal Projects
                </Header>
              </Divider>
              <ListGroup data={personal_data} />
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                <Divider horizontal>
                  <Header as="h4">
                    <Icon name="suitcase" />
                    Employment
                  </Header>
                </Divider>
                <ListGroup data={work_data} />
              </Grid.Row>
              <Grid.Row style={{ paddingTop: "20px" }}>
                <Divider horizontal>
                  <Header as="h4">
                    <Icon name="book" />
                    Education
                  </Header>
                </Divider>
                <ListGroup data={education_data} />
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
}

export default App;
