const HARAKAT_MAP = [
    { regex: /([\u064E])/g, class: 'h-fatha' },
    { regex: /([\u064F])/g, class: 'h-damma' },
    { regex: /([\u0650])/g, class: 'h-kasra' },
    { regex: /([\u0651])/g, class: 'h-shadda' },
    { regex: /([\u0652])/g, class: 'h-sukun' }
];

function colorize(text) {
    let result = text;
    HARAKAT_MAP.forEach(rule => {
        result = result.replace(rule.regex, `<span class="${rule.class}">$1</span>`);
    });
    return result;
}

async function loadCategory(file) {
    const response = await fetch(`./data/${file}.json`);
    const data = await response.json();
    renderCards(data.items);
}

function renderCards(items) {
    const container = document.getElementById('main-container');
    container.innerHTML = items.map(item => `
        <div class="card">
            <div class="arabic-word">${colorize(item.arabe)}</div>
            <div class="info">
                <strong style="color: #64748b; font-size: 0.9rem;">${item.singular}</strong>
                <h3 style="margin: 5px 0; color: #1e293b;">${item.traduccion}</h3>
                <span class="badge">${item.genero === 'F' ? 'Femenino' : 'Masculino'}</span>
            </div>
        </div>
    `).join('');
}
