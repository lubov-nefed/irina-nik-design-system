import { Heading } from "../components/Heading/Heading";
function Headings() {
  return (
    <>
      Headings
      <br />
      <Heading className={""} level={1}>
        Headline 1
      </Heading>
      <Heading className={"article-heading"} level={2}>
        Headline 2
      </Heading>
      <Heading className={"article-heading"} level={3}>
        Headline 3
      </Heading>
      <Heading className={"article-heading"} level={4}>
        Headline 4
      </Heading>
    </>
  );
}

export { Headings };
