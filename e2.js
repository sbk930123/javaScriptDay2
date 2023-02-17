const noContext = document.getElementById("noContextMenu");

// noContext.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });

// noContext.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });

function preventDefault(e) {
  e.preventDefault();
}

noContext.addEventListener("contextmenu", preventDefault);