// Shared navigation for all pages (dedup guard)
if (window.__navLoaded) return;
window.__navLoaded = true;
(function() {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'pages/architecture.html', label: 'Architecture' },
    { href: 'pages/tools-detail.html', label: 'Tools (42)' },
    { href: 'pages/commands-detail.html', label: 'Commands (67)' },
    { href: 'pages/context-permissions.html', label: 'Context & Permissions' },
    { href: 'pages/systems-overview.html', label: 'Systems (20+)' },
    { href: 'pages/learn-fundamentals.html', label: 'Learn: S01-S06' },
    { href: 'pages/learn-advanced.html', label: 'Learn: S07-S12' },
    { href: 'pages/glossary.html', label: 'Glossary' },
  ];
})();
