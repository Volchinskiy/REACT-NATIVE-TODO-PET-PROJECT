import { ReactNode } from 'react';

export interface ITodoValues {
    _id?: string;
    id?: string;
    title: string;
    description: string;
    year: string | number;
    completed: boolean;
    public: boolean;
}

export type RegisterValuesType = {
    username: string,
    email: string,
    password: string,
    verifyPassword: string,
};

export type RegisterValuesWithoutVerifyType = Omit<RegisterValuesType,
    'verifyPassword'>;

export type LoginValuesType = {
    email: string,
    password: string,
};

interface IForm {
    handleChange: () => void;
    handleBlur: () => void;
    handleSubmit: () => void;
    errors: () => void;
    touched: () => void;
    // eslint-disable-next-line no-unused-vars
    setFieldValue?: (field: string, value: string) => void;
}


export interface IRegisterForm extends Omit<IForm, 'values'>{
    values: RegisterValuesType
}

export interface ICreateForm extends Omit<IForm, 'values'>{
    values: ITodoValues
}
export interface ILoginForm extends Omit<IForm, 'values'>{
    values: LoginValuesType
}

export type NavigationType = {
    // eslint-disable-next-line no-unused-vars
    navigate: (screen: ReactNode, params: object) => void
}

export type MutateLoginType = {
    mutate: (
        // eslint-disable-next-line no-unused-vars
        data: LoginValuesType
    ) => void,
    data?: {
        token: string
    },
}

export type MutateRegisterType = {
    mutate: (
        // eslint-disable-next-line no-unused-vars
        data: RegisterValuesWithoutVerifyType
    ) => void,
    data?: {
        token: string
    },
}

export type MutateEditType = {
    mutate: (
        // eslint-disable-next-line no-unused-vars
        data: ITodoValues
    ) => void
}

export type MutateCreateType = {
    mutate: (
        // eslint-disable-next-line no-unused-vars
        data: ITodoValues
    ) => void,
    isLoading: boolean
}

export type MutateDeleteType = {
    mutate: (
        // eslint-disable-next-line no-unused-vars
        id: string
    ) => void
}
