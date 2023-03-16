export class View {
   constructor(api) {
      this.app = document.getElementById('app');
      this.api = api;

      this.title = this.createElement('h1', 'title');
      this.title.textContent = 'Поиск репозиториев Github';

      this.searchLine = this.createElement('div', 'search-line');
      this.searchInput = this.createElement('input', 'search-input');
      this.searchInput.placeholder = 'Введите что-нибудь...';
      this.searchButton = this.createElement('button', 'search-button');
      this.searchButton.innerHTML = 'Найти';
      this.searchCounter = this.createElement('span', 'counter');
      this.searchLine.append(this.searchInput);
      this.searchLine.append(this.searchButton);
      this.searchLine.append(this.searchCounter);

      this.reposWrapper = this.createElement('div', 'repos-wrapper');
      this.reposList = this.createElement('ul', 'repos');
      this.reposWrapper.append(this.reposList);

      this.main = this.createElement('div', 'main');
      this.main.append(this.reposWrapper);

      this.app.append(this.title);
      this.app.append(this.searchLine);
      this.app.append(this.main);
   }

   createElement(elementTag, elementClass) {
      const element = document.createElement(elementTag);
      if (elementClass) {
         element.classList.add(elementClass);
      }
      return element;
   }

   createRepo(RepoData) {
      const repoElement = this.createElement('li', 'repo-prev');
      repoElement.innerHTML = `<img class="repo-owner-avatar" src="${RepoData.owner.avatar_url}" alt="owner ${RepoData.owner.login}">
      <span class="repo-owner">${RepoData.owner.login}</span>
      <a class="repo-link" target="_blank" href="${RepoData.html_url}">${RepoData.full_name}</a>
      <span class="repo-updated">upd. ${RepoData.updated_at}</span>`;

      this.reposList.append(repoElement);
   }

   showRepoData(name) {
      const repoEl = this.createElement('div', 'repo');
   }

   setCounterMessage(message) {
      this.searchCounter.textContent = message;
   }

}