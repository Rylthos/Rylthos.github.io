async function readJson() {
  return await fetch("./../projects/projects_list.json").then(response => {
    if (!response.ok) {
      throw new Error(`Failed to read 'projects_list.json': ${response.status}`);
    }

    return response.json();
  }).catch(error => console.error("Failed to fetch data: ", error));
}

function generateHTML(project) {
  let name = project["name"];
  let link = project["link"];
  let img = project["img"];
  let desc = project["description"];

  let projects_list = document.querySelector("#projects_grid");

  let div = document.createElement("div");
  div.className = `project`;

  let imgElement = document.createElement("img");
  imgElement.src = `./projects/images/${img}`
  imgElement.alt = `${name}`;
  imgElement.className = `project_image`;
  div.appendChild(imgElement);

  let content_div = document.createElement("div");
  content_div.className = "project_content";

  let title_div = document.createElement("div");
  title_div.className = "project_title";
  title_div.innerHTML = name;
  content_div.appendChild(title_div);

  let about_div = document.createElement("div");
  about_div.className = "project_about";
  about_div.innerHTML = desc;
  content_div.appendChild(about_div);

  div.appendChild(content_div);

  projects_list.appendChild(div);
}

export async function generateProjects() {
  console.log("Hello, World");

  let projects = await readJson();
  console.log(projects);
  projects = projects["projects"];
  console.log(projects);

  for (let i = 0; i < projects.length; i++) {
    generateHTML(projects[i]);
    console.log(projects[i]);
  }
}
