import { useState, useEffect } from "react";
import {
  Title,
  Container,
  SimpleGrid,
  createStyles,
  Transition,
} from "@mantine/core";

import Project from "../components/Project";
import { Dots } from "../components/Dots";
import { useStore } from "app/state";
import { IconClock, IconPackage, IconRobot } from "@tabler/icons-react";

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

interface ProjectsProps {
  targetRef: any;
}

export default function Projects({ targetRef }: ProjectsProps) {
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
              <Title
                order={3}
                className={classes.subtitle}
                style={styles}
                ref={targetRef}
              >
                Major
                <span style={{ color: "#3b5bdb" }}> Projects</span>
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
              <SimpleGrid
                cols={2}
                spacing={50}
                breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
                className={classes.members}
                style={styles}
              >
                <Project
                  icon={<IconPackage />}
                  description={
                    "Quick.db is an open-source package meant to provide an easy way for beginners and people of all levels to access & store data in a low to medium volume environment. All data is stored persistently via either better-sqlite3 or promise-mysql and comes way various other quality-of-life features."
                  }
                  title={"Quick.db"}
                  link={"https://github.com/plexidev/quick.db"}
                />
                <Project
                  icon={<IconRobot />}
                  description={
                    "Guardian allows server owners to set strict limits on administration actions (bans, kicks, deletions, etc). Once these limits are met, their Discord permissions are automatically revoked via removing all of their roles."
                  }
                  title={"Guardian"}
                  link={"https://github.com/lorencerri/discord-guardian"}
                />
                <Project
                  icon={<IconPackage />}
                  description={
                    "QuickMongo is a beginner-friendly and feature-rich wrapper for MongoDB that allows you to use Quick.db's Key-Value based syntax."
                  }
                  title={"QuickMongo"}
                  link={"https://github.com/plexidev/quickmongo"}
                />
                <Project
                  icon={<IconClock />}
                  description={
                    "We have a number of additional projects in the works, stay tuned!"
                  }
                  title={"More Coming Soon"}
                />
              </SimpleGrid>
            );
          }}
        </Transition>
      </div>
    </Container>
  );
}