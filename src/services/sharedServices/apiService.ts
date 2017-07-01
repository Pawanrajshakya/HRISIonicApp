import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IResponse } from "../../shared/interfaces";
import { HRISDataInfo, API } from "../../models/code";

@Injectable()
export class APIService extends API {
    // private _BaseURL: string = 'https://fir-3927b.firebaseio.com';//'https://webdeva/HRISMobile';//
    // private _token = { access_token: null, expires_in: 0, token_type: null };
    // private _hasToken: boolean = false;

    constructor(private http: Http) {
        super();
    }

    //check and get token
    private checkToken(): Observable<boolean> {
        return Observable.create((observer: Observer<boolean>) => {
            if (!this._hasToken) {
                this.token().subscribe((data) => {
                    this._hasToken = (data.status === 0);
                    observer.next(data.status === 0);
                }, (error) => {
                    if (error.status !== 200) {
                        observer.error({ status: 404, message: "Token Error Found" });
                    }
                })
            } else {
                observer.next(true);
            }
        })
    }

    //get token
    private token(url: string = 'token', username: string = "hris", password: string = "password"): Observable<IResponse> {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' });

        let options = new RequestOptions({ headers: headers });

        return this.http.post(`${this._BaseURL}/${url}`, `grant_type=password&username=${username}&password=${password}`, options)
            .map((response: Response) => {
                let data = <any[]>response.json();
                this._token.access_token = data["access_token"];
                this._token.expires_in = data["expires_in"];
                this._token.token_type = data["token_type"];
                return { data: this._token, status: 0, message: "" };
            }).catch(this.handleError);
    }

    private sendRequest(request: HRISDataInfo): Observable<IResponse> {

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': this._token.token_type + ' ' + this._token.access_token
        });

        let options = new RequestOptions({ headers: headers, params: request.param });

        if (request.method === 1) {
            return this.http.get(`${this._BaseURL}/${request.url}`, options)
                .map((response: Response) => {
                    return { data: <any[]>response.json(), status: 0, message: "" };
                })
                .catch(this.handleError);
        } else if (request.method === 2) {
            return this.http.post(`${this._BaseURL}/${request.url}`, request.param, options)
                .map((response: Response) => {
                    return { data: <any[]>response.json(), status: 0, message: "" };
                })
                .catch(this.handleError);
        }
    }

    public get(request: HRISDataInfo): Observable<IResponse> {
        return Observable.create((observer: Observer<any>) => {
            this.checkToken().subscribe(() => {
                this.sendRequest(request).subscribe((data) => {
                    observer.next(data);
                }, error => {
                    if (error.status == 401) {
                        this._hasToken = !this._hasToken; //token timeout
                        if (this.checkToken().subscribe()) {
                            this.sendRequest(request).subscribe((data) => {
                                observer.next(data);
                            }, err => {
                                observer.error(this.formatError(error));
                            });
                        }
                    }
                    observer.error(this.formatError(error));
                })
            }, (error) => {
                observer.error(this.formatError(error));
            });
        });
    }

    private formatError(error: Response): IResponse {
        return {
            message: error.statusText || "Server error",
            status: error.status
        }
    }

    private handleError(error: Response) {
        return Observable.throw({
            message: error.statusText || "Server error",
            status: error.status
        });
    }
}