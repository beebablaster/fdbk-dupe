import React from "react";
import AuthCode, { AuthCodeRef } from 'react-auth-code-input';

interface IProps {
    length?: number;
    onChange: (res: string) => void;
}

export const VerificationCode = React.forwardRef<AuthCodeRef, IProps>(
    ({ length = 6, onChange }, ref) => {
      return (
        <AuthCode
          allowedCharacters="numeric"
          onChange={onChange}
          length={length}
          autoFocus={false}
          ref={ref}
          inputClassName="w-12 h-12 h-10 p-3.5 text-lg md:p-4 md:text-xl mx-1 border border-foreground bg-background text-foreground text-black rounded-md"
          containerClassName="flex justify-between"
        />
      );
    }
  );
  VerificationCode.displayName = 'VerificationCode';
