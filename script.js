const data = window.siteData;

const heroStats = document.querySelector("#hero-stats");
const courseRail = document.querySelector("#course-rail");
const courseStage = document.querySelector("#course-stage");
const principlesGrid = document.querySelector("#principles-grid");
const venueFilters = document.querySelector("#venue-filters");
const venueGrid = document.querySelector("#venue-grid");
const verifiedGrid = document.querySelector("#verified-grid");

let activeCourseId = data.courses[0].id;
let activeVenueFilter = "all";

function renderHeroStats() {
  heroStats.innerHTML = data.stats
    .map(
      (stat) => `
        <div class="hero-stat">
          <span class="hero-stat__value">${stat.value}</span>
          <span class="hero-stat__label">${stat.label}</span>
        </div>
      `
    )
    .join("");
}

function renderCourseRail() {
  courseRail.innerHTML = data.courses
    .map(
      (course) => `
        <button
          type="button"
          class="course-chip"
          role="tab"
          aria-selected="${course.id === activeCourseId}"
          aria-controls="course-stage"
          data-course-id="${course.id}"
        >
          <p class="course-chip__eyebrow">${course.kicker}</p>
          <p class="course-chip__title">${course.title}</p>
          <p class="course-chip__meta">${course.summary}</p>
        </button>
      `
    )
    .join("");
}

function renderCourseStage() {
  const course = data.courses.find((item) => item.id === activeCourseId);

  courseStage.innerHTML = `
    <div class="course-stage__header">
      <p class="eyebrow">${course.kicker}</p>
      <h3>${course.title}</h3>
      <p class="course-stage__lede">${course.lede}</p>
    </div>

    <div class="course-meta">
      <div class="meta-card">
        <p class="meta-card__label">맞는 날</p>
        <p class="meta-card__value">${course.suitableFor}</p>
      </div>
      <div class="meta-card">
        <p class="meta-card__label">예산</p>
        <p class="meta-card__value">${course.budget}</p>
      </div>
      <div class="meta-card">
        <p class="meta-card__label">추천 시간</p>
        <p class="meta-card__value">${course.bestWindow}</p>
      </div>
      <div class="meta-card">
        <p class="meta-card__label">체류 길이</p>
        <p class="meta-card__value">${course.duration}</p>
      </div>
    </div>

    <ol class="timeline">
      ${course.timeline
        .map(
          (item) => `
            <li class="timeline__item">
              <div class="timeline__time">${item.time}</div>
              <div class="timeline__body">
                <h4>${item.venue}</h4>
                <p>${item.description}</p>
                <p class="timeline__swap">교체 카드: ${item.swap}</p>
              </div>
            </li>
          `
        )
        .join("")}
    </ol>

    <div class="course-stage__footer">
      <div class="footer-card">
        <h4>운영 팁</h4>
        <p>${course.tip}</p>
      </div>
      <div class="footer-card">
        <h4>주의 포인트</h4>
        <p>${course.caution}</p>
      </div>
    </div>
  `;
}

function renderPrinciples() {
  principlesGrid.innerHTML = data.principles
    .map(
      (item, index) => `
        <article class="principles-card reveal" style="--index: ${index}">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderVenueFilters() {
  venueFilters.innerHTML = data.venueFilters
    .map(
      (filter) => `
        <button
          type="button"
          class="chip-button ${filter.id === activeVenueFilter ? "is-active" : ""}"
          data-filter-id="${filter.id}"
          aria-pressed="${filter.id === activeVenueFilter}"
        >
          ${filter.label}
        </button>
      `
    )
    .join("");
}

function renderVenueGrid() {
  const visibleVenues =
    activeVenueFilter === "all"
      ? data.venues
      : data.venues.filter((venue) => venue.category === activeVenueFilter);

  venueGrid.innerHTML = visibleVenues
    .map(
      (venue) => `
        <article class="venue-card">
          <p class="venue-card__kicker">${venue.kicker}</p>
          <h3>${venue.name}</h3>
          <p>${venue.description}</p>
          <div class="venue-card__meta">
            ${venue.meta.map((label) => `<span class="venue-pill">${label}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderVerifiedNotes() {
  verifiedGrid.innerHTML = data.verifiedNotes
    .map(
      (note, index) => `
        <article class="verified-card reveal" style="--index: ${index}">
          <h3>${note.title}</h3>
          <p>${note.body}</p>
          <a class="verified-card__source" href="${note.sourceUrl}" target="_blank" rel="noreferrer">
            출처: ${note.sourceLabel}
          </a>
        </article>
      `
    )
    .join("");
}

function bindEvents() {
  courseRail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-course-id]");
    if (!button) return;

    activeCourseId = button.dataset.courseId;
    renderCourseRail();
    renderCourseStage();
  });

  venueFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter-id]");
    if (!button) return;

    activeVenueFilter = button.dataset.filterId;
    renderVenueFilters();
    renderVenueGrid();
  });
}

function init() {
  renderHeroStats();
  renderCourseRail();
  renderCourseStage();
  renderPrinciples();
  renderVenueFilters();
  renderVenueGrid();
  renderVerifiedNotes();
  bindEvents();
}

init();
