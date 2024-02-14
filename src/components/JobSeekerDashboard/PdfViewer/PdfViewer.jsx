// "use client"
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// // Create Document Component
// const PdfViewer = () => (
//   <Document file="https://utfs.io/f/de10a06e-a054-472d-a307-0883846dff3b-qt8eh3.pdf">
//   <Page pageNumber={1} size="A4" style={styles.page} />
// </Document>
// );


// // 'use client'
// // import { pdfjs } from 'react-pdf'
// // const options = {
// //   standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
// // };
// // // import { Viewer, Worker } from '@react-pdf-viewer/core';
// // // import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // // import '@react-pdf-viewer/core/lib/styles/index.css';
// // // import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // // const defaultLayoutPluginInstance = defaultLayoutPlugin();

// // const PdfViewer = () => {
// //   return (
// //     <Document file="https://utfs.io/f/de10a06e-a054-472d-a307-0883846dff3b-qt8eh3.pdf"/>
// //     // <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
// //     //     <div style={{ height: '750px' }}>
// //     //         <Viewer
// //     //             fileUrl="https://utfs.io/f/de10a06e-a054-472d-a307-0883846dff3b-qt8eh3.pdf"
// //     //             plugins={[
// //     //                 defaultLayoutPluginInstance,
// //     //             ]}
// //     //         />
// //     //     </div>
// //     // </Worker>
// //   )
// // }

// export default PdfViewer
