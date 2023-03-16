const URL = 'https://api.github.com/';
const ITEMS_PER_PAGE = 10;

export class Api {
   async searchRepos(value) {
      return await fetch(`${URL}search/repositories?q=${value}&per_page=${ITEMS_PER_PAGE}`)
   } 

}


