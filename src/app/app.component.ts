import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuService } from "../services/menuService";
import { UserService } from "../services/userService";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = "TabsPage";

  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
    , public menuService: MenuService
    , public userService: UserService
    , public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.menuService.getObserable().subscribe((data) => {
        this.pages = data;
      });
    });
  }

  menuClick(item: { title: string, description: string, component: any, icon: string }) {
    if (item.component == "Logout") {
      this.userService.logout();
      this.nav.setRoot("TabsPage");
    } else if (item.component == "LoginPage") {
      this.modalCtrl.create("LoginPage").present().then((data) => { });
    } else {
      this.nav.push(item.component);
    }
  }
}
