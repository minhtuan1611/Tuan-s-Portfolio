'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode'

const QRGenerator = () => {
  const defaultUrl = 'https://minhtuan1611.github.io/minhtuan-portfolio/'
  const [colorLight, setColorLight] = useState('#fff')
  const [colorDark, setColorDark] = useState('#000')
  const [text, setText] = useState(defaultUrl)
  const [size, setSize] = useState(300)
  const [qrDataURL, setQRDataURL] = useState('')

  useEffect(() => {
    generateQRCode()
  }, [colorLight, colorDark, text, size])

  const handleDarkColor = (e) => {
    setColorDark(e.target.value)
  }

  const handleLightColor = (e) => {
    setColorLight(e.target.value)
  }

  const handleQRText = (e) => {
    const value = e.target.value
    setText(value || defaultUrl)
  }

  const handleSize = (e) => {
    setSize(parseInt(e.target.value, 10))
  }

  const generateQRCode = async () => {
    try {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')

      const qrDataURL = await QRCode.toDataURL(text, {
        width: size,
        color: {
          dark: colorDark,
          light: colorLight,
        },
      })

      setQRDataURL(qrDataURL)
    } catch (error) {
      console.error(error)
    }
  }

  const handleShare = async () => {
    try {
      const blob = await (await fetch(qrDataURL)).blob()
      const file = new File([blob], 'QRCode.png', {
        type: blob.type,
      })

      if (navigator.share) {
        await navigator.share({
          files: [file],
          title: text,
        })
      } else {
        alert("Your browser doesn't support sharing.")
      }
    } catch (error) {
      console.error(error)
      alert('Error while sharing.')
    }
  }

  return (
    <div className="Bqr">
      <section>
        <div className="row">
          <input
            type="color"
            className="light"
            value={colorLight}
            onChange={handleLightColor}
          />
          <input
            type="color"
            className="dark"
            value={colorDark}
            onChange={handleDarkColor}
          />
          <select className="sizes" value={size} onChange={handleSize}>
            <option value={100}>100×100</option>
            <option value={200}>200×200</option>
            <option value={300}>300×300</option>
            <option value={400}>400×400</option>
            <option value={500}>500×500</option>
            <option value={600}>600×600</option>
            <option value={700}>700×700</option>
            <option value={800}>800×800</option>
            <option value={900}>900×900</option>
            <option value={1000}>1000×1000</option>
          </select>
        </div>
        <input
          type="text"
          className="qr-text"
          placeholder="Enter QR Text"
          value={text}
          onChange={handleQRText}
        />
        <div id="qr-code">
          <Image src={qrDataURL} alt="QR Code" width={size} height={size} />
        </div>
        <div className="action-container">
          <a href={qrDataURL} className="download btn" download="QRCode">
            <span>Download</span>
          </a>
          <button className="btn share-btn" onClick={handleShare}>
            <span>Share</span>
          </button>
        </div>
      </section>
      <p></p>
    </div>
  )
}

export default QRGenerator
