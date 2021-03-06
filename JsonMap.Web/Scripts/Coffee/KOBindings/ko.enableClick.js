// Generated by CoffeeScript 1.6.3
(function() {
  ko.bindingHandlers.enableClick = {
    init: function(element, valueAccessor) {
      var events, handlers;
      $(element).click(function(evt) {
        if (!valueAccessor()) {
          evt.preventDefault();
          evt.stopImmediatePropagation();
          return $(element).attr('disabled', 'disabled');
        }
      });
      events = $._data(element, "events");
      handlers = events["click"];
      if (handlers.length === 1) {
        return;
      }
      handlers.splice(0, 0, handlers.pop());
      return $(element).click(function(evt) {});
    },
    update: function(element, valueAccessor) {
      var value;
      value = ko.utils.unwrapObservable(valueAccessor());
      ko.bindingHandlers.css.update(element, function() {
        return {
          disabled_anchor: !value
        };
      });
      if (value) {
        return $(element).removeAttr("disabled");
      } else {
        return $(element).attr('disabled', 'disabled');
      }
    }
  };

  ko.bindingHandlers.enableClickOnce = {
    init: function(element, valueAccessor) {
      var value;
      value = valueAccessor();
      $(element).click(function() {
        if (ko.isWriteableObservable(value)) {
          return value(false);
        } else {
          valueAccessor(false);
          return ko.bindingHandlers.enableClickOnce.update(element, valueAccessor);
        }
      });
      return ko.bindingHandlers.enableClick.init(element, valueAccessor);
    },
    update: function(element, valueAccessor) {
      return ko.bindingHandlers.enableClick.update(element, valueAccessor);
    }
  };

}).call(this);

/*
//@ sourceMappingURL=ko.enableClick.map
*/
