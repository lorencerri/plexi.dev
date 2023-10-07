import classes from "./ListItem.module.css";

import { Accordion, Text, Badge, Group, Anchor, Button } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface ListItemProps {
  title: string;
  author: string;
  icon: ReactNode;
  type: string;
  description?: string;
  link?: string;
}

export default function ListItem({
  title,
  author,
  icon,
  type,
  description,
  link,
}: ListItemProps) {
  return (
    <Accordion.Item key={title} value={title} className={classes.item}>
      <Accordion.Control icon={icon} className={classes.control}>
        <Text className={classes.title}>{title}</Text>
        <Badge size="sm" color="red" variant="dot" className={classes.badge}>
          {type}
        </Badge>
        <Badge size="sm" variant="dot" className={classes.badge}>
          {author}
        </Badge>
      </Accordion.Control>
      <Accordion.Panel>
        <Group className={classes.group}>
          {description && (
            <div className={classes.description}>
              <Text c="dimmed">{description}</Text>
            </div>
          )}

          {link && (
            <Anchor href={link} target="_blank">
              <Button
                fullWidth
                variant="light"
                leftSection={<IconExternalLink size={14} />}
              >
                Visit
              </Button>
            </Anchor>
          )}
        </Group>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
