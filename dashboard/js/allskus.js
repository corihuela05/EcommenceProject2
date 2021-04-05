new Vue({
  el: "#app",
	data() {
       return {
          currentPage: 1,
          itemsPerPage: 9,
          items: [{id: "Item 1", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 2", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 3", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 4", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 5", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 6", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 7", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 8", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 9", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 10", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 11", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 12", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 13", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'},{id: "Item 14", seller: 'Seller 1', sales: '60', contributions: '$1,024.56'}]      
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