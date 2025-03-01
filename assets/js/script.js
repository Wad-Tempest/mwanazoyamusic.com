document.addEventListener("DOMContentLoaded", function () { 
    console.log("✅ Script chargé correctement !");

    // 🎨 Mode sombre / clair (Light Mode activé par défaut)
    let themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        // Vérifier si l'utilisateur a déjà un mode enregistré
        let darkModeEnabled = localStorage.getItem("dark-mode") === "enabled";

        if (darkModeEnabled) {
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "Light Mode";
        } else {
            document.body.classList.remove("dark-mode");
            themeToggle.textContent = "Dark Mode";
        }

        // Changer le mode au clic et sauvegarder le choix
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            let isDarkMode = document.body.classList.contains("dark-mode");

            themeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
            localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
        });

        console.log("✅ Thème chargé avec sauvegarde !");
    } else {
        console.warn("⚠️ Bouton #theme-toggle introuvable !");
    }

    // 🔎 Barre de recherche des paroles
    let searchBar = document.getElementById("searchBar");
    let songs = document.querySelectorAll(".song");

    if (searchBar) {
        searchBar.addEventListener("input", function () {
            let searchText = searchBar.value.toLowerCase();

            songs.forEach(song => {
                let title = song.querySelector("h2").textContent.toLowerCase();
                let lyrics = song.querySelector("pre").textContent.toLowerCase();

                song.style.display = (title.includes(searchText) || lyrics.includes(searchText)) 
                    ? "block" 
                    : "none";
            });
        });

        console.log("✅ Barre de recherche activée !");
    } else {
        console.error("❌ ERREUR : Élément #searchBar introuvable ! Vérifie ton HTML !");
    }

    // 🔝 Bouton retour en haut
    let scrollToTopBtn = document.getElementById("scrollToTop");

    if (!scrollToTopBtn) {
        scrollToTopBtn = document.createElement("button");
        scrollToTopBtn.id = "scrollToTop";
        scrollToTopBtn.innerHTML = "↑ Haut";
        document.body.appendChild(scrollToTopBtn);
        console.log("✅ Bouton retour en haut ajouté !");
    }

    scrollToTopBtn.style.display = "none";

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener("scroll", function () {
        scrollToTopBtn.style.display = (window.scrollY > 200) ? "block" : "none";
    });

    console.log("✅ Bouton retour en haut activé !");
});
