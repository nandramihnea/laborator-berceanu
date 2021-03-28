import { jsPDF } from 'jspdf';

const PDFList = (selectedAnalyzes) => {
    const doc = new jsPDF();
    doc.setFont('times', 300);
    doc.setFontSize(16);
    doc.text('', 20, 20);

    let pageHeight= doc.internal.pageSize.height;

    let result = selectedAnalyzes.map((item, index) => {
        let height = 290;
        if(height >= pageHeight) {
            doc.addPage();
            doc.text('', 20, 20);
            height = 0;
        }
        let text = (index+1) + '.   ' + item.name;
        doc.text(text, 20, 10*(index+1));
    })
    doc.save("lista-analize.pdf");
}

export default PDFList;