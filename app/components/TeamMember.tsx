import { createStyles, Avatar, Text, Group, Anchor } from "@mantine/core";
import {
    IconBrandTwitter,
    IconAt,
    IconBrandGithub,
    IconBrandDiscord,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
    avatar: {
        transition: "transform 150ms ease, box-shadow 100ms ease",

        "&:hover": {
            boxShadow: theme.shadows.md,
            transform: "scale(1.1)",
        },
    },

    icon: {
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[3]
                : theme.colors.gray[5],
    },

    linkAnchor: {
        textDecoration: "none",
    },
}));

interface UserInfoIconsProps {
    avatar: string;
    name: string;
    title: string;
    twitter?: string;
    email?: string;
    github?: string;
    discord?: string;
}

export default function TeamMember({
    avatar,
    name,
    title,
    twitter,
    email,
    github,
    discord,
}: UserInfoIconsProps) {
    const { classes } = useStyles();
    return (
        <div>
            <Group noWrap>
                <Avatar
                    src={avatar}
                    className={classes.avatar}
                    size={94}
                    radius="md"
                />
                <div>
                    <Text
                        size="xs"
                        sx={{ textTransform: "uppercase" }}
                        weight={700}
                        color="dimmed"
                    >
                        {title}
                    </Text>

                    <Text size="lg" weight={500}>
                        {name}
                    </Text>

                    {twitter && (
                        <Group noWrap spacing={10} mt={5}>
                            <IconBrandTwitter
                                stroke={1.5}
                                size={16}
                                className={classes.icon}
                            />
                            <Text size="xs" color="dimmed">
                                {twitter}
                            </Text>
                        </Group>
                    )}

                    {github && (
                        <Group noWrap spacing={10} mt={5}>
                            <IconBrandGithub
                                stroke={1.5}
                                size={16}
                                className={classes.icon}
                            />
                            <Anchor
                                className={classes.linkAnchor}
                                target="_blank"
                                href={`https://github.com/${github.replace(
                                    /@/g,
                                    ""
                                )}`}
                            >
                                <Text size="xs" color="dimmed">
                                    {github}
                                </Text>
                            </Anchor>
                        </Group>
                    )}

                    {discord && (
                        <Group noWrap spacing={10} mt={3}>
                            <IconBrandDiscord
                                stroke={1.5}
                                size={16}
                                className={classes.icon}
                            />
                            <Text size="xs" color="dimmed">
                                {discord}
                            </Text>
                        </Group>
                    )}

                    {email && (
                        <Group noWrap spacing={10} mt={3}>
                            <IconAt
                                stroke={1.5}
                                size={16}
                                className={classes.icon}
                            />
                            <Text size="xs" color="dimmed">
                                {email}
                            </Text>
                        </Group>
                    )}
                </div>
            </Group>
        </div>
    );
}
