export class Log {

   counterMessage(counter) {

      if (counter) {
         if (counter > 10) {
            return ` Первые 10 из ${counter} найденных репозиториев:`
         } else if (counter <= 10) {
            return ` Список из ${counter} найденных репозиториев:`
         }  
      } else {
         return 'Ничего не найдено';
      }
   }
}