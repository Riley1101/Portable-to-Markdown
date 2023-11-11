import toMarkdown from "@sanity/block-content-to-markdown";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  useCdn: true,
});

const query = `
*[_type == "article"]{
    ...,
  body[]{
    ..., 
    asset->{
      ...,
      "_key": _id
    }
  }}[0...5]`;

const serializers = {
  types: {
    code: (props) =>
      "```" + props.node.language + "\n" + props.node.code + "\n```",
  },
};

function writeToFile(article, markdown) {
  const slug = article.slug.current;
  console.log("==== writing file for slug: ", slug, " ====");
  Bun.write(`./articles/${slug}.md`, markdown, function (err) {
    if (err) {
      throw err;
    }
  });
  console.log("==== DONE!", slug, " ====");
}

function generateMarkdown(article) {
  let markdown = toMarkdown(article.body, { serializers });
  const frontmatter = `---
id: ${article._id}
title: ${article.title}
description: ${article.description}
slug: ${article.slug.current}
publishedAt: ${article.publishedAt}
---\n
`;
  markdown = frontmatter + markdown;
  return markdown;
}

client.fetch(query).then((articles) => {
  for (const article of articles) {
    const markdown = generateMarkdown(article);
    writeToFile(article, markdown);
  }
});
