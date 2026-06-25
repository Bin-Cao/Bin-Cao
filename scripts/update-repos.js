const fs = require("node:fs");
const https = require("node:https");

const README_PATH = "README.md";
const START_MARKER = "<!-- REPOS:START -->";
const END_MARKER = "<!-- REPOS:END -->";
const OWNER =
  process.env.PROFILE_OWNER ||
  (process.env.GITHUB_REPOSITORY || "Bin-Cao/Bin-Cao").split("/")[0];
const TOKEN = process.env.GITHUB_TOKEN;

function requestJson(url) {
  return new Promise((resolve, reject) => {
    const headers = {
      "User-Agent": `${OWNER}-profile-readme-updater`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    if (TOKEN) {
      headers.Authorization = `Bearer ${TOKEN}`;
    }

    https
      .get(url, { headers }, (res) => {
        let body = "";

        res.on("data", (chunk) => {
          body += chunk;
        });

        res.on("end", () => {
          if (res.statusCode < 200 || res.statusCode >= 300) {
            reject(
              new Error(
                `GitHub API request failed: ${res.statusCode} ${res.statusMessage}\n${body}`,
              ),
            );
            return;
          }

          try {
            resolve(JSON.parse(body));
          } catch (error) {
            reject(error);
          }
        });
      })
      .on("error", reject);
  });
}

async function fetchPublicRepos() {
  const repos = [];

  for (let page = 1; ; page += 1) {
    const url = new URL(`https://api.github.com/users/${OWNER}/repos`);
    url.searchParams.set("type", "public");
    url.searchParams.set("sort", "updated");
    url.searchParams.set("direction", "desc");
    url.searchParams.set("per_page", "100");
    url.searchParams.set("page", String(page));

    const batch = await requestJson(url);
    repos.push(...batch);

    if (batch.length < 100) {
      break;
    }
  }

  return repos;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  }).format(new Date(value));
}

function escapeMarkdown(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/\|/g, "\\|")
    .replace(/\n/g, " ")
    .trim();
}

function buildRepoTable(repos) {
  const sortedRepos = repos
    .filter((repo) => !repo.private)
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }

      return new Date(b.updated_at) - new Date(a.updated_at);
    });

  if (sortedRepos.length === 0) {
    return "_No public repositories found._";
  }

  const rows = sortedRepos.map((repo) => {
    const name = repo.fork ? `${repo.name} (fork)` : repo.name;
    const description = escapeMarkdown(repo.description || "No description");
    const language = escapeMarkdown(repo.language || "-");
    const stars = repo.stargazers_count.toLocaleString("en-US");
    const forks = repo.forks_count.toLocaleString("en-US");
    const updated = formatDate(repo.updated_at);

    return `| [${escapeMarkdown(name)}](${repo.html_url}) | ${description} | ${language} | ${stars} | ${forks} | ${updated} |`;
  });

  return [
    `<!-- Last updated: ${new Date().toISOString()} -->`,
    "",
    `Total public repositories: **${sortedRepos.length}**`,
    "",
    "| Repository | Description | Language | Stars | Forks | Updated |",
    "| --- | --- | --- | ---: | ---: | --- |",
    ...rows,
  ].join("\n");
}

function updateReadme(generatedContent) {
  const readme = fs.readFileSync(README_PATH, "utf8");
  const start = readme.indexOf(START_MARKER);
  const end = readme.indexOf(END_MARKER);

  if (start === -1 || end === -1 || start > end) {
    throw new Error(
      `Could not find ${START_MARKER} and ${END_MARKER} markers in ${README_PATH}`,
    );
  }

  const before = readme.slice(0, start + START_MARKER.length);
  const after = readme.slice(end);
  const nextReadme = `${before}\n${generatedContent}\n${after}`;

  fs.writeFileSync(README_PATH, nextReadme);
}

async function main() {
  const repos = await fetchPublicRepos();
  updateReadme(buildRepoTable(repos));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
