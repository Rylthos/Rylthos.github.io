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
  let img_path = project["img"];
  let desc = project["description"];

  let projects_list = document.querySelector("#projects_grid");

  let div = document.createElement("div");
  div.className = `project`;

  let title_div = document.createElement("h2");
  title_div.className = "project_title";
  title_div.innerHTML = name;
  div.appendChild(title_div);

  let bar = document.createElement("div");
  bar.className = "project_bar";
  div.appendChild(bar);

  let content_div = document.createElement("div");
  content_div.className = "project_content";

  let imgElement = document.createElement("img");
  imgElement.src = `./projects/images/${img_path}`
  imgElement.alt = `${name}`;
  imgElement.className = `project_image`;

  let img = document.createElement("a")
  img.href = link
  img.target = "_blank"
  img.appendChild(imgElement);

  content_div.appendChild(img);

  let about_div = document.createElement("p");
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
