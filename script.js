
      /* =========================
   THEME TOGGLE
========================= */
      const toggle = document.getElementById("themeToggle");
      const body = document.body;

      // Load saved theme
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        body.classList.add("dark");
      }

      // Update button text
      function updateToggleText() {
        toggle.textContent = body.classList.contains("dark")
          ? "☀️ Light Mode"
          : "🌙 Dark Mode";
      }
      updateToggleText();

      toggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        localStorage.setItem(
          "theme",
          body.classList.contains("dark") ? "dark" : "",
        );
        updateToggleText();
      });

      /* =========================
   SKILLS BAR ANIMATION
========================= */
      const skillsSection = document.getElementById("skills");

      const skillObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              document.querySelectorAll(".fill").forEach((fill) => {
                fill.style.width = fill.dataset.pct + "%";
              });
              skillObserver.disconnect();
            }
          });
        },
        { threshold: 0.4 },
      );

      if (skillsSection) {
        skillObserver.observe(skillsSection);
      }

      /* =========================
   CONTACT FORM
========================= */
      const form = document.getElementById("contactForm");

      if (form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();

          const msg = document.createElement("p");
          msg.textContent = "✅ Message sent successfully!";
          msg.style.color = "green";
          msg.style.marginTop = "10px";

          form.appendChild(msg);
          form.reset();

          setTimeout(() => msg.remove(), 3000);
        });
      }

      /* =========================
   SMOOTH SCROLL
========================= */
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          document
            .querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
        });
      });