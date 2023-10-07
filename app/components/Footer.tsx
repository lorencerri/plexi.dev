import Logo from "~/routes/_index/Logo";
import classes from "./Footer.module.css";
import { Anchor, Group, Title } from "@mantine/core";

interface FooterProps {
  links?: { url: string; label: string }[];
}

export default function Footer({ links }: FooterProps) {
  return (
    <Group className={classes.footer}>
      <Title order={2} className={classes.title}>
        <Logo />
      </Title>
      {links && (
        <Group className={classes.links}>
          {links.map((link, index) => {
            return (
              <Anchor key={index} c="dimmed" className={classes.link}>
                {link.label}
              </Anchor>
            );
          })}
        </Group>
      )}
    </Group>
  );
}
