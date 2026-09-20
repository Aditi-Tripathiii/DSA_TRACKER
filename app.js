const RESOURCES = {
  course: {
    name: "100x DSA lessons",
    shortName: "100x lectures",
    url: "https://100xdevs.com/new-courses/29/content?parentId=c_d7831e62-a4b2-4331-b0b1-8b03174a3552",
    description: "Your learning spine: watch the concept, code the examples, and carry the idea into practice.",
    icon: "01",
  },
  codeforces: {
    name: "100x Codeforces group",
    shortName: "100x Codeforces",
    url: "https://codeforces.com/group/oz3OEWkV87/contests",
    description: "Use the current topic’s contest or assigned set for deliberate, instructor-aligned drills.",
    icon: "cf",
  },
  a2z: {
    name: "Striver A2Z sheet",
    shortName: "Striver A2Z",
    url: "https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet?page=sheet&open=2027%2C1998%2C2032%2C2033%2C2000%2C2044%2C2042%2C2001%2C2047%2C1995%2C1996",
    description: "Your coverage checklist. Pick the matching section after each 100x topic—not random questions.",
    icon: "a2z",
  },
  blogs: {
    name: "DSA blogs",
    shortName: "DSA blogs",
    url: "https://takeuforward.org/blogs/",
    description: "A calm reading shelf for Striver notes, Codeforces editorials, and deeper explanations when a pattern needs context.",
    icon: "txt",
  },
};

const BLOGS = [
  { name: "Take U Forward blogs", source: "Striver", url: "https://takeuforward.org/blogs/", description: "Concept explainers and interview preparation notes." },
  { name: "Codeforces blog", source: "Codeforces", url: "https://codeforces.com/blog", description: "Editorials, problem-solving discussions, and contest insight." },
  { name: "LeetCode discuss", source: "LeetCode", url: "https://leetcode.com/discuss/", description: "Alternative solutions and pattern breakdowns after your own attempt." },
];

const PLAYBACK_SPEED = 1.5;
const DEFAULT_PROBLEM_MINUTES = 45;

// Source durations are the public 100x course video runtimes in seconds.
// The planner converts them to a watch estimate at the playback speed above.
const ROADMAP = [
  { title: "Recursion foundations", topic: "Recursion", lessons: ["Recursion I", "Recursion II", "Recursion III"], durations: [4246, 4278, 5864], a2z: "Recursion basics", cf: "Recursion group set", note: "Base cases, call stacks, and tracing." },
  { title: "Recursive confidence", topic: "Recursion", lessons: ["Recursion IV", "OOP I", "OOP II"], durations: [7214, 7122, 5857], a2z: "Recursion patterns", cf: "Recursion drills", note: "Build the habit of turning choices into calls." },
  { title: "Search & structure", topic: "Binary Search", lessons: ["OOP III", "OOP IV", "Binary Search I"], durations: [6380, 6825, 6845], a2z: "Binary Search basics", cf: "Search practice", note: "Move from object design into monotonic search." },
  { title: "Find the boundary", topic: "Binary Search", lessons: ["Binary Search II", "Sets & Maps I", "Interview Problems"], durations: [7109, 7145, 6468], a2z: "Binary Search + Hashing", cf: "Search / map set", note: "Know the invariant before you write the loop." },
  { title: "Linked list core", topic: "Linked Lists", lessons: ["Linked List I", "Linked List II", "Linked List III"], durations: [6776, 6398, 7022], a2z: "Linked Lists", cf: "Linked list set", note: "Pointers, slow-fast patterns, and reversals." },
  { title: "Stack the patterns", topic: "Stacks & Queues", lessons: ["DSA Revision", "Stack & Queue I", "Stack & Queue II"], durations: [6529, 6899, 7763], a2z: "Stack and Queue", cf: "Stack / queue set", note: "LIFO, FIFO, and the questions that hide them." },
  { title: "Build, then solve", topic: "Stacks & Queues", lessons: ["Stack & Queue III", "Building Connect 4", "Improving Connect 4"], durations: [6840, 7739, 6168], a2z: "Stack/Queue revision", cf: "Implementation set", note: "Use a small project to turn theory into code." },
  { title: "Choose and explore", topic: "Backtracking", lessons: ["LeetCode Problem Solving", "Backtracking I", "Backtracking II"], durations: [5397, 7196, 7165], a2z: "Backtracking", cf: "Backtracking set", note: "Decision trees, undoing, and pruning." },
  { title: "Tree thinking", topic: "Trees", lessons: ["Backtracking III", "Trees I", "Trees II"], durations: [7075, 5024, 6501], a2z: "Binary Trees", cf: "Tree fundamentals", note: "Recursive structure shows up again—now with nodes." },
  { title: "Traverse the graph", topic: "Trees & Graphs", lessons: ["Trees III", "Graphs I", "Graphs II"], durations: [4816, 7621, 6038], a2z: "Trees + Graphs", cf: "Traversal set", note: "Move between DFS, BFS, and representation choices." },
  { title: "Bits with intent", topic: "Bit Manipulation", lessons: ["DSA Revision", "Bit Manipulation I", "Bit Manipulation II"], durations: [6154, 5943, 7042], a2z: "Graphs review + Bits", cf: "Bit operations", note: "Use binary state deliberately, not by memorizing tricks." },
  { title: "Bit patterns", topic: "Bit Manipulation", lessons: ["Bit Manipulation III", "Bit Manipulation IV", "Problem Solving Class"], durations: [7777, 7761, 7655], a2z: "Bit Manipulation", cf: "Bit pattern set", note: "Finish the topic with timed thinking." },
  { title: "Math & monotonicity", topic: "Maths / Stacks", lessons: ["Maths I", "LeetCode Problem Solving I", "LeetCode Problem Solving II"], durations: [7780, 8189, 7853], a2z: "Maths basics", cf: "Math / problem set", note: "Strengthen the techniques beneath the patterns." },
  { title: "Next greater", topic: "Monotonic Stack", lessons: ["Next Greater Element I", "Next Greater Element II", "Next Greater Element III"], durations: [6367, 3885, 7577], a2z: "Monotonic stack", cf: "NGE set", note: "Learn exactly why the stack stays monotonic." },
  { title: "Sliding windows", topic: "Sliding Window", lessons: ["Sliding Window", "Binary Search on Answer I", "Binary Search on Answer II"], durations: [6712, 6075, 7605], a2z: "Sliding Window", cf: "Window / answer set", note: "Make the condition visible and update it safely." },
  { title: "Search the answer", topic: "Binary Search on Answer", lessons: ["Binary Search on Answer III", "Dynamic Programming I", "Dynamic Programming II"], durations: [7504, 7965, 7593], a2z: "BS on Answers + DP basics", cf: "Binary decision set", note: "Turn optimization questions into yes/no checks." },
  { title: "DP foundations", topic: "Dynamic Programming", lessons: ["Dynamic Programming III", "DP Knapsack I", "DP Knapsack II"], durations: [7628, 8162, 7605], a2z: "DP introduction", cf: "1D / knapsack set", note: "Define state, transition, base case—always in that order." },
  { title: "DP choices", topic: "Dynamic Programming", lessons: ["DP Stocks I", "DP Stocks II", "DP LCS I"], durations: [2738, 6922, 6687], a2z: "DP patterns", cf: "Stocks / LCS set", note: "Practice recognizing repeated subproblems." },
  { title: "DP reconstruction", topic: "Dynamic Programming", lessons: ["DP LCS II", "DP Printing I", "DP Printing II"], durations: [2872, 2199, 5567], a2z: "DP advanced", cf: "DP reconstruction", note: "Go beyond the value: recover the actual solution." },
  { title: "Heap control", topic: "Heaps", lessons: ["Heap I", "Heap II", "Heap III"], durations: [5658, 3186, 9385], a2z: "Heaps", cf: "Priority queue set", note: "Reach for the right element without sorting everything." },
  { title: "Revision: foundations", topic: "Revision", lessons: ["Revision: Recursion / OOP / Search", "Revision: Lists / Stacks / Trees", "Revision: Backtracking / Graphs / Maths"], durations: [6752, 7654, 5952], a2z: "Reattempt yellow + red", cf: "Mixed timed set", note: "Do not relearn—retrieve from memory." },
  { title: "Revision: mastery", topic: "Revision", lessons: ["Revision: Bits / DP / Heap", "Catch-up session", "Mock practice"], durations: [7824, 0, 0], a2z: "Finish priority backlog", cf: "Final mixed contest", note: "Close gaps, then start your second pass stronger." },
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const STORAGE_KEY = "dsa-command-center-v1";

const defaultState = {
  currentWeek: 1,
  completedSessions: {},
  completedWeeks: {},
  attempts: [],
  activity: {},
};

let state = loadState();
let toastTimer;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...(saved || {}) };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  }[character]));
}

function getDateKey(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).toISOString().slice(0, 10);
}

function formatMinutes(minutes) {
  const rounded = Math.max(0, Math.round(minutes));
  const hours = Math.floor(rounded / 60);
  const mins = rounded % 60;
  if (!hours) return `${mins}m`;
  return mins ? `${hours}h ${mins}m` : `${hours}h`;
}

function formatCompactHours(minutes) {
  return (minutes / 60).toFixed(1).replace(".0", "");
}

function lessonMinutesAtSpeed(week, lessonIndex) {
  const sourceSeconds = week.durations[lessonIndex] || 0;
  return sourceSeconds ? Math.ceil(sourceSeconds / (60 * PLAYBACK_SPEED)) : 90;
}

function lessonTimingLabel(week, lessonIndex) {
  const sourceSeconds = week.durations[lessonIndex] || 0;
  if (!sourceSeconds) return "90m flexible study block";
  return `${formatMinutes(lessonMinutesAtSpeed(week, lessonIndex))} at ${PLAYBACK_SPEED}×`;
}

function expectedProblemMinutes() {
  return DEFAULT_PROBLEM_MINUTES;
}

function getSessions(weekIndex) {
  const week = ROADMAP[weekIndex - 1];
  const lessons = week.lessons;
  const problemMinutes = expectedProblemMinutes();
  const lessonOne = lessonMinutesAtSpeed(week, 0);
  const lessonTwo = lessonMinutesAtSpeed(week, 1);
  const lessonThree = lessonMinutesAtSpeed(week, 2);
  return [
    { day: "Mon", time: `~${formatMinutes(lessonOne)}`, estimateMinutes: lessonOne, kind: "lesson", lessonIndex: 0, title: `100x · ${lessons[0] || "Catch-up lesson"}`, subtitle: `${lessonTimingLabel(week, 0)} · watch, trace examples, then write 5 useful notes.` },
    { day: "Tue", time: `~${formatMinutes(lessonTwo + (problemMinutes * 2))}`, estimateMinutes: lessonTwo + (problemMinutes * 2), kind: "lesson", lessonIndex: 1, title: `100x · ${lessons[1] || "Deep practice"}`, subtitle: `${lessonTimingLabel(week, 1)} + two problems at ~${problemMinutes}m each.` },
    { day: "Wed", time: `~${formatMinutes(problemMinutes * 2)}`, estimateMinutes: problemMinutes * 2, kind: "practice", title: `${week.topic} · deliberate practice`, subtitle: `One Codeforces + one A2Z problem, estimated at ~${problemMinutes}m each.` },
    { day: "Thu", time: `~${formatMinutes(lessonThree)}`, estimateMinutes: lessonThree, kind: "lesson", lessonIndex: 2, title: `100x · ${lessons[2] || "Review session"}`, subtitle: `${lessonTimingLabel(week, 2)} · implement the pattern without copying.` },
    { day: "Fri", time: `~${formatMinutes(problemMinutes * 2)}`, estimateMinutes: problemMinutes * 2, kind: "practice", title: `A2Z · ${week.a2z}`, subtitle: `Two matching questions at ~${problemMinutes}m per problem.` },
    { day: "Sat", time: `~${formatMinutes(problemMinutes * 2)}`, estimateMinutes: problemMinutes * 2, kind: "practice", title: `Codeforces · ${week.cf}`, subtitle: "Timed attempt or the current group contest; budget two average problems." },
    { day: "Sun", time: `~${formatMinutes(problemMinutes * 2)}`, estimateMinutes: problemMinutes * 2, kind: "review", title: "Review queue · yellow and red", subtitle: `Reattempt two old questions using the same ~${problemMinutes}m budget.` },
  ];
}

function sessionKey(week, index) {
  return `week-${week}-session-${index}`;
}

function getWeekProgress(week = state.currentWeek) {
  const sessions = getSessions(week);
  const complete = sessions.filter((_, index) => state.completedSessions[sessionKey(week, index)]).length;
  return { complete, total: sessions.length, percentage: Math.round((complete / sessions.length) * 100) };
}

function getCompletedLessonCount() {
  let done = 0;
  ROADMAP.forEach((week, index) => {
    const sessions = getSessions(index + 1);
    [0, 1, 3].forEach((sessionIndex, lessonIndex) => {
      if (week.durations[lessonIndex] && sessions[sessionIndex].kind === "lesson" && state.completedSessions[sessionKey(index + 1, sessionIndex)]) done += 1;
    });
  });
  return Math.min(done, 64);
}

function getAttemptsBySource(source) {
  return state.attempts.filter((attempt) => attempt.source === source && attempt.result === "green").length;
}

function getAttemptExpectedMinutes(attempt) {
  const minutes = Number(attempt.expectedMinutes);
  return Number.isFinite(minutes) && minutes > 0 ? minutes : DEFAULT_PROBLEM_MINUTES;
}

function currentWeekEstimatedMinutes() {
  return getSessions(state.currentWeek).reduce((sum, session) => sum + session.estimateMinutes, 0);
}

function completedEstimatedMinutesForCurrentWeek() {
  return getSessions(state.currentWeek).reduce((sum, session, index) => {
    return state.completedSessions[sessionKey(state.currentWeek, index)] ? sum + session.estimateMinutes : sum;
  }, 0);
}

function setResourceLinks() {
  document.getElementById("courseQuickLink").href = RESOURCES.course.url;
  document.getElementById("codeforcesQuickLink").href = RESOURCES.codeforces.url;
  document.getElementById("a2zQuickLink").href = RESOURCES.a2z.url;
  document.getElementById("blogsQuickLink").href = RESOURCES.blogs.url;
}

function renderDashboard() {
  const week = ROADMAP[state.currentWeek - 1];
  const progress = getWeekProgress();
  const lessonDone = getCompletedLessonCount();
  const a2zDone = getAttemptsBySource("Striver A2Z");
  const cfDone = getAttemptsBySource("100x / Codeforces");
  const estimatedMinutes = currentWeekEstimatedMinutes();
  const completedMinutes = completedEstimatedMinutesForCurrentWeek();
  const remainingCapacity = Math.max(0, (16 * 60) - estimatedMinutes);

  document.getElementById("heroWeek").textContent = String(state.currentWeek).padStart(2, "0");
  document.getElementById("heroTitle").textContent = week.title;
  document.getElementById("heroDescription").textContent = week.note;
  document.getElementById("heroTopic").textContent = week.topic.toUpperCase();
  document.getElementById("lessonCount").textContent = `${week.lessons.length} lessons planned`;
  document.getElementById("weeklyEstimate").textContent = `~${formatMinutes(estimatedMinutes)} planned at ${PLAYBACK_SPEED}x`;
  document.getElementById("weekProgressBar").style.width = `${progress.percentage}%`;
  document.getElementById("weekProgressLabel").textContent = `${progress.complete} of ${progress.total} sessions complete`;
  document.getElementById("weekProgressPercent").textContent = `${progress.percentage}%`;
  document.getElementById("weekSwitcherLabel").textContent = `WEEK ${String(state.currentWeek).padStart(2, "0")}`;

  updateStat("lessonDone", "lessonProgress", lessonDone, 64);
  updateStat("a2zDone", "a2zProgress", a2zDone, 455);
  document.getElementById("cfDone").textContent = cfDone;
  document.getElementById("cfProgress").style.width = `${Math.min(cfDone * 7, 100)}%`;
  document.getElementById("weekHours").textContent = formatCompactHours(estimatedMinutes);
  document.getElementById("hoursProgress").style.width = `${Math.min((estimatedMinutes / (16 * 60)) * 100, 100)}%`;
  document.getElementById("weekEstimateCaption").textContent = `${formatMinutes(remainingCapacity)} buffer - ${formatMinutes(completedMinutes)} checked off`;

  renderSessions();
  renderTodayTask();
  renderActivity();
  renderRecentAttempts();
  renderStreak();
}

function updateStat(valueId, progressId, current, total) {
  document.getElementById(valueId).textContent = current;
  document.getElementById(progressId).style.width = `${Math.min((current / total) * 100, 100)}%`;
}

function renderSessions() {
  const sessions = getSessions(state.currentWeek);
  const list = document.getElementById("sessionList");
  list.innerHTML = sessions.map((session, index) => {
    const key = sessionKey(state.currentWeek, index);
    const done = Boolean(state.completedSessions[key]);
    return `
      <label class="session ${done ? "done" : ""}">
        <span class="session-day">${session.day}</span>
        <span class="session-details">
          <span class="session-title">${escapeHTML(session.title)}</span>
          <span class="session-subtitle">${escapeHTML(session.subtitle)}</span>
        </span>
        <span class="session-action">
          <span class="session-time">${session.time}</span>
          <input class="session-check" type="checkbox" aria-label="Mark ${escapeHTML(session.title)} complete" data-session-index="${index}" ${done ? "checked" : ""} />
        </span>
      </label>`;
  }).join("");

  list.querySelectorAll(".session-check").forEach((checkbox) => {
    checkbox.addEventListener("change", () => toggleSession(Number(checkbox.dataset.sessionIndex), checkbox.checked));
  });
}

function toggleSession(index, isDone) {
  const key = sessionKey(state.currentWeek, index);
  if (isDone) {
    state.completedSessions[key] = true;
    const today = getDateKey(new Date());
    state.activity[today] = (state.activity[today] || 0) + 1;
    showToast("Session complete. Nice work.");
  } else {
    delete state.completedSessions[key];
  }
  const progress = getWeekProgress();
  if (progress.complete === progress.total) state.completedWeeks[state.currentWeek] = true;
  else delete state.completedWeeks[state.currentWeek];
  saveState();
  renderDashboard();
  renderRoadmap();
}

function renderTodayTask() {
  const todayIndex = (new Date().getDay() + 6) % 7;
  const sessions = getSessions(state.currentWeek);
  const nextIndex = sessions.findIndex((_, index) => !state.completedSessions[sessionKey(state.currentWeek, index)]);
  const session = sessions[nextIndex >= 0 ? nextIndex : todayIndex];
  const focusIndex = nextIndex >= 0 ? nextIndex : todayIndex;
  document.getElementById("todayDayBadge").textContent = session.day.toUpperCase();
  document.getElementById("todayTaskTitle").textContent = session.title.replace(/^100x · /, "");
  document.getElementById("todayTaskDescription").textContent = session.subtitle;
  document.getElementById("startTask").dataset.sessionIndex = focusIndex;
  document.getElementById("startTask").textContent = state.completedSessions[sessionKey(state.currentWeek, focusIndex)] ? "Plan next week →" : "Start next session →";
}

function renderActivity() {
  const chart = document.getElementById("activityChart");
  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));
    return date;
  });
  const max = Math.max(1, ...dates.map((date) => state.activity[getDateKey(date)] || 0));
  chart.innerHTML = dates.map((date) => {
    const value = state.activity[getDateKey(date)] || 0;
    const isToday = getDateKey(date) === getDateKey(today);
    const height = value ? Math.max(13, (value / max) * 100) : 5;
    return `<div class="activity-day ${isToday ? "today" : ""}">
      <div class="bar-track"><div class="bar" style="height:${height}%"></div></div>
      <span>${date.toLocaleDateString("en-US", { weekday: "short" }).slice(0, 2)}</span>
    </div>`;
  }).join("");
}

function renderRecentAttempts() {
  const list = document.getElementById("recentAttempts");
  const attempts = state.attempts.slice(0, 5);
  if (!attempts.length) {
    list.innerHTML = `<p class="empty-state">Your solved, hinted, and retry-later questions will live here. Start with one after today’s lecture.</p>`;
    return;
  }
  list.innerHTML = attempts.map((attempt) => `
    <div class="attempt-row">
      <i class="attempt-status ${attempt.result}"></i>
      <div class="attempt-copy"><strong>${escapeHTML(attempt.name)}</strong><span>${escapeHTML(attempt.source)} - ${formatMinutes(getAttemptExpectedMinutes(attempt))} expected</span></div>
      <span class="attempt-date">${formatShortDate(attempt.date)}</span>
    </div>`).join("");
}

function renderStreak() {
  let streak = 0;
  const pointer = new Date();
  while (state.activity[getDateKey(pointer)]) {
    streak += 1;
    pointer.setDate(pointer.getDate() - 1);
  }
  document.getElementById("streakCount").textContent = streak;
}

function renderRoadmap() {
  const grid = document.getElementById("roadmapGrid");
  grid.innerHTML = ROADMAP.map((week, index) => {
    const weekNumber = index + 1;
    const completed = state.completedWeeks[weekNumber];
    const isCurrent = weekNumber === state.currentWeek;
    return `<article class="roadmap-card ${completed ? "done" : ""} ${isCurrent ? "current" : ""}" data-roadmap-week="${weekNumber}">
      <span class="roadmap-number">WEEK ${String(weekNumber).padStart(2, "0")}</span>
      <h3>${escapeHTML(week.title)}</h3>
      <p>${escapeHTML(week.topic)} · ${escapeHTML(week.a2z)}</p>
      <div class="roadmap-footer">
        <span>${week.lessons.length} focus lessons</span>
        <button type="button" class="roadmap-complete" data-complete-week="${weekNumber}">${completed ? "Completed ✓" : "Set current"}</button>
      </div>
    </article>`;
  }).join("");

  grid.querySelectorAll("[data-roadmap-week]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("[data-complete-week]")) return;
      setCurrentWeek(Number(card.dataset.roadmapWeek));
    });
  });
  grid.querySelectorAll("[data-complete-week]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      setCurrentWeek(Number(button.dataset.completeWeek));
    });
  });
}

function setCurrentWeek(week) {
  state.currentWeek = Math.max(1, Math.min(ROADMAP.length, week));
  saveState();
  renderDashboard();
  renderRoadmap();
  showView("dashboard");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPractice() {
  const counts = { green: 0, yellow: 0, red: 0 };
  state.attempts.forEach((attempt) => { counts[attempt.result] += 1; });
  document.getElementById("practiceSummary").innerHTML = `
    <div class="summary-pill green"><strong>${counts.green}</strong><span>Solved independently</span></div>
    <div class="summary-pill yellow"><strong>${counts.yellow}</strong><span>Needed a hint</span></div>
    <div class="summary-pill red"><strong>${counts.red}</strong><span>Revisit later</span></div>`;
  const table = document.getElementById("practiceTableBody");
  if (!state.attempts.length) {
    table.innerHTML = `<tr><td colspan="6"><p class="empty-state">Nothing logged yet. Your first honest attempt is your starting point.</p></td></tr>`;
    return;
  }
  table.innerHTML = state.attempts.map((attempt) => {
    const name = escapeHTML(attempt.name);
    const problem = attempt.link
      ? `<a href="${escapeHTML(attempt.link)}" target="_blank" rel="noreferrer">${name} ↗</a>`
      : name;
    const labels = { green: "Independent", yellow: "Used a hint", red: "Retry later" };
    return `<tr>
      <td><div class="table-problem">${problem}</div></td>
      <td>${escapeHTML(attempt.source)}</td>
      <td>${formatMinutes(getAttemptExpectedMinutes(attempt))}</td>
      <td><span class="result-tag ${attempt.result}"><i></i>${labels[attempt.result]}</span></td>
      <td>${formatShortDate(attempt.date)}</td>
      <td><button class="delete-attempt" type="button" title="Delete attempt" aria-label="Delete ${name}" data-delete-attempt="${attempt.id}">×</button></td>
    </tr>`;
  }).join("");
  table.querySelectorAll("[data-delete-attempt]").forEach((button) => {
    button.addEventListener("click", () => deleteAttempt(button.dataset.deleteAttempt));
  });
}

function deleteAttempt(id) {
  state.attempts = state.attempts.filter((attempt) => attempt.id !== id);
  saveState();
  renderPractice();
  renderDashboard();
  showToast("Attempt removed.");
}

function renderResources() {
  const cards = document.getElementById("resourceCards");
  cards.innerHTML = Object.values(RESOURCES).map((resource) => `
    <a class="resource-card" href="${resource.url}" target="_blank" rel="noreferrer">
      <span class="resource-icon">${resource.icon}</span>
      <h2>${resource.name}</h2>
      <p>${resource.description}</p>
      <span class="resource-open">Open resource <span>↗</span></span>
    </a>`).join("");
  document.getElementById("blogLinks").innerHTML = BLOGS.map((blog) => `
    <a class="blog-link" href="${blog.url}" target="_blank" rel="noreferrer">
      <span class="blog-source">${blog.source}</span>
      <span class="blog-copy"><strong>${blog.name}</strong><small>${blog.description}</small></span>
      <span class="blog-arrow">↗</span>
    </a>`).join("");
}

function formatShortDate(dateValue) {
  return new Date(dateValue).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function showView(view) {
  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === view);
  });
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  const titles = {
    dashboard: "Good morning, builder.",
    roadmap: "Your path, made visible.",
    practice: "Every attempt teaches you.",
    resources: "Your study desk, cleared.",
  };
  document.getElementById("pageTitle").textContent = titles[view];
  document.querySelector(".sidebar").classList.remove("open");
  if (view === "roadmap") renderRoadmap();
  if (view === "practice") renderPractice();
  if (view === "resources") renderResources();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function handleQuestionSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.problemName.value.trim();
  if (!name) return;
  const link = form.problemLink.value.trim();
  const expectedMinutes = Math.min(300, Math.max(5, Number(form.problemExpectedTime.value) || DEFAULT_PROBLEM_MINUTES));
  state.attempts.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    source: form.problemSource.value,
    result: form.problemResult.value,
    link,
    expectedMinutes,
    date: new Date().toISOString(),
  });
  saveState();
  form.reset();
  document.getElementById("logModal").close();
  renderPractice();
  renderDashboard();
  showToast("Problem added to your practice log.");
}

function bindEvents() {
  document.querySelectorAll(".nav-link").forEach((button) => button.addEventListener("click", () => showView(button.dataset.view)));
  document.querySelectorAll("[data-view-link]").forEach((link) => link.addEventListener("click", () => showView("dashboard")));
  document.getElementById("viewRoadmap").addEventListener("click", () => showView("roadmap"));
  document.getElementById("openPractice").addEventListener("click", () => showView("practice"));
  document.getElementById("previousWeek").addEventListener("click", () => setCurrentWeek(state.currentWeek - 1));
  document.getElementById("nextWeek").addEventListener("click", () => setCurrentWeek(state.currentWeek + 1));
  document.getElementById("startTask").addEventListener("click", (event) => {
    const index = Number(event.currentTarget.dataset.sessionIndex);
    if (state.completedSessions[sessionKey(state.currentWeek, index)]) {
      if (state.currentWeek < ROADMAP.length) setCurrentWeek(state.currentWeek + 1);
      return;
    }
    const checkbox = document.querySelector(`.session-check[data-session-index="${index}"]`);
    if (checkbox) {
      checkbox.scrollIntoView({ behavior: "smooth", block: "center" });
      checkbox.focus();
      showToast("Start it, then check it off when you are done.");
    }
  });
  document.getElementById("openLogModal").addEventListener("click", () => document.getElementById("logModal").showModal());
  document.getElementById("closeLogModal").addEventListener("click", () => document.getElementById("logModal").close());
  document.getElementById("questionForm").addEventListener("submit", handleQuestionSubmit);
  document.getElementById("mobileMenu").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));
  document.getElementById("focusButton").addEventListener("click", (event) => {
    document.body.classList.toggle("focus-mode");
    event.currentTarget.textContent = document.body.classList.contains("focus-mode") ? "Exit focus" : "Focus view";
  });
}

function initialize() {
  const now = new Date();
  document.getElementById("todayLabel").textContent = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }).toUpperCase();
  setResourceLinks();
  bindEvents();
  renderDashboard();
  renderRoadmap();
  renderPractice();
  renderResources();
}

initialize();
