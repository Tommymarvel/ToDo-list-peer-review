import { data } from './GetElements.js';
// eslint-disable-next-line import/no-cycle
import ShowList from './DisplayTodo.js';

class RemoveList {
  removeList = (id) => {
    let listArr = [];
    let str = '';
    const listShow = new ShowList();
    const listArrStr = localStorage.getItem('list');
    listArr = JSON.parse(listArrStr);
    listArr.splice(id, 1);

    // Updated index
    const updateData = listArr.filter((updatedIndex, index) => {
      if (updatedIndex.index !== index) {
        updatedIndex.index = index;
      }
      return updatedIndex;
    });

    localStorage.setItem('list', JSON.stringify(updateData));
    str = '';
    data.innerHTML = str;
    listShow.showList();
  };
}

export default RemoveList;
