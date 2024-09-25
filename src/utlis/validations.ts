import { z } from 'zod';

import { FULLNAME_REGEX, NEW_PASSWORD_REGEX, PASSWORD_REGEX } from './regex';
import { Messages } from './enums';

export const EMAIL_VALIDATION = z
    .string()
    .min(1, Messages.EMAIL_REQUIRED)
    .email(Messages.INVALID_EMAIL);

export const PASSWORD_VALIDATION = z
    .string()
    .regex(PASSWORD_REGEX, Messages.INVALID_PASSWORD);

export const validatePassword = (password: string) => ({
    minLength: NEW_PASSWORD_REGEX.MIN_LENGTH.test(password),
    upperCase: NEW_PASSWORD_REGEX.UPPER_CASE.test(password),
    lowerCase: NEW_PASSWORD_REGEX.LOWER_CASE.test(password),
    specialChar: NEW_PASSWORD_REGEX.SPECIAL_CHAR.test(password),
});

export const REQUIRED_VALIDATION = z.string().min(1, Messages.REQUIRED);
export const VALIDATE_FULLNAME = z
    .string()
    .min(3, { message: Messages.NAME_MIN_LENGTH })
    .max(30, { message: Messages.NAME_MAX_LENGTH })
    .regex(FULLNAME_REGEX, { message: Messages.INVALID_FULLNAME_PROFILE });
