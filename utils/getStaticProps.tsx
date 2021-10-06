import { getAllDocsPreviews } from "./getAllDocs";

export async function getStaticProps() {
  return {
    props: {
      docs: getAllDocsPreviews().map((post: any) => ({
        title: post.module.meta.title,
        link: post.link,
      })),
    },
  };
}
