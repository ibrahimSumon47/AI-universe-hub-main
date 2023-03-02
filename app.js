const loadTools = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayTools(data.data.tools)
}

const displayTools = tools => {
    const toolsContainer = document.getElementById("tools-container");
    tools.forEach(tool => {
        const toolsDiv = document.createElement("div");
        toolsDiv.classList.add("col");
        toolsDiv.innerHTML = `
        <div class="card h-100">
                        <img src="${tool.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Features</h5>
                            <ol>1. ${tool.features[0]}</ol>
                            <ol>2. ${tool.features[1]}</ol>
                            <ol>3. ${tool.features[2]}</ol>
                            <hr>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5>${tool.name}</h5>
                                    <h6><img src = "Images/calander.svg" class = "px-1">${tool.published_in}</h6>
                                </div>
                                <button class= "border border-0 rounded-circle px-4"><img src = "Images/right arrow.svg"></button>
                            </div>
                        </div>
                    </div>
                            `;
        toolsContainer.appendChild(toolsDiv)
    })
}

loadTools();
