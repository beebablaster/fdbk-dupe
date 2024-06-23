import { useLanguage } from '@/locales/useLanguage';
import { Status } from '@/models/Status';
import React from 'react'
import { Button } from '@/components/ui/button';
import { Countdown } from '../Countdown';
import { ErrorMessage } from '@/components/common/message/ErrorMessage';
import { ChangeEmailDialog } from './ChangeEmailDialog';
import { MailCirle } from '../MailCirle';

interface IProps {
  error: string;
  email: string;
  handleResendEmail: () => void;
  isExpired: boolean;
  status: Status;
  minutes: number;
  seconds: number;
}

export const MessageSentInfo: React.FC<IProps> = ({ email, handleResendEmail, status, minutes, seconds, isExpired, error }) => {
  const translate = useLanguage();

  return (
    <>
      <MailCirle />
      <span className="font-bold text-2xl mb-4">{translate("Please, verify your email")}</span>
      <span className='text-sm'>
        {translate("You're almost there") + "!" + " "}
        {translate("We sent verification email") + email && " to "}
      </span>
      {email && <span className='font-bold text-lg'>{email}</span>}
      <span className='text-sm max-w-md text-center mt-6'>
        {translate("Just click on the link in the email to complete your registration" + ". ")}
        {" "}
        {translate("If you don't see the email") + ","}
        <span className="font-bold">{translate("check your spam or junk")}</span>
      </span>
      <span className='text-sm mt-6'>
        {translate("Didn't receive the email") + "?"}
      </span>
      <div className="flex items-center justify-center gap-4 mt-2">
        <Button state={status} onClick={handleResendEmail} disabled={!isExpired}>
          {translate("Resend Email")}
        </Button>
        <ChangeEmailDialog />
      </div>
      <div className='text-sm mt-2 text-center min-h-8'>
        {error ? <ErrorMessage message={translate(error, { capitalize: true, isError: true })}/> : (
          <>
            {!isExpired && (
              <>
                {translate("Resend email in")}{" "}
                <Countdown type='minutes' minutes={minutes} seconds={seconds} isExpired={isExpired}  />
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}
