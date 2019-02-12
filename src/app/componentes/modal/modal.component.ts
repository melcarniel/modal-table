import { Component, OnInit } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';
import * as XLSX from 'xlsx';
import * as jsPDF from 'jspdf'

type AOA = any[][];

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

 

  constructor() { }

  data: AOA = [ [1, 2], [3, 4] ];
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
	fileName: string = 'SheetJS.xlsx';


  ngOnInit() {
    // this.data = [{
    //   Roteiro: "3802", 
    //   Cliente: "45109", 
    //   RazaoSocial: "SUPERMERCADO IRMAOS DOVALE LTDA", 
    //   Latitude: "-23.528652191", 
    //   Longitude: "-46.498878479", 
    //   LatEntrega: "0.000000000", 
    //   LongEntrega: "0.000000000", 
    //   Distancia: "5660910", 
    //   Endereco: "RUA ITINGUÇU, 1734 SP VILA RÉ SÃO PAULO CEP: 3658001"

    // }]
  }

  // excel(){
  //   const options = { 
  //     fieldSeparator: ',',
  //     quoteStrings: '"',
  //     decimalSeparator: '.',
  //     showLabels: true, 
  //     showTitle: true,
  //     title: 'My Awesome CSV',
  //     useTextFile: false,
  //     useBom: true,
  //     useKeysAsHeaders: true,
  //     // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  //   };

  //   const csvExporter = new ExportToCsv(options);
 
  //   csvExporter.generateCsv(this.data);
    
  // }

  excel():void {
		/* generate worksheet */
		const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

		/* generate workbook and add the worksheet */
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

		/* save to file */
		XLSX.writeFile(wb, this.fileName);
  }
  
  downloadPDF(){
    var doc = new jsPDF();
        doc.text(20, 20, 'Target Sistemas');
        doc.text(20, 30, 'Relatório Distância Percorrida');
        //doc.addPage();
        //doc.text(20, 20, 'Do you like that?');

        // Save the PDF
        doc.save('Test.pdf');
  }
  

}
