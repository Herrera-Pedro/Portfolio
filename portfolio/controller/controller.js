import { profileData } from "../model/data.js";

export function loadProfile() {
  const profileSection = document.getElementById("profile");
  profileSection.innerHTML = `
    <h1>${profileData.name}</h1>
    <h2>${profileData.formation}</h2>
    <p>${profileData.bio}</p>
    <p><strong>Objetivos:</strong> ${profileData.goals}</p>
  `;
}

export function loadProjects() {
  const projectSection = document.getElementById("projects");
  profileData.projects.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${proj.image}" alt="${proj.title}">
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <small>Tecnologias: ${proj.technologies.join(", ")}</small>
    `;
    projectSection.appendChild(card);
  });
}

export function handleContactForm() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;

    alert(`Obrigado, ${name}! Mensagem recebida com sucesso.`);
    form.reset();
  });
}
