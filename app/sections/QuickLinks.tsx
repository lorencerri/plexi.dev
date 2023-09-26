import { useState, useEffect } from "react";
import { Accordion, Container, createStyles, Transition } from "@mantine/core";

import { Dots } from "../components/Dots";
import { useStore } from "app/state";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandYoutube,
  IconPackage,
  IconRobot,
  IconTerminal,
} from "@tabler/icons-react";
import ProjectRow from "../components/ProjectRow";

const useStyles = createStyles((theme) => ({
  inner: {
    position: "relative",
    zIndex: 1,
  },

  linksContainer: {
    minWidth: "100%",
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
    paddingBottom: 50,
    [theme.fn.smallerThan("sm")]: {
      paddingBottom: 0,
    },
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
        <Transition
          mounted={mounted}
          duration={2500}
          transition={"fade"}
          timingFunction={"ease"}
        >
          {() => {
            return (
              <Accordion
                maw={400}
                defaultValue={"Discord Server"}
                className={classes.linksContainer}
              >
                <ProjectRow
                  icon={<IconBrandDiscord />}
                  title={"Discord Server"}
                  description="Join our Discord server to get support, report bugs, and chat with the community."
                  type="Community"
                  author={"Plexi Development"}
                  link={"https://discord.gg/plexidev"}
                />
                <ProjectRow
                  icon={<IconBrandYoutube />}
                  title={"YouTube Channel"}
                  type="Resource"
                  description="Our YouTube channel is where we post tutorials, showcases, and more."
                  author={"Plexi Development"}
                  link={"https://www.youtube.com/c/TrueXPixels"}
                />
                <ProjectRow
                  icon={<IconBrandTwitter />}
                  title={"Twitter"}
                  description="Follow us on Twitter to get updates on our projects and more."
                  type="Resource"
                  author={"Plexi Development"}
                  link={"https://twitter.com/plexidev"}
                />
                <ProjectRow
                  icon={<IconBrandGithub />}
                  title={"GitHub"}
                  type="Resource"
                  description="Check out our GitHub to see our open-source projects."
                  author={"Plexi Development"}
                  link={"https://github.com/plexidev"}
                />
                <ProjectRow
                  icon={<IconPackage />}
                  title={"Quick.db"}
                  type="Project"
                  description="Our primary project, a database wrapper for better-sqlite3."
                  author={"Zelak"}
                  link={"https://github.com/plexidev/quick.db"}
                />
                <ProjectRow
                  icon={<IconPackage />}
                  title={"QuickMongo"}
                  type="Project"
                  description="A MongoDB wrapper for quick.db."
                  author={"Zelak"}
                  link={"https://github.com/plexidev/quickmongo"}
                />
                <ProjectRow
                  icon={<IconTerminal />}
                  title={"Nora"}
                  type="Project"
                  description="Command line utility for renaming files in batch using regex with advanced control."
                  author={"Zelak"}
                  link={"https://github.com/Zelak312/nora_rename"}
                />
                <ProjectRow
                  icon={<IconRobot />}
                  title={"Guardian"}
                  type="Project"
                  description="A Discord bot that protects your server from malicious users."
                  author={"lorencerri"}
                  link={"https://github.com/lorencerri/discord-guardian"}
                />
              </Accordion>
            );
          }}
        </Transition>
      </div>
    </Container>
  );
}
