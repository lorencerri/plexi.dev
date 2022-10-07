import { AppShell, Title, Header, Group, Button } from "@mantine/core";
import styled from "@emotion/styled";

export default function Index() {
    return (
        <AppShell
            padding="md"
            header={
                <StyledHeader height={60} p="xs">
                    <Group sx={{ height: "100%" }} pl={15} position="apart">
                        <Title order={2}>
                            <StyledTitle>Plexi</StyledTitle> Development
                        </Title>
                        <Button<"a">
                            component="a"
                            href="https://discord.gg/plexidev"
                            target="_blank"
                            variant="outline"
                        >
                            Discord
                        </Button>
                    </Group>
                </StyledHeader>
            }
        >
            &nbsp;
        </AppShell>
    );
}

const StyledTitle = styled.span`
    color: #3b5bdb;
`;

const StyledHeader = styled(Header)`
    border: none;
`;
