import classes from "./SectionHeader.module.css";

import { Title } from "@mantine/core";

interface SectionHeaderProps {
  title: string;
  highlight?: string;
}

export default function SectionHeader({
  title,
  highlight,
}: SectionHeaderProps) {
  return (
    <Title order={3} className={classes.title}>
      {highlight
        ? title.split(" ").map((word, index) =>
            word.toLowerCase() === highlight.toLowerCase() ? (
              <span key={index} className="highlight">
                {word}
              </span>
            ) : (
              `${word} `
            )
          )
        : title}
    </Title>
  );
}
