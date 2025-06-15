const PageBanner = ({ headline }) => {
  return (
    <main className="bg-primary">
      <section className="container py-[50px] lg:py-[100px] text-left">
        <article className="w-full lg:w-1/2">
          <h1 className="text-white text-2xl lg:text-4xl font-semibold">
            {headline}
          </h1>
        </article>
      </section>
    </main>
  );
};

export default PageBanner;
