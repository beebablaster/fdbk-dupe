import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import {ErrorMessage} from '../../common/message/ErrorMessage';
import {useLoginForm} from '@/components/Auth/login/useLoginForm.hook';
import {useLanguage} from '@/locales/useLanguage';
import {WarningMessage} from '../../common/message/WarningMessage';
import {useKeyLockObserver} from '@/hooks/useKeyLockObserver';
import {Routes} from '@/components/constants/routes';
import {FormFields} from '../FormFields';

export const LoginForm: React.FC = () => {
    useKeyLockObserver('CapsLock');
    const translate = useLanguage();
    const {form, status, onSubmit, fields, error, forgotPasswordLink} = useLoginForm();

    return (
        <section className="w-full flex flex-col justify-center items-center">
            <span className="font-bold text-xl">{translate("Sign in")}</span>
            <span className="mb-8">{translate("Use corporate email")}</span>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-sm mb-2'>
                    <FormFields control={form.control} fields={fields} forgotPasswordLink={forgotPasswordLink}/>
                    {error ?
                        <ErrorMessage message={translate(error, {capitalize: true, isError: true})}/> :
                        <WarningMessage keyword='CapsLock'/>
                    }
                    <Button
                        className="w-full mt-3"
                        type='submit'
                        disabled={!form.formState.isValid || !!error}
                        state={status}
                    >
                        {translate("Sign in")}
                    </Button>
                    <div className="text-sm mt-2">
                        {translate("Don't have account") + "?" + " "}
                        <Link className='text-link hover:underline' href={Routes.auth.signup}>
                            {translate("Create it")}
                        </Link>
                    </div>
                </form>
            </Form>
        </section>
    )
}