import styled from "@emotion/styled";
import { createStyles, Anchor, Group, Title, Transition } from "@mantine/core";

import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 120,
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
    },

    inner: {
        padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },

    links: {
        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
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
                    <div className={classes.footer} style={styles}>
                        <div
                            className={classes.inner}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Title order={2}>
                                <StyledTitle>plexi</StyledTitle>dev
                            </Title>

                            <Group className={classes.links}>{items}</Group>
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
