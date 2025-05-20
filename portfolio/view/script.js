import { loadProfile, loadProjects, handleContactForm } from "../controller/mainController.js";

document.addEventListener("DOMContentLoaded", () => {
  loadProfile();
  loadProjects();
  handleContactForm();
});
