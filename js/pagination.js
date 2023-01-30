const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll(".item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");



const paginationLimit = 12;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;
  handleActivePageNumber();
  handlePageButtonsStatus();
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);
  prevBtn.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });
  nextBtn.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });
  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};
const enableButton = (button) => {
button.classList.remove("disabled");
button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
        disableButton(prevBtn);
    } else {
        enableButton(prevBtn);
    }
    if (pageCount === currentPage) {
        disableButton(nextBtn);
    } else {
        enableButton(nextBtn);
    }
};
