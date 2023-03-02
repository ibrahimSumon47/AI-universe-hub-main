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
                            <ol>1. Natural language processing</ol>
                            <ol>2. Contextual understanding</ol>
                            <ol>3. Text generation</ol>
                            <hr>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5>ChatGPT</h5>
                                    <h6>11/01/2022</h6>
                                </div>
                                <button>hell</button>
                            </div>
                        </div>
                    </div>
                            `;
                        toolsContainer.appendChild(toolsDiv)  
    })
}

loadTools();
