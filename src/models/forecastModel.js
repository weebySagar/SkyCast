import {types} from "mobx-state-tree";

const ForeCast = types.model({
    date : types.Date,
    temperature : types.number
});

export default ForeCast;