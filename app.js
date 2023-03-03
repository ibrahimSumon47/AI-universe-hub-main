// Tools

const loadTools = async (dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayTools(data.data.tools, dataLimit)
}



const displayTools = (tools, dataLimit) => {

    const toolsContainer = document.getElementById("tools-container");

    toolsContainer.innerHTML = "";
    
    const seeMoreSection = document.getElementById("see-more-section");

    if (tools.length > 6 && dataLimit) {
        tools = tools.slice(0, 6);
        seeMoreSection.classList.remove("d-none");
      } else {
        seeMoreSection.classList.add("d-none");
      }

    tools.forEach(tool => {
        const toolsDiv = document.createElement("div");
        toolsDiv.classList.add("col");
        toolsDiv.innerHTML = `
        <div class="card h-100">
                        <img src="${tool.image}" class="card-img-top h-50" alt="...">
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
                                <button data-bs-toggle="modal" data-bs-target="#modalCardHub" onclick = "singleData("${tool.id}")" id = "toolsModal" class = "border border-0 rounded-circle px-4"><img src = "Images/right arrow.svg"></button>
                            </div>
                        </div>
                    </div>
                            `;
        toolsContainer.appendChild(toolsDiv)
    })

    toggleSpinner(false);
}


// Loader

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById("loader");
    if (isLoading) {
        loaderSection.classList.remove("d-none");
    }
    else {
        loaderSection.classList.add("d-none");
    }
}

// Single data details

const singleData = async (id) => {
    const url2 = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(url2);
    const data2 = await res.json();
    console.log(data2.data);
}



//* see more button event handler
document.getElementById("see-more").addEventListener("click", function () {
    toggleSpinner(true);
    loadTools();
  });

toggleSpinner(true);

loadTools(6);

