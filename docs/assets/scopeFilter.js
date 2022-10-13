function hideAll() {
  const boxes = document.getElementsByClassName("command")
  for (box of boxes) {
    box.style.display = 'none'
  }
}

function showAll() {
  const boxes = document.getElementsByClassName("command")
  for (box of boxes) {
    box.style.display = 'block'
  }
}

function showByScope(scope) {
  if (scope === "all") {
    showAll();
    return;
  }
  // const scoped = document.getElementsByClassName("command").querySelectorAll(`[scope='${scope}']`)
  const scoped = document.querySelectorAll(`.command[scope='${scope}']`)
  for (s of scoped) {
    s.style.display = 'block'
  }
}

function filter(scope) {
  console.log("Filtering " + scope)
  hideAll()
  showByScope(scope)
}


console.log("Hello")
const buttons = document.getElementsByClassName("scopeButton")
for (let button of buttons ) {
  button.onclick = () => {filter(button.attributes.scope.value)}
}