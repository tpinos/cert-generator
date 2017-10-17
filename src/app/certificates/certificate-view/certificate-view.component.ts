import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-certificate-view',
  templateUrl: './certificate-view.component.html',
  styleUrls: ['./certificate-view.component.css']
})
export class CertificateViewComponent implements OnInit {

  constructor() { }

  xMax = 300;
  xMin = 0;
  yMin = 0;
  yMax = 220;
  ngOnInit() {
  }

  onGenerateCertificate(){
    console.log('onGenerateCertificate');
//ProximaNova Regular, ProximaNova Bold, ProximaNovaT Thin
    var doc = new jsPDF({orientation: 'landscape'});
    /*doc.text(0,1,'TL');//top left
    doc.text(300,1,'TR');//top right
    doc.text(290,210,'BR');//bottom right
    doc.text(0,220,'BL');//bottom left
    doc.text(this.xMax/2,this.yMax/2,'middle');//bottom left*/
    doc.setFont('ProximaNova').setFontSize(36);
    doc.setFontType('Bold')
    doc.text(this.xMax/2-50, 80, 'This certifies that');

    doc.setFont('ProximaNova').setFontSize(10);
    doc.setFontType('Regular')
    doc.text(this.xMax/2-20, 100, '<name>');


    doc.text(this.xMax/2-50, 120, 'has succesfully completed the 2017 edition of the');
    doc.text(20, this.yMax - 50, 'Gijs Gootjes');
    doc.text(20, this.yMax - 40, 'Coordinator MediaLAB Amsterdam');
    doc.text(this.xMax - 50, this.yMax - 50, 'Boas Paldi');
    doc.text(this.xMax - 50, this.yMax - 40, 'Global Engagement Manager UNDP');
    // Save the PDF
    doc.save('Test.pdf');

  }

}
