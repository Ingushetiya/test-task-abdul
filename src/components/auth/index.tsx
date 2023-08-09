import React from 'react';
import styles from './auth.module.scss';
import { Button, TextInput } from '@mantine/core';
import { useForm, useWatch } from 'react-hook-form';
import { AuthForm } from './auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { isEmpty } from '../../utils/isEmpty';
import { useDispatch } from 'react-redux';
import { generateToken } from '../../utils/generate-token';
import { login } from './auth-slice';

export const AuthPage = () => {
  const dispatch = useDispatch();
  const token = generateToken(36);

  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<AuthForm>({
    defaultValues: {
      login: '',
      password: '',
    },
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(
      z.object({
        login: z.string().email('Введите корректный email'),
        password: z.string().min(8, 'Минимум 8 символов'),
      }),
    ),
  });
  const isWatchLogin = useWatch({ control, name: 'login' });
  const isWatchPassword = useWatch({ control, name: 'password' });

  const isDisabled = !isWatchLogin.length || !isWatchPassword.length || !isEmpty(errors);

  const onSubmit = (data: AuthForm) => {
    if (!data) return;
    dispatch(login(token));
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <span className={styles.title}>Simple Hotel Check</span>
        <TextInput
          {...register('login')}
          classNames={{ label: styles.label }}
          className={styles.input}
          label="Логин"
          error={errors?.login?.message}
        />
        <TextInput
          {...register('password')}
          classNames={{ label: styles.label }}
          className={styles.input}
          label="Пароль"
          error={errors?.password?.message}
        />
        <Button disabled={isDisabled} type="submit" className={styles.authButton}>
          Войти
        </Button>
      </form>
    </div>
  );
};
