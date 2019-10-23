let contentContainer = document.getElementById('content')

let routes = {
    '/': home,
    '/dist/index.html': home,
    '/blog': blog,
    '/generators': generators,
    '/projects': projects,
    '/contact': contact
}

window.onpopstate = () => {
    contentContainer.innerHTML = routes[window.location.pathname]
}

let onNavItemClick = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName)
    contentContainer.innerHTML = routes[pathName]
}

contentContainer.innerHTML = routes[window.location.pathname]