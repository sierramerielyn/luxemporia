document.addEventListener("DOMContentLoaded", () => {

    /* =========================
     PRODUCT LIST
    ========================= */
    const productData = [
        { name: "Netflix", img: "NETFLIX.jpg", link: "price.html#netflix" },
        { name: "Spotify Premium", img: "SPOTIFY.jpg", link: "price.html#spotify" },
        { name: "HBO Max", img: "HBOMAX.jpg", link: "price.html#hbo" },
        { name: "Viu", img: "VIU.jpg", link: "price.html#viu" },
        { name: "Crunchyroll", img: "CRUNCHYROLL.jpg", link: "price.html#crunchyroll" },
        { name: "Disney Plus", img: "DISNEY.jpg", link: "price.html#disney" },
        { name: "Viva Max", img: "VMX.png", link: "price.html#viva" },
        { name: "YouTube", img: "YOUTUBE.jpg", link: "price.html#youtube" },
        { name: "LokLok", img: "LOKLOK.png", link: "price.html#loklok" },
        { name: "Apple Music", img: "APPLE.png", link: "price.html#apple" },
        { name: "Duolingo", img: "DUO.jpg", link: "price.html#duolingo" },
        { name: "Microsoft 365", img: "M365.jpg", link: "price.html#m365" },
        { name: "Quizlet", img: "QUIZLET.jpg", link: "price.html#quizlet" },
        { name: "Scribd", img: "SCRIBD.jpg", link: "price.html#scribd" },
        { name: "Zoom Pro", img: "ZOOM.jpg", link: "price.html#zoom" },
        { name: "ChatGPT", img: "CHATGPT.jpg", link: "price.html#chatgpt" },
        { name: "Gemini AI", img: "GEMINI.jpg", link: "price.html#gemini" },
        { name: "Canva", img: "CANVA.png", link: "price.html#canva" },
        { name: "CapCut Pro", img: "CAPCUT.jpg", link: "price.html#capcut" },
        { name: "PasaData", img: "pasadata.png", link: "price.html#pasadata" }
    ];

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
       SLIDESHOW 
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
         SEARCH
    ========================= */
    const searchInput = document.querySelector(".search input");
    
    // Create Results Box if it doesn't exist
    let resultsBox = document.getElementById("searchResults");
    if (!resultsBox) {
        resultsBox = document.createElement("div");
        resultsBox.id = "searchResults";
        resultsBox.className = "search-results";
        // Append it to the search div so it stays positioned
        document.querySelector(".search").appendChild(resultsBox);
    }

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase().trim();
            resultsBox.innerHTML = "";

            if (!query) {
                resultsBox.classList.remove("show");
                return;
            }

            // Search through our productData array
            const matches = productData.filter(item => 
                item.name.toLowerCase().includes(query)
            );

            if (matches.length > 0) {
                matches.forEach(item => {
                    const div = document.createElement("div");
                    div.className = "search-item";
                    div.innerHTML = `
                        <img src="${item.img}" alt="${item.name}">
                        <span>${item.name}</span>
                    `;
                    // When clicked, go to the page and the specific ID
                    div.onclick = () => {
                        window.location.href = item.link;
                    };
                    resultsBox.appendChild(div);
                });
                resultsBox.classList.add("show");
            } else {
                resultsBox.classList.remove("show");
            }
        });
    }

    
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search")) {
            resultsBox.classList.remove("show");
        }
    });
});


