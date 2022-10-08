import { useState, useEffect } from "react";
import {
    Title,
    Container,
    SimpleGrid,
    createStyles,
    GroupedTransition,
} from "@mantine/core";

import TeamMember from "./TeamMember";
import { Dots } from "./Dots";

import lorencerriAvatar from "app/images/avatars/lorencerri.jpg";
import zoroticAvatar from "app/images/avatars/Zorotic.gif";
import CartarAvatar from "app/images/avatars/Cartar.gif";
import FreezInAvatar from "app/images/avatars/FreezIn.png";
import hasteAvatar from "app/images/avatars/haste.png";
import ImDarkDiamondAvatar from "app/images/avatars/ImDarkDiamond.png";
import IttimAvatar from "app/images/avatars/Ittim.png";
import MoordAvatar from "app/images/avatars/Moord.png";
import polarisAvatar from "app/images/avatars/polaris.png";
import rockdog666Avatar from "app/images/avatars/rockdog6-6-6.png";
import whomityAvatar from "app/images/avatars/whomity.png";
import YahikoAvatar from "app/images/avatars/Yahiko.png";

const useStyles = createStyles((theme) => ({
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

        "@media (max-width: 1750px)": {
            display: "none",
        },
    },

    dotsLeft: {
        left: 0,
        top: 0,
    },

    wrapper: {
        paddingTop: 80,
        paddingBottom: 50,
    },

    subtitle: {
        textAlign: "center",
        fontWeight: 800,
        fontSize: 30,
        letterSpacing: -1,
        color: "#C1C2C5",
        marginBottom: theme.spacing.sm,

        "@media (max-width: 520px)": {
            fontSize: 28,
            textAlign: "left",
        },
    },

    members: {
        marginTop: 40,
    },
}));

const team = [
    {
        name: "lorencerri",
        title: "Developer",
        avatar: lorencerriAvatar,
        github: "@lorencerri",
        email: "lorencerri@plexidev.org",
    },
    {
        name: "Zorotic",
        title: "Developer",
        avatar: zoroticAvatar,
        github: "@Zorotic",
        email: "zorotic@plexidev.org",
    },
    {
        name: "Cartar",
        title: "Developer",
        avatar: CartarAvatar,
        github: "@realCartar",
        discord: "Cartar#0001",
    },
    {
        name: "FreezIn",
        title: "Developer",
        avatar: FreezInAvatar,
        github: "@alexy4744",
        discord: "FreezIn#0086",
    },
    {
        name: "haste",
        title: "Developer",
        avatar: hasteAvatar,
        github: "@hhaste",
        discord: "haste#3701",
    },
    {
        name: "ImDarkDiamond",
        title: "Developer",
        avatar: ImDarkDiamondAvatar,
        github: "@ImDarkDiamond",
        discord: "ImDarkDiamond#0001",
    },
    {
        name: "Ittim",
        title: "Developer",
        avatar: IttimAvatar,
        github: "@TheIttim",
        discord: "Ittim#0092",
    },
    {
        name: "Moord",
        title: "Developer",
        avatar: MoordAvatar,
        discord: "Moord#1910",
    },
    {
        name: "polaris",
        title: "Developer",
        avatar: polarisAvatar,
        github: "@impolqris",
        discord: "polaris#9153",
    },
    {
        name: "rockdog6-6-6",
        title: "Developer",
        avatar: rockdog666Avatar,
        discord: "rockdog6-6-6#6865",
    },
    {
        name: "whomity",
        title: "Developer",
        avatar: whomityAvatar,
        discord: "whomity#9612",
    },
    {
        name: "Yahiko",
        title: "Developer",
        avatar: YahikoAvatar,
        github: "@KnowItAllKing",
        discord: "Yahiko#0659",
    },
];

export default function Team() {
    const [mounted, setMounted] = useState(false);
    const { classes } = useStyles();

    useEffect(() => {
        setMounted(true);
    }, [mounted]);

    return (
        <Container className={classes.wrapper} size={1050}>
            <Dots className={classes.dots} style={{ left: 100, top: 800 }} />
            <Dots className={classes.dots} style={{ left: 160, top: 800 }} />
            <Dots className={classes.dots} style={{ left: 100, top: 940 }} />
            <Dots className={classes.dots} style={{ right: 100, top: 860 }} />

            <GroupedTransition
                mounted={mounted}
                transitions={{
                    subtitle: { duration: 2500, transition: "fade" },
                    team: {
                        duration: 2500,
                        transition: "fade",
                        timingFunction: "ease",
                    },
                }}
            >
                {(styles) => {
                    return (
                        <div className={classes.inner}>
                            <Title
                                order={3}
                                className={classes.subtitle}
                                style={styles.subtitle}
                            >
                                Meet The
                                <span style={{ color: "#3b5bdb" }}> Team</span>
                            </Title>
                            <SimpleGrid
                                cols={3}
                                spacing={50}
                                breakpoints={[
                                    { maxWidth: 550, cols: 1, spacing: 40 },
                                ]}
                                className={classes.members}
                                style={styles.team}
                            >
                                {team.map((member) => {
                                    return (
                                        <TeamMember
                                            key={member.name}
                                            {...member}
                                        />
                                    );
                                })}
                            </SimpleGrid>
                        </div>
                    );
                }}
            </GroupedTransition>
        </Container>
    );
}
