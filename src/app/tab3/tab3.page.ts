import { Component } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Albums",
      subHeader: "Early Years",
      translucent:"true",
      keyboardClose:"true",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          }
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          }
        },
        {
          text: "Play (open modal)",
          icon: "arrow-dropright-circle",
          handler: () => {
            console.log("Play clicked");
          }
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
