Package.describe({
  name: 'clinical:hl7-resource-practitioner',
  version: '1.1.2',
  summary: 'HL7 FHIR Resource - Practitioner',
  git: 'https://github.com/clinical-meteor/hl7-resource-practitioner',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('mongo');
  api.use('aldeed:simple-schema@1.3.3');
  api.use('aldeed:collection2@2.3.3');

  api.use('clinical:hl7-resource-datatypes@0.3.0');
  api.use('simple:json-routes@2.1.0');
  api.use('prime8consulting:meteor-oauth2-server@0.0.2');

  api.addFiles('lib/hl7-resource-practitioner.js', ['client', 'server']);
  api.addFiles('server/rest.js', 'server');
  api.addFiles('server/initialize.js', 'server');

    api.use('clinical:base-model@1.3.1');
    api.use('clinical:router@2.0.17');

    api.addFiles('client/components/practitionerUpsertPage/practitionerUpsertPage.html', ['client']);
    api.addFiles('client/components/practitionerUpsertPage/practitionerUpsertPage.js', ['client']);
    api.addFiles('client/components/practitionerUpsertPage/practitionerUpsertPage.less', ['client']);

    api.addFiles('client/components/practitionersTablePage/practitionersTablePage.html', ['client']);
    api.addFiles('client/components/practitionersTablePage/practitionersTablePage.js', ['client']);
    api.addFiles('client/components/practitionersTablePage/practitionersTablePage.less', ['client']);
    api.addFiles('client/components/practitionersTablePage/jquery.tablesorter.js', ['client']);

    api.addFiles('client/components/practitionerPreviewPage/practitionerPreviewPage.html', ['client']);
    api.addFiles('client/components/practitionerPreviewPage/practitionerPreviewPage.js', ['client']);
    api.addFiles('client/components/practitionerPreviewPage/practitionerPreviewPage.less', ['client']);

    api.addFiles('client/components/practitionersListPage/practitionersListPage.html', ['client']);
    api.addFiles('client/components/practitionersListPage/practitionersListPage.js', ['client']);
    api.addFiles('client/components/practitionersListPage/practitionersListPage.less', ['client']);

  api.export('Practitioners');
});

// Package.onTest(function (api) {
//   api.use('tinytest');
//   api.use('clinical:hl7-resource-practitioner');
// });
