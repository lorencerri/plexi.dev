import {
    createStyles,
    Paper,
    Text,
    ThemeIcon,
    Transition,
    Button,
    Anchor,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons";
import type { ReactNode } from "react";
import { useHover } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
    card: {
        position: "relative",
        cursor: "default",
        overflow: "hidden",
        transition: "transform 150ms ease, box-shadow 100ms ease",
        padding: theme.spacing.xl,
        paddingLeft: theme.spacing.xl * 2,

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

    link: {
        "&:hover": {
            textDecoration: "none",
        },

        color: "#C1C2C5",
    },
}));

interface CardGradientProps {
    title: string;
    description: string;
    icon: ReactNode;
    link: string;
}

export default function Project({
    icon,
    title,
    description,
    link,
}: CardGradientProps) {
    const { hovered, ref } = useHover();
    const { classes } = useStyles();

    return (
        <Paper withBorder radius="md" className={classes.card} ref={ref}>
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, to: "#C1C2C5", from: "#3B5BDB" }}
            >
                {icon}
            </ThemeIcon>
            <Text size="xl" weight={500} mt="md">
                {title}
            </Text>
            <Text size="sm" mt="sm" color="dimmed">
                {description}
            </Text>
            <Transition
                mounted={hovered}
                transition="fade"
                duration={400}
                timingFunction="ease"
            >
                {(styles) => (
                    <Anchor href={link} target="_blank">
                        <Button
                            leftIcon={<IconExternalLink />}
                            style={{
                                ...styles,
                                position: "absolute",
                                top: 0,
                                right: 0,
                            }}
                            variant="gradient"
                            mt={10}
                            mr={10}
                            gradient={{
                                deg: 0,
                                to: "#C1C2C5",
                                from: "#3B5BDB",
                            }}
                        >
                            Visit
                        </Button>
                    </Anchor>
                )}
            </Transition>
        </Paper>
    );
}
