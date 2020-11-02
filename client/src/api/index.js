function requireAll(r) { return r.keys().map(r) }
const apis = requireAll(require.context('./', true, /\.js$/));
let allApi = apis.reduce((apis, api) => Object.assign(apis, api), {})
export default allApi