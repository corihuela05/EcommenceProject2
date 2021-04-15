new Vue({
  el: "#app",
	data() {
       return {
          currentPage: 1,
          itemsPerPage: 9,
          items: [{id: "Partner 1", type: 'School', sales: '60', contributions: '$1,024.56'},{id: "Partner 2", type: 'Partner', sales: '674', contributions: '$8,024.56'},{id: "Partner 3", type: 'Church', sales: '21', contributions: '$7,024.56'},{id: "Partner 4", type: 'Non Profit', sales: '50', contributions: '$5,024.56'},{id: "Partner 5", type: 'Partner', sales: '30', contributions: '$3,024.56'}]
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