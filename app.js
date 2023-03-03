// Tools

const loadTools = async (dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayTools(data.data.tools, dataLimit);
};

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

  tools.forEach((tool) => {
    const toolsDiv = document.createElement("div");
    toolsDiv.classList.add("col");
    toolsDiv.innerHTML = `
        <div class="card h-100">
                        <img src="${
                          tool.image
                        }" class="card-img-top h-50" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Features</h5>
                            <ol>1. ${
                              tool.features[0] ? tool.features[0] : "No Data"
                            }</ol>
                            <ol>2. ${
                              tool.features[1] ? tool.features[1] : "No Data"
                            }</ol>
                            <ol>3. ${
                              tool.features[2] ? tool.features[2] : "No Data"
                            }</ol>
                            <hr>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5>${tool.name}</h5>
                                    <img src = "Images/calander.svg" class = "px-1">${
                                      tool.published_in
                                    }
                                </div>
                                <button data-bs-toggle="modal" data-bs-target="#modalCardHub" onclick = "singleData('${
                                  tool.id
                                }')" id = "toolsModal" class = "border border-0 rounded-circle px-4"><img src = "Images/right arrow.svg"></button>
                            </div>
                        </div>
                    </div>
                            `;
    toolsContainer.appendChild(toolsDiv);
  });

  toggleSpinner(false);
};

// Loader

const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};

// Single data details

const singleData = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayIDs(data.data);
};

const displayIDs = (tool) => {
  const modalContainer = document.getElementById("modal-container");

  modalContainer.innerHTML = `
                            <section>
                                <div class="row row-cols-1 row-cols-md-2 g-2">
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body mx-2" style="background-color: rgba(230, 7, 7, 0.05);">
                                                <h5 class="card-title">${
                                                  tool.description
                                                }</h5>
                                                <div class="d-flex justify-content-sm-evenly ">
                                                    <button class="btn w-50 py-3 px-2  fs-6 lh-1 fw-bold rounded-3 bg-white text-success ">
                                                    <p>${
                                                      tool.pricing[0].price
                                                        ? tool.pricing[0].price
                                                        : "No Data"
                                                    }</p>
                                                    <p>${
                                                      tool.pricing[0].plan
                                                        ? tool.pricing[0].plan
                                                        : "No Data"
                                                    }</p>
                                                    </button>

                                                    <button class="btn w-50 py-3 px-2  fs-6 lh-1 fw-bold rounded-3 bg-white text-warning">
                                                    <p>${
                                                      tool.pricing[1].price
                                                        ? tool.pricing[1].price
                                                        : "No Data"
                                                    }</p>
                                                      <p>${
                                                        tool.pricing[1].plan
                                                          ? tool.pricing[1].plan
                                                          : "No Data"
                                                      }</p>
                                                    </button>

                                                    <button class="btn w-50 py-3 px-2  fs-6 lh-1 fw-bold rounded-3 bg-white text-danger">
                                                    <p>${
                                                      tool.pricing[2].price
                                                        ? tool.pricing[2].price
                                                        : "No Data"
                                                    }</p>
                                                      <p>${
                                                        tool.pricing[2].plan
                                                          ? tool.pricing[2].plan
                                                          : "No Data"
                                                      }</p>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-evenly mt-4">
                                                <div class="">
                                                    <h4>Features</h4>
                                                    <ul>
                                                        <li>${
                                                          tool.features[1]
                                                            .feature_name
                                                        }</li>
                                                        <li>${
                                                          tool.features[2]
                                                            .feature_name
                                                        }</li>
                                                        <li>${
                                                          tool.features[3]
                                                            .feature_name
                                                        }</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4>Integrations</h4>
                                                    <ul>
                                                        <li>${
                                                          tool.integrations[0]
                                                            ? tool
                                                                .integrations[0]
                                                            : "no data"
                                                        }</li>
                                                        <li>${
                                                          tool.integrations[1]
                                                            ? tool
                                                                .integrations[1]
                                                            : "no data"
                                                        }</li>
                                                        <li>${
                                                          tool.integrations[2]
                                                            ? tool
                                                                .integrations[2]
                                                            : "no data"
                                                        }</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card">
                                            <img src="${
                                              tool.image_link[0]
                                            }" class="card-img-top" alt="...">
                                            <div class="card-body">
                                            <button class = "position-absolute top-0 end-0 px-5 ${
                                              tool.accuracy.score
                                                ? tool.accuracy.score
                                                : "d-none"
                                            }">${
    tool.accuracy.score ? tool.accuracy.score * 100 : "No Data"
  }% Accuracy</button>
                                                <h5 class="card-title">${
                                                  tool.input_output_examples[0]
                                                    .input
                                                    ? tool
                                                        .input_output_examples[0]
                                                        .input
                                                    : "No Data"
                                                }</h5>
                                                <p class="card-text">${
                                                  tool.input_output_examples[0]
                                                    .output
                                                    ? tool
                                                        .input_output_examples[0]
                                                        .output
                                                    : "No Data"
                                                }</p>
                                            </div>
                                        </div>
                                    </div>
                            </section>
    `;
};

//* see more button event handler
document.getElementById("see-more").addEventListener("click", function () {
  toggleSpinner(true);
  loadTools();
});

toggleSpinner(true);

loadTools(6);
