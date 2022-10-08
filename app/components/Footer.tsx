import {
    createStyles,
    Anchor,
    Group,
    Title,
    Transition,
    Button,
    Modal,
    Alert,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";

import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 16px",
        marginTop: 120,
        borderTop: "1px solid #2C2E33",

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
}));

const links = [
    { link: "https://twitter.com/plexidev", label: "Twitter" },
    { link: "https://youtube.com/c/truexpixels", label: "YouTube" },
    { link: "https://github.com/plexidev", label: "GitHub" },
    { link: "https://discord.gg/plexidev", label: "Discord" },
];

export default function Footer() {
    const [mounted, setMounted] = useState(false);
    const [opened, setOpened] = useState(false);
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
        <div>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                overlayOpacity={0.55}
                overlayBlur={3}
                title="Contact Us"
            >
                <Alert
                    icon={<IconAlertCircle size={16} />}
                    title="Oops!"
                    color="yellow"
                >
                    This component is still under development. You can contact
                    us by joining our Discord server.
                </Alert>
            </Modal>
            <Transition
                transition="fade"
                mounted={mounted}
                duration={1000}
                timingFunction="ease"
            >
                {(styles) => {
                    return (
                        <div className={classes.inner} style={styles}>
                            <Title order={2}>
                                <span style={{ color: "#3b5bdb" }}>plexi</span>
                                dev
                            </Title>

                            <Group>
                                {items}
                                <Button
                                    style={{ backgroundColor: "#3b5bdb" }}
                                    onClick={() => setOpened(true)}
                                >
                                    Contact Us
                                </Button>
                            </Group>
                        </div>
                    );
                }}
            </Transition>
        </div>
    );
}
