import React from 'react'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Control } from 'react-hook-form';
import { IField } from './authForms';
import { useLanguage } from '@/locales/useLanguage';
import { Routes } from '@/components/constants/routes';
import Link from 'next/link';

interface IProps {
  control: Control<any>,
  fields: IField[],
  forgotPasswordLink?: string,
}

export const FormFields: React.FC<IProps> = ({ fields, control, forgotPasswordLink }) => {
  const translate = useLanguage();
  return (
    <>
      {fields.map((field, index) => {
        if(field.placeholder) field.placeholder = translate(field.placeholder);

        const shouldShowForgotPasswordLink = field.type === 'password' && forgotPasswordLink;
        return (
          <FormField 
            key={index}
            validation={true}
            control={control}
            name={field.name}
            render={({ field: fieldController }) => (
              <FormItem className='mb-2'>
                <div className={`${shouldShowForgotPasswordLink && "flex items-center justify-between"} mb-2`}>
                  <FormLabel className={`${field.disabled ? 'text-muted' : ''}`}>
                    {translate(field.label)}
                  </FormLabel>
                  {shouldShowForgotPasswordLink && 
                    <Link className='text-link text-sm hover:underline' href={forgotPasswordLink}>
                      {translate("Forgot password?")}
                    </Link>
                  }
                </div>
                <FormControl>
                  <Input { ...field } {...fieldController} />
                </FormControl>
                <FormMessage className='mt-1' />
              </FormItem>
            )} 
          />
        )
      })}
    </>
  )
}
