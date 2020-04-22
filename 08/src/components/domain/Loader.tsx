import { TRENDING_URL, SEARCH_URL } from "../../constants";
import { observable, action } from "mobx";

class Loader {
  limit = 10;
  @observable loading = true;
  @observable items: Gif[] = [];
  @observable currentPage = 1;
  @observable numberOfPages = 0;
  @observable searchTerm: string;

  @action loadItems = (offset = 0, searchTerm = ""): void => {
    this.loading = true;
    if (searchTerm) this.searchTerm = searchTerm;
    fetch(
      this.searchTerm
        ? SEARCH_URL(this.searchTerm, offset)
        : TRENDING_URL(offset)
    )
      .then((res) => res.json())
      .then((res) => {
        this.items = res.data;
        this.loading = false;
        this.numberOfPages = Math.floor(
          res.pagination.total_count / this.limit
        );
      });
  };

  @action setPage = (page: number): void => {
    if (page <= 0) {
      console.log("Page numbers < 1 are not possible");
      page = 1;
    }
    if (page > this.numberOfPages) {
      console.log("There are not that many pages");
      page = this.numberOfPages;
    }
    const offset = (page - 1) * this.limit;
    this.currentPage = page;
    this.loadItems(offset);
  };

  @action nextPage = (): void => {
    this.setPage(this.currentPage + 1);
  };

  @action lastPage = (): void => {
    this.setPage(this.currentPage - 1);
  };
}

export default Loader;
