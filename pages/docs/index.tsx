import GettingStarted from './getting-started.mdx';

interface DocsProps {}
export default function Docs({}: DocsProps) {
  const meta = {
    title: "Getting started",
  }
  return (
    <GettingStarted
      meta={meta}
    />
  );
}
