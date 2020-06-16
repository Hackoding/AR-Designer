let styles;
let scripts;
let boilerplate = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <style>${""}</style>
  </head>
  <body>
    <script>${""}</script>
  </body>
</html>
`

document.getElementById("editor").addEventListener("change", () => {
  localStorage.setItem("code", $("#editor").val())
});
const code = localStorage.getItem("code");
if (code) {
  boilerplate = code;
} else {
  boilerplate = boilerplate;
}

$("#editor").text(boilerplate);

//title stuff

document.getElementById('project-name').addEventListener("change", () => {
  localStorage.setItem("ptitle", $("#project-name").val());
});

let ptitle = localStorage.getItem("ptitle");

if(!ptitle) {
  ptitle = "My Project";
}

$("#project-name").val(ptitle)