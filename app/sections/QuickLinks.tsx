import { useState, useEffect } from "react";
import {
  Title,
  Container,
  createStyles,
  Table,
  Transition,
} from "@mantine/core";

import { Dots } from "../components/Dots";
import { useStore } from "app/state";
import { IconPackage, IconRobot } from "@tabler/icons-react";
import ProjectRow from "../components/ProjectRow";

const useStyles = createStyles((theme) => ({
  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    "@media (max-width: 1750px)": {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  wrapper: {
    paddingTop: 80,
    paddingBottom: 50,
  },

  subtitle: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 30,
    letterSpacing: -1,
    color: "#C1C2C5",
    marginBottom: theme.spacing.sm,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  members: {
    marginTop: 40,
  },
}));

export default function QuickLinks() {
  const [mounted, setMounted] = useState(false);
  const success = useStore((state) => state.success);
  const { classes } = useStyles();

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  return (
    <Container className={classes.wrapper} size={1050}>
      {!success && (
        <span>
          <Dots className={classes.dots} style={{ left: 100, top: 1600 }} />
          <Dots className={classes.dots} style={{ left: 160, top: 1600 }} />
          <Dots className={classes.dots} style={{ left: 100, top: 1540 }} />
          <Dots className={classes.dots} style={{ right: 100, top: 1660 }} />
        </span>
      )}

      <div className={classes.inner}>
        <Transition mounted={mounted} duration={2500} transition="fade">
          {(styles) => {
            return (
              <Title order={3} className={classes.subtitle} style={styles}>
                Quick
                <span style={{ color: "#3b5bdb" }}> Links</span>
              </Title>
            );
          }}
        </Transition>
        <Transition
          mounted={mounted}
          duration={2500}
          transition={"fade"}
          timingFunction={"ease"}
        >
          {(styles) => {
            return (
              <Table className={classes.members} style={styles}>
                <thead>
                  <tr>
                    <th style={{ width: 16 }}></th>
                    <th>Project</th>
                    <th>Author / Team Lead</th>
                    <th style={{ width: 16 }}></th>
                  </tr>
                </thead>
                <tbody>
                  <ProjectRow
                    icon={<IconPackage />}
                    title={"Quick.db"}
                    author={"Zelak312"}
                    link={"https://github.com/plexidev/quick.db"}
                  />
                  <ProjectRow
                    icon={<IconRobot />}
                    title={"Guardian"}
                    author={"lorencerri"}
                    link={"https://github.com/lorencerri/discord-guardian"}
                  />
                  <ProjectRow
                    icon={<IconPackage />}
                    title={"QuickMongo"}
                    author={"Zelak312"}
                    link={"https://github.com/plexidev/quickmongo"}
                  />
                </tbody>
              </Table>
            );
          }}
        </Transition>
      </div>
    </Container>
  );
}
