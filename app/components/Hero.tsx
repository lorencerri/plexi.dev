import { useState, useEffect } from "react";
import {
    createStyles,
    Title,
    Text,
    Button,
    Container,
    Transition,
} from "@mantine/core";
import { Dots } from "./Dots";

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: "relative",
        paddingTop: 120,
        paddingBottom: 80,

        "@media (max-width: 755px)": {
            paddingTop: 80,
            paddingBottom: 60,
        },
    },

    inner: {
        position: "relative",
        zIndex: 1,
    },

    dots: {
        position: "absolute",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1],

        "@media (max-width: 755px)": {
            display: "none",
        },
    },

    dotsLeft: {
        left: 0,
        top: 0,
    },

    title: {
        textAlign: "center",
        fontWeight: 800,
        fontSize: 40,
        letterSpacing: -1,
        color: "#C1C2C5",
        marginBottom: theme.spacing.xs,

        "@media (max-width: 520px)": {
            fontSize: 28,
            textAlign: "left",
        },
    },

    highlight: {
        color: "#3b5bdb",
    },

    description: {
        textAlign: "center",

        "@media (max-width: 520px)": {
            textAlign: "left",
            fontSize: theme.fontSizes.md,
        },
    },

    controls: {
        marginTop: 20,
        display: "flex",
        justifyContent: "center",

        "@media (max-width: 520px)": {
            flexDirection: "column",
            width: "100%",
        },
    },

    control: {
        "&:not(:first-of-type)": {
            marginLeft: theme.spacing.md,
        },

        "@media (max-width: 520px)": {
            height: 42,
            fontSize: theme.fontSizes.md,
            width: "100%",
            marginBottom: 10,

            "&:not(:first-of-type)": {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },
}));

interface HeroProps {
    scrollIntoView: any;
}

export default function Hero({ scrollIntoView }: HeroProps) {
    const [mounted, setMounted] = useState(false);
    const { classes } = useStyles();

    useEffect(() => {
        setMounted(true);
    }, [mounted]);

    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <Transition
                transition="fade"
                mounted={mounted}
                duration={1000}
                timingFunction="ease"
            >
                {(styles) => {
                    return (
                        <div className={classes.inner} style={styles}>
                            <Title className={classes.title}>
                                Welcome To{" "}
                                <Text
                                    component="span"
                                    className={classes.highlight}
                                    inherit
                                >
                                    Plexi Development
                                </Text>
                            </Title>

                            <Container p={0} size={600}>
                                <Text
                                    size="lg"
                                    color="dimmed"
                                    className={classes.description}
                                >
                                    We're a community of developers and creators
                                    centered around creating user-friendly
                                    applications and developer resources.
                                </Text>
                            </Container>

                            <div
                                className={classes.controls}
                                style={{ marginTop: 20 }}
                            >
                                <Button
                                    component="a"
                                    href="https://discord.gg/plexidev"
                                    target="_blank"
                                    rel="noreferrer"
                                    size="lg"
                                    variant="default"
                                    color="gray"
                                    className={classes.control}
                                    mr={20}
                                >
                                    Join our community
                                </Button>

                                <Button
                                    className={classes.control}
                                    style={{ backgroundColor: "#3b5bdb" }}
                                    onClick={scrollIntoView}
                                    size="lg"
                                >
                                    Projects
                                </Button>
                            </div>
                        </div>
                    );
                }}
            </Transition>
        </Container>
    );
}
