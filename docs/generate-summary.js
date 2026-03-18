const fs = require("fs");
const path = require("path");

// Browse each language folder by name to collects all indexes references
const LANGS = [
  { code: "en", label: "Guide-English" },
  { code: "fr", label: "Guide-Français" },
];

function getTitle(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const match = content.match(/^#\s+(.*)/m);
  return match ? match[1].trim() : path.basename(filePath, ".md");
}

function walk(dir, level = 1) {
  let result = "";
  const files = fs.readdirSync(dir).sort();
  
  for (const file of files) {
    if (file.startsWith(".") ||
        file === "README.md"
       ) continue;

    const full = path.join(dir, file);

    if (fs.statSync(full).isDirectory()) {
      result += walk(full, level + 1);
    } else if (file.endsWith(".md") && file !== "SUMMARY.md") {
      const title = getTitle(full);
      const indent = "  ".repeat(level);
      result += `${indent}- [${title}](${file})\n`;
    }
  }

  return result;
}

// Generation for each langage of it's own SUMMARY with all indexes
LANGS.forEach(({ code, label }) => {
  const folder = path.join(".", code);
  if (!fs.existsSync(folder)) return;

  const summaryPath = path.join(folder, "SUMMARY.md");
  const introFile = path.join(folder, "README.md");

  let summary = "# Summary\n\n";
  if (fs.existsSync(introFile)) {
    summary += `- [${label}](${path.basename(introFile)})\n`;
  } else {
    summary += `- ${label}\n`;
  } 

  summary += walk(folder);

  fs.writeFileSync(summaryPath, summary);
  console.log(`✅ ${summaryPath} généré`);
});
