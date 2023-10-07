import classes from "./Card.module.css";

import { Paper, ThemeIcon, Text, Anchor, Button } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
}

export default function Card({ icon, title, description, link }: CardProps) {
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 120, from: "#3B5BDB", to: "#C1C2C5" }}
      >
        {icon}
      </ThemeIcon>

      <Text size="xl" mt="md" className={classes.title}>
        {title}
      </Text>

      <Text size="sm" mt="sm" c="dimmed">
        {description}
      </Text>

      {link && (
        <Anchor href={link} target="_blank">
          <Button
            leftSection={<IconExternalLink />}
            variant="gradient"
            gradient={{ deg: 100, from: "#3B5BDB", to: "#C1C2C5" }}
            className={classes.button}
          >
            Visit
          </Button>
        </Anchor>
      )}
    </Paper>
  );
}
