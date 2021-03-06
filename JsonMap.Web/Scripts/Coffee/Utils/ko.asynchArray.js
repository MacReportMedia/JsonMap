// Generated by CoffeeScript 1.6.3
/** 
 * Copyright 2013 MacReport Media Publishing Inc.
 * Licensed under MPL-2.0 (see /LICENSE)
 * If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * 
 * Author: Sam Armstrong
*/


(function() {
  ko.asynchComputedArray = function(computedFunction) {
    var asynchTimer, localComputed, localComputedAsynch,
      _this = this;
    asynchTimer = ko.observable(10);
    if (ko.isComputed(computedFunction)) {
      localComputed = computedFunction;
    } else {
      localComputed = ko.computed(computedFunction).extend({
        throttle: 500
      });
    }
    localComputed.subscribe(function(newValue) {
      if (asynchTimer() + 4 > newValue.length) {
        return asynchTimer(newValue.length);
      } else {
        return asynchTimer(10);
      }
    });
    localComputedAsynch = ko.computed({
      read: function() {
        return localComputed().slice(0, asynchTimer());
      },
      deferEvaluation: true
    }).extend({
      throttle: 4
    });
    localComputedAsynch.subscribe(function() {
      if (localComputedAsynch().length < localComputed().length) {
        return asynchTimer(asynchTimer() + 1);
      }
    });
    asynchTimer(asynchTimer() + 4);
    return localComputedAsynch;
  };

}).call(this);

/*
//@ sourceMappingURL=ko.asynchArray.map
*/
