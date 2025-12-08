import ContactCard from "@/components/content/Contact/ContactForm";

export default function ContactSection() {
    return (
        <section id="contact" className="py-16">
            <div className="flex justify-center items-center">
                <h2 className="section-heading-line text-4xl font-bold mb-10 text-white mx-auto">
                    Let's Get In Touch
                </h2>
            </div>
            <ContactCard />
        </section>
    );
}