import { bindable, bindingMode, customAttribute } from 'aurelia-framework';
import { IAuDatatableRequest } from '../models/request';

@customAttribute('au-datatable')
export class AuDatatableAttribute {

    @bindable({
        changeHandler: 'setData'
    })
    private startingData: any[];
    @bindable({
        defaultBindingMode: bindingMode.twoWay
    })
    private request: IAuDatatableRequest;

    private setData(): void {
        setTimeout(() => {
            if (!this.request) {
                throw new Error('[au-table:bind] starting data is larger than page size.');
            }

            if (this.startingData.length > this.request.pageSize) {
                throw new Error('[au-table:bind] starting data is larger than page size.');
            }
            this.request.tableData = Array.from(this.startingData);
            if (!this.request.currentPage) {
                this.request.currentPage = 1;
            }
            this.request.skip = 0;
        });
    }
}	