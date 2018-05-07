import { Component, OnInit } from '@angular/core';
import { Utils } from '../../bean/utils';
import { Game } from '../../bean/game';

@Component({
  selector: 'app-export-import',
  templateUrl: './export-import.component.html',
  styleUrls: ['./export-import.component.css']
})
export class ExportImportComponent implements OnInit {

  private exportSave:string;
  private importSave:string;
  private importFailed:boolean;

  constructor() {
    this.importFailed = false;
  }

  ngOnInit() {
    this.exportSave = Utils.utf8_to_b64(Game.getInstance().getSaveAsString());
  }

  import() {
    try {
      Game.getInstance().importSavedGame(this.importSave);
    } catch(e) {
      this.importFailed = true;
      window.setTimeout(() => this.importFailed = false, 5000);
    }
  }

  closeAlert() {
    this.importFailed = false;
  }

}
