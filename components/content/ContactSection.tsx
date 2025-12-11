import { ContactContent} from "@/components/content/Contact/ContactContent";
import { ContactForm } from "@/components/content/Contact/ContactForm";

export default function ContactSection() {


    return (
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="section-heading-line text-4xl font-bold text-white mx-auto">
                    Let's Get In Touch
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6">
                <div className="order-2 md:order-1">
                    <ContactContent />
                </div>
                <div className="order-1 md:order-2">
                    <ContactForm />
                </div>
            </div>

        </section>
    );
}
