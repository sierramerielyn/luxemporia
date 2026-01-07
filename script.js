document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU TOGGLE
    ========================= */
    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener("click", () => {
            mobileNav.classList.toggle("show");
        });
    }

    /* =========================
       SLIDESHOW (FADE IN / OUT)
    ========================= */
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slides");

    function showSlides() {
        slides.forEach(slide => {
            slide.style.opacity = "0";
            slide.style.position = "absolute";
        });

        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;

        slides[slideIndex - 1].style.opacity = "1";
        slides[slideIndex - 1].style.position = "relative";
    }

    if (slides.length > 0) {
        showSlides();
        setInterval(showSlides, 4000);
    }


    /* =========================
       MOBILE CATEGORY BUTTONS
    ========================= */
    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.cat;
            const section = document.getElementById(target);
            if (!section) return;

            section.scrollIntoView({ behavior: "smooth" });

            const loadBtn = section.querySelector(".load-more");
            if (loadBtn && loadBtn.style.display !== "none") {
                loadAllCards(target);
            }
        });
    });


    /* =========================
   SEARCH FILTER 
========================= */
const searchInput = document.querySelector(".search input");

    let resultsBox = document.getElementById("searchResults");
    if (!resultsBox) {
        resultsBox = document.createElement("div");
        resultsBox.id = "searchResults";
        resultsBox.className = "search-results";
        document.body.appendChild(resultsBox);
    }

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase().trim();
            resultsBox.innerHTML = "";

            if (!query) {
                resultsBox.classList.remove("show");
                return;
            }

            const items = document.querySelectorAll(".products");
            let found = false;

            items.forEach(item => {
                const name = item.querySelector("h3")?.innerText.toLowerCase();
                if (name && name.includes(query)) {
                    found = true;

                    const img = item.querySelector("img")?.src || "";
                    const link = item.closest("a")?.href || "#";

                    const div = document.createElement("div");
                    div.className = "search-item";
                    div.innerHTML = `
                        <img src="${img}">
                        <span>${item.querySelector("h3").innerText}</span>
                    `;

                    div.onclick = () => window.location.href = link;
                    resultsBox.appendChild(div);
                }
            });

            resultsBox.classList.toggle("show", found);
        });
    }

    document.addEventListener("click", e => {
        if (!e.target.closest(".search") && !e.target.closest(".search-results")) {
            resultsBox.classList.remove("show");
        }
    });

});

