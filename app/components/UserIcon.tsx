import { IconBrandDiscord, IconBrandGithub } from "@tabler/icons-react";
import classes from "./UserIcon.module.css";

import { Group, Avatar, Text, Anchor } from "@mantine/core";

interface UserIconProps {
  avatar: string;
  name: string;
  title: string;
  github?: string;
  discord?: string;
  display?: string | number;
  borderColor?: string;
}

export default function UserIcon({
  avatar,
  name,
  title,
  github,
  discord,
}: UserIconProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={avatar} size={94} radius="md" className={classes.avatar} />

      <div>
        <Text size="xs" c="dimmed" className={classes.title}>
          {title}
        </Text>

        <Text size="lg" className={classes.name}>
          {name}
        </Text>

        {github && (
          <Group wrap="nowrap" gap={10} mt={5}>
            <IconBrandGithub stroke={1.5} size={16} className={classes.icon} />
            <Anchor
              className={classes.link}
              target="_blank"
              href={`https://github.com/${github.replace(/@/g, "")}`}
            >
              <Text size="xs" c="dimmed">
                {github}
              </Text>
            </Anchor>
          </Group>
        )}

        {discord && (
          <Group wrap="nowrap" gap={10} mt={5}>
            <IconBrandDiscord stroke={1.5} size={16} className={classes.icon} />
            <Text size="xs" c="dimmed">
              {discord}
            </Text>
          </Group>
        )}
      </div>
    </Group>
  );
}
