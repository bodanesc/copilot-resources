document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('mode-toggle');
  const savedMode = localStorage.getItem('mode');
  const defaultMode = 'dark-mode';
  const currentMode = savedMode || defaultMode;

  // Apply initial mode
  document.body.classList.add(currentMode);
  updateModeToggleText(currentMode);

  // Show the body after applying the mode
  document.body.classList.add('loaded');

  // Toggle mode function
  modeToggle.addEventListener('click', function () {
    const newMode = document.body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
    updateMode(newMode);
    localStorage.setItem('mode', newMode);
    updateModeToggleText(newMode);
  });

  // Function to update mode with fade effect
  function updateMode(newMode) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add('mode-transition');

    setTimeout(function () {
      document.body.classList.remove('mode-transition');
      document.body.classList.add(newMode);
    }, 500); // Delay should match the transition duration in milliseconds
  }

  // Function to update mode toggle text
  function updateModeToggleText(mode) {
    modeToggle.textContent = mode === 'light-mode' ? '🌙' : '☀️';
  }
});
