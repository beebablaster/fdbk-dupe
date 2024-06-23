import { Input } from '@/components/ui/input';
import { links } from '@/components/constants/links';
import { Label } from '@radix-ui/react-label';
import { Switch } from '@/components/ui/switch';
import { PrinterIcon, DownloadIcon } from 'lucide-react';
import { QrCode } from '@/components/common/qr/QrCode';
import { useRouter } from 'next/router';
import React from 'react'
import { Button } from '@/components/ui/button';
import { useReactToPrint } from 'react-to-print';

export const QrGeneratePage = () => {
  const router = useRouter();

  const queryData = router.query.data as string;
  const queryTitle = router.query.title as string;

  React.useEffect(() => {
    if(queryData) setData(queryData);
    if(queryTitle) setTitle(queryTitle);
  }, [queryData, queryTitle]);

  
  const [array, setArray] = React.useState([0]);
  const [isMultiColor, setIsMultiColor] = React.useState(false);
  const [authorization, setAuthorization] = React.useState(true);
  const [amount, setAmount] = React.useState(1);
  const [data, setData] = React.useState("");
  const [title, setTitle] = React.useState("");
  
  const query = !authorization ? new URLSearchParams({ g: "t" }) : "";

  React.useEffect(() => {
    setArray([]);
    setTimeout(() => {
      setArray(new Array(amount).fill(0));
    }, 100);
  }, [amount, isMultiColor]);

  const ref = React.useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  const link = data ? `${links.origin}/${data}?${query}` : "";
  return (
    <section className="flex flex-wrap justify-between w-full m-1">
      <div>
        <div className="text-3xl mb-4">Сгенерировать QR код</div>
        <Label htmlFor="url">Ссылка QR кода</Label>
        <Input className="mb-4 mt-1" id="url" type="text" value={data} onChange={(e) => setData(e.target.value)}></Input>

        <Label htmlFor="text">Текст QR кода</Label>
        <Input className="mb-4 mt-1" id="text" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></Input>

        <Label htmlFor="quantity">Количество для печати</Label>
        <Input className="mb-4 mt-1" id="quantity" type="number" max={20} min={1} value={amount} onChange={(e) => setAmount(+e.target.value)}></Input>

        <div className="flex items-center space-x-2 mb-4">
          <Switch id="multicolor" checked={authorization} onCheckedChange={setAuthorization} />
          <Label htmlFor="multicolor">Обязательная авторизация</Label>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <Switch id="multicolor" checked={isMultiColor} onCheckedChange={setIsMultiColor} />
          <Label htmlFor="multicolor">Цветная печать</Label>
        </div>

      </div>
      <div className="relative print-container">
        <div className="text-xl text-center mb-2">Предпросмотр</div>
        <div className="border bg-white mb-2 print">
          <div className="flex justify-center items-center content-center gap-1 flex-wrap p-2">
            {array.map((_, index) => (
              <QrCode key={index} data={link} size={Math.max(250 / amount, 84.5)} title={title} isMultiColor={isMultiColor} />
            ))}
          </div>
        </div>
        <div className="flex gap-2 icons-container">
          <Button disabled={!data} size="sm" variant="ghost" onClick={handlePrint}>
            <PrinterIcon />
          </Button>
          <Button disabled={!data} size="sm" variant="ghost" onClick={handlePrint}>
            <DownloadIcon />
          </Button>
        </div>
      </div>
      <div className="hidden">
        <div className="flex justify-center content-start gap-1 flex-wrap p-2" ref={ref}>
          {array.map((_, index) => (
            <QrCode key={index} data={link} size={Math.max(500 / amount, 175)} title={title} isMultiColor={isMultiColor} />
          ))}
        </div>
      </div>
    </section>
  )
}
