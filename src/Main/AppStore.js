import { observable, action, computed } from 'mobx'

class AppStore {
    @observable
    clickedCount = 0;

    @action
    add() {
        this.clickedCount++;
    }
    reduce() {
        this.clickedCount--;
    }
}
export default new AppStore();