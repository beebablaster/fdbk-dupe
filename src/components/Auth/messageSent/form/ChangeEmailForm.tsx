import React from 'react'
import { useChangeEmailForm } from './useChangeEmailForm.hook';
import { useLanguage } from '@/locales/useLanguage';
import { ErrorMessage } from '@/components/common/message/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form'
import { FormFields } from '../../FormFields';

interface IProps {
  className?: string;
  closeDialog?: () => void;
}

export const ChangeEmailForm : React.FC<IProps>= ({ className, closeDialog }) => {
  const translate = useLanguage();
  const { form, status, onSubmit, fields, error } = useChangeEmailForm(closeDialog);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`w-full ${className}`}>
        <FormFields control={form.control} fields={fields} />
        <ErrorMessage message={translate(error, { capitalize: true, isError: true })} />
        <Button 
          className="w-full mt-auto" 
          type='submit' 
          disabled={!form.formState.isValid || !!error}
          state={status}
        >
          {translate("Change email")}
        </Button>
      </form>
    </Form>
  )
}
