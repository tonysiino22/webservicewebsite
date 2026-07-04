const sections = ['startseite', 'preise', 'ueber-mich', 'kontakt', 'impressum'];

function go(id) {
    sections.forEach(s => {
        document.getElementById(s).classList.remove('active');
        const nl = document.getElementById('nl-' + s);
        const ml = document.getElementById('ml-' + s);
        if (nl) nl.classList.remove('active');
        if (ml) ml.classList.remove('active');
    });
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
    const nl = document.getElementById('nl-' + id);
    const ml = document.getElementById('ml-' + id);
    if (nl) nl.classList.add('active');
    if (ml) ml.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('hamburger');
    menu.classList.toggle('open');
    btn.classList.toggle('open');
}

function closeMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
}

function handleForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const msg = document.getElementById('form-msg');
    const subject = encodeURIComponent('Website-Anfrage von ' + data.get('name'));
    const body = encodeURIComponent(
        'Name: ' + data.get('name') + '\n' +
        'E-Mail: ' + data.get('email') + '\n\n' +
        data.get('message')
    );
    window.location.href = 'mailto:antoniosiino@outlook.com?subject=' + subject + '&body=' + body;
    msg.textContent = 'Ihr E-Mail-Programm wird geöffnet…';
    msg.style.display = 'block';
}

document.getElementById('footer-copy').textContent =
    '© ' + new Date().getFullYear() + ' Antonio Siino. Alle Rechte vorbehalten.';
