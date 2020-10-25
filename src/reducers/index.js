import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { appReducer } from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  form: formReducer,
});

export { rootReducer };
