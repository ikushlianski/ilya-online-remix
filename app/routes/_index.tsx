import { Title, useMantineTheme } from "@mantine/core";

export default function Index() {
  const theme = useMantineTheme();

  return (
    <div>
      <Title>Index</Title>
      <p
        style={{
          fontSize: theme.fontSizes.xs,
        }}
      >
        Welcome to the Mantine + Remix starter. <b>This is the index route.</b>{" "}
        You can edit this file to start building your app.
      </p>
    </div>
  );
}
