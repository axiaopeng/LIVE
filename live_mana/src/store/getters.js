const getters = {
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    roles: state => state.user.roles,
    perms: state => state.user.perms,
    permission_routes: state => state.permission.routes,
    addRoutes: state => state.permission.addRoutes,
}


export default getters