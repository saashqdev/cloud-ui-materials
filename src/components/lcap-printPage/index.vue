<template>
    <div :class="$style.root" v-show="!hidden">
        <u-button :class="$style.button" color="primary" text="打印" @click="printPage">
        </u-button>
    </div>
</template>

<script>
import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';
import {saveAs} from 'file-saver';

export default {
    name: 'lcap-printPage',
    data() {
        return {
            base64PdfData: '',
        };
    },
    props: {
        download: {type: Boolean, default: false},
        hidden: {type: Boolean, default: false},
        fileName: {type: String, default: 'File export'},
        canvasWidth: undefined,
        canvasHeight: undefined,
        fileType: {type: String, default: 'pdf'},
        printDOM: {type: String, default: 'body'},
        isNotFullPage: {type: Boolean, default: false},
    },
    mounted() {
        const appendJs = () => {
            let script = document.createElement('script');
            script.src = 'https://unpkg.com/jspdf@1.5.3/dist/jspdf.min.js';
            let node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(script, node);
        };
        appendJs();
    },
    methods: {
        async printPage() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    let canvasWidth = this.canvasHeight === 'auto' ? document.body.clientWidth : this.canvasWidth;
                    let canvasHeight = this.canvasHeight === 'auto' ? document.body.clientHeight : this.canvasHeight;
                    this.getPdf({
                        element: document.querySelector('body'), // pdf template node: the template content node in the first step above
                        title: this.fileName, // pdf file name
                        allowDownload: this.download, // Whether to allow downloading
                        fileType: this.fileType, // file type
                        isFullPage: !this.isNotFullPage, // pdf size: true for long files without pagination, false for A4 paginated files
                        canvasOptions: {
                            height: canvasHeight,
                            width: canvasWidth, // Canvas size
                        }
                    }).then((res) => {
                        this.$emit('print', res);
                        this.base64PdfData = res;
                        resolve(res);
                    });
                }, 1500);
            });
        },

        getPdf({element, title, allowDownload, fileType, isFullPage, canvasOptions = {}}) {
            return new Promise((resolve, reject) => {
                // Define the properties of canvas to avoid uneven sizes of generated PDF files
                let {scale = 2, width, height} = canvasOptions;
                width = width || element.clientWidth;
                height = height || element.clientHeight;
                element.ownerDocument.defaultView.devicePixelRatio = scale;
                element.ownerDocument.defaultView.innerWidth = width;
                element.ownerDocument.defaultView.innerHeight = height;

                html2Canvas(element, {
                    // allowTaint: true,
                    useCORS: true,
                    scale,
                    width,
                    height,
                    x: 0,
                    y: window.pageYOffset,
                })
                    .then(function (canvas) {
                        let contentWidth = canvas.width;
                        let contentHeight = canvas.height;
                        let pageData = canvas.toDataURL('image/jpeg', 1.0);
                        let PDF;
                        let imgWidth;
                        let imgHeight;
                        if (isFullPage) {
                            // Full screen long image
                            imgWidth = (contentWidth / scale) * 0.75;
                            imgHeight = (contentHeight / scale) * 0.75;
                            PDF = new jsPDF('', 'pt', [imgWidth, imgHeight]); // [imgWidth, imgHeight] is the PDF width and height
                            PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                        } else {
                            // A4 paper screenshot
                            imgWidth = 595;
                            imgHeight = (imgWidth / contentWidth) * contentHeight;
                            let position = 0;
                            let pageHeight = (contentWidth / imgWidth) * 842; // Height of A4 page
                            PDF = new JsPDF('', 'pt', 'a4');
                            if (contentHeight < pageHeight) {
                                PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                            } else {
                                while (contentHeight > 0) {
                                    PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                                    contentHeight -= pageHeight;
                                    position -= 842;
                                    if (contentHeight > 0) {
                                        PDF.addPage();
                                    }
                                }
                            }
                        }
                        const fileURL = PDF.output('blob'); // Generate the url of the pdf file
                        // console.log('file', fileURL);
                        if (fileType === 'png' && allowDownload) {
                            canvas.toBlob(function (blob) {
                                saveAs(blob, title + '.png');
                            });
                        } else if (fileType === 'pdf' && allowDownload) {
                            PDF.save(title + '.pdf'); // Save pdf file
                        }
                        resolve(fileURL);
                    })
                    .catch(err => reject(err));
            });
        },
    },
};

</script>

<style module>
.root {
    display: inline;
}
</style>
