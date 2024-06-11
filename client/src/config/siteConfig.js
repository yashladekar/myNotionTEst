const siteConfig = {
    siteName: "My Site",
    siteUrl: "https://www.mysite.com",
    siteDescription: "My site description",
    siteImage: "https://www.mysite.com/images/site-image.jpg",
    siteLanguage: "en",
    siteLocale: "en_US",
    twitterUsername: "@mysite",
    authorName: "My Name",
    authorEmail: "notes@test.com",

    NavConfig: [
        [
            { name: "Home", path: "/" },
            { name: "settings & Members", path: "/UserSetting" },
        ],
        [{ Favorites: [] }, { Teamspaces: [] }, { Private: [] }],
        [{ name: "Help", path: "/Help" }],
    ],
};
module.exports = siteConfig;
