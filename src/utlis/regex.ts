export const OTP_REGEX = /^\d+$/;
export const PASSWORD_REGEX =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
export const PHONE_NUMBER_REGEX = /^\+?[1-9]\d{1,14}$/;
export const FULLNAME_REGEX = /^(?=.{3,50}$)[A-Za-z]+(?:\s[A-Za-z]+)*\s?$/;

export const NEW_PASSWORD_REGEX = {
    MIN_LENGTH: /.{8,}/,
    UPPER_CASE: /[A-Z]/,
    LOWER_CASE: /[a-z]/,
    SPECIAL_CHAR: /[!#%$]/,
};
