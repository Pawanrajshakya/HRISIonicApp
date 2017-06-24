import { Injectable } from '@angular/core';

import { INote } from '../shared/interfaces';
import { ToastService } from "./sharedServices/toastService";
import { DatabaseService } from "./sharedServices/databaseService";

@Injectable()
export class NoteService {

    key: string = "Notes";
    data: any = [];

    public constructor(private toastService: ToastService,private db: DatabaseService) { };

    public get(): Promise<INote> {
        return new Promise((resolve, reject) => {
            let promise = this.db.Get(this.key);
            promise.then(
                (data) => {
                    this.data = data.data;
                    if (this.data !== null) {
                        resolve(this.data.sort(
                            (a, b) => {
                                return Date.parse(b.CreatedOn) - Date.parse(a.CreatedOn)
                            })
                        );
                    } else {
                        resolve([]);
                    }
                }).catch((error) => {
                    reject(error)
                });
        });
    }

    public add(value: string): Promise<any> {
        return new Promise((resolve, reject) => {

            if (value === undefined || value.length === 0)
                reject("Data not found.");

            let note: INote = { Note: value, CreatedOn: new Date().toLocaleString() };

            this.get().then((data) => {
                this.data = this.data || [];
                this.data.push(note);
                this.db.Remove(this.key).then(() => {
                    this.db.Set(this.key, this.data).then(() => {
                        resolve("Saved Successfully");
                    });
                });
            }).catch((error) => {
                reject(error);
            });
        });
    };

    public remove(value: INote): Promise<any> {
        return new Promise((resolve, reject) => {
            this.get().then((data) => {
                this.data = this.data || [];
                let index = this.data.findIndex(x => x.CreatedOn == value.CreatedOn);
                this.data.splice(index, 1);
                this.db.Remove(this.key).then(() => {
                    this.db.Set(this.key, this.data).then(() => {
                        resolve("Removed Successfully");
                    });
                });
            });
        });
    }

}