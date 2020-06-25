import {storage} from "@core/utils";
import {defaultStyles, defaultTitle} from "@/constants";

const defaultState = {
    rowState: {},
    colState: {},
    currentText: '',
    dataState: {},
    currentStyles: defaultStyles,
    stylesState: {},
    title: defaultTitle
};

const normalize = s => ({
    ...s,
    currentStyles: defaultStyles,
    currentText: ''
});

export const initialState = storage('excel-state') ? normalize(storage('excel-state')) : defaultState;