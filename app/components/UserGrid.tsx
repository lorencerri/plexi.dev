import classes from "./UserGrid.module.css";

import { SimpleGrid, Container } from "@mantine/core";

import lorencerriAvatar from "app/assets/avatars/lorencerri.webp";
import zoroticAvatar from "app/assets/avatars/Zorotic.webp";
import CartarAvatar from "app/assets/avatars/Cartar.webp";
import FreezInAvatar from "app/assets/avatars/FreezIn.webp";
import hasteAvatar from "app/assets/avatars/haste.webp";
import ImDarkDiamondAvatar from "app/assets/avatars/ImDarkDiamond.webp";
import IttimAvatar from "app/assets/avatars/Ittim.webp";
import MoordAvatar from "app/assets/avatars/Moord.webp";
import polarisAvatar from "app/assets/avatars/polaris.webp";
import whomityAvatar from "app/assets/avatars/whomity.webp";
import YahikoAvatar from "app/assets/avatars/Yahiko.webp";
import ZelakAvatar from "app/assets/avatars/Zelak.webp";
import UserIcon from "./UserIcon";

const team = [
  {
    name: "lorencerri",
    title: "Founder & Developer",
    avatar: lorencerriAvatar,
    github: "@lorencerri",
    discord: "@lorencerri",
    display: 1,
  },
  {
    name: "Zorotic",
    title: "Administrator & Developer",
    avatar: zoroticAvatar,
    github: "@Zorotic",
    discord: "@zorotic",
    display: 2,
  },
  {
    name: "Zelak",
    title: "Lead Developer",
    avatar: ZelakAvatar,
    github: "@ZelAk312",
    discord: "@zelak",
    display: 3,
  },
  {
    name: "Cartar",
    title: "Developer",
    avatar: CartarAvatar,
    github: "@realCartar",
    discord: "@cartar.",
    display: 4,
  },
  {
    name: "FreezIn",
    title: "Developer",
    avatar: FreezInAvatar,
    github: "@alexy4744",
    discord: "@alexy4744",
    display: 5,
  },
  {
    name: "haste",
    title: "Developer",
    avatar: hasteAvatar,
    github: "@hhaste",
    discord: "@hastilion",
    display: 6,
  },
  {
    name: "ImDarkDiamond",
    title: "Developer",
    avatar: ImDarkDiamondAvatar,
    github: "@ImDarkDiamond",
    discord: "@imdarkdiamond",
    display: 7,
  },
  {
    name: "Ittim",
    title: "Developer",
    avatar: IttimAvatar,
    github: "@TheIttim",
    discord: "@ittim",
    display: 8,
  },
  {
    name: "polaris",
    title: "Developer",
    avatar: polarisAvatar,
    github: "@impolqris",
    discord: "@impolaris",
    display: 9,
  },
  {
    name: "Yahiko",
    title: "Developer",
    avatar: YahikoAvatar,
    github: "@KnowItAllKing",
    discord: "@knowitallking",
    display: "Back",
    borderColor: "red",
  },
  {
    name: "Moord",
    title: "Support Team",
    avatar: MoordAvatar,
    discord: "@moordymoord",
    display: "0",
  },
  {
    name: "whomity",
    title: "Support Team",
    avatar: whomityAvatar,
    discord: "@tommy.liu",
    display: "Enter",
    borderColor: "green",
  },
];

export default function AvatarGrid() {
  return (
    <Container>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 40, lg: 50 }}
        mt={40}
        className={classes.grid}
      >
        {team.map((member) => (
          <UserIcon
            key={member.name}
            avatar={member.avatar}
            name={member.name}
            title={member.title}
            discord={member.discord}
            github={member.github}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
