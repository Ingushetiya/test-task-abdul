import { z } from 'zod';

export const AUTH_FORM_DEFAULT_VALUES = {
  login: '',
  password: '',
};

export const VALIDATION_SCHEMA = z.object({
  login: z.string().email('Введите корректный email'),
  password: z.string().min(8, 'Минимум 8 символов'),
});
