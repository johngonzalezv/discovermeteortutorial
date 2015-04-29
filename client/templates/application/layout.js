Template.layout.helpers({
  pageTitle: function() {
    Tracker.autorun(function() {
      alert(Session.get('pageTitle'));
    });
    return Session.get('pageTitle'); }
});
