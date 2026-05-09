const fs = require("fs");
const path = require("path");

const root = process.cwd();
const categoryRoot = path.join(root, "category");
const outFile = path.join(root, "posts-manifest.js");

function toPosix(value) {
  return value.replace(/\\/g, "/");
}

function titleFromFile(filePath) {
  const name = path.basename(filePath, ".md");
  return name === "README" ? "README" : name;
}

function titleFromSegment(segment) {
  return segment
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const posts = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      posts.push(...walk(fullPath));
      continue;
    }

    if (!entry.isFile() || path.extname(entry.name).toLowerCase() !== ".md") {
      continue;
    }

    const relativeFile = toPosix(path.relative(root, fullPath));
    const relativeDir = toPosix(path.dirname(relativeFile));
    const categorySegments = toPosix(path.relative(categoryRoot, path.dirname(fullPath)))
      .split("/")
      .filter(Boolean)
      .map(titleFromSegment);

    posts.push({
      title: titleFromFile(entry.name),
      file: relativeFile,
      category: categorySegments,
      categoryPath: relativeDir,
      content: fs.readFileSync(fullPath, "utf8")
    });
  }

  return posts;
}

const posts = walk(categoryRoot).sort((a, b) => a.file.localeCompare(b.file, "ko"));
const featuredFiles = [
  "category/cloud/kubernetes/README.md",
  "category/cloud/kubernetes/1-1_k8s 기초.md",
  "category/cloud/kubernetes/3-2_Rolling Update 전략.md",
  "category/cloud/kubernetes/4-1_Service and Networking.md"
];

const content = `window.BLOG_POSTS = ${JSON.stringify(posts, null, 2)};
window.BLOG_FEATURED_FILES = ${JSON.stringify(featuredFiles, null, 2)};
`;

fs.writeFileSync(outFile, content, "utf8");
console.log(`generated ${posts.length} post manifest entries`);
