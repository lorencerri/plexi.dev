import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Plexi Development",
  viewport: "width=device-width,initial-scale=1",
  description:
    "We're a community of developers and creators centered around creating user-friendly applications and developer resources.",
  "theme-color": "#3b5bdb",
  "og:image": "https://www.plexidev.org/logo.webp",
});

createEmotionCache({ key: "mantine" });

export default function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}
