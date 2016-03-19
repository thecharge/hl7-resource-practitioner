
Practitioners = new Meteor.Collection('Practitioners');

if (Meteor.isClient){
  Meteor.subscribe('Practitioners');
}



PractitionerSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Practitioner"
    }
});
Practitioners.attachSchema(PractitionerSchema);
