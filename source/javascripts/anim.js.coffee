# 関数化、リトライ対応版
# ほぼTwitterのソースだけど
class CommandWatcher
  constructor: (commands) ->
    @keys = []
    @length = commands.length
    @command = commands.join ','
  watch: (handler) =>
    watcher = @
    $(document).on 'keydown', (event) ->
      watcher.keys.push event.which
      # マッチしたら実行後、即return
      if watcher.keys.length is watcher.length and watcher.keys.join(',') is watcher.command
        handler()
        watcher.keys = []
        return
      # マッチしなかったらリセット
      if watcher.command.indexOf(watcher.keys.join(',')) isnt 0
        watcher.keys = []
        return

new CommandWatcher([38,38,40,40,37,39,37,39,66,65]).watch ->