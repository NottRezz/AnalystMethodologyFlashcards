
let filtered = [...CARDS];
let current = 0;
let mode = "browse";
let progress = JSON.parse(localStorage.getItem("saInterviewProgressV2") || "{}");
let timer = null;
let rawMatches = [];
let rawMatchIndex = 0;

const $ = (id) => document.getElementById(id);

function cardId(card) {
    return `${card.category}::${card.q}`;
}

function statusOf(card) {
    return progress[cardId(card)] || "New";
}

function save() {
    localStorage.setItem("saInterviewProgressV2", JSON.stringify(progress));
}

function setup() {
    const cats = ["All", ...new Set(CARDS.map(c => c.category))];
    $("categoryFilter").innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join("");
    $("rawText").textContent = RAW_QUESTIONS;
    bindEvents();
    applyFilters();
    renderRaw();
}

function bindEvents() {
    $("categoryFilter").addEventListener("change", applyFilters);
    $("difficultyFilter").addEventListener("change", applyFilters);
    $("statusFilter").addEventListener("change", applyFilters);
    $("searchInput").addEventListener("input", applyFilters);

    $("flashcard").addEventListener("click", flip);
    $("flipBtn").addEventListener("click", flip);
    $("nextBtn").addEventListener("click", next);
    $("prevBtn").addEventListener("click", previous);
    $("shuffleBtn").addEventListener("click", shuffle);
    $("knowBtn").addEventListener("click", () => mark("Know It"));
    $("learningBtn").addEventListener("click", () => mark("Learning"));
    $("reviewBtn").addEventListener("click", () => mark("Review"));

    $("resetBtn").addEventListener("click", reset);
    $("printBtn").addEventListener("click", () => window.print());
    $("exportBtn").addEventListener("click", exportProgress);

    $("rawKeyword").addEventListener("input", renderRaw);
    $("rawNext").addEventListener("click", nextRawMatch);
    $("rawPrev").addEventListener("click", prevRawMatch);

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => setView(btn.dataset.view));
    });

    document.querySelectorAll(".mode-btn").forEach(btn => {
        btn.addEventListener("click", () => setMode(btn.dataset.mode));
    });

    document.querySelectorAll(".timer-btn").forEach(btn => {
        btn.addEventListener("click", () => startTimer(Number(btn.dataset.minutes)));
    });

    document.addEventListener("keydown", e => {
        if (["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName)) return;

        if (e.code === "Space") {
            e.preventDefault();
            flip();
        }

        if (e.key === "ArrowRight" || e.key.toLowerCase() === "n") next();
        if (e.key === "ArrowLeft") previous();
        if (e.key.toLowerCase() === "s") shuffle();
        if (e.key === "1") mark("Know It");
        if (e.key === "2") mark("Learning");
        if (e.key === "3") mark("Review");
    });
}

function setView(view) {
    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    $(`${view}View`).classList.add("active");
    renderDashboard();
}

function setMode(newMode) {
    mode = newMode;
    document.querySelectorAll(".mode-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
    applyFilters();
}

function applyFilters() {
    const cat = $("categoryFilter").value;
    const diff = $("difficultyFilter").value;
    const status = $("statusFilter").value;
    const search = $("searchInput").value.trim().toLowerCase();

    filtered = CARDS.filter(card => {
        const haystack = [
            card.category,
            card.difficulty,
            card.q,
            card.a,
            card.why,
            ...(card.keywords || [])
        ].join(" ").toLowerCase();

        const matchCat = cat === "All" || card.category === cat;
        const matchDiff = diff === "All" || card.difficulty === diff;
        const matchStatus = status === "All" || statusOf(card) === status;
        const matchSearch = !search || haystack.includes(search);

        return matchCat && matchDiff && matchStatus && matchSearch;
    });

    if (mode === "quiz") filtered = shuffleCopy(filtered);
    if (mode === "weak") filtered = filtered.filter(c => ["Learning", "Review", "New"].includes(statusOf(c)));
    if (mode === "scenario") filtered = filtered.filter(c => c.difficulty === "Scenario");

    current = 0;
    render();
}

function render() {
    if (!filtered.length) {
        $("questionText").textContent = "No cards match this filter.";
        $("answerText").textContent = "Try a different category, status, or keyword.";
        $("whyText").textContent = "";
        $("catBadge").textContent = "None";
        $("diffBadge").textContent = "None";
        $("statusBadge").textContent = "New";
        $("positionBadge").textContent = "0 / 0";
        $("flashcard").classList.remove("flipped");
        renderCounts();
        renderList();
        renderDashboard();
        return;
    }

    const card = filtered[current];
    $("questionText").textContent = card.q;
    $("answerText").textContent = card.a;
    $("whyText").textContent = "Why this matters: " + card.why;
    $("catBadge").textContent = card.category;
    $("diffBadge").textContent = card.difficulty;
    $("statusBadge").textContent = statusOf(card);
    $("positionBadge").textContent = `${current + 1} / ${filtered.length}`;
    $("flashcard").classList.remove("flipped");

    updateCoach(card);
    renderCounts();
    renderList();
    renderDashboard();
}

function updateCoach(card) {
    const tips = {
        "Foundation": "Give a clean definition first. Do not over-explain.",
        "Practical": "Explain what it does and why it matters in real work.",
        "Interview": "Use a complete answer: define it, explain value, give one example.",
        "Scenario": "Use a structured response: assess, communicate, act, review."
    };
    $("coachText").textContent = tips[card.difficulty] || "Keep it clear and practical.";
}

function renderCounts() {
    $("visibleCount").textContent = filtered.length;
    $("knowCount").textContent = CARDS.filter(c => statusOf(c) === "Know It").length;
    $("learningCount").textContent = CARDS.filter(c => statusOf(c) === "Learning").length;
    $("reviewCount").textContent = CARDS.filter(c => statusOf(c) === "Review").length;
}

function renderList() {
    $("cardList").innerHTML = filtered.map((card, i) => `
        <div class="mini-card ${i === current ? "active" : ""}" onclick="jumpTo(${i})">
            <strong>${card.q}</strong>
            <span>${card.category} • ${card.difficulty} • ${statusOf(card)}</span>
        </div>
    `).join("");
}

function renderDashboard() {
    const categories = [...new Set(CARDS.map(c => c.category))];

    $("categoryProgress").innerHTML = categories.map(cat => {
        const group = CARDS.filter(c => c.category === cat);
        const known = group.filter(c => statusOf(c) === "Know It").length;
        const pct = Math.round((known / group.length) * 100);
        return `
            <div class="progress-row">
                <span>${cat}</span>
                <div class="track"><div class="fill" style="width:${pct}%"></div></div>
                <span>${pct}%</span>
            </div>
        `;
    }).join("");

    const weak = CARDS.filter(c => ["Review", "Learning", "New"].includes(statusOf(c))).slice(0, 12);
    $("weakList").innerHTML = weak.length ? weak.map(card => `
        <div class="weak-item">
            <strong>${card.q}</strong>
            <span>${card.category} • ${card.difficulty} • ${statusOf(card)}</span>
        </div>
    `).join("") : "<p>Nothing here yet. Mark cards as Learning or Review to track weak spots.</p>";
}

function flip() {
    $("flashcard").classList.toggle("flipped");
}

function next() {
    if (!filtered.length) return;
    current = mode === "quiz" ? Math.floor(Math.random() * filtered.length) : (current + 1) % filtered.length;
    render();
}

function previous() {
    if (!filtered.length) return;
    current = (current - 1 + filtered.length) % filtered.length;
    render();
}

function jumpTo(index) {
    current = index;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function mark(status) {
    if (!filtered.length) return;
    progress[cardId(filtered[current])] = status;
    save();
    next();
}

function shuffle() {
    filtered = shuffleCopy(filtered);
    current = 0;
    render();
}

function shuffleCopy(list) {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function reset() {
    if (!confirm("Reset all saved progress?")) return;
    progress = {};
    save();
    render();
}

function exportProgress() {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "interview-flashcard-progress.json";
    a.click();
    URL.revokeObjectURL(url);
}

function startTimer(minutes) {
    clearInterval(timer);
    let remaining = minutes * 60;

    function tick() {
        const m = Math.floor(remaining / 60);
        const s = String(remaining % 60).padStart(2, "0");
        $("timerText").textContent = `${m}:${s}`;

        if (remaining <= 0) {
            clearInterval(timer);
            $("timerText").textContent = "Time. Clean up the answer and move on.";
        }

        remaining--;
    }

    tick();
    timer = setInterval(tick, 1000);
}


function escapeHtml(value) {
    return value.replace(/[&<>"']/g, ch => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[ch]));
}

function normalizeText(value) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function editDistance(a, b) {
    const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            matrix[i][j] = b[i - 1] === a[j - 1]
                ? matrix[i - 1][j - 1]
                : Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
        }
    }

    return matrix[b.length][a.length];
}

function tokenMatches(queryToken, fieldToken) {
    if (!queryToken || !fieldToken) return false;
    if (fieldToken.includes(queryToken) || queryToken.includes(fieldToken)) return true;

    if (queryToken.length >= 5 && fieldToken.length >= 5) {
        return editDistance(queryToken, fieldToken) <= 2;
    }

    if (queryToken.length >= 4 && fieldToken.length >= 4) {
        return editDistance(queryToken, fieldToken) <= 1;
    }

    return false;
}

function scoreCardForRawSearch(card, query) {
    const queryTokens = normalizeText(query).split(" ").filter(Boolean);
    if (!queryTokens.length) return 0;

    const searchableFields = [
        { value: card.q, weight: 8 },
        { value: card.a, weight: 5 },
        { value: card.why, weight: 4 },
        { value: card.category, weight: 3 },
        { value: card.difficulty, weight: 2 },
        { value: (card.keywords || []).join(" "), weight: 7 }
    ];

    let score = 0;
    const matchedTokens = new Set();

    searchableFields.forEach(field => {
        const normalizedField = normalizeText(field.value);
        const fieldTokens = normalizedField.split(" ").filter(Boolean);

        queryTokens.forEach(qt => {
            let matched = false;

            if (normalizedField.includes(qt)) {
                score += field.weight * 2;
                matched = true;
            } else if (fieldTokens.some(ft => tokenMatches(qt, ft))) {
                score += field.weight;
                matched = true;
            }

            if (matched) matchedTokens.add(qt);
        });
    });

    // Reward cards that match more of the user's input, not just one word.
    score += matchedTokens.size * 10;

    // If every query token matched somewhere, heavily boost it.
    if (matchedTokens.size === queryTokens.length) {
        score += 25;
    }

    // Light conceptual boosts for common interview wording.
    const normalizedQuery = normalizeText(query);
    const joinedKeywords = normalizeText((card.keywords || []).join(" "));
    const fullCard = normalizeText(`${card.q} ${card.a} ${card.why} ${joinedKeywords}`);

    const conceptGroups = [
        ["impact", "affect", "benefit", "why", "matter"],
        ["dev", "developer", "team", "development"],
        ["problem", "root", "cause", "recurring"],
        ["incident", "outage", "restore", "service"],
        ["change", "deploy", "deployment", "rollback", "approval"],
        ["agile", "scrum", "sprint", "backlog"],
        ["requirement", "stakeholder", "analysis", "business"]
    ];

    conceptGroups.forEach(group => {
        const queryHasGroup = group.some(word => normalizedQuery.includes(word));
        const cardHasGroup = group.some(word => fullCard.includes(word));
        if (queryHasGroup && cardHasGroup) score += 6;
    });

    return score;
}

function buildInterviewAnswer(card, query) {
    const q = normalizeText(query);

    if (q.includes("impact") || q.includes("affect") || q.includes("dev") || q.includes("team")) {
        if (card.q.toLowerCase().includes("problem management") || (card.keywords || []).includes("problem management")) {
            return "Interview-style answer: Problem management helps a development team move beyond quick fixes. Instead of only resolving the incident, the team investigates the root cause, documents what happened, and makes changes so the same issue does not keep coming back. That improves reliability, reduces repeated support work, and gives developers clearer information when fixing defects.";
        }

        if (card.category === "ITIL 4") {
            return "Interview-style answer: This impacts a dev team by giving structure around support, reliability, communication, and continuous improvement. It helps the team understand not just what broke, but how to reduce repeat issues and support the service better.";
        }
    }

    if (q.includes("how") || q.includes("why") || q.includes("impact")) {
        return `Interview-style answer: ${card.a} In practice, this matters because ${card.why.charAt(0).toLowerCase() + card.why.slice(1)}`;
    }

    return `Quick answer: ${card.a}`;
}

function highlightTerms(text, query) {
    let output = escapeHtml(text);
    const terms = normalizeText(query).split(" ").filter(t => t.length > 1);

    terms.forEach(term => {
        const safeTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`(${safeTerm})`, "gi");
        output = output.replace(regex, '<span class="raw-hit">$1</span>');
    });

    return output;
}

function renderRaw() {
    const query = $("rawKeyword").value.trim();

    if (!query) {
        $("rawText").innerHTML = `
Type a messy interview phrase above and this will pull relevant cards.

Examples:
- problem management impact dev team
- poblem management impact
- emergency change production broken
- sprint review vs retrospective
- unclear requirements stakeholder
- rollback deployment failed
- incident restore service
`;
        $("rawMatchInfo").textContent = "Type to search";
        rawMatches = [];
        return;
    }

    const results = CARDS
        .map(card => ({ card, score: scoreCardForRawSearch(card, query) }))
        .filter(result => result.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 12);

    $("rawMatchInfo").textContent = `${results.length} relevant result${results.length === 1 ? "" : "s"}`;

    if (!results.length) {
        $("rawText").innerHTML = `No strong matches found.

Try fewer words or one core concept:
- incident
- problem management
- rollback
- sprint
- requirements
- stakeholder
- change`;
        rawMatches = [];
        return;
    }

    $("rawText").innerHTML = results.map((result, index) => {
        const card = result.card;
        return `
RESULT ${index + 1}  •  ${escapeHtml(card.category)}  •  ${escapeHtml(card.difficulty)}  •  relevance ${Math.round(result.score)}

Question:
${highlightTerms(card.q, query)}

Best answer:
${highlightTerms(card.a, query)}

How to say it in the interview:
${highlightTerms(buildInterviewAnswer(card, query), query)}

Related keywords:
${highlightTerms((card.keywords || []).join(", "), query)}

------------------------------------------------------------
`;
    }).join("");

    rawMatches = [...$("rawText").querySelectorAll(".raw-hit")];
    rawMatchIndex = 0;
    if (rawMatches.length) {
        rawMatches[0].classList.add("raw-current");
        rawMatches[0].scrollIntoView({ block: "center" });
    }
}

function updateRawCurrent() {
    rawMatches.forEach((el, i) => el.classList.toggle("raw-current", i === rawMatchIndex));
    if (rawMatches[rawMatchIndex]) rawMatches[rawMatchIndex].scrollIntoView({ block: "center", behavior: "smooth" });
}

function nextRawMatch() {
    if (!rawMatches.length) return;
    rawMatchIndex = (rawMatchIndex + 1) % rawMatches.length;
    updateRawCurrent();
}

function prevRawMatch() {
    if (!rawMatches.length) return;
    rawMatchIndex = (rawMatchIndex - 1 + rawMatches.length) % rawMatches.length;
    updateRawCurrent();
}

setup();
