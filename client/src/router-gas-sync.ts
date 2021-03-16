import Router from 'vue-router'
import { Dictionary } from 'vue-router/types/router'

export const syncRouterWithGas = (router: Router) => {
  if (typeof google === 'undefined' || google.script === undefined) {
    return
  }

  router.afterEach(({ path, query }) => {
    google.script.history.replace(
      null,
      query as Dictionary<string | string[]>, // Suppress compilation error caused by type mismatch (nullable or not)
      path
    )
  })

  google.script.url.getLocation(({ hash: path, parameter: query }) => {
    router.replace({ path, query })
  })
}
