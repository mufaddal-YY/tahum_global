const PageBanner = ({ headline, subHeadline }) => {
  return (
    <main className="bg-primary">
      <section className="container py-[30px] lg:py-[50px] text-center">
        <article className="w-full">
          <h1 className="text-white text-2xl lg:text-4xl font-semibold">
            {headline}
          </h1>
          <p className="text-white text-md lg:text-lg font-regular">
            {subHeadline}
          </p>
        </article>
      </section>
    </main>
  );
};

export default PageBanner;
