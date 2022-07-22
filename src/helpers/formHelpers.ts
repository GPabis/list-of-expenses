import { ChangeEvent } from 'react';

export const fixInputNumberValue = (e: ChangeEvent<HTMLInputElement>) => {
    if ((+e.currentTarget.value * 10) % 1) e.currentTarget.value = `${Math.floor(+e.currentTarget.value * 100) / 100}`;
    else if (+e.currentTarget.value % 1) e.currentTarget.value = `${Math.floor(+e.currentTarget.value * 10) / 10}`;
};

export const fixInputNumberValueToThreeDecimals = (e: ChangeEvent<HTMLInputElement>) => {
    if ((+e.currentTarget.value * 100) % 1)
        e.currentTarget.value = `${Math.floor(+e.currentTarget.value * 1000) / 1000}`;
    else fixInputNumberValue(e);
};
