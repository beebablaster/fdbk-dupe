import React from "react";
import { useQRCode } from 'next-qrcode';
import { links } from "@/components/constants/links";

interface IProps {
    text: string;
}

export const QrCode: React.FC<IProps> = ({ text }) => {
    const { Canvas } = useQRCode();
    return (
        <div className="qr show">
            <Canvas
                text={`${links.origin}/${text}`}
                logo={{
                    src: '/logo.svg'
                }}
                options={{
                // level: 'H',
                margin: 3,  
                scale: 10,
                width: 300,
                color: {
                    dark: '#26425B',
                    light: '#fff',
                },
                }}
            />
        </div>
    )
}