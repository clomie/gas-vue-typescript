import Router from 'vue-router'

export const syncRouterWithGas = (router: Router) => {
  if (typeof google === 'undefined' || google.script === undefined) {
    return
  }

  router.afterEach(({ path, query }) => {
    google.script.history.replace(null, query, path)
  })

  google.script.url.getLocation(({ hash: path, parameter: query }) => {
    router.replace({ path, query })
  })
}
