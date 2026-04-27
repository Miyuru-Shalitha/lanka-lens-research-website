const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('show'));
});

const milestones = {
  proposal: {
    title: 'Project Proposal',
    date: '19/09/2025',
    marks: 'Good',
    details: 'Introduces the research problem, objectives, scope, methodology, and expected outcomes.'
  },
  pp1: {
    title: 'Progress Presentation 1',
    date: '15/12/2025',
    marks: 'Good',
    details: 'Presents early development progress, initial implementation, challenges, and next steps.'
  },
  pp2: {
    title: 'Progress Presentation 2',
    date: '11/03/2025',
    marks: 'Good',
    details: 'Shows advanced implementation, integration progress, testing results, and improvements.'
  },
  final: {
    title: 'Final Assessment',
    date: '26/04/2026',
    marks: 'Pending',
    details: 'Presents completed system, final evaluation, documentation, and research contribution.'
  },
  viva: {
    title: 'Viva',
    date: '27/04/2026',
    marks: 'Pending',
    details: 'Final oral examination and demonstration of the research project.'
  }
};

const milestoneSelect = document.getElementById('milestoneSelect');
const milestoneCard = document.getElementById('milestoneCard');

function renderMilestone(key) {
  const item = milestones[key];
  milestoneCard.innerHTML = `
    <h3>${item.title}</h3>
    <p><strong>Date:</strong> ${item.date}</p>
    <p><strong>Marks Allocated:</strong> ${item.marks}</p>
    <p>${item.details}</p>
  `;
}

milestoneSelect.addEventListener('change', (event) => {
  renderMilestone(event.target.value);
});

renderMilestone('proposal');

function handleContact(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const subject = encodeURIComponent('LankaLens Research Project Inquiry');
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:it22298980@my.sliit.lk?subject=${subject}&body=${body}`;
  document.getElementById('formMessage').textContent = 'Opening your email application with a prepared draft.';
  event.target.reset();
  return false;
}
