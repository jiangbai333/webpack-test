import Moment from 'moment';

export class Rander {
  
  /** 构造方法 */
    constructor(dom) {
        this._dom = dom;
        this.randerTime();
    }

    /** 时间渲染方法 */
    randerTime() {
        this._dom.innerHTML = Moment().format('YYYY-MM-DD hh:mm:ss')
    }
}
