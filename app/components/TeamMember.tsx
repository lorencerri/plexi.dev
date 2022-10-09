import {
    createStyles,
    Avatar,
    Text,
    Group,
    Anchor,
    ActionIcon,
    Title,
} from "@mantine/core";
import {
    IconBrandTwitter,
    IconAt,
    IconBrandGithub,
    IconBrandDiscord,
} from "@tabler/icons";
import shallow from "zustand/shallow";

import { useStore } from "app/state";

const useStyles = createStyles((theme) => ({
    avatar: {
        transition: "transform 150ms ease, box-shadow 100ms ease",

        "&:hover": {
            boxShadow: theme.shadows.md,
            transform: "scale(1.1)",
            cursor: "pointer",
        },
    },

    button: {
        borderRadius: 8,
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
    display?: string | number;
    borderColor?: string;
}

export default function TeamMember({
    avatar,
    name,
    title,
    twitter,
    email,
    github,
    discord,
    display,
    borderColor,
}: UserInfoIconsProps) {
    const { classes } = useStyles();

    const { displayKeypad, enableKeypad, pressKey } = useStore(
        (state) => ({
            displayKeypad: state.displayKeypad,
            enableKeypad: state.enableKeypad,
            pressKey: state.pressKey,
        }),
        shallow
    );

    return (
        <div>
            <Group noWrap>
                {displayKeypad && display ? (
                    <ActionIcon
                        size={94}
                        variant="outline"
                        className={classes.button}
                        color={borderColor}
                        onClick={() => pressKey(display)}
                    >
                        <Title order={1}>{display}</Title>
                    </ActionIcon>
                ) : (
                    <Avatar
                        src={avatar}
                        className={classes.avatar}
                        size={94}
                        radius="md"
                        onClick={() => enableKeypad()}
                    />
                )}
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
                                style={{
                                    textUnderlineOffset: "2px",
                                    textDecorationColor: "#3B5BDB",
                                }}
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
