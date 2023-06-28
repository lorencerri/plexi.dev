import {
  createStyles,
  Paper,
  Text,
  ThemeIcon,
  Transition,
  Grid,
  Button,
  Anchor,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import type { ReactNode } from "react";
import { useHover } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    cursor: "default",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(0, "#C1C2C5", "#3B5BDB"),
    },
  },
}));

interface CardGradientProps {
  title: string;
  author: string;
  icon: ReactNode;
  link?: string;
}

export default function ProjectLink({
  icon,
  title,
  author,
  link,
}: CardGradientProps) {
  return (
    <tr>
      <td>
        <ThemeIcon size="lg" radius="md" variant="light">
          {icon}
        </ThemeIcon>
      </td>
      <td>
        <Text weight={500}>{title}</Text>
      </td>
      <td>
        <Text>{author}</Text>
      </td>
      <td>
        <Anchor href={link} target="_blank">
          <Button variant="subtle">Visit</Button>
        </Anchor>
      </td>
    </tr>
  );
}
