import { createStyles, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconColorSwatch, IconPackage, TablerIcon } from "@tabler/icons";
import { ReactNode } from "react";

const useStyles = createStyles((theme) => ({
    card: {
        position: "relative",
        cursor: "pointer",
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
}));

interface CardGradientProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export default function Project({
    icon,
    title,
    description,
}: CardGradientProps) {
    const { classes } = useStyles();
    return (
        <Paper withBorder radius="md" className={classes.card}>
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: "#C1C2C5", to: "#3B5BDB" }}
            >
                {icon}
            </ThemeIcon>
            <Text size="xl" weight={500} mt="md">
                {title}
            </Text>
            <Text size="sm" mt="sm" color="dimmed">
                {description}
            </Text>
        </Paper>
    );
}
