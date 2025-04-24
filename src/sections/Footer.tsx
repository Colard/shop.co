let Footer: React.FC = () => {
  return (
    <footer className="bg-secondary h-20 w-full">
      <FooterForm />
    </footer>
  );
};

let FooterForm: React.FC = () => {
  return (
    <section>
      <div className="bg-primary flex flex-wrap justify-between">
        <h2 className="font-integralcf text-bg-color text-2xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <form>
          <div>
            <input
              placeholder="Enter your email address"
              className="text-primary/40 text-base"
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Footer;
