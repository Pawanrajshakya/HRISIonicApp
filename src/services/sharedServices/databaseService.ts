import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IResponse } from "../../shared/interfaces";

@Injectable()
export class DatabaseService {
    public constructor(private storage: Storage) {
        this.storage.ready().then(() => { console.log(this.storage, '<storage is ready>'); });
    };

    public Set(key: string, value: any): Promise<IResponse> {
        return new Promise((resolve, reject) => {
            this.storage.ready().then((data) => {
                this.Remove(key).then(() => {
                    this.storage.set(key, value);
                    resolve({ data: data, status: 0, message: "" });
                }).catch(() => {
                    reject(this.handleError());
                })
            }, (error) => {
                reject(this.handleError());
            });
        });
    }

    public Get(key: string): Promise<IResponse> {
        return new Promise((resolve, reject) => {
            this.storage.get(key).then((data) => {
                resolve({ data: JSON.parse(JSON.stringify(data)) || [], status: ((data !== null) ? 0 : -101), message: "" });
            }, (error) => {
                reject(this.handleError());
            });
        });
    };

    public Remove(key: string): Promise<IResponse> {
        return new Promise((resolve, reject) => {
            this.storage.remove(key).then((data) => {
                resolve({ data: data, status: 0, message: "" });
            }, (error) => {
                reject(this.handleError());
            });
        });
    };

    public Clear(): Promise<IResponse> {
        return new Promise((resolve, reject) => {
            this.storage.clear().then((data) => {
                resolve({ data: true, status: 0, message: "" });
            }, (error) => {
                reject(this.handleError());
            });
        });
    }

    private handleError() {
        return { data: {}, status: -101, message: "Internal Database Error" };
    }
}