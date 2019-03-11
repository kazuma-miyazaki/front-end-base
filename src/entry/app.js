import index from '../object/app/Index';
import form  from '../object/app/Index';

const apps = {
  'index': {
    make: index.makeApp
  },

  'form': {
    make: form.makeApp,
  }
};

Object.keys(apps).forEach(id => apps[id].make(id));



