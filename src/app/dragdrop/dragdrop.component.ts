import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {product} from '../shared/models/product.model';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {
  baseurl = 'http://fenw.etsisi.upm.es:1194';
  myProducts: string[] = [];
  constructor(private http: HttpClient) { }

  public selectProducts() {
    return this.http.get(this.baseurl + '/products');
  }
  ngOnInit() {
    this.selectProducts().subscribe(
      (value: product[]) => {for (let i=0; i < value.length; i++){
                                    this.myProducts.push(value[i].descripcion);
      } },
      (error) => {console.log (error); }
    );
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.myProducts, event.previousIndex, event.currentIndex);
  }
}
