const listItems = document.getElementById("paginated-list").querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 30;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;

let url = new URL(window.location.href);
let params = url.searchParams;
let page = !!params.get('page') ? params.get('page') : 1;

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);
    document.getElementById("pagination-numbers").appendChild(pageNumber);
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
    currentPage = Number(pageNum);
    handleActivePageNumber();
    handlePageButtonsStatus();
    
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;
    listItems.forEach((item, index) => {
    item.classList.add("pagination-hidden");
    if (index >= prevRange && index < currRange) {
        item.classList.remove("pagination-hidden");
    }
    });

    if (params.has("page")) {
        params.set("page", String(pageNum));
    } else {
        params.set("page", String(pageNum));
    }
    url.search = params.toString();
    window.history.replaceState({}, '', url);
};

window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(page);

    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    });
    nextButton.addEventListener("click", () => {
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
        disableButton(prevButton);
    } else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
};