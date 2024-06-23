import { ThemeContext } from "@/context/ThemeContext";
import QRCodeStyling, { Options } from "qr-code-styling";
import React, { useContext, useEffect, useRef, useState } from "react";
import { QRLoader } from "./QRLoader";

const useQRCodeStyling = (options: Options): QRCodeStyling | null => {
  if (typeof window !== 'undefined') {
    const QRCodeStylingLib = require('qr-code-styling')
    const qrCodeStyling: QRCodeStyling = new QRCodeStylingLib(options)
    return qrCodeStyling
  }
  return null
}

interface IProps {
  data: string;
  title: string;
  isMultiColor?: boolean;
  size?: number;
}

export const QrCode: React.FC<IProps> = ({ data, title, isMultiColor = true, size = 350 }) => {
  const theme = useContext(ThemeContext);
  const color1 = isMultiColor ? "#0067C6" : "#000000";
  const color2 = isMultiColor ? "#2898FF" : "#000000";
  const color3 = isMultiColor ? "#0085FF" : "#000000";
  const [options] = useState<Options>(
    {
      width: size,
      height: size,
      data: data,
      image: isMultiColor ? "/blue.svg" : "/blackLogo.svg",
      qrOptions: {
        typeNumber: 5,
        errorCorrectionLevel: "H"
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.3,
        margin: size / 35,
      },
      dotsOptions: {
        type: "extra-rounded",
        color: color1,
        gradient: {
          type: "radial",
          colorStops: [
            {
              "offset": 0,
              "color": color1,
            },
            {
              "offset": 1,
              "color": color2,
            }
          ]
        }
      },
      backgroundOptions: {
        color: "#ffffff",
      },
      cornersSquareOptions: {
        type: "extra-rounded",
        color: color3,
      },
      cornersDotOptions: {
        type: "dot",
        color: color3,
      },
    },
  )
  const qrCode = useQRCodeStyling(options)
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (qrRef.current) {
      qrCode?.append(qrRef.current);
    }
  }, [qrCode, qrRef]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode?.update({
      data: data,
    });
  }, [qrCode, data]);

  return (
    <div className="w-fit bg-white rounded-md border border-1 border-border" style={{ padding: size / 43.75 }}>
    {data ? <div ref={qrRef} /> : <QRLoader size={`${size}px`} />}
      <div className="text-center font-medium text-black mt-2" style={{ fontSize: size / 19.44 }}>
        {data ? title : "Введите ссылку QR кода"}
      </div>
    </div>
  )
};

QrCode.displayName = "QrCode";