import React from 'react'
import { useMessageSent } from './useMessageSent.hook';
import { useCountdown } from '@/hooks/useCountdown';
import { MessageSentInfo } from './MessageSentInfo';

export const MessageSentStep = () => {
  const { error, email, handleResendEmail, status, targetDate } = useMessageSent();
  const { minutes, seconds, isExpired } = useCountdown(targetDate);
  return (
    <MessageSentInfo 
      error={error}
      email={email} 
      handleResendEmail={handleResendEmail} 
      status={status} 
      isExpired={isExpired} 
      minutes={minutes} 
      seconds={seconds}
    />
  )
}

