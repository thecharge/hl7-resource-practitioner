
Practitioners = new Meteor.Collection('Practitioners');

if (Meteor.isClient){
  Meteor.subscribe('Practitioners');
}



PractitionerSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Practitioner"
  },
  "identifier" : {
    optional: true,
    type: [ IdentifierSchema ]
  },
  "active" : {
    optional: true,
    type: Boolean
  },
  "name" : {
    optional: true,
    type:  HumanNameSchema
  },
  "telecom" : {
    optional: true,
    type: [ ContactPointSchema ]
  },
  "address" : {
    optional: true,
    type: [ AddressSchema ]
  },
  "gender" : {
    optional: true,
    type: String
  },
  "birthDate" : {
    optional: true,
    type: Date
  },
  "photo" : {
    optional: true,
    type: [ AttachmentSchema ]
  },
  "practitionerRole.$.managingOrganization" : {
    optional: true,
    type: ReferenceSchema //(Organization)
  },
  "practitionerRole.$.role" : {
    optional: true,
    type: CodeableConceptSchema
  },
  "practitionerRole.$.specialty" : {
    optional: true,
    type: [ CodeableConceptSchema ]
  },
  "practitionerRole.$.period" : {
    optional: true,
    type: PeriodSchema
  },
  "practitionerRole.$.location" : {
    optional: true,
    type: [ ReferenceSchema ]
  }, // (Location) ],
  "practitionerRole.$.healthcareService" : {
    optional: true,
    type: [ ReferenceSchema ]
  }, //(HealthcareService) }]
  "qualification.$.identifier" : {
    optional: true,
    type: [ IdentifierSchema ]
  },
  "qualification.$.code" : {
    optional: true,
    type: CodeableConceptSchema
  },
  "qualification.$.period" : {
    optional: true,
    type: PeriodSchema
  },
  "qualification.$.issuer" : {
    optional: true,
    type: ReferenceSchema
  }, // Organization)
  "communication" : {
    optional: true,
    type: [ CodeableConceptSchema ]
  }
});
Practitioners.attachSchema(PractitionerSchema);
