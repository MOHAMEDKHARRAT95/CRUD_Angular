import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  produits: Products[]=[]
  constructor(private prserv:ProductsService){}
  ngOnInit():void{
    this.prserv.getallArticles().subscribe((data:Products[])=>
    this.produits=data)
  }
}
