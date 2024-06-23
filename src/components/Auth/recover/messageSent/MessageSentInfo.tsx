import { useLanguage } from '@/locales/useLanguage';
import { Status } from '@/models/Status';
import React from 'react'
import { Button } from '@/components/ui/button';
import { ErrorMessage } from '@/components/common/message/ErrorMessage';
import { Countdown } from '../../Countdown';
import { useStepperContext } from '@/components/Stepper/StepperProvider';

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
  const { prevStep } = useStepperContext();
 
  return (
    <div className='flex flex-col items-center text-center'>
      <span>
        {translate("You're almost there") + "!" + " " + translate("We sent an email to")}
      </span>
      {email && <span className='font-medium text-lg'>{email}</span>}
      <span className='max-w-md text-center mt-6'>
        {translate("Just click on the link in the email to reset the password" + ". ")}
        {" "}
        {translate("If you don't see the email") + ", "}
        <span className="font-bold">{translate("check your spam or junk")}</span>
      </span>
      <span className='text-sm mt-6'>
        {translate("Didn't receive the email") + "?"}
      </span>
      <div className="flex items-center justify-center gap-4 mt-2">
        <Button state={status} onClick={handleResendEmail} disabled={!isExpired}>
          {translate("Resend Email")}
        </Button>
        <Button variant="secondary" onClick={() => prevStep()} >
          {translate("Change Email")}
        </Button>
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
    </div>
  )
}
