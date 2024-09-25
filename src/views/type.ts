import { z } from 'zod';

import { Messages } from '../utlis';
import {
    EMAIL_VALIDATION,
    PASSWORD_VALIDATION,
    REQUIRED_VALIDATION, 
    VALIDATE_FULLNAME} from '../utlis';


export const signUpSchema = z
    .object({
        name: VALIDATE_FULLNAME,
        email: EMAIL_VALIDATION,
        password: PASSWORD_VALIDATION,
        confirmPassword: REQUIRED_VALIDATION,
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: Messages.PASSWORD_NOT_MATCH,
    });

export type SignUpFormData = z.infer<typeof signUpSchema>;
