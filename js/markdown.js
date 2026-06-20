const content = document.getElementById("content");

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/\[FAVICON\]/g, '<img class="inline-favicon" src="/favicon.ico" alt="">')
    .replace(/\[AGI_WEEKS\]/g, '<span id="agi-weeks">...</span>')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img class="profile-photo" src="$2" alt="$1">')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function renderParagraph(lines) {
  if (!lines.length) return "";
  return `<p>${inlineMarkdown(lines.join(" "))}</p>`;
}

function renderMarkdown(markdown) {
  const lines = markdown.trim().split("\n");
  const html = [];
  let paragraph = [];
  let listOpen = false;
  let nestedOpen = false;

  function closeParagraph() {
    if (paragraph.length) {
      html.push(renderParagraph(paragraph));
      paragraph = [];
    }
  }

  function closeList() {
    if (nestedOpen) {
      html.push("</ul>");
      nestedOpen = false;
    }
    if (listOpen) {
      html.push("</ul>");
      listOpen = false;
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      closeParagraph();
      continue;
    }

    if (trimmed.startsWith("<")) {
      closeParagraph();
      closeList();
      html.push(trimmed);
      continue;
    }

    if (trimmed.startsWith("# ")) {
      closeParagraph();
      closeList();
      html.push(`<h1>${inlineMarkdown(trimmed.slice(2))}</h1>`);
      continue;
    }

    if (trimmed.startsWith("## ")) {
      closeParagraph();
      closeList();
      html.push(`<h2>${inlineMarkdown(trimmed.slice(3))}</h2>`);
      continue;
    }

    if (trimmed.startsWith("### ")) {
      closeParagraph();
      closeList();
      html.push(`<h3>${inlineMarkdown(trimmed.slice(4))}</h3>`);
      continue;
    }

    if (trimmed.startsWith("- ")) {
      closeParagraph();
      const isNested = line.startsWith("  ");

      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }

      if (isNested && !nestedOpen) {
        html.push("<ul>");
        nestedOpen = true;
      }

      if (!isNested && nestedOpen) {
        html.push("</ul>");
        nestedOpen = false;
      }

      html.push(`<li>${inlineMarkdown(trimmed.slice(2))}</li>`);
      continue;
    }

    closeList();
    paragraph.push(trimmed);
  }

  closeParagraph();
  closeList();
  return html.join("\n");
}

const markdownPath = content.dataset.markdown || "/content.md";

function updateAgiCountdown() {
  const agiWeeks = document.getElementById("agi-weeks");

  if (agiWeeks) {
    const target = new Date("2029-01-01T00:00:00");
    const now = new Date();
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
    const weeks = Math.max(0, Math.ceil((target - now) / millisecondsPerWeek));
    agiWeeks.textContent = weeks;
  }
}

fetch(markdownPath)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Could not load ${markdownPath}`);
    }
    return response.text();
  })
  .then((markdown) => {
    content.innerHTML = renderMarkdown(markdown);
    updateAgiCountdown();
  })
  .catch(() => {
    content.textContent = "Could not load content.";
  });
