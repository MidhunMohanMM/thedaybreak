export default {
  computed: {
    filteredArticles: function () {
      return this.articles.filter((article) => {
        return article.mainheading.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
}
