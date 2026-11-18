// Ícones em linha (estilo lucide) usados nas artes
const ICONS = {
  waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  ball: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="11" r="3.6"/><path d="M11.2 9.6h1.3a.9.9 0 0 1 0 1.8h-1.3v-1.8m0 1.8h1.5a.9.9 0 0 1 0 1.8h-1.5z" stroke-width="1.2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  chair: '<path d="M7 3v9h10V3"/><path d="M5 12h14"/><path d="M7 12l-1 9M17 12l1 9M8 17h8"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  insta: '<rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>',
  wa: '<path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z"/><path d="M9 8.6c0-.5.4-.9.8-.9h.5l.9 2-.7.9a6 6 0 0 0 2.9 2.9l.9-.7 2 .9v.5c0 .4-.4.8-.9.8A6.4 6.4 0 0 1 9 8.6z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};
document.querySelectorAll('[data-ico]').forEach(el => {
  el.outerHTML = `<svg class="ico ${el.className}" viewBox="0 0 24 24">${ICONS[el.dataset.ico]}</svg>`;
});
