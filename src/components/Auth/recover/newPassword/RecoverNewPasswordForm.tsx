import React from 'react';
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ErrorMessage } from '../../../common/message/ErrorMessage';
import { useRecoverNewPasswordForm } from './useRecoverNewPasswordForm.hook';
import { FormFields } from '../../FormFields';
import { useLanguage } from '@/locales/useLanguage';
import { useRouter } from 'next/router';

export const RecoverNewPassForm: React.FC = () => {
  const translate = useLanguage();
  const { form, onSubmit, fields, error, status } = useRecoverNewPasswordForm();
  const { push } = useRouter();
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
          {translate("Change password")}
        </Button>
        <Button 
          className="w-full mt-3" 
          type='button' 
          variant="secondary"
          onClick={() => push({ })}
        >
          {translate("Start over")}
        </Button>
      </form>
    </Form>
  )
}