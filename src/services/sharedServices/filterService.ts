import { Injectable } from '@angular/core';
import { MessageService } from "./messageService";

@Injectable()
export class FilterService {

    constructor(private messageService: MessageService) { }

    filter(list: any[], filterBy: any[], selected: any[], filterKey: string, selectKey: string = "code"): Promise<any[]> {

        return new Promise((resolve, reject) => {

            let filtered: any[] = [];

            try {

                if (filterBy.length === 0) {
                    resolve(list);
                }

                for (let item of list) {
                    if (filterBy.indexOf(item[filterKey]) !== -1) {
                        if (selected.indexOf(item[selectKey]) !== -1)
                            item.isSelected = true;
                        filtered.push(item);
                    }
                }

                resolve(filtered);
            }
            catch (error) {
                this.messageService.alert(error);
                reject(error);
            }
        });
    };
}