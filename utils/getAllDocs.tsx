import slugify from "slugify";
function importAll(r: any) {
  return r.keys().map((fileName: string) => {
    let slug = slugify(fileName.substr(2).replace(/\.mdx$/, ""), {
      lower: true,
    });
    return {
      slug: slug,
      link: `${fileName.substr(1).replace(/\/index\.mdx$/, "")}`,
      module: r(fileName),
    };
  });
}

function dateSortDesc(a: number, b: number) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
export function createDocList(files: any, base: string) {
  return importAll(files).reduce((acc: any, cur: any) => {
    let slug = cur.slug;
    return {
      ...acc,
      [slug]: { ...cur.module.default, href: `/${base}/${slug}`, title: cur.module.meta.title },
    };
  }, {});
}

export function getAllDocsPreviews() {
  return importAll(require.context("../pages/docs/?preview", false, /\.mdx$/))
    .filter((p: any) => p.module.meta.private !== true)
    .sort((a: any, b: any) =>
      dateSortDesc(a.module.meta.date, b.module.meta.date)
    );
}
