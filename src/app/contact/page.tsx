import ContactUsForm from "@/components/ContactUsForm";
import ContainerWrapper from "@/components/Container";

export default function Contact() {
  return (
    <main>
      <section className="h-screen grid place-items-center">
        <ContainerWrapper className=" flex flex-col gap-y-5 xl:gap-y-10 justify-center text-center">
          <h1 className="text-7xl text-slate-800">Contact Us</h1>
          <p className="text-xl text-slate-500">
            Kindly leave your information in the below form, <br /> so that we
            can get back to you ASAP.
          </p>
        </ContainerWrapper>
      </section>
      <section className="py-7 lg:py-14">
        <ContainerWrapper>
          <ContactUsForm />
        </ContainerWrapper>
      </section>
    </main>
  );
}
