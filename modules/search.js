export class Search {
   constructor(view, api, log) {
      this.view = view;
      this.api = api;
      this.log = log;

      this.view.searchButton.addEventListener('click', this.searchRepos.bind(this));
      this.view.searchInput.addEventListener('keyup', function (e) {
         let key = e.keyCode;
         if (key === 13) {

            this.view = view;
            this.api = api;
            this.log = log;
            this.view.setCounterMessage('');

            if (this.view.searchInput.value.length > 3) {
               this.view.reposList.innerHTML = '';
               let message;

               this.api.searchRepos(this.view.searchInput.value).then((res) => {
                  res.json().then(res => {
                     message = this.log.counterMessage(res.total_count);
                     this.view.setCounterMessage(message);
                     res.items.forEach(repo => this.view.createRepo(repo))
                  })
               })

            } else {
               alert('Введите более 3 символов!');
            }
         }
      });
   }

   searchRepos() {
      this.view.setCounterMessage('');
      if (this.view.searchInput.value.length > 3) {
         this.clearRepos();
         this.reposRequest(this.view.searchInput.value);

      } else {
         alert('Введите более 3 символов!');
      }
   }

   async reposRequest(searchValue) {
      let message;

      await this.api.searchRepos(searchValue).then((res) => {
         res.json().then(res => {
            message = this.log.counterMessage(res.total_count);
            this.view.setCounterMessage(message);
            res.items.forEach(repo => this.view.createRepo(repo))
         })
      })

   }

   clearRepos() {
      this.view.reposList.innerHTML = '';
   }

}