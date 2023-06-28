import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    borderBottom: "none",
    marginBottom: 120,
    [theme.fn.smallerThan("sm")]: {
      marginBottom: 10,
    },
  },

  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
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

export default function CustomHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={60} className={classes.header}>
      <Container className={classes.headerContainer}>
        <Title order={2}>
          <span style={{ color: "#3b5bdb" }}>plexi</span>.dev
        </Title>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
