import React from "react";
import * as z from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form';
import {useLoginMutation} from '@/components/Auth/login/useLoginMutation.hook';
import {loginSchema} from "./loginSchema";
import {authFields} from "../authFields";
import {Routes} from "@/components/constants/routes";

export const useLoginForm = () => {
    const [error, setError] = React.useState("");
    const {mutation} = useLoginMutation(setError);
    const status = mutation.status;

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        mode: 'onChange',
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const fields = [
        {...authFields.email, autoFocus: true},
        {...authFields.password},
    ]

    const {email, password} = form.watch();

    React.useEffect(() => {
        setError("");
    }, [email, password]);

    const encodedEmail = Buffer.from(email).toString('base64');
    const emailQuery = email !== '' ? `?email=${encodedEmail}` : '';
    const forgotPasswordLink = Routes.auth.recover + emailQuery;

    function onSubmit(values: z.infer<typeof loginSchema>) {
        if (form.formState.isValid && !error) {
            mutation.mutate(values);
        }
    }

    return {form, status, onSubmit, fields, error, email, forgotPasswordLink};
}