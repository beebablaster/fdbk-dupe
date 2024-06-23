import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import { Form } from "@/components/ui/form";
import { ErrorMessage } from '../../../common/message/ErrorMessage';
import { useLanguage } from '@/locales/useLanguage';
import { useRecoverPasswordForm } from './useRecoverPasswordForm.hook';
import Link from 'next/link';
import { Routes } from '@/components/constants/routes';
import { FormFields } from '../../FormFields';

export const RecoverEmailForm: React.FC = () => {
  const translate = useLanguage();
  const { form, onSubmit, fields, status, error } = useRecoverPasswordForm();
  return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-sm mx-auto px-2 mb-2'>
        <FormFields control={form.control} fields={fields} />
        <ErrorMessage message={translate(error, { capitalize: true, isError: true })} />
        <Button 
          className="w-full mt-3" 
          type='submit' 
          disabled={!form.formState.isValid || !!error}
          state={status}
        >
          {translate('Recover password')}
          <ArrowRightCircle size={16} className="ml-2" />
        </Button>
        <Link href={Routes.auth.login}>
          <Button className="w-full mt-3" variant="secondary">
            {translate('Cancel')}
          </Button>
        </Link>
      </form>
    </Form>
  )
}