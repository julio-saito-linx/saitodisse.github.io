import {Controller} from 'cerebral'
import Devtools from 'cerebral/devtools'
import Router from 'cerebral-router'
import {set, state} from 'cerebral/operators'
import curriculum from './modules/curriculum'

export default Controller({
  options: {
    // Use strict rendering
    strictRender: true,
    // Expose props.signals with all signals in components
    signalsProp: false
  },

  devtools: process.env.NODE_ENV === 'production' ? null : Devtools({
    storeMutations: false
  }),

  // Defines the top level state
  state: {
    currentPage: 'curriculum'
  },

  // Defines the top level signals
  signals: {
    routed: [
      set(state`currentPage`, 'curriculum')
    ]
  },

  // Defines the top level modules
  modules: {
    router: Router({
      onlyHash: false,
      filterFalsy: true,
      routes: [
        {
          path: '/:page?',
          map: {
            page: state`currentPage`
          }
        }
      ]
    }),
    curriculum
  }

})
