function updateCount() {
    const timezone = 'Asia/Jerusalem';
    const now = new Date();
    const start = new Date('2023-05-25');
    const nowInJerusalem = new Date(now.toLocaleString('en-US', {timeZone: timezone}));
    const vacationDay = new Date(start.toLocaleString('en-US', {timeZone: timezone}));
    const diff = Math.floor(( vacationDay - nowInJerusalem) / (1000 * 60 * 60 * 24));
    document.getElementById('count').textContent = Number(0 + diff).toString();
}

updateCount();
