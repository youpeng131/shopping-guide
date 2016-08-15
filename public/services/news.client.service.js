/**
 * Created by youpeng on 16/8/4.
 */

angular.module('webapp')
  .service('NewsService', ['$http', '$q', NewsService]);

function NewsService($http, $q) {
  function handleRequest(method, url, data) {
    var defered = $q.defer();
    var config = {
      method: method,
      url: url
    };

    if ("POST" === method) {
      config.data = data;
    } else if ("GET" === method) {
      console.log(data);
      config.params = data;
    }

    console.log(config);

    $http(config).success(function(data) {
      defered.resolve(data);
    }).error(function(err) {
      defered.reject(err);
    });

    return defered.promise;
  }

  return {
    list: function(params) {
      return handleRequest('GET', '/news', params);
    },
    save: function(data) {
      return handleRequest('POST', '/news', data);
    },
    detail: function(id) {
      return handleRequest('GET', '/news/'+ id);
    }
  }
}