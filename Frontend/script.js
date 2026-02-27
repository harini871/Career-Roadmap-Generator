function analyze() {
  let skills = document.getElementById("skills").value;
  let role = document.getElementById("role").value;

  fetch("http://localhost:8080/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      skills: skills,
      role: role,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("missing").innerHTML = data.missingSkills
        .map((s) => `<li>${s}</li>`)
        .join("");

      document.getElementById("roadmap").innerHTML = data.roadmap
        .map((r) => `<li>${r}</li>`)
        .join("");
    });
}
