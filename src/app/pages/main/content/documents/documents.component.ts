import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { mockrelated } from 'src/assets/mockdata';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  documents: any = [];

  constructor(private documentService: APIService) {}

  ngOnInit(): void {
    this.documents = mockrelated;
    this.getDocumentAPI();
  }

  getDocumentAPI() {
    this.documentService.getDocumentAPI().subscribe(
      (res: any) => {
        if (res.data.length > 5) {
          this.documents = [];
          for (let i = 0; i < 5; i++) {
            const element = res.data[i];
            this.documents.push(element);
          }
        }
      },
      (error) => {
        console.log('error: ', error);
        this.documents = mockrelated;
      }
    );
  }

  adjustNumbers(number: any) {
    var parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
}
