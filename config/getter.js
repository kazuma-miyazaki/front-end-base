const pages    = require('config/pages.json');
const projects = require('config/projects.json');
const {
  objectToArray
} = require('tools/converte');
const {
  mergeObjectArray
} = require('tools/objectHelper');
const {
  join,
  src
} = require('tools/dir');



exports.pagesBaseConfigArray = () => {
  return objectToArray(pages).map(filename =>
    mergeObjectArray([{ filename }, pages[filename]['base'], { template: join(src, pages[filename]['base']['template']) }])
  );
};



exports.pageBaseConfig = filename => {
  return pagesBaseConfigArray().filter(config => config.filename === filename)[0];
};



exports.projectsConfigArray = () => {
  const obj = {};

  return objectToArray(projects).map(project => {
    obj[project] = project;
    mergeObjectArray(obj, [projects[project]]);
  });
};



exports.projectConfig = project => {
  return projectsConfigArray.filter(config => objectToArray(config)[0] === project)[0];
};


