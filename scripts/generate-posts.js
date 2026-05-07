const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");
const hljs = require("highlight.js");

const root = process.cwd();
const outDir = path.join(root, "posts", "kubernetes");

const posts = [
  { title: "README", file: "category/cloud/kubernetes/README.md", slug: "readme.html" },
  { title: "0 환경셋팅", file: "category/cloud/kubernetes/0_환경셋팅.md", slug: "0-environment.html" },
  { title: "1-1 k8s 기초", file: "category/cloud/kubernetes/1-1_k8s 기초.md", slug: "1-1-k8s-basics.html" },
  { title: "1-2 yaml 구조", file: "category/cloud/kubernetes/1-2_yaml 구조.md", slug: "1-2-yaml-structure.html" },
  { title: "1-3 명령어 정리", file: "category/cloud/kubernetes/1-3_명령어 정리.md", slug: "1-3-commands.html" },
  { title: "2-1 pod", file: "category/cloud/kubernetes/2-1_pod.md", slug: "2-1-pod.html" },
  { title: "2-2 multi container pod", file: "category/cloud/kubernetes/2-2_multi container pod.md", slug: "2-2-multi-container-pod.html" },
  { title: "2-3 init container", file: "category/cloud/kubernetes/2-3_init container.md", slug: "2-3-init-container.html" },
  { title: "2-4 sidecar 패턴", file: "category/cloud/kubernetes/2-4_sidecar 패턴.md", slug: "2-4-sidecar-pattern.html" },
  { title: "3-1 Workload(Deployment, ReplicaSet)", file: "category/cloud/kubernetes/3-1_Workload(Deployment, ReplicaSet).md", slug: "3-1-workload.html" },
  { title: "3-2 Rolling Update 전략", file: "category/cloud/kubernetes/3-2_Rolling Update 전략.md", slug: "3-2-rolling-update.html" },
  { title: "3-3 Deployment 실전 명령어", file: "category/cloud/kubernetes/3-3_Deployment 실전 명령어.md", slug: "3-3-deployment-commands.html" },
  { title: "4-1 Service and Networking", file: "category/cloud/kubernetes/4-1_Service and Networking.md", slug: "4-1-service-networking.html" },
  { title: "4-2 DNS and Ingress", file: "category/cloud/kubernetes/4-2_DNS and Ingress.md", slug: "4-2-dns-ingress.html" },
  { title: "5-1 Config 관리", file: "category/cloud/kubernetes/5-1_Config 관리.md", slug: "5-1-config.html" },
  { title: "6-1 Storage", file: "category/cloud/kubernetes/6-1_Storage.md", slug: "6-1-storage.html" },
  { title: "Pod 문제 q1", file: "category/cloud/kubernetes/questions/pod/q1.md", slug: "questions-pod-q1.html" }
];

const postByFile = new Map(posts.map((post) => [post.file, `posts/kubernetes/${post.slug}`]));

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isExternalUrl(value) {
  return /^(https?:)?\/\//i.test(value) || value.startsWith("data:") || value.startsWith("#");
}

function toRelativeFromPost(sourceFile, assetPath) {
  const base = path.join(root, path.dirname(sourceFile));
  const target = path.resolve(base, assetPath);
  return path.relative(outDir, target).replace(/\\/g, "/");
}

function createRenderer(sourceFile) {
  const md = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
    breaks: true,
    highlight(code, language) {
      if (language && hljs.getLanguage(language)) {
        try {
          return `<pre><code class="hljs language-${escapeHtml(language)}">${hljs.highlight(code, { language, ignoreIllegals: true }).value}</code></pre>`;
        } catch (_) {}
      }

      return `<pre><code class="hljs">${escapeHtml(code)}</code></pre>`;
    }
  });

  const defaultImage = md.renderer.rules.image;
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const srcIndex = token.attrIndex("src");
    if (srcIndex >= 0) {
      const src = token.attrs[srcIndex][1];
      if (!isExternalUrl(src) && !src.startsWith("/")) {
        token.attrs[srcIndex][1] = toRelativeFromPost(sourceFile, src);
      }
    }

    return defaultImage(tokens, idx, options, env, self);
  };

  const defaultLinkOpen = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const hrefIndex = token.attrIndex("href");
    if (hrefIndex >= 0) {
      const href = token.attrs[hrefIndex][1];
      if (href.endsWith(".md") && !isExternalUrl(href) && !href.startsWith("/")) {
        const resolved = path.relative(root, path.resolve(root, path.dirname(sourceFile), href)).replace(/\\/g, "/");
        const mapped = postByFile.get(resolved);
        if (mapped) {
          token.attrs[hrefIndex][1] = path.relative(outDir, path.join(root, mapped)).replace(/\\/g, "/");
        }
      }
    }

    return defaultLinkOpen(tokens, idx, options, env, self);
  };

  return md;
}

function pageTemplate(post, content) {
  const categoryPath = path.dirname(post.file).replace(/^category[\\/]/, "").replace(/\\/g, " / ").replace(/\//g, " / ");

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(post.title)} | Junnnhhh Blog</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@5.8.1/github-markdown-light.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.11.1/styles/github.min.css">
  <link rel="stylesheet" href="../post.css">
</head>
<body>
  <header class="topbar">
    <div class="shell topbar-inner">
      <a class="brand" href="../../index.html">Junnnhhh.dev</a>
      <a class="back-link" href="../../index.html#posts">목록으로</a>
    </div>
  </header>
  <main class="shell article-wrap">
    <header class="article-head">
      <h1>${escapeHtml(post.title)}</h1>
      <p>${escapeHtml(categoryPath)}</p>
    </header>
    <article class="markdown-body article">
${content}
    </article>
  </main>
</body>
</html>
`;
}

fs.mkdirSync(outDir, { recursive: true });

for (const post of posts) {
  const source = path.join(root, post.file);
  const markdown = fs.readFileSync(source, "utf8");
  const md = createRenderer(post.file);
  const html = pageTemplate(post, md.render(markdown));
  fs.writeFileSync(path.join(outDir, post.slug), html, "utf8");
}

console.log(`generated ${posts.length} posts`);
