import { useRouter } from "next/router";

interface IGetURLQueryProps {
  (key: string, options?: IDecodeQueryOptions): string;
}

interface IDecodeQueryOptions {
  decode?: boolean;
  base: BufferEncoding;
}

export const useGetURLQuery: IGetURLQueryProps = (key, options = { decode: false, base: 'base64' }): string => {
  const { query } = useRouter();
  const shouldDecode = options.decode;
  const queryParam = query[key] as string;

  if(!queryParam) return '';

  if (shouldDecode) {
    const decoded = Buffer.from(queryParam, options.base).toString('utf-8');
    return decoded;
  }

  return queryParam;
}