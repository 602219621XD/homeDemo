import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'http://182.92.120.91:1337/graphql'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

export default async ({ app, Vue }) => {
  Vue.use(VueApollo)
  app.apolloProvider = apolloProvider
}
