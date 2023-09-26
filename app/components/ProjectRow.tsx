import {
  createStyles,
  Paper,
  Text,
  ThemeIcon,
  Transition,
  Grid,
  Button,
  Anchor,
  Accordion,
  Group,
  Badge,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import type { ReactNode } from "react";

const useStyles = createStyles((theme, _state) => ({
  item: {
    borderRadius: theme.radius.sm,
    backgroundColor: "#1A1B1E",
    border: "none",
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",
    minWidth: "100%",

    "&[data-active]": {
      transform: "scale(1.03)",
      backgroundColor: "#25262b",
      zIndex: 1,
      border: "none",
      boxShadow: theme.shadows.md,
    },
  },

  description: {
    minWidth: "80%",
    marginLeft: 10,
  },

  group: { justifyContent: "space-between" },

  button: {},

  control: {
    paddingBottom: 10,

    ":hover": {
      backgroundColor: "transparent",
    },

    ".mantine-Accordion-chevron": {
      "&[data-rotate]": {
        transform: "rotate(-90deg)",
      },
    },
  },
}));

interface CardGradientProps {
  title: string;
  author: string;
  description?: string;
  icon: ReactNode;
  link?: string;
}

export default function ProjectLink({
  icon,
  title,
  author,
  description,
  link,
}: CardGradientProps) {
  const styles = useStyles();

  return (
    <Accordion.Item key={title} value={title} className={styles.classes.item}>
      <Accordion.Control icon={icon} className={styles.classes.control}>
        <Text weight={500}>{title}</Text>
      </Accordion.Control>
      <Accordion.Panel>
        <Group className={styles.classes.group}>
          <div className={styles.classes.description}>
            {description && <Text c="dimmed">{description}</Text>}
          </div>

          <Anchor href={link} target="_blank">
            <Button
              fullWidth
              variant="light"
              leftIcon={<IconExternalLink size={14} />}
              className={styles.classes.button}
            >
              Visit
            </Button>
          </Anchor>
        </Group>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
