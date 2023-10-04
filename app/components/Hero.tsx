import { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import { Container, Title, Text, Button } from "@mantine/core";
import { Dots } from "./Dots";

export default function CustomHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  return (
    <Container className={classes.container} size={1400}>
      <Dots left={0} top={0} className={classes.dots} />
      <Dots left={60} top={0} className={classes.dots} />
      <Dots left={0} top={140} className={classes.dots} />
      <Dots right={0} top={60} className={classes.dots} />

      <Title className={classes.title}>
        Welcome To <span className={classes.highlight}>Plexi Development</span>
      </Title>
      <Container p={0} size={600}>
        <Text size="lg" c="dimmed" className={classes.description}>
          We're a community of developers and students centered around creating
          user-friendly applications and developer resources.
        </Text>
      </Container>

      <div className={classes.buttons}>
        <Button
          component="a"
          href="https://discord.gg/plexidev"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          variant="default"
          color="gray"
          className={classes.button}
          mr={20}
        >
          Join our community
        </Button>

        <Button className={classes.button} size="lg">
          Projects
        </Button>
      </div>
    </Container>
  );
}
