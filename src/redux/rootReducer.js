import {APPLY_STYLE, CHANGE_STYLES, CHANGE_TEXT, CHANGE_TITLE, TABLE_RESIZE} from "@/redux/types";
import {toInlineStyles} from "@core/utils";

export function rootReducer(state, action) {
    let field, val;
    switch (action.type) {
        case TABLE_RESIZE:
            field = action.data.type === 'col' ? 'colState' : 'rowState';
            return {
                ...state,
                [field]: value(state, field, action)
            };
        case CHANGE_TEXT:
            field = 'dataState';
            return {
                ...state,
                currentText: action.data.value,
                [field]: value(state, field, action)
            };
        case APPLY_STYLE:
            field = 'stylesState';
            val = state[field] || {};
            action.data.ids.forEach(id => {
                val[id] = {...val[id], ...action.data.value}
            });
            return {
                ...state,
                [field]: val,
                currentStyles: {...state.currentStyles, ...action.data.value}
            };
        case CHANGE_STYLES:
            return {
                ...state,
                currentStyles: action.data
            };
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.data
            };
        default:
            return state
    }
}

function value(state, field, action) {
    const val = state[field] || {};
    val[action.data.id] = action.data.value;
    return val
}