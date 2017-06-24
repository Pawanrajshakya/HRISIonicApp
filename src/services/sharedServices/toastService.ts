import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

    public constructor(public toastCtrl: ToastController) { }

    public present(message: string, position: string = "top", duration: number = 2000) {
        let toast = this.toastCtrl.create({
            message: message || "",
            duration: duration,
            position: position,
            closeButtonText: "close",
            showCloseButton: true,
            cssClass: ""
        });
        toast.present();
    }
}