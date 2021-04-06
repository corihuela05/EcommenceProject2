new Vue({
  el: "#app",
	data() {
       return {
          currentPage: 1,
          itemsPerPage: 9,
          items: [{id: "Seller 1", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 2", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 3", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 4", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 5", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 7", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 8", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 9", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 10", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 11", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 12", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 1", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 2", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 3", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 4", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 5", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 7", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 8", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 9", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 10", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 11", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 12", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 1", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 2", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 3", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 4", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 5", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 7", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 8", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 9", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 10", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 11", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'},{id: "Seller 12", sales: '$7,230.57', skus: '60', contributions: '$1,024.56'}]
       }
    },
    computed: {
       paginatedItems() {
          let page = 1;
          return [].concat.apply(
             [], 
             this.items.map( (item, index) => 
                index % this.itemsPerPage ? 
                   [] : 
                   { page: page++, items: this.items.slice(index, index + this.itemsPerPage)}
             )
           );
       },
       currentPageItems() {
          let currentPageItems = this.paginatedItems.find(pages => pages.page == this.currentPage);
            return currentPageItems ? currentPageItems.items : [];
       }
    },
    methods: {
       changePage(pageNumber) {
          if(pageNumber !== this.currentPage)
               this.currentPage = pageNumber;
       }
    }
})