Lime.Views.TasksAgenda = Backbone.View.extend({

  initialize: function(options){
    this.nestedViews = [];
  },

  el: '<div></div>',

  template: JST['agenda/show'],

  render: function(){   // Refactor into methods
    this.resetNestedViews();
    // Insert template & rendered collection
    this.$el.empty();
    this.$el.append(this.template({
      title: this.options.title
    }));

    this.$el.append(this.renderCollection());

    return this;
  },

  // Helper method, called by render
  renderCollection: function(){
    var that = this;

    // Create <ul> to contain <li> items for every model in the collection
    var $ul = $('<ul id="tasks">');

    // Add <li> items for every model in the collection
    this.collection.each(function(model){
      var taskIndexItemView = new Lime.Views.TaskIndexItem({
        model: model
      });
      that.nestedViews.push(taskIndexItemView);
      $ul.append(taskIndexItemView.render().$el);
    });

    return $ul;
  }

})