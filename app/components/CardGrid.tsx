import classes from "./CardGrid.module.css";
import Card from "./Card";

import { SimpleGrid, Container } from "@mantine/core";
import { IconClock, IconPackage, IconRobot } from "@tabler/icons-react";

export default function CardGrid() {
  return (
    <Container size={1050}>
      <SimpleGrid
        spacing={{ base: 40, md: 50 }}
        cols={{ base: 1, md: 2 }}
        mt={40}
        className={classes.grid}
      >
        <Card
          title="Quick.db"
          icon={<IconPackage />}
          description="Quick.db is an open-source package meant to provide an easy way for beginners and people of all levels to access & store data in a low to medium volume environment. All data is stored persistently via either better-sqlite3 or promise-mysql and comes way various other quality-of-life features."
          link="https://github.com/plexidev/quick.db"
        />
        <Card
          title="Guardian"
          icon={<IconRobot />}
          description="Guardian allows server owners to set strict limits on administration actions (bans, kicks, deletions, etc). Once these limits are met, their Discord permissions are automatically revoked via removing all of their roles."
          link="https://github.com/lorencerri/discord-guardian"
        />
        <Card
          title="QuickMongo"
          icon={<IconPackage />}
          description="QuickMongo is a beginner-friendly and feature-rich wrapper for MongoDB that allows you to use Quick.db's Key-Value based syntax."
          link="https://github.com/plexidev/quickmongo"
        />
        <Card
          title="More Coming Soon"
          icon={<IconClock />}
          description="We have a number of additional projects in the works, stay tuned!"
        />
      </SimpleGrid>
    </Container>
  );
}
