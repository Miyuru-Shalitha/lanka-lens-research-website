const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const milestones = {
  proposal: {
    title: 'Project Proposal',
    date: 'Add your proposal date',
    marks: 'Add allocated marks',
    details: 'Introduces the research problem, objectives, scope, methodology, and expected outcomes.'
  },
  pp1: {
    title: 'Progress Presentation 1',
    date: 'Add PP1 date',
    marks: 'Add allocated marks',
    details: 'Presents early development progress, initial implementation, challenges, and next steps.'
  },
  pp2: {
    title: 'Progress Presentation 2',
    date: 'Add PP2 date',
    marks: 'Add allocated marks',
    details: 'Shows advanced implementation, integration progress, testing results, and improvements.'
  },
  final: {
    title: 'Final Assessment',
    date: 'Add final assessment date',
    marks: 'Add allocated marks',
    details: 'Presents completed system, final evaluation, documentation, and research contribution.'
  },
  viva: {
    title: 'Viva',
    date: 'Add viva date',
    marks: 'Add allocated marks',
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
  document.getElementById('formMessage').textContent = 'Thank you. This is a sample contact form. Connect a form service before publishing.';
  event.target.reset();
  return false;
}
