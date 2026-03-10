import { useLanguage } from "../../context/LanguageContext";

const text = {
    en: {
        heading: "Martin Poboril",
        subtitle: "Full Stack Web Developer and Tennis Coach",
        aboutMe: "About Me",
        aboutText1: "I am Martin, web developer and tennis coach. My passion is to ",
        aboutText2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their.",
        webPortfolio: "Web development Portfolio",
        tennisPortfolio: "Tennis Portfolio",
        contactMe: "Contact Me",
        emailLabel: "Your email",
        emailPlaceholder: "name@email.com",
        messageLabel: "Your message",
        messagePlaceholder: "Leave a message...",
        sendButton: "Send message",
    },
    cz: {
        heading: "Martin Poboril",
        subtitle: "Full Stack Webový Vývojář a Tenisový Trenér",
        aboutMe: "O mně",
        aboutText1: "Jsem Martin, webový vývojář a tenisový trenér. Mou vášní je ",
        aboutText2: "Je dávno známo, že čtenáře při hodnocení layoutu stránky rozptyluje její čitelný obsah. Smyslem použití Lorem Ipsum je, že má víceméně normální rozložení písmen, na rozdíl od použití 'Obsah zde, obsah zde', díky čemuž vypadá jako čitelná angličtina. Mnoho balíčků pro desktop publishing a webové editory nyní používají Lorem Ipsum jako svůj.",
        webPortfolio: "Webové vývojářské portfolio",
        tennisPortfolio: "Tenisové portfolio",
        contactMe: "Kontaktujte mě",
        emailLabel: "Váš email",
        emailPlaceholder: "jmeno@email.cz",
        messageLabel: "Vaše zpráva",
        messagePlaceholder: "Zanechte zprávu...",
        sendButton: "Odeslat zprávu",
    },
};

export default function Home() {
    const { lang } = useLanguage();
    const t = text[lang];

    return (
        <>
            <section
                className="overflow-hidden block mt-6 bg-center bg-no-repeat bg-dark bg-blue-500 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-6xl">{t.heading}</h1>
                    <p className="mb-8 text-base font-normal text-white md:text-xl sm:px-16 lg:px-48">{t.subtitle}</p>
                </div>
            </section>

            <section className="mb-8 py-16">
                <h2 className="text-4xl font-bold text-center">{t.aboutMe}</h2>
                <div className="mx-auto px-16 container flex gap-16 md:flex-row flex-col items-center">
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/Martin_Poboril.jpg" alt="Martin Poboril"/>
                    </div>
                    <div className="basis-2/3 md:mx-0 mx-8">
                        <p className="mb-4">{t.aboutText1}</p>

                        <p>{t.aboutText2}</p>
                    </div>
                </div>
            </section>

            <section className="mb-8 py-16 bg-blue-500">
                <h2 className="text-4xl text-white font-bold text-center">{t.webPortfolio}</h2>
                <div className="container mx-auto p-16 flex gap-16 md:flex-row flex-col items-center">
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <h2 className="text-4xl font-bold text-center">{t.tennisPortfolio}</h2>
                <div className="container mx-auto p-16 flex gap-16 md:flex-row flex-col items-center">
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                    <div className="mt-8 basis-1/3 w-1/2 md:mx-0mx-16">
                        <img src="images/image400.png" alt="Image"/>
                    </div>
                </div>
            </section>

            <section className="bg-blue-500 dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">{t.contactMe}</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-white dark:text-gray-300">{t.emailLabel}</label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder={t.emailPlaceholder} required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block mb-2 text-sm font-medium text-white dark:text-gray-400">{t.messageLabel}</label>
                            <textarea id="message" rows={6}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder={t.messagePlaceholder}></textarea>
                        </div>
                        <button type="submit"
                                className="bg-white py-3 px-5 text-sm font-bold text-center text-blue-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{t.sendButton}
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
