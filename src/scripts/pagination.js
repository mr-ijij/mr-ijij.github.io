const listItems = document.getElementById("paginated-list").querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 30;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;

let url = new URL(window.location.href);
let params = url.searchParams;
let page = !!params.get('page') ? params.get('page') : 1;

window.addEventListener("load", () => {
    const writePageNumber = () => {
        for (let i = 1; i <= pageCount; i++) {
            const pageNumber = document.createElement("button");
            pageNumber.className = "pagination-number";
            pageNumber.innerHTML = i;
            pageNumber.setAttribute("page-index", i);
            pageNumber.setAttribute("aria-label", "Page " + i);
            document.getElementById("pagination-numbers").appendChild(pageNumber);
        }
    };
    writePageNumber();
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

const setCurrentPage = (pageNum) => {
    const handleActivePageNumber = () => {
        document.querySelectorAll(".pagination-number").forEach((button) => {
            button.classList.remove("active");
            
            const pageIndex = Number(button.getAttribute("page-index"));
            if (pageIndex == currentPage) {
                button.classList.add("active");
            }
        });
    };

    const handlePageButtonsStatus = () => {
        const disableButton = (button) => {
            button.classList.add("disabled");
            button.setAttribute("disabled", true);
        };
        const enableButton = (button) => {
            button.classList.remove("disabled");
            button.removeAttribute("disabled");
        };

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