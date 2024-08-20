/* For all details, when expanded, expand child details */

let openChildren = (event) => {
  details = event.target;
  let childDetails = Array.from(details.getElementsByTagName("details"));
  if (details.open) {
    childDetails.forEach((e) => e.setAttribute("open", "true"));
  } else {
    childDetails.forEach((e) => e.removeAttribute("open"));
  }
};

let details = Array.from(document.getElementsByTagName("details"));
details.forEach((e) => e.addEventListener("toggle", openChildren));

/* Toggle all details */
let openAll = (event) => {
  let allDetails = Array.from(document.getElementsByTagName("details"));
  if (event.target.open) {
    allDetails.forEach((e) => e.setAttribute("open", "true"));
  } else {
    allDetails.forEach((e) => e.removeAttribute("open"));
  }
};

document.getElementById("expand-all").addEventListener("toggle", openAll);
