import { Injectable } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';

@Injectable()
export class MessageService {

    public constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) { }

    public toast(message: string, position: string = "top", duration: number = 2000) {
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

    public alert(message: string, position: string = "top", title: string = "Alert", subTitle: string = "") {
        let alert = this.alertCtrl.create({
            message: message || "",
            title: title,
            subTitle: subTitle,
            buttons: ['Ok'],
            cssClass: ""
        });
        alert.present();
    }
}