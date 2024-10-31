import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-products',
  standalone: true,  
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
  imports:[CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListProductsComponent implements OnChanges {
  
  @Input() listProducts = signal<string[]>([]);  
  
  
  

  ngAfterViewInit(){    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("algo cambio");
  }

  


}
