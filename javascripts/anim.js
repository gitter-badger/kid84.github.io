(function() {
  var CommandWatcher,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  CommandWatcher = (function() {
    function CommandWatcher(commands) {
      this.watch = __bind(this.watch, this);
      this.keys = [];
      this.length = commands.length;
      this.command = commands.join(',');
    }

    CommandWatcher.prototype.watch = function(handler) {
      var watcher;
      watcher = this;
      return $(document).on('keydown', function(event) {
        watcher.keys.push(event.which);
        if (watcher.keys.length === watcher.length && watcher.keys.join(',') === watcher.command) {
          handler();
          watcher.keys = [];
          return;
        }
        if (watcher.command.indexOf(watcher.keys.join(',')) !== 0) {
          watcher.keys = [];
        }
      });
    };

    return CommandWatcher;

  })();

  new CommandWatcher([38, 38, 40, 40, 37, 39, 37, 39, 66, 65]).watch(function() {});

}).call(this);
