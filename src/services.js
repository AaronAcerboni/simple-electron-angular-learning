angular.module('deskapp.services', [])
.factory('LocalDirectory', ($q) => {
  return {
    fetch: function (targetDir) {
      var deferred = $q.defer()
      require('fs').readdir(targetDir, (err, files) => {
        if (err) {
          deferred.reject(err)
        } else {
          deferred.resolve(files)
        }
      })
      return deferred.promise
    }
  }
})