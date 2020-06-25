import {defaultStyles, defaultTitle} from "@/constants";

const defaultState = {
    rowState: {},
    colState: {},
    currentText: '',
    dataState: {},
    currentStyles: defaultStyles,
    stylesState: {},
    title: defaultTitle,
    openedDate: new Date().toJSON()
};

const normalize = s => ({
    ...s,
    currentStyles: defaultStyles,
    currentText: ''
});

export function normalizeInitialState(state) {
    return state ? normalize(state) : defaultState
}