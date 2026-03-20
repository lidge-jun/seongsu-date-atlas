const data = window.siteData;

const heroStats = document.querySelector("#hero-stats");
const courseRail = document.querySelector("#course-rail");
const courseStage = document.querySelector("#course-stage");
const principlesGrid = document.querySelector("#principles-grid");
const venueFilters = document.querySelector("#venue-filters");
const venueGrid = document.querySelector("#venue-grid");
const verifiedGrid = document.querySelector("#verified-grid");
const mapLegend = document.querySelector("#map-legend");

let activeCourseId = data.courses[0].id;
let activeVenueFilter = "all";
let homeMap;
let homeMarkers;

function placeMapLink(place) {
  return `./place.html?slug=${place.slug}`;
}

function renderHeroStats() {
  const computedStats = [
    { value: String(data.courses.length), label: "course tracks" },
    { value: String(data.places.length), label: "clickable places" },
    { value: String(data.verifiedNotes.length), label: "verified anchors" }
  ];

  heroStats.innerHTML = computedStats
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

function renderTimelineLinks(slugs) {
  return slugs
    .map((slug) => data.places.find((item) => item.slug === slug))
    .filter(Boolean)
    .map(
      (place) => `
        <a class="timeline-link" href="${placeMapLink(place)}">${place.name}</a>
      `
    )
    .join('<span class="timeline-link__divider">·</span>');
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
                <h4>${renderTimelineLinks(item.places)}</h4>
                <p>${item.note}</p>
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

function visiblePlaces() {
  return activeVenueFilter === "all"
    ? data.places
    : data.places.filter((place) => place.category === activeVenueFilter);
}

function renderVenueGrid() {
  venueGrid.innerHTML = visiblePlaces()
    .map(
      (place) => `
        <a class="venue-card venue-card--link" href="${placeMapLink(place)}">
          <p class="venue-card__kicker">${place.kicker}</p>
          <h3>${place.name}</h3>
          <p>${place.summary}</p>
          <div class="venue-card__meta">
            ${place.tags.slice(0, 3).map((label) => `<span class="venue-pill">${label}</span>`).join("")}
          </div>
          <span class="venue-card__cta">상세 보기</span>
        </a>
      `
    )
    .join("");
}

function renderMapLegend() {
  mapLegend.innerHTML = data.venueFilters
    .filter((filter) => filter.id !== "all")
    .map((filter) => `<span class="venue-pill">${filter.label}</span>`)
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

function initHomeMap() {
  const mapElement = document.querySelector("#home-map");
  if (!window.L || !mapElement) return;

  homeMap = L.map(mapElement, { scrollWheelZoom: false }).setView([37.5434, 127.0518], 14);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(homeMap);

  updateHomeMap();
}

function updateHomeMap() {
  if (!homeMap || !window.L) return;

  if (homeMarkers) {
    homeMarkers.remove();
  }

  const markers = visiblePlaces()
    .filter((place) => place.coordinates)
    .map((place) =>
      L.marker([place.coordinates.lat, place.coordinates.lon]).bindPopup(
        `
          <strong>${place.name}</strong><br>
          ${place.area}<br>
          <a href="${placeMapLink(place)}">상세페이지 보기</a>
        `
      )
    );

  homeMarkers = L.featureGroup(markers).addTo(homeMap);

  if (markers.length > 0) {
    homeMap.fitBounds(homeMarkers.getBounds().pad(0.15));
  }

  setTimeout(() => homeMap.invalidateSize(), 150);
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
    updateHomeMap();
  });
}

function init() {
  renderHeroStats();
  renderCourseRail();
  renderCourseStage();
  renderPrinciples();
  renderVenueFilters();
  renderVenueGrid();
  renderMapLegend();
  renderVerifiedNotes();
  initHomeMap();
  bindEvents();
}

init();
