
Practitioners = new Meteor.Collection('practitioners');

if (Meteor.isClient){
  Meteor.subscribe('practitioners');
}



PractitionerSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Practitioner"
    }
});
Practitioners.attachSchema(PractitionerSchema);
