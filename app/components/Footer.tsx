import styled from "@emotion/styled";
import { createStyles, Anchor, Group, Title, Transition } from "@mantine/core";

import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
    inner: {
        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },

    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
            textDecoration: "none",
        },

        [theme.fn.smallerThan("sm")]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).color,
        },
    },
}));

const links = [
    { link: "https://twitter.com/plexidev", label: "Twitter" },
    { link: "https://youtube.com/c/truexpixels", label: "YouTube" },
    { link: "https://github.com/plexidev", label: "GitHub" },
    { link: "https://discord.gg/plexidev", label: "Discord" },
];

export default function Footer() {
    const [mounted, setMounted] = useState(false);
    const { classes } = useStyles();

    useEffect(() => {
        setMounted(true);
    }, [mounted]);

    const items = links.map((link) => (
        <Anchor<"a">
            color="dimmed"
            key={link.label}
            href={link.link}
            sx={{ lineHeight: 1 }}
            onClick={(event) => event.preventDefault()}
            className={classes.link}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <Transition
            transition="fade"
            mounted={mounted}
            duration={1000}
            timingFunction="ease"
        >
            {(styles) => {
                return (
                    <div
                        style={{
                            ...styles,
                            marginTop: 120,
                            borderTop: "1px solid #2C2E33",
                        }}
                    >
                        <div
                            className={classes.inner}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "16px 16px",
                            }}
                        >
                            <Title order={2}>
                                <StyledTitle>plexi</StyledTitle>dev
                            </Title>

                            <Group>{items}</Group>
                        </div>
                    </div>
                );
            }}
        </Transition>
    );
}

const StyledTitle = styled.span`
    color: #3b5bdb;
`;
