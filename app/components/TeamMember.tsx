import { createStyles, Avatar, Text, Group } from "@mantine/core";
import {
    IconBrandTwitter,
    IconAt,
    IconBrandGithub,
    IconBrandDiscord,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
    icon: {
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[3]
                : theme.colors.gray[5],
    },

    name: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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
                <Avatar src={avatar} size={94} radius="md" />
                <div>
                    <Text
                        size="xs"
                        sx={{ textTransform: "uppercase" }}
                        weight={700}
                        color="dimmed"
                    >
                        {title}
                    </Text>

                    <Text size="lg" weight={500} className={classes.name}>
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
                            <Text size="xs" color="dimmed">
                                {github}
                            </Text>
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
