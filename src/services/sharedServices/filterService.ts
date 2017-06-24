import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

    filter(list: any[], filterBy: any[], selected: any[], filterKey: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            try {

                let filtered: any[] = [];

                let data: any[] = [];

                if (filterBy.length === 0) {
                    resolve(list);
                }

                for (let item of list) {
                    data = item[filterKey].replace("[", "").replace("]", "").split(",");
                    for (let i of data) {
                        if (filterBy.indexOf(i) !== -1) {
                            filtered.push(item);
                        }
                    }
                }

                for (var code of selected) {
                    var i = filtered.map(function (e) { return e.Code; }).indexOf(code);
                    if (i !== -1) {
                        filtered[i].isSelected = true;
                    }
                }

                resolve(filtered);
            }
            catch (error) {
                reject([error]);
            }
        });
    };
}