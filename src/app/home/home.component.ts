import { Component } from '@angular/core';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { CardModule } from 'primeng/card';
import { Button, ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
