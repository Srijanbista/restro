import Container from "./Container";

const Footer = () => {
  return (
    <section className="bg-slate-800">
      <Container>
        <footer className="py-28 flex justify-between">
          <div>
            <div>
              <p className="text-3xl font-semibold text-white italic">
                Bistro Bliss
              </p>
              <p className="text-sm text-slate-300">A Restaurant Website</p>
              <p>Social Media</p>
            </div>
            <div>
              <p>Menu</p>
              <p>Reservations</p>
              <p>Events</p>
              <p>Contact</p>
            </div>
            <div>Images</div>
          </div>
        </footer>
      </Container>
    </section>
  );
};

export default Footer;
