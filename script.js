const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
document.querySelector('.workforce')?.remove();
document.querySelector('.method')?.style.setProperty('padding-bottom', '55px');
document.querySelector('.audience')?.style.setProperty('padding-top', '30px');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const delegateMarkup = `<section class="delegate section" id="delegate"><div class="wrap"><div class="delegate-head reveal"><div><p class="eyebrow">05 / WHAT YOU WILL LEARN</p><h2>This course<br>will teach you<br>how to <em>delegate.</em></h2></div><p>This course will teach you how to build, supervise, and improve AI systems that handle more of the work for you.</p></div><div class="delegate-grid"><article class="delegate-card reveal"><div class="delegate-icon">◌</div><span class="delegate-label">01 / INTELLIGENCE</span><h3>Your always-on<br>competitor radar.</h3><p>Learn how to make AI watch competitor moves, research their positioning, and help you create sharper graphics, offers, and marketing.</p><div class="delegate-flow">Watch <b>→</b> Compare <b>→</b> Improve</div></article><article class="delegate-card reveal featured"><div class="delegate-icon">↗</div><span class="delegate-label">02 / ADVERTISING</span><h3>Smarter ads.<br>Less <em>busywork.</em></h3><p>Learn how to use AI to research audiences, create and check Facebook and Google ads, and prepare better versions for your approval.</p><div class="delegate-flow">Audience <b>→</b> Ads <b>→</b> Test</div></article><article class="delegate-card reveal"><div class="delegate-icon">⌕</div><span class="delegate-label">03 / OPPORTUNITY</span><h3>A personal<br>opportunity scout.</h3><p>Learn how to make AI find relevant jobs, internships, grants, and opportunities, then prepare applications while you approve every submission.</p><div class="delegate-flow">Find <b>→</b> Match <b>→</b> Prepare</div></article><article class="delegate-card reveal"><div class="delegate-icon">✦</div><span class="delegate-label">04 / SOCIAL</span><h3>Your brand’s<br>content partner.</h3><p>Learn how to give AI your brand voice, research useful topics, create posts, publish them, and improve them based on what people respond to.</p><div class="delegate-flow">Research <b>→</b> Post <b>→</b> Learn</div></article><article class="delegate-card reveal"><div class="delegate-icon">▶</div><span class="delegate-label">05 / VIDEO</span><h3>A video editor<br>on your team.</h3><p>Learn how to make AI research your topic, find the strongest moments, prepare edits and captions, and create clips for you to review.</p><div class="delegate-flow">Story <b>→</b> Edit <b>→</b> Share</div></article><article class="delegate-card reveal"><div class="delegate-icon">+</div><span class="delegate-label">06 / NEW INCOME</span><h3>Build a second<br>source of income.</h3><p>Learn how to use AI to explore a service, fill the knowledge gaps, build a first version, and test ways to turn a skill into an income stream.</p><div class="delegate-flow">Explore <b>→</b> Build <b>→</b> Test</div></article></div><p class="delegate-foot reveal"><span>↳</span> You will learn how to let AI prepare, monitor, create, and repeat, while you provide the context, judgment, and final approval.</p></div></section>`;
const codexSection = document.querySelector('.codex');
codexSection?.insertAdjacentHTML('beforebegin', delegateMarkup);
const codexDescription = document.querySelector('.codex-copy > p:not(.eyebrow)');
if (codexDescription) codexDescription.textContent = 'AI coding agents can now participate in the entire building process: working with files and repositories, writing and testing code, debugging, and iterating toward a working product.';
const videoCard = document.querySelectorAll('.delegate-card')[4];
if (videoCard) videoCard.querySelector('p').textContent = 'This will blow your mind: learn how to make AI research your topic, find the strongest moments, prepare edits and captions, and create clips for you to review.';
const incomeCard = document.querySelectorAll('.delegate-card')[5];
if (incomeCard) {
  incomeCard.querySelector('h3').innerHTML = 'Build a second,<br>third, or fourth<br>source of income.';
  incomeCard.querySelector('p').textContent = 'Learn how to use AI to monetize skills you have never learned before, fill the knowledge gaps, build a first version, test a service, and earn an income from it.';
}
const accessLink = 'https://wa.me/237672754178?text=Hello%20Emmanuel%2C%20I%27d%20like%20to%20get%20access%20to%20AAB.';
const purchaseBand = `<section class="purchase-band"><div class="wrap purchase-inner"><div><p class="eyebrow">READY TO LEARN THE SHIFT?</p><h2>Get access to AAB.</h2><p>Learn how to turn AI into practical systems for your work, business, and next idea.</p></div><div class="purchase-side"><strong>49,999 FCFA</strong><small>Discount: <span></span></small><a class="button button-gold purchase-button" href="${accessLink}" target="_blank" rel="noopener">Get access to AAB <span>↗</span></a></div></div></section>`;
const purchaseBandTwo = `<section class="purchase-band"><div class="wrap purchase-inner"><div><p class="eyebrow">YOUR NEXT WORKFLOW STARTS HERE</p><h2>Build something<br>that gives you time back.</h2><p>Learn how to guide AI through real tasks, connect the steps, and create a system you can keep improving.</p></div><div class="purchase-side"><strong>49,999 FCFA</strong><small>Discount: <span></span></small><a class="button button-gold purchase-button" href="${accessLink}" target="_blank" rel="noopener">Get access to AAB <span>↗</span></a></div></div></section>`;
document.querySelector('.delegate')?.insertAdjacentHTML('afterend', purchaseBand);
const curriculum = document.querySelector('.curriculum');
curriculum?.insertAdjacentHTML('afterend', purchaseBandTwo);
const footerCta = document.querySelector('.final-cta');
const footerButton = footerCta?.querySelector('.button');
if (footerButton) {
  footerButton.href = accessLink;
  footerButton.target = '_blank';
  footerButton.rel = 'noopener';
  footerButton.innerHTML = 'Get access to AAB <span>↗</span>';
  footerButton.insertAdjacentHTML('beforebegin', '<div class="footer-price"><strong>49,999 FCFA</strong><span>Discount: </span></div>');
}

const creatorMarkup = `<section class="creator-band"><div class="wrap creator-inner reveal"><div><p class="eyebrow">THE COURSE CREATOR</p><h2>Learn the shift<br>with <em>Emmanuel Cobbi.</em></h2></div><div class="creator-note"><p>A practical guide for people who want to stop doing everything manually and start building workflows that give them time back.</p><a class="creator-link" href="https://wa.me/237672754178?text=Hello%20Emmanuel%2C%20I%27m%20interested%20in%20the%20AAB%20course." target="_blank" rel="noopener">Emmanuel Cobbi <span>↗</span></a><small>Message Emmanuel on WhatsApp</small></div></div></section>`;
const curriculumSection = document.querySelector('.curriculum');
curriculumSection?.insertAdjacentHTML('beforebegin', creatorMarkup);

const plainCaseCopy = [
  'This course will teach you how to tell AI what the campaign is for, shape a professional brand direction, create several strong designs, prepare the files, and post them where you choose. No more default gold-and-black graphics that look like everyone else.',
  'This course will teach you how to assign AI as your personal virtual assistant for clear research tasks, then let it search, compare, create a report or spreadsheet, reshape the information, make different versions, and automatically send or save the finished results to your chosen destination.',
  'This course will teach you how to describe a business and guide AI through automatically finding a domain for you, helping secure it, building a simple or complex website, and automatically hosting it for you.',
  'This course will teach you how to train AI on your way of speaking, then use it to turn your ideas into posts, images, videos, and captions, publish on your social pages, and help handle replies where the platform and your permissions allow it.'
];
document.querySelectorAll('.case-card').forEach((card, index) => {
  const nowCopy = card.querySelector('.case-row > div:nth-child(2) p');
  if (nowCopy && plainCaseCopy[index]) nowCopy.textContent = plainCaseCopy[index];
});


const delegateStyles = document.createElement('style');
delegateStyles.textContent = `.delegate{background:#e1e5e5;padding-block:140px}.delegate-head{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:end;margin-bottom:62px}.delegate-head h2{font-size:72px}.delegate-head>p{max-width:370px;color:#5f6868;margin:0}.delegate-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#bbc4c3}.delegate-card{background:#e1e5e5;min-height:360px;padding:24px;display:flex;flex-direction:column;transition:transform .25s,background .25s}.delegate-card:hover{transform:translateY(-6px);background:#eef0ed}.delegate-card.featured{background:#1a292b;color:var(--paper)}.delegate-card.featured:hover{background:#233639}.delegate-icon{font-size:25px;color:var(--gold);height:45px}.delegate-label{font:9px var(--mono);letter-spacing:.1em;color:#6f7978}.featured .delegate-label{color:#aeb0a9}.delegate-card h3{font-size:28px;line-height:1.03;letter-spacing:-.05em;margin:48px 0 15px}.delegate-card h3 em{font-family:var(--serif);font-weight:400}.delegate-card p{font-size:13px;line-height:1.45;color:#5f6868;max-width:280px}.featured p{color:#aeb0a9}.delegate-flow{border-top:1px solid #bbc4c3;margin-top:auto;padding-top:15px;font:10px var(--mono);color:#6f7978}.featured .delegate-flow{border-color:#455456;color:#aeb0a9}.delegate-flow b{color:var(--gold);padding:0 5px}.delegate-foot{font:10px var(--mono);color:#5f6868;margin:35px 0 0}.delegate-foot span{color:var(--gold);font-size:16px;margin-right:8px}.creator-band{background:#d6aa4b;padding-block:105px}.creator-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:end}.creator-inner h2{font-size:64px;line-height:.95;letter-spacing:-.06em;margin:0}.creator-inner h2 em{font-family:var(--serif);font-weight:400}.creator-note{max-width:380px}.creator-note p{font-size:16px;line-height:1.45;color:#5f4b1e;margin:0 0 28px}.creator-link{display:flex;align-items:center;justify-content:space-between;color:var(--ink);text-decoration:none;border-bottom:1px solid var(--ink);padding-bottom:8px;font-size:20px;font-weight:600}.creator-link span{color:#765817}.creator-note small{display:block;margin-top:9px;font:9px var(--mono);color:#765817;letter-spacing:.08em;text-transform:uppercase}@media(max-width:800px){.delegate{padding-block:90px}.delegate-head{grid-template-columns:1fr;gap:25px;margin-bottom:42px}.delegate-head h2{font-size:52px}.delegate-grid{grid-template-columns:1fr}.delegate-card{min-height:310px}.delegate-card h3{margin-top:34px}.creator-band{padding-block:80px}.creator-inner{grid-template-columns:1fr;gap:35px}.creator-inner h2{font-size:52px}}`;
document.head.appendChild(delegateStyles);

const purchaseStyles = document.createElement('style');
purchaseStyles.textContent = `.purchase-band{background:var(--ink);color:var(--paper);padding:58px 0}.purchase-inner{display:flex;align-items:center;justify-content:space-between;gap:40px}.purchase-inner h2{font-size:42px;line-height:1;margin:0 0 10px;letter-spacing:-.05em}.purchase-inner>div:first-child>p:last-child{color:#aeb0a9;margin:0;max-width:510px}.purchase-side{display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap;justify-content:flex-end}.purchase-side strong{font:20px var(--mono);color:var(--gold)}.purchase-side small{font:10px var(--mono);color:#aeb0a9}.purchase-button{white-space:nowrap}.footer-price{display:flex;align-items:center;justify-content:center;gap:18px;margin:26px 0 -10px;font-family:var(--mono)}.footer-price strong{font-size:20px;color:var(--gold)}.footer-price span{font-size:10px;color:#aeb0a9}@media(max-width:800px){.purchase-band{padding:58px 0}.purchase-inner{display:block}.purchase-inner h2{font-size:38px}.purchase-side{justify-content:flex-start;margin-top:28px}.footer-price{margin-top:20px}}`;
document.head.appendChild(purchaseStyles);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
  observer.observe(element);
});

document.querySelectorAll('.faq-list details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      document.querySelectorAll('.faq-list details').forEach((other) => {
        if (other !== detail) other.open = false;
      });
    }
  });
});