document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");

    generateBtn.addEventListener("click", function () {
        const prompt = document.getElementById("promptInput").value.trim();

        if (prompt === "") {
            alert("Please enter a comic idea!");
            return;
        }

        const comicGrid = document.querySelector(".comic-grid");
        comicGrid.innerHTML = "";

        const comicType = document.querySelector('input[name="comicType"]:checked').value;
        const artStyle = document.getElementById("styleSelect").value;
        const panelCount = Number(document.getElementById("panelCount").value);

        for (let i = 1; i <= panelCount; i++) {
            const panel = document.createElement("div");
            panel.className = "comic-panel";

            const typeLabel = document.createElement("div");
            typeLabel.className = "comic-type";
            typeLabel.textContent = `${comicType} · ${artStyle}`;

            const speech = document.createElement("div");
            speech.className = "speech";
            speech.textContent = `${prompt} - Scene ${i}`;

            panel.append(typeLabel, speech);
            comicGrid.appendChild(panel);
        }
    });
});