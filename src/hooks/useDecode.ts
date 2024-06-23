import React from "react";
import { Buffer } from "buffer";

export const useDecode = (encodedCode: string): string => {
  const [code, setCode] = React.useState("");
  React.useEffect(() => {
    if(encodedCode) setCode(Buffer.from(encodedCode, 'base64').toString('binary'));
  }, [encodedCode]);

  return code;
}