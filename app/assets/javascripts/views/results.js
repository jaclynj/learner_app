App.Views.Results = Backbone.View.extend({
  events: {
    "click a" : "showRatingForm"
  },
  attributes: {
    //this.attributes.query
  },
  showRatingForm: function(e){
    //if what was clicked was 'rate this'
    if (e.currentTarget.innerText == 'Rate This') {
      e.preventDefault();
      //displays and moves rating box
      var rating = $('#rating-form');
      // var newLeft = e.currentTarget.offsetLeft + 100;
      //passes attributes of resource to rating form
      var item = $(e.currentTarget.attributes.href.ownerElement.parentElement.childNodes[0]);
      var bod = $(e.currentTarget.attributes.href.ownerElement.parentElement.childNodes[2]);
      var resourceBody = bod.text();
      var resourceLink = item.context.href;
      var resourceName = item.context.innerText;
      App.ratingForm = new App.Views.RatingForm({attributes:{query: this.attributes.query, title: resourceName, url: resourceLink, description: resourceBody} });
      App.ratingForm.on('resetEverything', this.reloadResults);
      rating.removeClass('hidden');
    }
  },
  reloadResults: function(){
    console.log('before reloading');
    App.main.updateResources();
    console.log('after reloading');
  }
});
