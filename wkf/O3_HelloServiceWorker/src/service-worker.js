if (workbox) {
    workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug)
    workbox.precaching.precacheAndRoute(self.__precacheManifest);
}
