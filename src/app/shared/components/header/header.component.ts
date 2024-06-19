import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;
    ngOnInit() {
      this.items = [
          {
              label: 'About',
              icon: 'pi pi-user',
              link: 'about'
          },
          {
              label: 'Post Job',
              icon: 'pi pi-star',
              link: 'postjob'
          },
          {
              label: 'Jobs',
              icon: 'pi pi-search',
              link: 'jobs',
              items: [
                  // {
                  //     label: 'Core',
                  //     icon: 'pi pi-bolt',
                  //     shortcut: '⌘+S'
                  // },
                  // {
                  //     label: 'Blocks',
                  //     icon: 'pi pi-server',
                  //     shortcut: '⌘+B'
                  // },
                  // {
                  //     label: 'UI Kit',
                  //     icon: 'pi pi-pencil',
                  //     shortcut: '⌘+U'
                  // },
                  // {
                  //     separator: true
                  // },
                  // {
                  //     label: 'Templates',
                  //     icon: 'pi pi-palette',
                  //     items: [
                  //         {
                  //             label: 'Apollo',
                  //             icon: 'pi pi-palette',
                  //             badge: '2'
                  //         },
                  //         {
                  //             label: 'Ultima',
                  //             icon: 'pi pi-palette',
                  //             badge: '3'
                  //         }
                  //     ]
                  // }
              ]
          },
          {
              label: 'Contact',
              icon: 'pi pi-envelope',
              badge: '3'
          }
      ];
  }
}
