function getPlaceBySlug(slug) {
  return window.siteData.places.find((item) => item.slug === slug);
}

function getImageById(id) {
  return window.siteImages.slots.find((item) => item.id === id);
}

function getPlaceImage(place) {
  const imageId =
    window.siteImages.placeMap[place.slug] ||
    window.siteImages.categoryMap[place.category] ||
    "hero-primary";
  return getImageById(imageId);
}

function placeMapLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function renderCredit(image, prefix = "Photo") {
  if (!image) return "";
  return `${prefix}: <a href="${image.creditUrl}" target="_blank" rel="noreferrer">${image.creditLabel}</a> <span>${image.licenseNote}</span>`;
}

window.siteShared = {
  getPlaceBySlug,
  getImageById,
  getPlaceImage,
  placeMapLink,
  renderCredit
};
