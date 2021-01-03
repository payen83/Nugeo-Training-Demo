import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  public inventoryList: Array<any>;
  constructor(private apiService: ApiService) { 
    this.inventoryList = [];
  }

  async ngOnInit() {
    try {
      let response: any = await this.apiService.getInventory();
      console.log(response);
      this.inventoryList = response;
    } catch (error){
      console.log(error);
    }
  }

}
