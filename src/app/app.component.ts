import { Component, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListProductsComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miproyectoCD';  
  product = "";
  listProducts = signal<string[]>([])  

  constructor(){
    this.listProducts.set(["Mayonesa", "Ketchup", "Mostaza"]);
  }
  
  addProduct() {
    this.listProducts.update(products => {
      return [...products, this.product];
    });  

    //this.listProducts.set(["Mayonesa222", "Ketchup222", "Mostaza2222"]);
    
  }
}
