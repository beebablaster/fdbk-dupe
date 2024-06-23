import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRightCircleIcon } from "lucide-react";
import { Form } from "@/components/ui/form";
import { ErrorMessage } from '../../common/message/ErrorMessage';
import { useLanguage } from '@/locales/useLanguage';
import { useSignupForm } from '@/components/Auth/signup/useSignupForm.hook';
import { WarningMessage } from '../../common/message/WarningMessage';
import { useKeyLockObserver } from '@/hooks/useKeyLockObserver';
import { Routes } from '@/components/constants/routes';
import { FormFields } from '../FormFields';

export const SignupForm: React.FC = () => {
  useKeyLockObserver('CapsLock');
  const translate = useLanguage();
  const { form, onSubmit, error, fields, status } = useSignupForm();

  return(
    <section className='flex flex-col items-center justify-center w-full'>
      <span className="font-bold text-xl">{translate("Registration")}</span>
      <span className="mb-8">{translate("Use corporate email")}</span>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-sm'>
          <FormFields control={form.control} fields={fields} />
          {error ? 
            <ErrorMessage message={translate(error, { capitalize: true, isError: true })} /> : 
            <WarningMessage keyword='CapsLock' />
          }
          <Button 
            className="w-full mt-3" 
            type='submit' 
            disabled={!form.formState.isValid || !!error}
            state={status} 
          >
              {translate("Continue")}
            <ArrowRightCircleIcon size={16} className="ml-2" />
          </Button>
          <div className="text-sm mt-2">
            {translate("Already have account") + "?" + " "}
            <Link className='text-link hover:underline' href={Routes.auth.login}>
              {translate("Login")}
            </Link>
          </div>
        </form>
      </Form>
    
    </section>
  )
}