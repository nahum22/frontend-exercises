const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
  },
];

let container = document.querySelector(".container");

const olEl = document.createElement("ol");
olEl.style.listStyleType = "none";

///4

users.forEach((el) => {
  let liEl = document.createElement("li");
  liEl.setAttribute("data-id", el.id);
  liEl.textContent = el.firstName + " " + el.lastName;
  olEl.append(liEl);
});
container.append(olEl);
