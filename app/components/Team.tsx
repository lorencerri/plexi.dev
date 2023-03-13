import { useState, useEffect } from "react";
import {
  Title,
  Container,
  SimpleGrid,
  createStyles,
  Kbd,
  GroupedTransition,
} from "@mantine/core";

import TeamMember from "./TeamMember";
import { Dots } from "./Dots";

import { useStore } from "app/state";

import lorencerriAvatar from "app/images/avatars/lorencerri.webp";
import zoroticAvatar from "app/images/avatars/Zorotic.webp";
import CartarAvatar from "app/images/avatars/Cartar.webp";
import FreezInAvatar from "app/images/avatars/FreezIn.webp";
import hasteAvatar from "app/images/avatars/haste.webp";
import ImDarkDiamondAvatar from "app/images/avatars/ImDarkDiamond.webp";
import IttimAvatar from "app/images/avatars/Ittim.webp";
import MoordAvatar from "app/images/avatars/Moord.webp";
import polarisAvatar from "app/images/avatars/polaris.webp";
import rockdog666Avatar from "app/images/avatars/rockdog6-6-6.webp";
import whomityAvatar from "app/images/avatars/whomity.webp";
import YahikoAvatar from "app/images/avatars/Yahiko.webp";
import ZelakAvatar from "app/images/avatars/Zelak.webp";
import DiscordBlue from "app/images/avatars/discord-blue.webp";
import DiscordRed from "app/images/avatars/discord-red.webp";
import DiscordYellow from "app/images/avatars/discord-yellow.webp";

import shallow from "zustand/shallow";

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

  key: {
    padding: 10,
    margin: 10,
    minWidth: "28px",
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

const special = [
  {
    name: "You",
    title: "Supporter",
    avatar: DiscordBlue,
  },
  {
    name: "You",
    title: "Supporter",
    avatar: DiscordRed,
  },
  {
    name: "You",
    title: "Supporter",
    avatar: DiscordYellow,
  },
];

const team = [
  {
    name: "lorencerri",
    title: "Founder / Developer",
    avatar: lorencerriAvatar,
    github: "@lorencerri",
    discord: "lettuce#2113",
    display: 1,
  },
  {
    name: "Zorotic",
    title: "Lead Developer",
    avatar: zoroticAvatar,
    github: "@Zorotic",
    email: "Zorotic#0001",
    display: 2,
  },
  {
    name: "Cartar",
    title: "Developer",
    avatar: CartarAvatar,
    github: "@realCartar",
    discord: "Cartar#0001",
    display: 3,
  },
  {
    name: "Zelak",
    title: "Developer",
    avatar: ZelakAvatar,
    github: "@ZelAk312",
    discord: "Zelak#1444",
    display: 4,
  },
  {
    name: "FreezIn",
    title: "Developer",
    avatar: FreezInAvatar,
    github: "@alexy4744",
    discord: "FreezIn#0086",
    display: 5,
  },
  {
    name: "haste",
    title: "Developer",
    avatar: hasteAvatar,
    github: "@hhaste",
    discord: "haste#3701",
    display: 6,
  },
  {
    name: "ImDarkDiamond",
    title: "Developer",
    avatar: ImDarkDiamondAvatar,
    github: "@ImDarkDiamond",
    discord: "ImDarkDiamond#0001",
    display: 7,
  },
  {
    name: "Ittim",
    title: "Developer",
    avatar: IttimAvatar,
    github: "@TheIttim",
    discord: "Ittim#0092",
    display: 8,
  },
  {
    name: "polaris",
    title: "Developer",
    avatar: polarisAvatar,
    github: "@impolqris",
    discord: "polaris#9153",
    display: 9,
  },
  {
    name: "Yahiko",
    title: "Developer",
    avatar: YahikoAvatar,
    github: "@KnowItAllKing",
    discord: "Yahiko#0659",
    display: "Back",
    borderColor: "red",
  },
  {
    name: "Moord",
    title: "Staff",
    avatar: MoordAvatar,
    discord: "Moord#1910",
    display: "0",
  },

  {
    name: "rockdog6-6-6",
    title: "Staff",
    avatar: rockdog666Avatar,
    discord: "rockdog6-6-6#6865",
    display: "Enter",
    borderColor: "green",
  },
  {
    name: "whomity",
    title: "Staff",
    avatar: whomityAvatar,
    discord: "whomity#9612",
  },
];

export default function Team() {
  const [mounted, setMounted] = useState(false);
  const { displayKeypad, code, success } = useStore(
    (state) => ({
      displayKeypad: state.displayKeypad,
      code: state.code,
      success: state.success,
    }),
    shallow
  );
  const { classes } = useStyles();

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  const displayText = () => {
    if (success) {
      return (
        <div>
          Special <span style={{ color: "#3b5bdb" }}>thank you</span> to{" "}
          <span style={{ color: "#3b5bdb" }}>you</span> for your continued
          support!
        </div>
      );
    } else if (displayKeypad) {
      return (
        <div>
          <div>
            Enter The
            <span style={{ color: "#3b5bdb" }}> Password</span>
          </div>
          <div className={classes.subtitle}>
            <Kbd className={classes.key}>{code[0] || "_"}</Kbd>
            <Kbd className={classes.key}>{code[1] || "_"}</Kbd>
            <Kbd className={classes.key}>{code[2] || "_"}</Kbd>
            <Kbd className={classes.key}>{code[3] || "_"}</Kbd>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Meet The
          <span style={{ color: "#3b5bdb" }}> Team</span>
        </div>
      );
    }
  };

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
                {displayText()}
              </Title>
              <SimpleGrid
                cols={3}
                spacing={50}
                breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
                className={classes.members}
                style={styles.team}
              >
                {(success ? special : team).map((member) => {
                  return <TeamMember key={member.name} {...member} />;
                })}
              </SimpleGrid>
            </div>
          );
        }}
      </GroupedTransition>
    </Container>
  );
}
