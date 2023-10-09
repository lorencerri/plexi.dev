import classes from "./Hero.module.css";
import { Container, Title, Text, Button } from "@mantine/core";

export default function CustomHero() {
  return (
    <Container className={classes.container} size={1400}>
      <Title className={classes.title}>
        Welcome To <span className="highlight">Plexi Development</span>
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

        <Button
          component="a"
          href="https://github.com/plexidev"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className={classes.button}
        >
          Projects
        </Button>
      </div>
    </Container>
  );
}
