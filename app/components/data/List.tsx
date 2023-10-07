import classes from "./List.module.css";

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandYoutube,
  IconPackage,
  IconRobot,
  IconTerminal,
  IconBuildingBank,
} from "@tabler/icons-react";

import { Dots } from "~/components/visual/Dots";
import { Accordion, Container } from "@mantine/core";
import ListItem from "./ListItem";

export default function List() {
  return (
    <Container className={classes.container}>
      <Dots left={100} top={1600} />
      <Dots left={160} top={1600} />
      <Dots left={100} top={1540} />
      <Dots right={100} top={1660} />

      <Accordion
        maw={400}
        defaultValue="Discord Server"
        className={classes.list}
      >
        <ListItem
          title="Discord Server"
          icon={<IconBrandDiscord />}
          description="Join our Discord server to get support, report bugs, and chat with the community."
          type="Community"
          author="Plexi Development"
          link="https://discord.gg/plexidev"
        />
        <ListItem
          icon={<IconPackage />}
          title={"Quick.db"}
          type="Project"
          description="Our primary project, a database wrapper for better-sqlite3."
          author={"Zelak"}
          link={"https://github.com/plexidev/quick.db"}
        />
        <ListItem
          icon={<IconBuildingBank />}
          title={"Open Collective Page"}
          description="Our Open Collective page shows our recurring expenses and how to contribute."
          type="Internal"
          author={"Plexi Development"}
          link={"https://opencollective.com/plexidev"}
        />
        <ListItem
          icon={<IconBrandYoutube />}
          title={"YouTube Channel"}
          type="Resource"
          description="Our YouTube channel is where we post tutorials, showcases, and more."
          author={"Plexi Development"}
          link={"https://www.youtube.com/c/TrueXPixels"}
        />
        <ListItem
          icon={<IconBrandTwitter />}
          title={"Twitter"}
          description="Follow us on Twitter to get updates on our projects and more."
          type="Resource"
          author={"Plexi Development"}
          link={"https://twitter.com/plexidev"}
        />
        <ListItem
          icon={<IconBrandGithub />}
          title={"GitHub"}
          type="Resource"
          description="Check out our GitHub to see our open-source projects."
          author={"Plexi Development"}
          link={"https://github.com/plexidev"}
        />
        <ListItem
          icon={<IconPackage />}
          title={"QuickMongo"}
          type="Project"
          description="A MongoDB wrapper for quick.db."
          author={"Zelak"}
          link={"https://github.com/plexidev/quickmongo"}
        />
        <ListItem
          icon={<IconTerminal />}
          title={"Nora"}
          type="Project"
          description="Command line utility for renaming files in batch using regex with advanced control."
          author={"Zelak"}
          link={"https://github.com/Zelak312/nora_rename"}
        />
        <ListItem
          icon={<IconRobot />}
          title={"Guardian"}
          type="Project"
          description="A Discord bot that protects your server from malicious users."
          author={"lorencerri"}
          link={"https://github.com/lorencerri/discord-guardian"}
        />
      </Accordion>
    </Container>
  );
}
