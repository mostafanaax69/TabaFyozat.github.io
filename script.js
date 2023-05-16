function updateCount() {
    const timezone = 'Asia/Jerusalem';
    const now = new Date();
    const start = new Date('2023-05-16');
    const nowInJerusalem = new Date(now.toLocaleString('en-US', {timeZone: timezone}));
    const startInJerusalem = new Date(start.toLocaleString('en-US', {timeZone: timezone}));
    const diff = Math.floor((nowInJerusalem - startInJerusalem) / (1000 * 60 * 60 * 24));
    document.getElementById('count').textContent = Number(1207 + diff).toString();
}

updateCount();
