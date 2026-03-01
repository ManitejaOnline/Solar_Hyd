export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HERO */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold text-slate-900">
            About Hyderabad Solar Quotes
          </h1>

          <p className="text-lg text-slate-600">
            An independent platform helping Hyderabad homeowners compare rooftop
            solar options from verified local installers.
          </p>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6 text-slate-700 leading-relaxed">

          <h2 className="text-2xl font-bold text-slate-900">
            Why This Platform Exists
          </h2>

          <p>
            Choosing a solar installer can be confusing. Prices vary widely,
            technical details are complex, and most homeowners do not know which
            companies to trust.
          </p>

          <p>
            Hyderabad Solar Quotes was created to simplify this process by
            connecting homeowners with multiple installers so they can compare
            options and make informed decisions.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 px-6 bg-white border-y border-slate-200">
        <div className="max-w-3xl mx-auto space-y-6 text-slate-700 leading-relaxed">

          <h2 className="text-2xl font-bold text-slate-900">
            What We Do
          </h2>

          <p>
            When you submit a request on our website, we collect information
            about your property, electricity usage, and location. This helps us
            match you with installers who operate in your area.
          </p>

          <p>
            You may receive calls or messages from relevant solar companies who
            can provide consultations, site surveys, and quotations.
          </p>
        </div>
      </section>

      {/* WHAT WE ARE NOT */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6 text-slate-700 leading-relaxed">

          <h2 className="text-2xl font-bold text-slate-900">
            What We Are Not
          </h2>

          <ul className="space-y-2">
            <li>• We are not a solar installation company</li>
            <li>• We are not affiliated with any government agency</li>
            <li>• We do not manufacture or sell solar equipment</li>
            <li>• We do not guarantee pricing or installation outcomes</li>
          </ul>
        </div>
      </section>

      {/* LOCAL FOCUS */}
      <section className="py-16 px-6 bg-white border-y border-slate-200">
        <div className="max-w-3xl mx-auto space-y-6 text-slate-700 leading-relaxed">

          <h2 className="text-2xl font-bold text-slate-900">
            Local Focus
          </h2>

          <p>
            Our current focus is residential rooftop solar installations in
            Hyderabad, Telangana. By concentrating on one city, we aim to provide
            more relevant matches and local expertise.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Need Assistance?
          </h2>

          <p className="text-slate-600">
            For questions about your request or the platform, you can reach us
            through the contact details provided on the website.
          </p>
        </div>
      </section>

    </div>
  );
}