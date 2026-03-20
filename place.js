const data = window.siteData;

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const place = data.places.find((item) => item.slug === slug) || data.places[0];

const hero = document.querySelector("#place-hero");
const content = document.querySelector("#place-content");
const sidebar = document.querySelector("#place-sidebar");
const relatedGrid = document.querySelector("#related-grid");

function mapLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function renderHero() {
  document.title = `${place.name} | 성수 데이트 아틀라스`;

  hero.innerHTML = `
    <div class="place-hero__inner reveal" style="--index: 0">
      <p class="eyebrow">${place.kicker}</p>
      <h1>${place.name}</h1>
      <p class="place-hero__lede">${place.positioning}</p>
      <div class="place-hero__meta">
        <span class="venue-pill">${place.categoryLabel}</span>
        <span class="venue-pill">${place.area}</span>
        <span class="venue-pill">${place.detailLevel}</span>
      </div>
    </div>
  `;
}

function renderContent() {
  content.innerHTML = `
    <article class="place-section reveal" style="--index: 0">
      <h2>이곳을 한 줄로 보면</h2>
      <p>${place.summary}</p>
    </article>
    <article class="place-section reveal" style="--index: 1">
      <h2>핵심 포인트</h2>
      <ul class="detail-list">
        ${place.highlights.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
    <article class="place-section reveal" style="--index: 2">
      <h2>데이트에서 쓰는 방법</h2>
      <p>${place.dateUse}</p>
    </article>
    <article class="place-section reveal" style="--index: 3">
      <h2>주의할 점</h2>
      <p>${place.caution}</p>
    </article>
    <article class="place-section reveal" style="--index: 4">
      <h2>출처</h2>
      <ul class="source-list">
        ${place.sources
          .map(
            (source) => `
              <li>
                <a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>
              </li>
            `
          )
          .join("")}
      </ul>
    </article>
  `;
}

function renderSidebar() {
  sidebar.innerHTML = `
    <div class="sidebar-card reveal" style="--index: 0">
      <p class="sidebar-card__label">주소</p>
      <p class="sidebar-card__value">${place.address}</p>
      <a class="sidebar-card__link" href="${mapLink(place.address)}" target="_blank" rel="noreferrer">
        외부 지도에서 열기
      </a>
    </div>
    <div class="sidebar-card reveal" style="--index: 1">
      <p class="sidebar-card__label">운영 메모</p>
      <p class="sidebar-card__value">${place.hours}</p>
    </div>
    <div class="sidebar-card reveal" style="--index: 2">
      <p class="sidebar-card__label">잘 맞는 무드</p>
      <div class="venue-card__meta">
        ${place.tags.map((tag) => `<span class="venue-pill">${tag}</span>`).join("")}
      </div>
    </div>
    <div class="sidebar-card reveal" style="--index: 3">
      <p class="sidebar-card__label">코스 포지션</p>
      <p class="sidebar-card__value">${place.courseFit}</p>
    </div>
  `;
}

function renderRelated() {
  const related = data.places
    .filter((item) => item.slug !== place.slug && item.category === place.category)
    .slice(0, 3);

  relatedGrid.innerHTML = related
    .map(
      (item) => `
        <a class="venue-card venue-card--link" href="./place.html?slug=${item.slug}">
          <p class="venue-card__kicker">${item.kicker}</p>
          <h3>${item.name}</h3>
          <p>${item.summary}</p>
          <div class="venue-card__meta">
            ${item.tags.slice(0, 3).map((tag) => `<span class="venue-pill">${tag}</span>`).join("")}
          </div>
          <span class="venue-card__cta">상세 보기</span>
        </a>
      `
    )
    .join("");
}

function initPlaceMap() {
  const mapElement = document.querySelector("#place-map");
  if (!window.L || !mapElement || !place.coordinates) return;

  const map = L.map(mapElement, { scrollWheelZoom: false }).setView(
    [place.coordinates.lat, place.coordinates.lon],
    15
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([place.coordinates.lat, place.coordinates.lon])
    .addTo(map)
    .bindPopup(`<strong>${place.name}</strong><br>${place.area}`)
    .openPopup();

  setTimeout(() => map.invalidateSize(), 150);
}

renderHero();
renderContent();
renderSidebar();
renderRelated();
initPlaceMap();
