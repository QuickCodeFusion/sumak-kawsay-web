'use client'
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

const WhitePaper = (): React.JSX.Element => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  const [numPages, setNumPages] = useState(0)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages)
  }

  return (
    <div className='h-[100vh] w-max overflow-auto'>
      <Document
        file="/whitepaper.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div>Loading...</div>}
        className={'h-fit'}
      >
        {numPages > 0 && Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} className={'h-[100vh] overflow-hidden'} />
        ))}

      </Document>
    </div>
  )
}

export default WhitePaper
