import Accueil from "../components/accueil";
import CallToAction from "../components/callToAction";
import Customers from "../components/customers";
import Bennes from "../components/bennes";
import How from "../components/how";

import Layout from "../components/layout";

export default function IndexPage() {
    return (
        <Layout>
            <section className="accueil-bg-magic md:pt-6 pb-14 min-h-500 sm:pb-24 md:min-h-650">
                <Accueil/>
            </section>
            <CallToAction/>
            <Bennes/>
            <How/>
            <Customers/>
        </Layout>
    )
}
