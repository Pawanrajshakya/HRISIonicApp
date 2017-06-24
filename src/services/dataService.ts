import { Injectable } from '@angular/core';
import { HRISDataInfo, HRISInternalData, method } from "../models/code";
import { APIService } from "./sharedServices/apiService";
import { DatabaseService } from "./sharedServices/databaseService";
import { IResponse } from "../shared/interfaces";

@Injectable()
export class DataService<T> extends HRISInternalData {

    constructor(public databaseService: DatabaseService, private apiService: APIService) {
        super();
    }

    private requestValidator(request: HRISDataInfo): Promise<boolean> {
        return new Promise((resolve, reject) => {

            if (request.method === method.local)
                resolve(true);

            if (!request.hasParam)
                resolve(true);

            if (request.hasLocalStorage && request.key.length === 0)
                resolve(false);

            if (request.url.trim().length === 0)
                resolve(false);

            console.log('get/DataService 0 request.param.length', request, request.param);
            if (request.param && request.param !== {}) {
                resolve(true);
            }

            resolve(false);
        });
    }

    private requestToAPIServer(request: HRISDataInfo): Promise<IResponse> {
        return new Promise((resolve, reject) => {
            console.log('get/DataService 3', request, request.method);
            if (request.method === method.get) {
                this.apiService.get(request.url, request.param).subscribe((repsonse) => {
                    console.log('get/DataService 3.1', request, repsonse);
                    resolve(repsonse);
                }, (error) => {
                    console.log('get/DataService 3.1 error', request, error);
                    reject(error);
                });
            } else if (request.method === method.post) {
                this.apiService.get(request.url, request.param).subscribe((repsonse) => {
                    console.log('get/DataService 3.2', request, repsonse);
                    resolve(repsonse);
                });
            }
        });
    }

    private requestToLocalServer(request: HRISDataInfo): Promise<IResponse> {
        return new Promise((resolve, reject) => {
            // console.log('get/DataService 33', request, request.method.toLowerCase());
            if (!request.refresh) {
                this.databaseService.Get(request.key).then((response) => {
                    if ((request.method === method.local) && (response.status !== 0))
                        resolve({ data: [], status: 0, message: "" });
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            } else {
                resolve({ data: null, status: -1, message: "" });
            }
        });
    }

    public get(request: HRISDataInfo): Promise<IResponse> {
        console.log('get/DataService 1', request, request.method, request.isArray);
        return new Promise((resolve, reject) => {
            this.requestValidator(request).then((isValid) => {
                console.log('get/DataService 2.1', request, isValid);
                if (!isValid) {
                    resolve({ data: (request.isArray) ? [] : {}, status: -1, message: "Invalid Request Format." });
                } else {
                    this.requestToLocalServer(request).then((response: IResponse) => {
                        console.log('get/DataService 2', request, response);
                        if (!(response.status === 0)) {
                            this.requestToAPIServer(request).then((response: IResponse) => {
                                if (request.hasLocalStorage) {
                                    this.databaseService.Set(request.key, response.data).then(() => {
                                        resolve(response);
                                    })
                                }
                            }).catch((error) => {
                                console.log('get/DataService 2.2', request, error);
                                reject(error);
                            });
                        } else {
                            resolve(response);
                        }
                    })
                }
            })
        });
    }
}